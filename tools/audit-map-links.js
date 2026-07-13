const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DEFAULT_ROOT = path.resolve(__dirname, "..");

function loadData(root = DEFAULT_ROOT) {
  const dataPath = path.join(root, "assets", "js", "training-data.js");
  const dataCode = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(dataCode, context, { filename: dataPath });
  return context.window.CX_DATA;
}

function text(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && !Array.isArray(value)) {
    return value.pl || value.en || value.ru || value.ua || "";
  }
  return "";
}

function isMapUrl(url) {
  if (typeof url !== "string" || !/^https?:\/\//.test(url)) return false;
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    return (
      host === "maps.app.goo.gl" ||
      host === "maps.google.com" ||
      (host.endsWith("google.com") && parsed.pathname.includes("/maps"))
    );
  } catch {
    return false;
  }
}

function hasLetters(value) {
  return /[a-zA-Z]/.test(decodeURIComponent(String(value || "").replace(/\+/g, " ")));
}

function isCoordinate(value) {
  return /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?/.test(String(value || "").trim());
}

function classifyMapUrl(url) {
  if (/Citronex\+Siechnice\+biuro/i.test(url)) {
    return {
      status: "error",
      reason: "Stary link do biura przez wyszukiwanie po nazwie. Uzyj stalego linku do miejsca."
    };
  }

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return { status: "error", reason: "Niepoprawny URL." };
  }

  const host = parsed.hostname.toLowerCase();
  const pathname = parsed.pathname.toLowerCase();
  const destination = parsed.searchParams.get("destination");
  const query = parsed.searchParams.get("query") || parsed.searchParams.get("q");

  if (destination && hasLetters(destination)) {
    return {
      status: "error",
      reason: "Trasa Google Maps ma tekstowy destination. Google moze zgadnac zle miejsce."
    };
  }

  if (host === "maps.app.goo.gl") {
    return { status: "ok", reason: "Staly krotki link Google Maps." };
  }

  if (pathname.includes("/maps/d/viewer")) {
    return { status: "ok", reason: "Wlasna mapa Google My Maps." };
  }

  if (pathname.includes("/maps/place/")) {
    return { status: "ok", reason: "Link do konkretnego miejsca w Google Maps." };
  }

  if (host === "maps.google.com" && query && isCoordinate(query)) {
    return { status: "ok", reason: "Link do dokladnych wspolrzednych." };
  }

  if (pathname.includes("/maps/search") || (query && hasLetters(query))) {
    return {
      status: "warning",
      reason: "Link szuka po nazwie/adresie. Lepiej zamienic na staly link maps.app.goo.gl albo konkretne miejsce."
    };
  }

  return { status: "warning", reason: "Nietypowy link mapy. Sprawdz recznie, czy otwiera dobre miejsce." };
}

function collectMapLinks(data) {
  const items = [];

  function walk(value, trail = "DATA", nearestLabel = "") {
    if (!value || typeof value !== "object") return;

    const localLabel = (
      text(value.title) ||
      text(value.label) ||
      text(value.name) ||
      text(value.key) ||
      nearestLabel
    );

    for (const [key, child] of Object.entries(value)) {
      const childTrail = `${trail}.${key}`;
      if (typeof child === "string") {
        if (isMapUrl(child)) {
          const check = classifyMapUrl(child);
          items.push({
            trail: childTrail,
            label: localLabel || "(bez nazwy)",
            url: child,
            status: check.status,
            reason: check.reason
          });
        }
        continue;
      }
      walk(child, childTrail, localLabel);
    }
  }

  walk(data);
  return items;
}

function loadCriticalLinks(root = DEFAULT_ROOT) {
  const criticalPath = path.join(root, "data", "critical-links.json");
  if (!fs.existsSync(criticalPath)) return [];
  const parsed = JSON.parse(fs.readFileSync(criticalPath, "utf8"));
  return Array.isArray(parsed.links) ? parsed.links : [];
}

function checkCriticalLinks(items, criticalLinks) {
  const urls = new Set(items.map((item) => item.url));
  return criticalLinks
    .filter((item) => !urls.has(item.url))
    .map((item) => ({
      status: "error",
      label: item.label || item.id || "(critical link)",
      url: item.url,
      trail: `data/critical-links.json:${item.id || item.label || "link"}`,
      reason: "Krytyczny link nie wystepuje w aktywnych danych szkolenia."
    }));
}

function auditMapLinks(options = {}) {
  const root = options.root || DEFAULT_ROOT;
  const data = options.data || loadData(root);
  const items = collectMapLinks(data);
  const criticalLinks = loadCriticalLinks(root);
  const criticalErrors = checkCriticalLinks(items, criticalLinks);
  const errors = items.filter((item) => item.status === "error");
  const warnings = items.filter((item) => item.status === "warning");
  const ok = items.filter((item) => item.status === "ok");
  return { items, ok, warnings, errors, criticalLinks, criticalErrors };
}

function formatMapAudit(result, options = {}) {
  const verbose = options.verbose !== false;
  const onlyProblems = Boolean(options.onlyProblems);
  const rows = onlyProblems
    ? result.items.filter((item) => item.status !== "ok")
    : result.items;

  const lines = [
    "Citronex map link audit",
    `Map links: ${result.items.length}`,
    `OK: ${result.ok.length}`,
    `Warnings: ${result.warnings.length}`,
    `Errors: ${result.errors.length}`,
    `Critical links: ${result.criticalLinks.length}`,
    `Critical missing: ${result.criticalErrors.length}`
  ];

  if (verbose && result.criticalErrors.length) {
    lines.push("");
    for (const item of result.criticalErrors) {
      lines.push(`[CRITICAL] ${item.label}`);
      lines.push(`  path: ${item.trail}`);
      lines.push(`  note: ${item.reason}`);
      lines.push(`  url:  ${item.url}`);
    }
  }

  if (verbose && rows.length) {
    lines.push("");
    for (const item of rows) {
      lines.push(`[${item.status.toUpperCase()}] ${item.label}`);
      lines.push(`  path: ${item.trail}`);
      lines.push(`  note: ${item.reason}`);
      lines.push(`  url:  ${item.url}`);
    }
  }

  return lines.join("\n");
}

if (require.main === module) {
  const result = auditMapLinks();
  const strict = process.argv.includes("--strict");
  const onlyProblems = process.argv.includes("--only-problems");
  console.log(formatMapAudit(result, { onlyProblems }));
  process.exit(result.errors.length || result.criticalErrors.length || (strict && result.warnings.length) ? 1 : 0);
}

module.exports = { auditMapLinks, formatMapAudit, classifyMapUrl, isMapUrl };

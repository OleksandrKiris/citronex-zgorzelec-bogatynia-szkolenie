const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DEFAULT_ROOT = path.resolve(__dirname, "..");

function loadData(root = DEFAULT_ROOT) {
  const dataPath = path.join(root, "assets", "js", "training-data.js");
  const dataCode = fs.readFileSync(dataPath, "utf8");
  const context = { window: {} };
  vm.runInNewContext(dataCode, context, { filename: dataPath });
  const customPath = path.join(root, "assets", "js", "location-custom.js");
  if (fs.existsSync(customPath)) {
    const customCode = fs.readFileSync(customPath, "utf8");
    vm.runInNewContext(customCode, context, { filename: customPath });
  }
  return context.window.CX_DATA;
}

function stripQuery(value) {
  return String(value || "").split("#")[0].split("?")[0];
}

function isExternal(value) {
  return /^(https?:|tel:|mailto:|viber:|whatsapp:)/i.test(value);
}

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function text(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (typeof value === "object" && !Array.isArray(value)) return value.pl || value.en || value.ru || value.ua || "";
  return "";
}

function auditButtons(options = {}) {
  const root = options.root || DEFAULT_ROOT;
  const data = options.data || loadData(root);
  const errors = [];
  const warnings = [];
  const dataUrls = [];
  const phones = [];

  function addError(message) {
    errors.push(message);
  }

  function addWarning(message) {
    warnings.push(message);
  }

  const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html")).sort();
  const htmlSet = new Set(htmlFiles);

  for (const file of htmlFiles) {
    const fullPath = path.join(root, file);
    const html = fs.readFileSync(fullPath, "utf8");
    const pageMatch = html.match(/<body[^>]*data-page="([^"]+)"/i);
    const pageId = pageMatch ? pageMatch[1] : "";
    if (!pageId) addError(`${file}: brak data-page na body.`);
    if (pageId && pageId !== "home" && !data.pages[pageId]) addError(`${file}: data-page=${pageId} nie istnieje w DATA.pages.`);

    const attrs = html.matchAll(/\b(?:href|src)="([^"]*)"/gi);
    for (const match of attrs) {
      const raw = match[1].trim();
      if (!raw) {
        addError(`${file}: pusty href/src.`);
        continue;
      }
      if (raw === "#") {
        addError(`${file}: href=\"#\".`);
        continue;
      }
      if (isExternal(raw)) continue;
      const relative = stripQuery(raw);
      if (!relative || relative.startsWith("data:")) continue;
      const target = path.join(root, relative.replaceAll("/", path.sep));
      if (!fs.existsSync(target)) addError(`${file}: brak pliku dla href/src ${raw}.`);
    }
  }

  for (const tile of data.tiles || []) {
    if (tile.external || isExternal(tile.url)) continue;
    const pageId = tile.page;
    const file = pageId === "home" ? "index.html" : `${pageId}.html`;
    if (!pageId) addError("DATA.tiles: kafelek bez page.");
    if (pageId && !data.pages[pageId]) addError(`DATA.tiles.${pageId}: brak DATA.pages.${pageId}.`);
    if (pageId && !htmlSet.has(file)) addError(`DATA.tiles.${pageId}: brak pliku ${file}.`);
  }

  function walk(value, trail = "DATA", nearestLabel = "") {
    if (!value || typeof value !== "object") return;

    const localLabel = text(value.title) || text(value.label) || text(value.name) || nearestLabel;

    for (const [key, child] of Object.entries(value)) {
      const childTrail = `${trail}.${key}`;
      if (typeof child === "string") {
        if (["url", "map", "href"].includes(key)) {
          const url = child.trim();
          dataUrls.push({ trail: childTrail, label: localLabel || "(bez nazwy)", url });
          if (!url) addError(`${childTrail}: pusty URL.`);
          if (url === "#") addError(`${childTrail}: URL jest #.`);
          if (/^https?:\/\//.test(url) && !isValidHttpUrl(url)) addError(`${childTrail}: niepoprawny URL ${url}.`);
          if (/^http:\/\//i.test(url)) addWarning(`${childTrail}: link nie uzywa HTTPS.`);
        }
        if (key === "phone") {
          const digits = child.replace(/\D/g, "");
          phones.push({ trail: childTrail, label: localLabel || "(bez nazwy)", phone: child });
          if (digits.length < 9) addError(`${childTrail}: numer telefonu wyglada na za krotki (${child}).`);
        }
        continue;
      }
      walk(child, childTrail, localLabel);
    }
  }

  walk(data);

  return {
    htmlFiles,
    tileCount: (data.tiles || []).length,
    dataUrls,
    phones,
    warnings,
    errors
  };
}

function formatButtonAudit(result, options = {}) {
  const verbose = options.verbose !== false;
  const lines = [
    "Citronex button/link audit",
    `HTML pages: ${result.htmlFiles.length}`,
    `Tiles: ${result.tileCount}`,
    `Data action URLs: ${result.dataUrls.length}`,
    `Phone numbers: ${result.phones.length}`,
    `Warnings: ${result.warnings.length}`,
    `Errors: ${result.errors.length}`
  ];

  if (verbose && result.errors.length) {
    lines.push("");
    lines.push("Errors:");
    result.errors.forEach((item) => lines.push(`- ${item}`));
  }

  if (verbose && result.warnings.length) {
    lines.push("");
    lines.push("Warnings:");
    result.warnings.forEach((item) => lines.push(`- ${item}`));
  }

  return lines.join("\n");
}

if (require.main === module) {
  const result = auditButtons();
  console.log(formatButtonAudit(result));
  process.exit(result.errors.length ? 1 : 0);
}

module.exports = { auditButtons, formatButtonAudit };

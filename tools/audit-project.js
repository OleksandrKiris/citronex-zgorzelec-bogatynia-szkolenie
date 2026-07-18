const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { auditMapLinks } = require("./audit-map-links");
const { auditButtons } = require("./audit-buttons");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "assets", "js", "training-data.js");
const dataCode = fs.readFileSync(dataPath, "utf8");
const context = { window: {} };
vm.runInNewContext(dataCode, context, { filename: dataPath });
const customPath = path.join(root, "assets", "js", "location-custom.js");
if (fs.existsSync(customPath)) {
  const customCode = fs.readFileSync(customPath, "utf8");
  vm.runInNewContext(customCode, context, { filename: customPath });
}

const DATA = context.window.CX_DATA;
const langs = DATA.languages.map((lang) => lang.id);
const missing = [];
const assets = new Set();
const urls = new Set();

function isTranslationObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  // A language option has an `id` field, but it is not a translation object.
  // Requiring the two base languages prevents the audit from reporting the
  // language selector itself as hundreds of missing translations.
  return ["pl", "en"].every((lang) => Object.prototype.hasOwnProperty.call(value, lang));
}

function walk(value, trail = "DATA") {
  if (!value || typeof value !== "object") return;

  if (isTranslationObject(value)) {
    for (const lang of langs) {
      if (!String(value[lang] || "").trim()) missing.push(`${trail}.${lang}`);
    }
  }

  if (typeof value.image === "string") assets.add(value.image);
  if (typeof value.src === "string") assets.add(value.src);
  if (typeof value.url === "string") urls.add(value.url);
  if (typeof value.map === "string") urls.add(value.map);

  if (Array.isArray(value.photos)) {
    value.photos.forEach((photo) => assets.add(photo));
  }

  for (const [key, child] of Object.entries(value)) {
    if (typeof child === "string") {
      if (/^assets\//.test(child)) assets.add(child);
      if (/^https?:\/\//.test(child)) urls.add(child);
      continue;
    }
    walk(child, `${trail}.${key}`);
  }
}

walk(DATA);

const missingAssets = [...assets]
  .filter((asset) => !fs.existsSync(path.join(root, asset.replaceAll("/", path.sep))))
  .sort();

const htmlFiles = fs.readdirSync(root).filter((file) => file.endsWith(".html"));
const wrongHtml = htmlFiles.filter((file) => {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  return !html.includes("assets/js/training-data.js") || !html.includes("assets/js/training-app.js");
});
const mapAudit = auditMapLinks({ root, data: DATA });
const buttonAudit = auditButtons({ root, data: DATA });

console.log("Citronex training audit");
console.log(`Languages: ${langs.join(", ")}`);
console.log(`Pages: ${Object.keys(DATA.pages).length}`);
console.log(`Tiles: ${DATA.tiles.length}`);
console.log(`Translation gaps: ${missing.length}`);
console.log(`Asset refs: ${assets.size}`);
console.log(`Missing assets: ${missingAssets.length}`);
console.log(`Unique URLs: ${urls.size}`);
console.log(`HTML files using old production scripts: ${wrongHtml.length}`);
console.log(`Map links: ${mapAudit.items.length}`);
console.log(`Map warnings: ${mapAudit.warnings.length}`);
console.log(`Map errors: ${mapAudit.errors.length}`);
console.log(`Critical map links: ${mapAudit.criticalLinks.length}`);
console.log(`Critical map links missing: ${mapAudit.criticalErrors.length}`);
console.log(`Button/link audit errors: ${buttonAudit.errors.length}`);
console.log(`Button/link audit warnings: ${buttonAudit.warnings.length}`);

if (missing.length) {
  console.log("\nMissing translations:");
  missing.slice(0, 80).forEach((item) => console.log(`- ${item}`));
  if (missing.length > 80) console.log(`- ...and ${missing.length - 80} more`);
}

if (missingAssets.length) {
  console.log("\nMissing assets:");
  missingAssets.forEach((item) => console.log(`- ${item}`));
}

if (wrongHtml.length) {
  console.log("\nHTML files to check:");
  wrongHtml.forEach((item) => console.log(`- ${item}`));
}

if (mapAudit.errors.length) {
  console.log("\nMap link errors:");
  mapAudit.errors.forEach((item) => {
    console.log(`- ${item.label}: ${item.reason}`);
    console.log(`  ${item.url}`);
  });
}

if (mapAudit.criticalErrors.length) {
  console.log("\nCritical map link errors:");
  mapAudit.criticalErrors.forEach((item) => {
    console.log(`- ${item.label}: ${item.reason}`);
    console.log(`  ${item.url}`);
  });
}

if (mapAudit.warnings.length) {
  console.log("\nMap link warnings:");
  mapAudit.warnings.forEach((item) => {
    console.log(`- ${item.label}: ${item.reason}`);
    console.log(`  ${item.url}`);
  });
}

if (buttonAudit.errors.length) {
  console.log("\nButton/link errors:");
  buttonAudit.errors.forEach((item) => console.log(`- ${item}`));
}

if (buttonAudit.warnings.length) {
  console.log("\nButton/link warnings:");
  buttonAudit.warnings.forEach((item) => console.log(`- ${item}`));
}

process.exit(missing.length || missingAssets.length || wrongHtml.length || mapAudit.errors.length || mapAudit.criticalErrors.length || buttonAudit.errors.length ? 1 : 0);

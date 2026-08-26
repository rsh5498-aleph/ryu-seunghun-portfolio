const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const references = [...html.matchAll(/data-file="([^"]+)"/g)].map((match) => match[1]);
const missing = references.filter((file) => !fs.existsSync(path.join(__dirname, file)));

if (missing.length) {
  console.error(`Missing evidence files:\n${missing.join("\n")}`);
  process.exit(1);
}

if (!html.includes('lang="ko"') || !html.includes('aria-modal="true"')) {
  console.error("Required accessibility metadata is missing.");
  process.exit(1);
}

console.log(`OK: ${references.length} evidence files and accessibility metadata verified.`);


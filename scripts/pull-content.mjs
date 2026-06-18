// Download content from a Cloudflare KV namespace back into the local seed
// files (src/data/*.json). This is the reverse of sync-content.mjs: use it to
// pull edits made in the KV dashboard back into git, keeping git as the
// canonical source of truth.
//
// Usage:
//   node scripts/pull-content.mjs         # prod namespace (remote)
//   node scripts/pull-content.mjs test    # test env namespace (remote)
//   npm run pull:content
//   npm run pull:content:test
//
// Direction: remote KV -> local files (overwrites src/data/<key>.json).
// The namespace is resolved from the CONTENT binding in wrangler.toml, so the
// namespace IDs there must be filled in and wrangler must be authenticated.
// Keys are the file basenames without ".json", matching ContentKey in
// src/lib/content.ts.

import { readdirSync, writeFileSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

try { process.loadEnvFile(".env.local"); } catch {}
try { process.loadEnvFile(".env"); } catch {}

const target = process.argv[2]; // "test" or undefined (prod)

// These stay as build-time static imports and never live in KV, so don't pull
// them. Keep in sync with the ContentKey union in src/lib/content.ts.
const STATIC_ONLY = new Set(["carousel.json", "home.json", "navigation.json"]);

const dataDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
);
const files = readdirSync(dataDir).filter(
  (f) => f.endsWith(".json") && !STATIC_ONLY.has(f),
);

console.log(
  `Pulling ${files.length} key(s) from KV (${target ?? "prod"}) into src/data...`,
);

for (const file of files) {
  const key = basename(file, ".json");
  const filePath = join(dataDir, file);

  const args = ["wrangler", "kv", "key", "get", key, "--binding=CONTENT", "--remote"];
  if (target) args.push(`--env=${target}`);

  let raw;
  try {
    raw = execFileSync("npx", args, { encoding: "utf8" });
  } catch {
    console.warn(`  skip ${key} (not found in KV or read failed)`);
    continue;
  }

  // Validate + normalize formatting (2-space indent, trailing newline) so the
  // written files stay consistent regardless of how they were edited remotely.
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    console.warn(`  skip ${key} (value in KV is not valid JSON)`);
    continue;
  }

  writeFileSync(filePath, JSON.stringify(parsed, null, 2) + "\n");
  console.log(`  wrote src/data/${file}`);
}

console.log("Done. Review the diff and commit if it looks right.");

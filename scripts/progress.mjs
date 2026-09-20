#!/usr/bin/env node
/**
 * Compute progress from note frontmatter and write:
 * - progress.json (for badges / plugin)
 * - the block between <!-- progress:start --> and <!-- progress:end --> in content/index.md
 * Lint: exits 1 if a `layer: claude` note lacks `base:`, or a note has an unknown stage.
 * Usage: node scripts/progress.mjs [--check]
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const NOTES = join(ROOT, "content", "notes");
const INDEX = join(ROOT, "content", "index.md");
const m = JSON.parse(readFileSync(join(ROOT, "roadmap.manifest.json"), "utf8"));
const STAGES = ["planned", "learning", "done"];

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith(".md") ? [p] : []; });
const fm = (src) => {
  const mt = src.match(/^---\n([\s\S]*?)\n---/); if (!mt) return {};
  return Object.fromEntries(mt[1].split("\n").map((l) => { const i = l.indexOf(":"); return i < 0 ? [l, ""] : [l.slice(0, i).trim(), l.slice(i + 1).trim()]; }));
};

const errors = [];
const notes = existsSync(NOTES) ? walk(NOTES).map((p) => ({ id: basename(p, ".md"), path: p, ...fm(readFileSync(p, "utf8")) })) : [];
for (const n of notes) {
  if (!STAGES.includes(n.stage)) errors.push(`${n.id}: unknown stage "${n.stage}"`);
  if (n.layer === "claude" && !n.base) errors.push(`${n.id}: layer claude requires base:`);
  if (n.stage === "done" && !n.project) errors.push(`${n.id}: done but no project: (Definition of Done)`);
}

const count = (list) => Object.fromEntries(STAGES.map((s) => [s, list.filter((n) => n.stage === s).length]));
const pct = (c) => { const t = c.planned + c.learning + c.done; return t ? Math.round((100 * c.done) / t) : 0; };
const bar = (p) => "█".repeat(Math.round(p / 10)) + "░".repeat(10 - Math.round(p / 10));

const byLayer = Object.fromEntries(m.layers.map((l) => [l, count(notes.filter((n) => n.layer === l))]));
const byPhase = m.phases.map((ph) => ({ num: ph.num, title: ph.title, ...count(notes.filter((n) => String(n.phase) === String(ph.num))) }));
const total = count(notes);

const lines = [
  `**Tổng:** ${total.done}/${notes.length} done · ${total.learning} learning · ${pct(total)}% ${bar(pct(total))}`, "",
  "| Layer | Done | Learning | Planned | % |", "|---|---|---|---|---|",
  ...m.layers.map((l) => { const c = byLayer[l]; return `| ${l} | ${c.done} | ${c.learning} | ${c.planned} | ${pct(c)}% ${bar(pct(c))} |`; }), "",
  "| Phase | Done | Learning | Planned | % |", "|---|---|---|---|---|",
  ...byPhase.map((p) => `| P${p.num} ${p.title} | ${p.done} | ${p.learning} | ${p.planned} | ${pct(p)}% ${bar(pct(p))} |`), "",
  `_Cập nhật ${new Date().toISOString().slice(0, 10)} bởi \`scripts/progress.mjs\`_`,
];

if (!process.argv.includes("--check")) {
  writeFileSync(join(ROOT, "progress.json"), JSON.stringify({ updated: new Date().toISOString(), total, byLayer, byPhase, notes: notes.map(({ id, layer, phase, stage }) => ({ id, layer, phase, stage })) }, null, 2));
  if (existsSync(INDEX)) {
    const src = readFileSync(INDEX, "utf8");
    const re = /<!-- progress:start -->[\s\S]*?<!-- progress:end -->/;
    const block = `<!-- progress:start -->\n${lines.join("\n")}\n<!-- progress:end -->`;
    writeFileSync(INDEX, re.test(src) ? src.replace(re, block) : src + "\n\n" + block + "\n");
  }
}
console.log(lines.join("\n"));
if (errors.length) { console.error("\nLINT ERRORS:\n- " + errors.join("\n- ")); process.exit(1); }

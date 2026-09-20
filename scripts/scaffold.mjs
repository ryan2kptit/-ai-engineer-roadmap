#!/usr/bin/env node
/**
 * Scaffold roadmap files from roadmap.manifest.json.
 * - content/roadmap/phase-XX-<slug>.md   (created if missing)
 * - content/notes/<layer>/<section>/<id>.md (created if missing, stage: planned)
 * - content/projects/<id>.md              (created if missing)
 * - content/plan/weeks.md                 (always regenerated)
 * Idempotent: never overwrites an existing note/phase/project file.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT = join(ROOT, "content");
const m = JSON.parse(readFileSync(join(ROOT, "roadmap.manifest.json"), "utf8"));
const noteById = Object.fromEntries(m.notes.map((n) => [n.id, n]));

const ensure = (p) => mkdirSync(dirname(p), { recursive: true });
const writeIfMissing = (p, s) => {
  if (existsSync(p)) return false;
  ensure(p);
  writeFileSync(p, s);
  return true;
};
const pad = (n) => String(n).padStart(2, "0");
const wl = (id) => `[[${id}]]`;
const layerTag = { base: "B", claude: "C", ecosystem: "P" };

let created = { notes: 0, phases: 0, projects: 0 };

// ---- notes
for (const n of m.notes) {
  const p = join(CONTENT, "notes", n.layer, n.section, `${n.id}.md`);
  const phase = m.phases.find((ph) => ph.weeks.some((w) => w.notes.includes(n.id)));
  const week = phase?.weeks.find((w) => w.notes.includes(n.id));
  const fm = [
    "---",
    `title: "${n.title.replace(/"/g, '\\"')}"`,
    "roadmap: ai-engineer",
    `phase: ${phase ? phase.num : "ongoing"}`,
    `week: ${week ? week.week : "ongoing"}`,
    `layer: ${n.layer}`,
    `section: ${n.section}`,
    ...(n.layer === "claude" ? [`base: ${n.base}`] : []),
    "stage: planned",
    "started:",
    "completed:",
    "project:",
    "sources: []",
    `tags: [${n.section}, ${n.layer}]`,
    "---",
    "",
  ].join("\n");
  const body =
    n.layer === "claude" && n.base !== "n/a"
      ? `> Base concept: ${wl(n.base)}\n\n## What\n\n## Why it matters\n\n## How (TS, Claude)\n\n## Gotchas\n\n## Khác gì so với base / provider khác\n\n## Applied in\n`
      : n.layer === "ecosystem"
        ? `## Base concept\n\n## Claude\n\n## OpenAI\n\n## Gemini\n\n## Cái gì portable, cái gì không\n`
        : `## What\n\n## Why it matters\n\n## How (TS)\n\n## Gotchas\n\n## Applied in\n`;
  if (writeIfMissing(p, fm + body)) created.notes++;
}

// ---- phases
for (const ph of m.phases) {
  const p = join(CONTENT, "roadmap", `phase-${pad(ph.num)}-${ph.slug}.md`);
  const first = ph.weeks[0], last = ph.weeks.at(-1);
  const lines = [
    "---",
    `title: "Phase ${ph.num} — ${ph.title}"`,
    "roadmap: ai-engineer",
    `phase: ${ph.num}`,
    `weeks: [${ph.weeks.map((w) => w.week).join(", ")}]`,
    `start: ${first.start}`,
    `end: ${last.end}`,
    "stage: planned",
    "---",
    "",
    `# Phase ${ph.num} — ${ph.title}`,
    "",
    `W${first.week}–W${last.week} · ${first.start} → ${last.end} · ~${ph.weeks.length * m.hours_per_week}h`,
    "",
    "Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]",
    "",
  ];
  for (const w of ph.weeks) {
    lines.push(`## W${w.week} (${w.start} → ${w.end}) — ${w.focus}`, "");
    if (w.learn.length) {
      lines.push("**Học (2h)**");
      for (const t of w.learn) lines.push(`- [ ] ${t}`);
      lines.push("");
    }
    if (w.build.length) {
      lines.push("**Build (3h)**");
      for (const t of w.build) lines.push(`- [ ] ${t}`);
      lines.push("");
    }
    if (w.notes.length) {
      lines.push("**Notes → done**");
      for (const id of w.notes) {
        const n = noteById[id];
        lines.push(`- [ ] ${layerTag[n.layer]} ${wl(id)} — ${n.title}`);
      }
      lines.push("");
    }
    lines.push("**Ship log (1h)**", `- [ ] \`content/logs/weekly/${isoWeek(w.start)}.md\``, "");
    if (w.deliverable) lines.push(`**Deliverable:** ${w.deliverable}`, "");
    if (w.checkpoint) lines.push(`**Checkpoint (quiz với Claude):** ${w.checkpoint}`, "");
  }
  if (writeIfMissing(p, lines.join("\n"))) created.phases++;
}

// ---- projects
for (const pr of m.projects) {
  const p = join(CONTENT, "projects", `${pr.id}.md`);
  const s = [
    "---",
    `title: "${pr.title}"`,
    "roadmap: ai-engineer",
    `phase: ${pr.phase}`,
    `code: projects/${pr.id.replace(/^shared-/, "shared/")}`,
    "stage: planned",
    "---",
    "",
    `# ${pr.title}`,
    "",
    "## Problem", "", "## Architecture (Mermaid)", "", "```mermaid", "flowchart LR", "  A[client] --> B[llm-client]", "```", "",
    "## Trade-offs", "", "## Eval / numbers", "", "## Notes applied", "", "## What I'd do differently", "",
  ].join("\n");
  if (writeIfMissing(p, s)) created.projects++;
}

// ---- weeks table (always regenerate)
{
  const rows = ["---", 'title: "Bảng tuần"', "roadmap: ai-engineer", "---", "", "# Bảng tuần (W0–W38)", "",
    `Bắt đầu ${m.start} · ${m.hours_per_week}h/tuần · trạng thái lấy từ weekly log (có file = done)`, "",
    "| Tuần | Ngày | Phase | Focus | Notes | Log |", "|---|---|---|---|---|---|"];
  for (const ph of m.phases)
    for (const w of ph.weeks) {
      const log = `content/logs/weekly/${isoWeek(w.start)}.md`;
      const has = existsSync(join(ROOT, log));
      rows.push(`| W${w.week} | ${w.start} | [[phase-${pad(ph.num)}-${ph.slug}\\|P${ph.num}]] | ${w.focus} | ${w.notes.length} | ${has ? "✅" : "—"} |`);
    }
  const p = join(CONTENT, "plan", "weeks.md");
  ensure(p);
  writeFileSync(p, rows.join("\n") + "\n");
}

for (const d of ["logs/weekly", "inbox"]) {
  const p = join(CONTENT, d, ".gitkeep");
  ensure(p);
  if (!existsSync(p)) writeFileSync(p, "");
}

console.log(`scaffold: +${created.notes} notes, +${created.phases} phases, +${created.projects} projects, weeks.md regenerated`);

function isoWeek(dateStr) {
  const d = new Date(dateStr + "T00:00:00Z");
  const day = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - day + 3);
  const firstThu = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  const wk = 1 + Math.round(((d - firstThu) / 86400000 - 3 + ((firstThu.getUTCDay() + 6) % 7)) / 7);
  return `${d.getUTCFullYear()}-W${pad(wk)}`;
}

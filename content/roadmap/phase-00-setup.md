---
title: "Phase 0 — Setup"
roadmap: ai-engineer
phase: 0
weeks: [0]
start: 2026-09-21
end: 2026-09-27
stage: planned
---

# Phase 0 — Setup

W0–W0 · 2026-09-21 → 2026-09-27 · ~6h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W0 (2026-09-21 → 2026-09-27) — Repo, Quartz, Console, llm-client skeleton

**Học (2h)**
- [ ] Đọc Quartz v4 docs (setup, GitHub Pages)
- [ ] Đọc Anthropic Console: keys, spend limits

**Build (3h)**
- [ ] git init, push repo public
- [ ] Cài Quartz v4 vào repo (giữ content/), Obsidian vault trỏ content/
- [ ] Chạy `node scripts/scaffold.mjs` và `node scripts/progress.mjs`
- [ ] GitHub Actions deploy Pages
- [ ] pnpm workspace `projects/`, `.env.example`
- [ ] `projects/shared/llm-client`: interface + contract test (chưa adapter)
- [ ] Anthropic Console: API key + spend limit

**Notes → done**
- [ ] C [[claude-console-setup]] — Anthropic Console setup: API key, spend limit, org

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W39.md`

**Deliverable:** GitHub Pages hiển thị hub với progress table

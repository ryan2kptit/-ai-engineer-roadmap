---
title: "Phase 4 — Open Source, Local & Fine-tuning overview"
roadmap: ai-engineer
phase: 4
weeks: [10, 11]
start: 2026-11-30
end: 2026-12-13
stage: planned
---

# Phase 4 — Open Source, Local & Fine-tuning overview

W10–W11 · 2026-11-30 → 2026-12-13 · ~12h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W10 (2026-11-30 → 2026-12-06) — HF Hub, quantization, Ollama, Transformers.js

**Học (2h)**
- [ ] Model card, license
- [ ] GGUF Q4/Q8; Ollama trên MacBook; Transformers.js

**Build (3h)**
- [ ] Adapter Ollama (OpenAI-compatible) cho llm-client
- [ ] Chạy 2 model local qua p01

**Notes → done**
- [ ] B [[oss-hf-hub-licenses]] — Hugging Face Hub: model cards, licenses
- [ ] B [[oss-quantization-ollama-transformersjs]] — Quantization (GGUF), Ollama, Transformers.js

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W49.md`

## W11 (2026-12-07 → 2026-12-13) — Fine-tuning overview, decision matrix, bench

**Học (2h)**
- [ ] SFT, LoRA/QLoRA, RLHF/DPO, distillation — khi nào cần
- [ ] Ma trận privacy/cost/latency/quality

**Build (3h)**
- [ ] p04-api-vs-local: 20 task Haiku vs Sonnet vs local, judge bằng Claude
- [ ] Bảng kết quả vào note; blog #1

**Notes → done**
- [ ] B [[ft-overview-sft-lora-rlhf]] — Fine-tuning overview: SFT, LoRA/QLoRA, RLHF/DPO, distillation
- [ ] B [[decision-api-vs-oss]] — Decision matrix: closed API vs OSS local vs OSS hosted
- [ ] P [[portability-oss-hosted-providers]] — Portability: OSS hosted providers (Groq, Together, Bedrock, Vertex)

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W50.md`

**Deliverable:** Blog #1: API vs local bench

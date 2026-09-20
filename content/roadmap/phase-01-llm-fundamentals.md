---
title: "Phase 1 — LLM Fundamentals + Claude models"
roadmap: ai-engineer
phase: 1
weeks: [1, 2, 3]
start: 2026-09-28
end: 2026-10-18
stage: planned
---

# Phase 1 — LLM Fundamentals + Claude models

W1–W3 · 2026-09-28 → 2026-10-18 · ~18h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W1 (2026-09-28 → 2026-10-04) — Transformer, tokenization, context window

**Học (2h)**
- [ ] Transformer intuition: attention, KV cache, vì sao inference đắt
- [ ] BPE tokenization; context window & context rot

**Build (3h)**
- [ ] Adapter Anthropic (raw SDK) cho llm-client: `chat` + `stream`
- [ ] Contract test chạy với adapter thật (1 call)

**Notes → done**
- [ ] B [[llm-transformer-intuition]] — Transformer intuition: attention, KV cache, why inference is expensive
- [ ] B [[llm-tokenization]] — Tokenization (BPE) and token counting
- [ ] B [[llm-context-window]] — Context window, output limits, context rot
- [ ] C [[claude-console-workbench]] — Anthropic Console & Workbench

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W40.md`

## W2 (2026-10-05 → 2026-10-11) — Inference, sampling, limitations, ML literacy

**Học (2h)**
- [ ] Inference vs training; AI engineer vs ML engineer
- [ ] Sampling params; non-determinism
- [ ] Hallucination, cutoff, sycophancy
- [ ] Precision/recall/F1, cosine

**Build (3h)**
- [ ] p01-llm-cli: chat streaming qua llm-client
- [ ] Token count (Token Counting API) + cost mỗi lượt

**Notes → done**
- [ ] B [[llm-inference-vs-training]] — Inference vs training; pre-trained vs fine-tuned; AI engineer vs ML engineer
- [ ] B [[llm-sampling-params]] — Sampling: temperature, top_p, top_k, stop, seed, non-determinism
- [ ] B [[llm-limitations-hallucination]] — LLM limitations: hallucination, knowledge cutoff, sycophancy
- [ ] B [[ml-literacy-minimum]] — ML literacy minimum: precision/recall/F1, cosine, probability
- [ ] C [[claude-token-counting]] — Claude Token Counting API

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W41.md`

## W3 (2026-10-12 → 2026-10-18) — Pricing, landscape, Claude model family

**Học (2h)**
- [ ] Pricing model chung; ước tính cost 1 feature
- [ ] Landscape 2026; Claude Opus/Sonnet/Haiku

**Build (3h)**
- [ ] Adapter OpenAI tối thiểu; flag `--provider --model`
- [ ] Lưu conversation JSON; Vitest mocked adapter

**Notes → done**
- [ ] B [[llm-pricing-model]] — Pricing model: input/output/cached/batch tokens; estimating feature cost
- [ ] B [[models-landscape-2026]] — Model landscape 2026: closed vs open, benchmarks worth trusting
- [ ] C [[claude-model-family]] — Claude model family: Opus/Sonnet/Haiku — choosing by task, limits, pricing
- [ ] P [[portability-model-selection]] — Portability: model selection across Claude / OpenAI / Gemini

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W42.md`

**Deliverable:** p01 chạy được với 2 provider, in cost

**Checkpoint (quiz với Claude):** Chọn đúng model cho 5 task kèm cost; giải thích precision/recall bằng ví dụ retrieval

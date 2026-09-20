---
title: "Phase 2 — LLM APIs & Prompting"
roadmap: ai-engineer
phase: 2
weeks: [4, 5, 6]
start: 2026-10-19
end: 2026-11-08
stage: planned
---

# Phase 2 — LLM APIs & Prompting

W4–W6 · 2026-10-19 → 2026-11-08 · ~18h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W4 (2026-10-19 → 2026-10-25) — Chat API anatomy, Messages API, streaming backend

**Học (2h)**
- [ ] Roles, multi-turn state, streaming events, stop reasons, retry/backoff
- [ ] Messages API chi tiết
- [ ] SSE/WebSocket backend, backpressure, cancel

**Build (3h)**
- [ ] p02-lesson-forge skeleton
- [ ] Endpoint SSE stream cho web

**Notes → done**
- [ ] B [[api-chat-anatomy]] — Chat API anatomy: roles, multi-turn state, streaming events, stop reasons, retries
- [ ] C [[claude-messages-api]] — Claude Messages API in depth
- [ ] B [[prod-streaming-sse-backend]] — Streaming backend: SSE/WebSocket, backpressure, cancel

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W43.md`

## W5 (2026-10-26 → 2026-11-01) — Tool calling, structured output, prompt patterns

**Học (2h)**
- [ ] Tool calling concept; Claude tool use
- [ ] Structured output concept; Zod validate+retry
- [ ] Prompt patterns; prompt versioning

**Build (3h)**
- [ ] Lesson outline + quiz JSON (Zod), retry khi invalid
- [ ] `prompts/` versioned, snapshot test

**Notes → done**
- [ ] B [[api-tool-calling-concept]] — Tool/function calling concept: schema, loop, parallel tools
- [ ] B [[api-structured-output-concept]] — Structured output concept: JSON schema, constrained decoding, validate+retry
- [ ] C [[claude-tool-use]] — Claude tool use
- [ ] C [[claude-structured-outputs]] — Claude structured outputs with Zod
- [ ] B [[prompt-patterns]] — Prompt engineering patterns: system/user, few-shot, CoT, output contracts
- [ ] B [[prompt-versioning]] — Prompt versioning and prompts-as-code

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W44.md`

## W6 (2026-11-02 → 2026-11-08) — Caching, reasoning, batch, files, Anthropic prompt guide

**Học (2h)**
- [ ] Prompt caching concept → Claude breakpoints/TTL
- [ ] Reasoning concept → extended thinking
- [ ] Batch concept → Batch API; Files API
- [ ] XML tags, prefill, long-context tips

**Build (3h)**
- [ ] Bật caching cho system prompt + rubric; đo cost trước/sau
- [ ] Batch mode sinh 50 lesson; ghi số liệu vào note

**Notes → done**
- [ ] B [[api-prompt-caching-concept]] — Prompt caching concept: KV-cache reuse, prefix stability, economics
- [ ] B [[api-reasoning-models-concept]] — Reasoning models concept: thinking budget, latency/cost trade-off
- [ ] B [[api-batch-concept]] — Batch processing concept: async jobs, offline cost reduction
- [ ] C [[claude-prompt-caching]] — Claude prompt caching: breakpoints, TTL, cached-read pricing
- [ ] C [[claude-extended-thinking]] — Claude extended thinking: budget tokens, interleaved thinking
- [ ] C [[claude-batch-files-api]] — Claude Batch API and Files API
- [ ] C [[claude-prompt-guide-xml-prefill]] — Anthropic prompt guide: XML tags, prefill, long-context tips, Workbench improver
- [ ] P [[portability-openai-responses-gemini-caching]] — Portability: OpenAI Responses API, Gemini context caching, reasoning across vendors

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W45.md`

**Deliverable:** p02 với caching + batch, có số liệu cost

**Checkpoint (quiz với Claude):** Quiz caching economics, stop reasons, streaming edge cases

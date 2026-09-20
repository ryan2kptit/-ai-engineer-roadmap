---
title: "Phase 3 — Safety & Security"
roadmap: ai-engineer
phase: 3
weeks: [7, 8, 9]
start: 2026-11-09
end: 2026-11-29
stage: planned
---

# Phase 3 — Safety & Security

W7–W9 · 2026-11-09 → 2026-11-29 · ~18h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W7 (2026-11-09 → 2026-11-15) — Prompt injection, OWASP, adversarial testing

**Học (2h)**
- [ ] Direct/indirect injection, exfiltration qua tool output
- [ ] OWASP LLM Top 10
- [ ] promptfoo

**Build (3h)**
- [ ] `tests/redteam/*.yaml` 30 case base
- [ ] promptfoo chạy local trên p02

**Notes → done**
- [ ] B [[sec-prompt-injection]] — Prompt injection: direct, indirect via tools/RAG, exfiltration
- [ ] B [[sec-owasp-llm-top10]] — OWASP LLM Top 10
- [ ] B [[sec-adversarial-testing]] — Adversarial testing: red-team suites, regression in CI (promptfoo)

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W46.md`

## W8 (2026-11-16 → 2026-11-22) — Guardrails, moderation, Claude-specific

**Học (2h)**
- [ ] Defense in depth, allow-list, least privilege, HITL, sandboxing
- [ ] Moderation/PII; Claude làm classifier
- [ ] Tool permission model, computer use risks

**Build (3h)**
- [ ] Guardrail layer input/output cho p02
- [ ] Moderator bằng Haiku
- [ ] +10 case Claude-specific

**Notes → done**
- [ ] B [[sec-guardrails-layers]] — Guardrails: defense in depth, allow-lists, least privilege, HITL, sandboxing
- [ ] B [[sec-moderation-pii]] — Moderation and PII: classifier layer, redaction, responsible logging, end-user IDs
- [ ] C [[claude-as-moderator]] — Claude as moderator/classifier (Haiku)
- [ ] C [[claude-tool-permissions]] — Claude tool use permission model, computer use risks

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W47.md`

## W9 (2026-11-23 → 2026-11-29) — Ethics, alignment, policy, CI gate

**Học (2h)**
- [ ] Bias/fairness, disclaimer
- [ ] RLHF, Constitutional AI (mức phỏng vấn)
- [ ] Anthropic Usage Policy

**Build (3h)**
- [ ] CI fail nếu red-team pass-rate < ngưỡng
- [ ] Tự viết 5 prompt phá p02 rồi vá

**Notes → done**
- [ ] B [[ethics-bias-fairness]] — Bias, fairness, transparency, honest disclaimers
- [ ] B [[alignment-overview]] — Alignment overview: RLHF, Constitutional AI — interview level
- [ ] C [[anthropic-usage-policy]] — Anthropic Usage Policy
- [ ] P [[portability-openai-moderation-api]] — Portability: OpenAI Moderation API, Gemini safety settings

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W48.md`

**Deliverable:** p02 hardened, red-team gate trong CI

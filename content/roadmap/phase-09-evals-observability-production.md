---
title: "Phase 9 — Evals, Observability, Production & Gateway"
roadmap: ai-engineer
phase: 9
weeks: [29, 30, 31, 32, 33]
start: 2027-04-12
end: 2027-05-16
stage: planned
---

# Phase 9 — Evals, Observability, Production & Gateway

W29–W33 · 2027-04-12 → 2027-05-16 · ~30h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W29 (2027-04-12 → 2027-04-18) — Eval hệ thống

**Học (2h)**
- [ ] Golden datasets, offline vs online
- [ ] LLM-as-judge bias
- [ ] Regression CI, A/B prompt

**Build (3h)**
- [ ] Golden datasets cho p06 + p07; judge bằng Claude

**Notes → done**
- [ ] B [[eval-golden-dataset]] — Golden datasets and offline vs online eval
- [ ] B [[eval-llm-as-judge]] — LLM-as-judge and its biases
- [ ] B [[eval-ci-regression]] — Eval regression in CI, A/B prompts

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W15.md`

## W30 (2027-04-19 → 2027-04-25) — Observability

**Học (2h)**
- [ ] OpenTelemetry GenAI semantic conventions
- [ ] Langfuse

**Build (3h)**
- [ ] Langfuse self-host (Docker); tracing OTel cho p06/p07; cost/user, p95

**Notes → done**
- [ ] B [[obs-opentelemetry-genai]] — OpenTelemetry GenAI semantic conventions
- [ ] B [[obs-langfuse-tracing]] — Langfuse self-hosted tracing, cost per user, p95

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W16.md`

## W31 (2027-04-26 → 2027-05-02) — Fallback, rate limits, caching, Claude tiers

**Học (2h)**
- [ ] Retries/fallback, rate limiting, pinning
- [ ] Semantic caching
- [ ] Claude tiers, deprecation policy

**Build (3h)**
- [ ] Fallback chain Sonnet → Haiku → OpenAI adapter
- [ ] Budget guard per tenant

**Notes → done**
- [ ] B [[prod-fallback-rate-limits]] — Retries, fallback, rate limiting, model pinning
- [ ] B [[prod-caching-strategies]] — Caching strategies: exact, semantic, prompt cache
- [ ] C [[claude-rate-limits-tiers]] — Claude rate limits and usage tiers
- [ ] C [[claude-model-versioning-deprecation]] — Claude model versioning and deprecation policy

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W17.md`

## W32 (2027-05-03 → 2027-05-09) — Gateway, cost model

**Học (2h)**
- [ ] LLM gateway concept; LiteLLM/OpenRouter
- [ ] Unit economics
- [ ] Claude caching + batch economics

**Build (3h)**
- [ ] Hoàn thiện llm-client: routing, cost accounting
- [ ] Dashboard cost

**Notes → done**
- [ ] B [[prod-llm-gateway-abstraction]] — LLM gateway / provider abstraction: routing, fallback, cost accounting; LiteLLM/OpenRouter
- [ ] B [[prod-cost-model]] — Cost model per tenant, unit economics of a feature
- [ ] C [[claude-cost-optimization]] — Claude cost optimization: caching + batch economics, Console usage

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W18.md`

## W33 (2027-05-10 → 2027-05-16) — Claude Code headless CI, runbook

**Học (2h)**
- [ ] `claude -p` trong GitHub Actions

**Build (3h)**
- [ ] `claude-review.yml`: review PR, chạy eval, draft weekly log
- [ ] Runbook; blog #4

**Notes → done**
- [ ] C [[claude-code-headless-ci]] — Claude Code headless (claude -p) in CI
- [ ] P [[portability-multi-provider-fallback]] — Portability: multi-provider fallback design

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W19.md`

**Deliverable:** p06/p07 production-grade với tracing, fallback, CI review

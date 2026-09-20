# AI Engineer Roadmap — Base + Claude (v3)

> Khung theo [roadmap.sh/ai-engineer](https://roadmap.sh/ai-engineer), tracking kiểu second-brain (Quartz + Obsidian) như [ví dụ này](https://trinhvandat.github.io/second-brain/tech/ai-engineer-roadmap).
> Bắt đầu: **21/09/2026 (W0)** · Kết thúc: **~T6/2027** (38 tuần)
> v3 — 20/09/2026: tách rõ 3 lớp kiến thức Base / Claude / Ecosystem để sau này mở rộng sang hệ sinh thái khác.

## 0. Tham số lộ trình

| Tham số | Giá trị |
|---|---|
| Thời gian | 5–7h/tuần (~6h) → **~230h tổng** |
| Ngôn ngữ | **TypeScript** (Node 22, pnpm, Vitest, Zod) |
| SDK chính | `@anthropic-ai/sdk` (raw), `@anthropic-ai/claude-agent-sdk`, `@modelcontextprotocol/sdk` |
| SDK phụ | `openai` (adapter thứ 2), Vercel AI SDK (so sánh), Voyage AI (embeddings) |
| Mục tiêu | Trở thành AI Engineer, Claude là thế mạnh, nền base đủ để đổi hệ sinh thái trong vài tuần |
| Nền tảng sẵn có | 12 năm SWE, full-stack, KMP/CMP, Supabase, Docker, n8n, dùng Claude Code hàng ngày → bỏ qua backend/git cơ bản và cách *dùng* Claude Code |
| Tracking | GitHub `ai-engineer-roadmap` → Quartz → GitHub Pages |

## 1. Mô hình 3 lớp kiến thức

```
┌─────────────────────────────────────────────────────────────┐
│ Lớp 3 · ECOSYSTEM   OpenAI · Gemini · OSS   (học sau, nhanh)│  ← ~10% giờ, chỉ 1 note portability/phase
├─────────────────────────────────────────────────────────────┤
│ Lớp 2 · CLAUDE      implementation cụ thể trên Anthropic     │  ← ~30% giờ
├─────────────────────────────────────────────────────────────┤
│ Lớp 1 · BASE        concept, pattern, kiến trúc — vendor-free│  ← ~60% giờ, KHÔNG được bỏ
└─────────────────────────────────────────────────────────────┘
```

**Quy tắc phân lớp** (áp cho mọi note, ghi vào frontmatter `layer`):

| layer | Tiêu chí | Ví dụ |
|---|---|---|
| `base` | Đổi provider thì kiến thức vẫn đúng 100% | chunking, agent loop, prompt injection, **MCP** (chuẩn mở), **contextual retrieval** (kỹ thuật, Anthropic khởi xướng nhưng portable) |
| `claude` | Chỉ đúng với Anthropic API/SDK/product | cache breakpoints, Citations API, Agent SDK, Skills, Claude Code plugin, usage tiers |
| `ecosystem` | Note so sánh/ánh xạ sang provider khác | `portability-*`, `ecosystem-map` |

**Cách học mỗi topic:** base concept trước (note `layer: base`) → implement bằng Claude (note `layer: claude`, link về base) → 1 dòng "với OpenAI/Gemini thì là X" trong note `portability-*` của phase. Không được viết note claude khi chưa có note base tương ứng.

**Cơ chế kỹ thuật cho việc mở rộng:** `projects/shared/llm-client` — interface ports & adapters (`chat`, `stream`, `tools`, `embed`, `count_tokens`), adapter Anthropic đầy đủ từ Phase 2, adapter OpenAI tối thiểu từ Phase 2, mở rộng ở Phase 9. Mọi project dùng qua interface này. Khi sang hệ sinh thái khác: viết adapter mới, project không đổi.

### Nhịp tuần (6h)

| Khối | Giờ | Việc |
|---|---|---|
| Học | 2h | Đọc docs/cookbook → atomic note ngay (base trước, claude sau) |
| Build | 3h | Code project, commit nhỏ, mỗi commit gắn note |
| Ship log | 1h | `logs/weekly/YYYY-Www.md` → cập nhật `stage` |

**Definition of Done:** note đủ *What · Why · How (TS) · Gotchas · Applied in* + đã dùng trong ≥1 project + giải thích được 2 phút không nhìn note. Với note `claude` thêm điều kiện: có link `[[base-note]]`.

### Vai trò của tôi

| Mode | Bạn nói | Tôi làm |
|---|---|---|
| **teach** | "teach: contextual retrieval" | Giải thích base trước, rồi Claude impl, rồi 1 dòng ecosystem |
| **quiz** | "quiz phase 6" | 5–7 câu phỏng vấn, trộn base + claude, chấm |
| **review** | dán PR / code | Correctness, security, cost, latency, **có lọt vendor-specific vào shared/ không** |
| **plan** | "plan tuần này" | Đọc stage → 3 việc cụ thể |
| **retro** | dán weekly log | Tóm tắt, điều chỉnh, giữ nhịp, hỏi "docs Anthropic đổi gì" |

### Tài nguyên gốc
1. Anthropic docs `docs.claude.com`, `anthropics/anthropic-cookbook`, `anthropics/courses`, Anthropic Academy
2. Anthropic engineering posts: "Building effective agents", "Contextual retrieval", "Writing tools for agents"
3. MCP spec `modelcontextprotocol.io`, OpenTelemetry GenAI semantic conventions
4. roadmap.sh/ai-engineer; OWASP LLM Top 10
5. Ecosystem (đọc lướt khi viết portability): OpenAI docs, Gemini docs

---

## 2. Bức tranh tổng thể

```
Phase 0  Setup                                    W0       (1 tuần)   base
Phase 1  LLM Fundamentals + Claude models          W1–W3    (3 tuần)   base 70 / claude 30
Phase 2  LLM APIs & Prompting                      W4–W6    (3 tuần)   base 50 / claude 50
Phase 3  Safety & Security                         W7–W9    (3 tuần)   base 80 / claude 20
Phase 4  Open Source, Local & Fine-tuning overview W10–W11  (2 tuần)   base 100
Phase 5  Embeddings, Vector DB & Data parsing      W12–W15  (4 tuần)   base 100
Phase 6  RAG                                       W16–W20  (5 tuần)   base 70 / claude 30
Phase 7  Agents · MCP · Agent SDK · Skills         W21–W26  (6 tuần)   base 55 / claude 45  ← trọng tâm
Phase 8  Multimodal                                W27–W28  (2 tuần)   base 50 / claude 50
Phase 9  Evals, Observability, Production, Gateway W29–W33  (5 tuần)   base 70 / claude 30
Phase 10 Capstone + Portfolio + Interview          W34–W38  (5 tuần)
```

Mỗi phase = 1 project + notes base + notes claude + 1 note `portability-*` + 1 bài blog. Mọi project xoay quanh **Second Brain của bạn** và **shipwithai.io**, gộp thành capstone.

---

## 3. Chi tiết từng phase

Ký hiệu: **B** = base note, **C** = claude note, **P** = portability note.

### Phase 0 — Setup (W0)
- [ ] Repo public, Quartz v4, Obsidian vault → `content/`
- [ ] Hub `index.md` + skeleton 10 phase `stage: planned`
- [ ] `scripts/progress.ts`: tiến độ theo phase **và theo layer** (base % / claude %)
- [ ] Actions deploy Pages; pnpm workspace; `.env.example`; `.gitignore` chặn key
- [ ] Anthropic Console: API key, spend limit → **C** `claude-console-setup`
- [ ] Skeleton `shared/llm-client/` với interface trống + test contract

---

### Phase 1 — LLM Fundamentals + Claude models (W1–W3)

**B**
- Transformer đủ để debug: attention, BPE tokenization, context window, KV cache, vì sao inference đắt
- Inference vs training; pre-trained vs fine-tuned; AI engineer vs ML engineer (roadmap.sh intro)
- Sampling: temperature, top_p, top_k, stop; non-determinism, seed
- **Giới hạn LLM**: hallucination, knowledge cutoff, sycophancy, context rot
- **ML literacy tối thiểu**: precision/recall/F1, cosine similarity, xác suất cơ bản — nền cho eval sau này
- Pricing model chung: input/output/cached/batch tokens; cách ước tính cost cho một feature
- Landscape 2026: closed vs open, benchmark nào đáng tin

**C**
- Claude model family (Opus/Sonnet/Haiku): chọn model theo task, context/output limits, pricing cụ thể
- Token Counting API; Console & Workbench

**Build — `p01-llm-cli`**: CLI chat streaming qua `shared/llm-client` với adapter Anthropic (raw SDK) + adapter OpenAI tối thiểu; flag `--provider`, `--model`; in token count + cost mỗi lượt; lưu conversation JSON. Vitest với mocked adapter.

**Notes:** B `llm-transformer-intuition` `llm-tokenization` `llm-context-window` `llm-inference-vs-training` `llm-sampling-params` `llm-limitations-hallucination` `ml-literacy-minimum` `llm-pricing-model` `models-landscape-2026` · C `claude-model-family` `claude-token-counting` `claude-console-workbench` · P `portability-model-selection`

**Checkpoint:** chọn đúng model cho 5 task kèm cost; giải thích precision/recall bằng ví dụ retrieval.

---

### Phase 2 — LLM APIs & Prompting (W4–W6)

**B**
- Anatomy của một chat API: roles, multi-turn state (client giữ), streaming (SSE) & event types, stop reasons, error/retry/backoff, idempotency
- **Tool/function calling** concept: schema, loop gọi tool, parallel tools (agent để Phase 7)
- **Structured output** concept: JSON schema / constrained decoding, validate + retry (Zod)
- **Prompt caching** concept: KV-cache reuse, prefix stability, khi nào có lợi
- **Reasoning models** concept: thinking budget, trade-off latency/cost, khi nào cần
- **Batch processing** concept: async job, giảm cost cho việc offline
- Prompt engineering patterns: system/user separation, few-shot, CoT, output contracts, delimiters, prompt versioning trong code, prompt as code review-able
- **Streaming backend architecture**: SSE/WebSocket từ server → client, backpressure, cancel
- Fine-tuning: khi nào không nên (Phase 4 học overview kỹ thuật)

**C**
- Messages API chi tiết; tool use Claude-style; structured outputs
- **Prompt caching Claude**: cache breakpoints, TTL, cached-read pricing — đo thật
- **Extended thinking**: budget tokens, interleaved thinking với tools
- Batch API, Files API; Anthropic prompt guide: XML tags, prefill, long-context tips; Workbench prompt improver

**Build — `p02-lesson-forge`** (shipwithai): topic → lesson outline + quiz JSON (Zod), prompts versioned; bật caching cho system prompt + rubric; batch mode sinh 50 lesson; endpoint SSE stream cho web. Ghi số liệu: cost trước/sau caching, batch vs realtime.

**Notes:** B `api-chat-anatomy` `api-tool-calling-concept` `api-structured-output-concept` `api-prompt-caching-concept` `api-reasoning-models-concept` `api-batch-concept` `prompt-patterns` `prompt-versioning` `prod-streaming-sse-backend` · C `claude-messages-api` `claude-tool-use` `claude-structured-outputs` `claude-prompt-caching` `claude-extended-thinking` `claude-batch-files-api` `claude-prompt-guide-xml-prefill` · P `portability-openai-responses-gemini-caching`

**Checkpoint:** quiz caching economics, stop reasons, streaming edge cases — trả lời được cả base lẫn Claude.

---

### Phase 3 — Safety & Security (W7–W9)

**B**
- Prompt injection (direct / indirect qua tool output & RAG), jailbreak, data exfiltration; OWASP LLM Top 10
- Defense in depth: input/output guardrails, tool allow-list, least privilege, HITL, sandboxing tool execution
- Moderation & PII: classifier layer, redaction, logging có trách nhiệm, end-user IDs
- Adversarial testing: red-team suite, regression trong CI (promptfoo)
- Bias/fairness, transparency, disclaimer trung thực; alignment overview (RLHF, Constitutional AI) — mức phỏng vấn

**C**
- Claude làm moderator/classifier (Anthropic không có Moderation API riêng), Haiku cho rẻ
- Tool use permission model, computer use risks, Anthropic Usage Policy

**Build — hardening `p02`**: guardrail layer + red-team ~40 case (30 base + 10 Claude-specific) `tests/redteam/*.yaml`, promptfoo trong CI, fail nếu pass-rate < ngưỡng.

**Notes:** B `sec-prompt-injection` `sec-owasp-llm-top10` `sec-guardrails-layers` `sec-moderation-pii` `sec-adversarial-testing` `ethics-bias-fairness` `alignment-overview` · C `claude-as-moderator` `claude-tool-permissions` `anthropic-usage-policy` · P `portability-openai-moderation-api`

---

### Phase 4 — Open Source, Local & Fine-tuning overview (W10–W11) — 100% base

**B**
- HF Hub: model card, license, quantization (GGUF Q4/Q8); Ollama; Transformers.js
- **Fine-tuning overview**: SFT, LoRA/QLoRA, RLHF/DPO, distillation — hiểu để biết khi nào cần, không tự train trong roadmap này
- Ma trận quyết định privacy / cost / latency / quality: API đóng vs OSS local vs OSS hosted

**Build — `p04-api-vs-local`**: bench 20 task Haiku vs Sonnet vs Llama/Qwen local qua `shared/llm-client` (thêm adapter Ollama, OpenAI-compatible); judge bằng Claude; bảng vào note → **blog #1**.

**Notes:** B `oss-hf-hub-licenses` `oss-quantization-ollama-transformersjs` `ft-overview-sft-lora-rlhf` `decision-api-vs-oss` · P `portability-oss-hosted-providers`

---

### Phase 5 — Embeddings, Vector DB & Data parsing (W12–W15) — 100% base

**B**
- Embedding hình học; cosine/dot/L2; dimension, Matryoshka; embedding models & pricing (Voyage — Anthropic khuyến nghị vì không có embedding API riêng — vs OpenAI vs OSS bge)
- Use cases: semantic search, kNN classification, clustering, dedupe, anomaly
- Vector DB: pgvector (Supabase) vs Qdrant/Chroma/Pinecone; HNSW vs IVFFlat; recall/latency; metadata filtering; hybrid BM25 + vector
- **Document parsing/ETL**: PDF/HTML/Markdown → text, OCR, tables, cleaning, metadata extraction — 50% công sức RAG thật

**Build — `p05-brain-search`**: parser cho notes + PDF; index vào pgvector (Supabase) bằng Voyage; semantic + hybrid search có filter; recall@k trên 30 query gán nhãn. `shared/llm-client.embed` có adapter Voyage + OpenAI.

**Notes:** B `emb-what-are-embeddings` `emb-similarity-metrics` `emb-models-comparison` `emb-use-cases` `vdb-pgvector-supabase` `vdb-hnsw-ivfflat` `vdb-hybrid-search` `data-document-parsing` · P `portability-embeddings-providers`

---

### Phase 6 — RAG (W16–W20)

**B**
- Pipeline và chỗ hỏng: chunking (fixed/recursive/markdown-aware/semantic), metadata, query rewriting, HyDE, reranking
- **Contextual retrieval** (kỹ thuật portable: thêm context vào chunk trước khi embed)
- **Citations** concept: grounding, attribution, cách trả link nguồn
- **RAG vs long-context**: khi nào không cần vector DB; cost/latency của context lớn
- RAG eval: faithfulness, answer relevance, context precision/recall — golden set 50 câu
- Raw SDK vs LangChain.js vs LlamaIndex.TS — build 3 cách để hiểu abstraction đáng hay không
- Caching, cost control, streaming với citations

**C**
- **Citations API** native; prompt caching cho long documents; Files API trong RAG; contextual retrieval bằng Haiku (rẻ) theo cookbook

**Build — `p06-ask-my-brain`** (dự án chính): RAG trên notes + nội dung shipwithai; contextual retrieval + rerank + citations link về note gốc; eval suite CI; deploy. Citations làm 2 cách: prompt-based (base) và Citations API (claude) — so sánh. **Blog #2**.

**Notes:** B `rag-pipeline` `rag-chunking-strategies` `rag-query-rewriting-hyde` `rag-reranking` `rag-contextual-retrieval` `rag-citations-concept` `rag-vs-long-context` `rag-eval-metrics` `rag-frameworks-vs-raw` `rag-failure-modes` · C `claude-citations-api` `claude-long-context-caching` · P `portability-openai-file-search-gemini-rag`

**Checkpoint:** faithfulness ≥ 0.85; system-design "RAG 10M docs, khi nào long-context thay được".

---

### Phase 7 — Agents · MCP · Agent SDK · Skills (W21–W26) — trọng tâm

**B (W21–W23)**
- **Agent loop tay**: plan → tool → observe → repeat; stop conditions, max steps, budget; state machine
- **Patterns** ("Building effective agents"): prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer; ReAct; khi nào **không** cần agent
- **Tool design**: naming, schema, error messages cho model, idempotency, side-effect safety ("Writing tools for agents")
- **Memory**: short-term (context), long-term (vector), episodic; context management/compaction
- **MCP** (chuẩn mở, đa vendor): server (tools/resources/prompts), client, transports, auth; **A2A** overview
- Multi-agent orchestration, HITL, agent eval (task success, trajectory), agent reliability (retries, idempotency)
- **Agent frameworks landscape**: OpenAI Agents SDK, Google ADK, LangGraph, Mastra, Vercel AI SDK agents — biết bản đồ, chọn 1

**C (W24–W26)**
- **Claude Agent SDK**: tools, permissions, hooks, subagents, sessions, memory tool, compaction — port loop tay sang SDK, so sánh trong note
- **Agent Skills**; **Claude Code như platform**: CLAUDE.md, hooks, subagents, plugin/marketplace
- Computer use (overview + rủi ro); Managed Agents (overview)

**Build — `p07-brain-agent`**: (1) MCP server expose repo học (`list_topics`, `update_stage`, `create_note`, `search_notes` dùng p05) — chạy được với **cả Claude lẫn client MCP khác** để chứng minh portable. (2) Agent loop tay (base) → port sang Agent SDK (claude): đọc weekly log → plan tuần → tạo note skeleton → mở PR, HITL. (3) Đóng gói Claude Code plugin (MCP + Skill + subagent) publish cho học viên shipwithai. **Blog #3**.

**Notes:** B `agent-loop-from-scratch` `agent-patterns` `agent-when-not-to` `agent-tool-design` `agent-memory-context` `mcp-server-ts` `mcp-client-transports-auth` `agent-multi-agent-hitl` `agent-eval-reliability` `agent-frameworks-landscape` · C `claude-agent-sdk` `claude-agent-skills` `claude-code-platform-hooks-subagents` `claude-code-plugins` `claude-computer-use-overview` `anthropic-managed-agents-overview` · P `portability-openai-agents-sdk-google-adk`

**Checkpoint:** plugin chạy thật 2 tuần; MCP server test được với 2 client khác nhau; quiz agent reliability.

---

### Phase 8 — Multimodal (W27–W28)

**B**
- Vision input concepts: OCR, document/chart understanding, UI screenshot understanding (CMP/Android testing); giới hạn kích thước/cost
- Audio/video pipeline: STT → text → LLM → TTS; video → frames/transcript; multimodal embeddings (CLIP) overview
- Image generation: khả năng & giới hạn, prompt cho image

**C**
- Claude vision: ảnh, **PDF native** (charts, tables); Claude không có image gen/TTS/STT → ghép provider ngoài

**Build — `p08-lecture-pipeline`** (shipwithai): video → transcript (Whisper) → chapters/summary/quiz (p02) → slide PDF qua Claude vision → index vào p06; có thể nối n8n.

**Notes:** B `mm-vision-concepts` `mm-audio-video-pipeline` `mm-image-generation` · C `claude-vision-images-pdf` · P `portability-gemini-multimodal-openai-audio`

---

### Phase 9 — Evals, Observability, Production & Gateway (W29–W33)

**B**
- Eval hệ thống: golden datasets, LLM-as-judge (bias của nó), regression CI, A/B prompt, offline vs online eval
- **Observability**: tracing theo **OpenTelemetry GenAI semantic conventions**; Langfuse self-host (Docker, home-lab); cost/user, p95
- Production: retries/fallback, rate limiting, semantic caching, model version pinning, secrets, deploy edge vs server
- **LLM gateway / provider abstraction**: hoàn thiện `shared/llm-client` (routing, fallback provider, cost accounting); so sánh với LiteLLM / OpenRouter / Vercel AI Gateway
- Cost model per tenant; unit economics của 1 feature

**C**
- Rate limits & usage tiers, model versioning & deprecation policy, caching + batch economics, Console usage
- **Claude Code headless (`claude -p`) trong CI**: auto review PR, chạy eval, draft weekly log

**Build — production-hóa `p06` + `p07`**: Langfuse tracing (OTel), fallback Sonnet → Haiku → adapter OpenAI, caching, budget guard, dashboard cost; `claude-review.yml`; runbook. **Blog #4**.

**Notes:** B `eval-golden-dataset` `eval-llm-as-judge` `eval-ci-regression` `obs-opentelemetry-genai` `obs-langfuse-tracing` `prod-fallback-rate-limits` `prod-caching-strategies` `prod-llm-gateway-abstraction` `prod-cost-model` · C `claude-rate-limits-tiers` `claude-model-versioning-deprecation` `claude-cost-optimization` `claude-code-headless-ci` · P `portability-multi-provider-fallback`

---

### Phase 10 — Capstone, Portfolio & Interview (W34–W38)

**Capstone "ShipWithAI Copilot"** trên Agent SDK: RAG (p06) + MCP tools (p07) + lecture pipeline (p08) + guardrails (p3) + tracing/eval (p9), client web hoặc app CMP. Không học topic mới. **Bài kiểm tra portability cuối cùng (W37):** đổi adapter mặc định sang OpenAI trong 1 buổi — capstone vẫn chạy, ghi lại cái gì gãy → note `ecosystem-switch-retro`.

**Portfolio:** MCP server + Claude Code plugin có người dùng thật · capstone README với số liệu eval/cost, Mermaid, trade-offs · hub Quartz 100% done với tiến độ base/claude · 4 blog + 1 talk · Anthropic Academy certificates.

**Interview prep** (tôi mock): system design RAG/agent/cost · deep-dive caching, contextual retrieval, MCP, injection · "với OpenAI/Gemini thì sao" từ notes `portability-*` · behavioral qua project thật.

---

## 4. Bản đồ mở rộng hệ sinh thái (điền dần qua notes `portability-*`)

| Base concept | Claude | OpenAI | Gemini |
|---|---|---|---|
| Chat API | Messages API | Responses / Chat Completions | generateContent |
| Prompt caching | cache breakpoints, TTL | automatic prefix caching | context caching |
| Reasoning | extended thinking | o-series / reasoning effort | thinking budget |
| Structured output | tool/JSON schema | Structured Outputs | responseSchema |
| Batch | Batch API | Batch API | Batch mode |
| Files/long docs | Files API, PDF native | Files, file search | Files API |
| Citations | Citations API | prompt-based / file search annotations | grounding metadata |
| Embeddings | (Voyage) | text-embedding-3 | gemini-embedding |
| Moderation | Claude as classifier | Moderation API | safety settings |
| Tools protocol | MCP | MCP + Agents SDK tools | MCP + ADK tools |
| Agent framework | Agent SDK | Agents SDK | ADK |
| Agent platform | Claude Code, Skills, Managed Agents | Codex, AgentKit | Gemini CLI, Vertex Agent Engine |
| Vision/PDF | native | native | native + video |
| Image gen / TTS / STT | — (ghép ngoài) | Images, TTS, Whisper | Imagen, TTS, native audio |

Khi mở rộng sang hệ sinh thái mới: (1) viết adapter trong `shared/llm-client`, (2) điền cột tương ứng, (3) chạy lại eval suite của p06/p07 — cái gì lệch là chỗ cần học thêm. Ước tính: 2–4 tuần cho một hệ sinh thái nhờ lớp base đã có.

---

## 5. Cấu trúc repo (Quartz + Obsidian)

```
ai-engineer-roadmap/
├── content/
│   ├── index.md                   # HUB: progress theo phase × layer (auto-gen)
│   ├── roadmap/                   # 1 file / phase
│   ├── notes/
│   │   ├── base/                  # layer: base — llm/ api/ prompt/ sec/ oss/ emb/ vdb/ rag/ agent/ mcp/ mm/ eval/ prod/
│   │   ├── claude/                # layer: claude — claude-*, anthropic-*, claude-code-*
│   │   └── ecosystem/             # layer: ecosystem — portability-*, ecosystem-map, ecosystem-switch-retro
│   ├── projects/                  # 1 note / project
│   ├── logs/weekly/
│   └── inbox/
├── projects/                      # pnpm workspace
│   ├── shared/llm-client/         # interface + adapters/{anthropic,openai,ollama,voyage}
│   ├── p01-llm-cli/  p02-lesson-forge/  p04-api-vs-local/  p05-brain-search/
│   ├── p06-ask-my-brain/  p07-brain-agent/{mcp-server,agent,claude-code-plugin}/
│   ├── p08-lecture-pipeline/  capstone-copilot/
├── scripts/progress.ts
├── quartz/ + quartz.config.ts
├── .github/workflows/  deploy.yml · evals.yml · claude-review.yml
└── README.md
```

### Frontmatter atomic note

```yaml
---
title: Prompt caching (Claude)
roadmap: ai-engineer
phase: 2
layer: claude            # base | claude | ecosystem
section: api             # llm | api | prompt | sec | oss | emb | vdb | rag | agent | mcp | mm | eval | prod
base: api-prompt-caching-concept   # bắt buộc với layer: claude → link về note base
stage: learning          # planned | learning | done
started: 2026-10-13
completed:
project: p02-lesson-forge
sources: [https://docs.claude.com/...]
---
## What · ## Why · ## How (TS) · ## Gotchas · ## Applied in
```

Weekly log giữ như v2. `progress.ts` xuất 2 bảng: theo phase và theo layer (`base 42% · claude 30% · ecosystem 10%`); CI **fail** nếu có note `layer: claude` mà thiếu `base:`.

Commit: `note(base/rag): contextual retrieval → done`, `note(claude): citations api → learning`, `feat(shared): openai adapter`, `log: 2026-W42`.

---

## 6. Rủi ro & cách phòng

| Rủi ro | Dấu hiệu | Phòng |
|---|---|---|
| Học Claude mà hổng base | Note claude không có `base:` link | CI fail; tôi từ chối quiz claude topic khi base chưa `done` |
| Vendor-specific lọt vào shared/ | `shared/` import `@anthropic-ai/sdk` ngoài adapter | Lint rule + tôi soi trong review |
| Tutorial hell | 2 tuần không commit code | 2h học / 3h build; không "Applied in" thì không `done` |
| Framework quá sớm | Dùng LangChain/Agent SDK trước raw | Phase 2, 6, 7 luôn raw / loop tay trước |
| Anthropic ship nhanh, note lệch | Docs đổi | `anthropic-changelog` hàng tháng; retro mỗi phase |
| Bận shipwithai | Bỏ 2 log liên tiếp | Tuần bận: 1 log 15 phút + 1 note nhỏ |
| Scope creep capstone | Feature không map topic | Chỉ gộp thứ đã có |
| Trễ | Sau W19 chưa xong Phase 5 | Phase 8 còn 1 tuần; Phase 4 theo nhu cầu |

---

## 7. Việc làm ngay tuần này (W0)

1. Repo `ai-engineer-roadmap` public, Quartz v4, push; folder `notes/{base,claude,ecosystem}`
2. Copy file này vào `content/roadmap/README.md`; 10 file phase `stage: planned`
3. `scripts/progress.ts` (theo phase × layer) + `deploy.yml` → Pages chạy
4. `shared/llm-client` interface trống + contract test
5. Anthropic Console: key + spend limit → note `claude-console-setup`
6. Gửi tôi link Pages → **"plan tuần này"** cho W1

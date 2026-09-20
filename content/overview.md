---
title: "Overview — các phần liên quan thế nào, cái gì quan trọng"
roadmap: ai-engineer
---

# Overview: bản đồ kiến thức

Ba câu hỏi trang này trả lời: **học cái gì trước cái gì**, **cái gì quan trọng hơn**, và **các project ghép với nhau ra sao**.

## 1. Bản đồ phụ thuộc (học cái gì trước)

Mũi tên liền = *cần có trước*. Mũi tên đứt = *bổ trợ*. Màu = mức quan trọng (xem mục 2).

```mermaid
flowchart TB
  classDef core fill:#fde68a,stroke:#b45309,stroke-width:3px,color:#111
  classDef imp fill:#bfdbfe,stroke:#1d4ed8,stroke-width:2px,color:#111
  classDef sup fill:#e5e7eb,stroke:#6b7280,stroke-width:1px,color:#111,stroke-dasharray:4 2

  F["P1 LLM Fundamentals<br/>tokens · context · sampling · cost · Claude models"]:::core
  A["P2 APIs & Prompting<br/>tool calling · structured output · caching · thinking"]:::core
  S["P3 Safety & Security<br/>injection · guardrails · red-team"]:::imp
  O["P4 Open source & local<br/>khi nào không dùng API"]:::sup
  E["P5 Embeddings & Vector DB<br/>+ document parsing"]:::imp
  R["P6 RAG<br/>chunking · retrieval · citations · eval"]:::core
  G["P7 Agents · MCP · Agent SDK<br/>loop · tools · memory · plugin"]:::core
  M["P8 Multimodal<br/>vision · PDF · audio"]:::sup
  P["P9 Evals · Observability · Production<br/>gateway · fallback · cost"]:::core
  C["P10 Capstone<br/>ShipWithAI Copilot"]:::imp

  F --> A
  A --> S
  A --> E
  E --> R
  A --> G
  R --> G
  S -. hardening .-> R
  S -. hardening .-> G
  O -. adapter Ollama .-> P
  M -. feeds .-> R
  R --> P
  G --> P
  P --> C
```

Đọc nhanh: **trục chính là F → A → R → G → P**. Mọi thứ khác bám vào trục này. Nếu phải cắt, cắt các node xám trước (P4, P8), rồi rút ngắn node xanh (P5, P3) — không bao giờ cắt node vàng.

## 2. Mức quan trọng

| Tier | Phần | Vì sao | Giờ | Nếu chỉ còn 50% thời gian |
|---|---|---|---|---|
| **1 — phải master** | P7 Agents · MCP · Agent SDK | Thứ thị trường 2026 trả tiền; MCP + Agent SDK là lợi thế Claude-first rõ nhất | 36h | Giữ nguyên |
| **1** | P6 RAG | 80% ứng dụng LLM thật là RAG ở dạng nào đó; eval RAG là kỹ năng phân biệt senior | 30h | Giữ 4 tuần |
| **1** | P2 APIs & Prompting | Tool calling, structured output, caching là "ngữ pháp" của mọi thứ sau; caching = câu trả lời cost số 1 | 18h | Giữ nguyên |
| **1** | P9 Evals · Production | Phân biệt người làm demo và AI engineer; gateway abstraction là cơ chế mở rộng hệ sinh thái | 30h | Giữ 3 tuần |
| **2 — cần đủ** | P1 Fundamentals | Đủ để debug và nói chuyện cost; không cần sâu hơn | 18h | 2 tuần |
| **2** | P3 Safety | Phỏng vấn luôn hỏi injection; production bắt buộc có guardrails | 18h | 2 tuần, bỏ alignment |
| **2** | P5 Embeddings & VDB | Nền của RAG; 100% base, portable | 24h | 3 tuần, bỏ hybrid |
| **3 — biết là đủ** | P4 Open source | Chỉ để trả lời "khi nào không dùng Claude" | 12h | 1 tuần hoặc bỏ |
| **3** | P8 Multimodal | Claude vision/PDF hữu ích nhưng không phải trục chính | 12h | Gộp vào P6 1 tuần |
| — | P10 Capstone | Gộp, không học mới | 30h | 3 tuần |

## 3. Các project ghép với nhau thế nào

```mermaid
flowchart LR
  classDef core fill:#fde68a,stroke:#b45309,stroke-width:2px,color:#111
  classDef base fill:#f3f4f6,stroke:#6b7280,color:#111

  LC[("shared/llm-client<br/>interface + adapters<br/>anthropic · openai · ollama · voyage")]:::base
  p01["p01 llm-cli"]:::base
  p02["p02 lesson-forge"]:::base
  p04["p04 api-vs-local"]:::base
  p05["p05 brain-search"]:::base
  p06["p06 ask-my-brain"]:::core
  p07["p07 brain-agent<br/>MCP server · Agent SDK · plugin"]:::core
  p08["p08 lecture-pipeline"]:::base
  CAP["capstone copilot"]:::core

  p01 --> LC
  p02 --> LC
  p04 --> LC
  p05 --> LC
  p06 --> p05
  p07 --> p05
  p07 --> p06
  p08 --> p02
  p08 --> p06
  CAP --> p06
  CAP --> p07
  CAP --> p08
```

`shared/llm-client` là móng: mọi project gọi qua nó, không project nào import SDK vendor trực tiếp. Đây là lý do sau này đổi hệ sinh thái chỉ cần viết adapter mới.

## 4. Ba lớp trong mỗi phần

```mermaid
flowchart LR
  B["BASE<br/>concept vendor-free<br/>~60% giờ"] --> C["CLAUDE<br/>implementation Anthropic<br/>~30% giờ"] --> E["ECOSYSTEM<br/>portability-* · OpenAI · Gemini<br/>~10% giờ"]
```

Ví dụ với RAG: `rag-citations-concept` (base) → `claude-citations-api` (claude, link về base) → `portability-openai-file-search-gemini-rag` (ecosystem). Thứ tự này là bắt buộc: không có note claude khi base chưa done.

## 5. Chủ đề xuyên suốt (không thuộc phase nào)

| Chủ đề | Xuất hiện ở | Vì sao xuyên suốt |
|---|---|---|
| **Cost** | P1 pricing → P2 caching/batch → P9 cost model | Mọi quyết định kiến trúc LLM cuối cùng là quyết định về cost |
| **Eval** | P3 red-team → P5 recall@k → P6 RAG eval → P7 agent eval → P9 eval system | Không đo được thì không cải thiện được; là kỹ năng senior nhất |
| **Security** | P3 → P6 injection qua RAG → P7 tool permissions | Bề mặt tấn công mở rộng theo từng phase |
| **Abstraction** | `llm-client` từ P0 → gateway ở P9 | Cơ chế kỹ thuật của "Claude-first, không Claude-only" |

Xem [[roadmap/README|roadmap đầy đủ]] · [[plan/weeks|bảng tuần]] · [[index|hub]]

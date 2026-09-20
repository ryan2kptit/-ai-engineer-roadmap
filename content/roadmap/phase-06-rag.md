---
title: "Phase 6 — RAG"
roadmap: ai-engineer
phase: 6
weeks: [16, 17, 18, 19, 20]
start: 2027-01-11
end: 2027-02-14
stage: planned
---

# Phase 6 — RAG

W16–W20 · 2027-01-11 → 2027-02-14 · ~30h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W16 (2027-01-11 → 2027-01-17) — Pipeline, chunking

**Học (2h)**
- [ ] RAG pipeline và chỗ hỏng
- [ ] Chunking strategies

**Build (3h)**
- [ ] p06-ask-my-brain skeleton, ingest từ p05
- [ ] 3 chunker, so sánh

**Notes → done**
- [ ] B [[rag-pipeline]] — RAG pipeline and where it breaks
- [ ] B [[rag-chunking-strategies]] — Chunking strategies: fixed, recursive, markdown-aware, semantic

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W02.md`

## W17 (2027-01-18 → 2027-01-24) — Query rewriting, reranking, contextual retrieval

**Học (2h)**
- [ ] HyDE, query rewriting
- [ ] Reranking
- [ ] Contextual retrieval (cookbook)

**Build (3h)**
- [ ] Contextual retrieval bằng Haiku (caching)
- [ ] Voyage rerank

**Notes → done**
- [ ] B [[rag-query-rewriting-hyde]] — Query rewriting and HyDE
- [ ] B [[rag-reranking]] — Reranking (Voyage/bge rerankers)
- [ ] B [[rag-contextual-retrieval]] — Contextual retrieval (portable technique, Anthropic origin)

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W03.md`

## W18 (2027-01-25 → 2027-01-31) — Citations, RAG vs long-context

**Học (2h)**
- [ ] Citations concept → Citations API
- [ ] Khi nào long-context thay vector DB; caching cho docs

**Build (3h)**
- [ ] Citations 2 cách: prompt-based vs Citations API, so sánh
- [ ] Streaming với citations link về note gốc

**Notes → done**
- [ ] B [[rag-citations-concept]] — Citations concept: grounding, attribution, source links
- [ ] C [[claude-citations-api]] — Claude Citations API
- [ ] B [[rag-vs-long-context]] — RAG vs long-context: when a vector DB is unnecessary
- [ ] C [[claude-long-context-caching]] — Claude long-context + prompt caching for documents, Files API in RAG

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W04.md`

## W19 (2027-02-01 → 2027-02-07) — RAG eval

**Học (2h)**
- [ ] Faithfulness, relevance, context precision/recall
- [ ] Failure modes

**Build (3h)**
- [ ] Golden set 50 câu
- [ ] Eval suite chạy CI

**Notes → done**
- [ ] B [[rag-eval-metrics]] — RAG evaluation: faithfulness, relevance, context precision/recall
- [ ] B [[rag-failure-modes]] — RAG failure modes catalogue

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W05.md`

## W20 (2027-02-08 → 2027-02-14) — Frameworks vs raw, deploy

**Học (2h)**
- [ ] LangChain.js, LlamaIndex.TS với Anthropic provider

**Build (3h)**
- [ ] Variant LangChain + LlamaIndex để so sánh
- [ ] Deploy (Vercel/Cloudflare Workers); blog #2

**Notes → done**
- [ ] B [[rag-frameworks-vs-raw]] — Raw SDK vs LangChain.js vs LlamaIndex.TS
- [ ] P [[portability-openai-file-search-gemini-rag]] — Portability: OpenAI file search, Gemini RAG/grounding

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W06.md`

**Deliverable:** p06 deployed, faithfulness ≥ 0.85

**Checkpoint (quiz với Claude):** System design: RAG 10M docs, khi nào long-context thay được

---
title: "Phase 5 — Embeddings, Vector DB & Data parsing"
roadmap: ai-engineer
phase: 5
weeks: [12, 13, 14, 15]
start: 2026-12-14
end: 2027-01-10
stage: planned
---

# Phase 5 — Embeddings, Vector DB & Data parsing

W12–W15 · 2026-12-14 → 2027-01-10 · ~24h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W12 (2026-12-14 → 2026-12-20) — Embeddings geometry, metrics, models

**Học (2h)**
- [ ] Hình học embedding, dimension, Matryoshka
- [ ] Cosine/dot/L2
- [ ] Voyage vs OpenAI vs bge

**Build (3h)**
- [ ] `llm-client.embed` với adapter Voyage + OpenAI
- [ ] Thí nghiệm nhỏ: similarity giữa 20 câu

**Notes → done**
- [ ] B [[emb-what-are-embeddings]] — Embeddings: geometry, dimensions, Matryoshka
- [ ] B [[emb-similarity-metrics]] — Similarity metrics: cosine, dot, L2
- [ ] B [[emb-models-comparison]] — Embedding models: Voyage vs OpenAI vs OSS (bge) — quality/cost

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W51.md`

## W13 (2026-12-21 → 2026-12-27) — Use cases, document parsing

**Học (2h)**
- [ ] Search, kNN classification, clustering, dedupe
- [ ] PDF/HTML/Markdown → text, OCR, tables, metadata

**Build (3h)**
- [ ] Parser cho notes markdown + PDF trong p05-brain-search
- [ ] kNN classifier cho `section` của note

**Notes → done**
- [ ] B [[emb-use-cases]] — Embedding use cases: search, kNN classification, clustering, dedupe, anomaly
- [ ] B [[data-document-parsing]] — Document parsing/ETL: PDF/HTML/Markdown → text, OCR, tables, metadata

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W52.md`

## W14 (2026-12-28 → 2027-01-03) — pgvector, indexes

**Học (2h)**
- [ ] pgvector trên Supabase vs Qdrant/Chroma
- [ ] HNSW vs IVFFlat, filtering

**Build (3h)**
- [ ] Index toàn bộ notes vào pgvector
- [ ] CLI semantic search có filter section/stage

**Notes → done**
- [ ] B [[vdb-pgvector-supabase]] — pgvector on Supabase vs Qdrant/Chroma/Pinecone
- [ ] B [[vdb-hnsw-ivfflat]] — Indexes: HNSW vs IVFFlat, recall/latency, filtering

**Ship log (1h)**
- [ ] `content/logs/weekly/2026-W53.md`

## W15 (2027-01-04 → 2027-01-10) — Hybrid search, retrieval eval

**Học (2h)**
- [ ] BM25 + vector, fusion

**Build (3h)**
- [ ] Hybrid search
- [ ] 30 query gán nhãn, recall@k; bảng vào note

**Notes → done**
- [ ] B [[vdb-hybrid-search]] — Hybrid search: BM25 + vector, fusion
- [ ] P [[portability-embeddings-providers]] — Portability: embeddings across providers

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W01.md`

**Deliverable:** p05 search với recall@k đo được

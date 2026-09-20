---
title: "Phase 8 — Multimodal"
roadmap: ai-engineer
phase: 8
weeks: [27, 28]
start: 2027-03-29
end: 2027-04-11
stage: planned
---

# Phase 8 — Multimodal

W27–W28 · 2027-03-29 → 2027-04-11 · ~12h

Xem [[README|roadmap tổng]] · [[weeks|bảng tuần]]

## W27 (2027-03-29 → 2027-04-04) — Vision, audio/video pipeline

**Học (2h)**
- [ ] OCR, chart/document, UI screenshot understanding
- [ ] STT→LLM→TTS; video→transcript
- [ ] Claude vision & PDF native

**Build (3h)**
- [ ] p08-lecture-pipeline: video → Whisper transcript → chapters/summary/quiz (p02)

**Notes → done**
- [ ] B [[mm-vision-concepts]] — Vision input concepts: OCR, document/chart understanding, UI screenshots
- [ ] B [[mm-audio-video-pipeline]] — Audio/video pipelines: STT→LLM→TTS, video→frames/transcript, CLIP overview
- [ ] C [[claude-vision-images-pdf]] — Claude vision: images and native PDF

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W13.md`

## W28 (2027-04-05 → 2027-04-11) — Image gen, tích hợp

**Học (2h)**
- [ ] Image generation: khả năng/giới hạn

**Build (3h)**
- [ ] Slide PDF qua Claude vision → index vào p06
- [ ] Nối n8n (optional)

**Notes → done**
- [ ] B [[mm-image-generation]] — Image generation: capabilities, limits, prompting
- [ ] P [[portability-gemini-multimodal-openai-audio]] — Portability: Gemini multimodal, OpenAI audio/images

**Ship log (1h)**
- [ ] `content/logs/weekly/2027-W14.md`

**Deliverable:** p08 chạy end-to-end trên 1 video thật

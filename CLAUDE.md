# ai-engineer-roadmap — hướng dẫn cho Claude Code

Repo học tập của Dong: lộ trình 38 tuần trở thành AI Engineer, Claude-first, nền base vendor-neutral. Quartz site trong `content/`, code trong `projects/`.

## Nguồn sự thật

| File | Vai trò |
|---|---|
| `roadmap.manifest.json` | **Nguồn duy nhất** cho phases, tuần, notes, projects. Muốn đổi kế hoạch → sửa file này rồi chạy scaffold |
| `content/overview.md` | Diagram: phụ thuộc giữa các phần, tier quan trọng, project ghép nhau — đọc khi cần quyết định cắt/ưu tiên |
| `content/roadmap/README.md` | Roadmap v3 (giải thích, lý do, mô hình 3 lớp) |
| `content/roadmap/phase-XX-*.md` | Task checkbox theo tuần — **đây là to-do list** |
| `content/plan/weeks.md` | Bảng tuần có ngày (regenerate mỗi lần scaffold) |
| `content/notes/{base,claude,ecosystem}/<section>/<id>.md` | Atomic notes, frontmatter `stage` là tiến độ thật |
| `content/logs/weekly/YYYY-Www.md` | Ship log mỗi tuần |
| `progress.json` | Sinh bởi `scripts/progress.mjs` |

## Lệnh

```bash
node scripts/scaffold.mjs          # sinh file còn thiếu từ manifest (không overwrite)
node scripts/progress.mjs          # cập nhật progress vào content/index.md + progress.json, lint
node scripts/progress.mjs --check  # chỉ lint (dùng trong CI)
```

## Mô hình 3 lớp (bắt buộc tuân thủ)

- `layer: base` — concept vendor-neutral. Học **trước**.
- `layer: claude` — implementation Anthropic. Phải có `base: <id>` trỏ về note base (hoặc `n/a` với note thuần product). Không được `done` khi note base chưa `done`.
- `layer: ecosystem` — `portability-*`, 1 note/phase, so sánh Claude ↔ OpenAI ↔ Gemini.
- `projects/shared/llm-client` là interface ports & adapters. **Không import `@anthropic-ai/sdk` ngoài `adapters/anthropic`.** Mọi project gọi qua interface.

## Quy trình tuần (6h: 2h học · 3h build · 1h ship log)

1. Đầu tuần: `/plan-week` — đọc phase file của tuần hiện tại + progress → chốt 3 việc.
2. Học topic → mở note tương ứng (đã scaffold sẵn), đổi `stage: learning`, điền `started:`.
3. Build → commit nhỏ, message dạng `feat(p02): ...` / `note(base/rag): chunking → learning`.
4. Cuối tuần: `/ship-log` — viết `content/logs/weekly/YYYY-Www.md`, cập nhật stage, chạy `progress.mjs`, commit `log: YYYY-Www`.

## Definition of Done cho note

- Đủ mục What · Why · How (TS) · Gotchas · Applied in (note claude thêm "Khác gì so với base")
- `project:` điền project đã áp dụng (lint bắt buộc khi `done`)
- Dong giải thích được 2 phút không nhìn note → hỏi quiz trước khi đổi sang `done`

## Khi Dong hỏi "làm đến đâu rồi"

Chạy `node scripts/progress.mjs`, đọc `content/plan/weeks.md` để biết tuần hiện tại theo ngày, đọc phase file tương ứng, liệt kê checkbox chưa tick. Trả lời ngắn: tuần nào, phase nào, % theo layer, 3 việc tiếp theo.

## Conventions

- Note id = tên file, kebab-case, prefix theo section (`rag-`, `agent-`, `claude-`, `portability-`).
- Wikilink giữa notes: `[[note-id]]`. Note claude luôn link về base ở dòng đầu.
- Tiếng Việt cho giải thích, tiếng Anh cho thuật ngữ và code. Ngắn, có trade-off, không định nghĩa thứ cơ bản.
- Không thêm dependency vào `scripts/` (Node built-ins only) để chạy được trước `pnpm install`.
- Không commit `.env`, API key. `.env.example` là nơi liệt kê biến.

## Stack

TypeScript, Node 22, pnpm workspace, Vitest, Zod. `@anthropic-ai/sdk`, `@anthropic-ai/claude-agent-sdk`, `@modelcontextprotocol/sdk`, `openai` (adapter phụ), Voyage AI (embeddings), pgvector/Supabase, Langfuse, promptfoo. Quartz v4 cho site.

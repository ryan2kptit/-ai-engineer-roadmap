Mở và điền note cho topic: $ARGUMENTS

1. Tìm file `content/notes/**/<id>.md` (id từ $ARGUMENTS). Nếu chưa có, thêm vào `roadmap.manifest.json` (đúng layer/section, note claude phải có `base`) rồi chạy `node scripts/scaffold.mjs`.
2. Nếu là note `claude`: kiểm tra note base đã `done` chưa. Chưa → dừng, đề nghị làm base trước.
3. Dạy topic theo thứ tự: base concept → Claude implementation → 1 dòng ecosystem. Mức senior engineer, trade-off, code TS ngắn, link docs gốc (docs.claude.com / cookbook). Không định nghĩa thứ cơ bản.
4. Điền note cùng Dong (không viết hộ toàn bộ — Dong phải tự viết What/Why bằng lời mình, Claude bổ sung Gotchas và code).
5. Đổi `stage: learning`, `started: <today>`.

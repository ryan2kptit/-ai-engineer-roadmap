Viết ship log cuối tuần và cập nhật tiến độ.

1. Lấy tuần hiện tại từ `content/plan/weeks.md` (hoặc $ARGUMENTS). Tên file: `content/logs/weekly/<YYYY-Www>.md`.
2. Đọc `git log --since="7 days ago" --oneline` và phase file để biết checkbox đã làm.
3. Hỏi Dong 4 câu ngắn: học gì / build gì / vướng gì / giờ thực tế. Không tự bịa.
4. Viết log theo template:
   ```
   ---
   week: <YYYY-Www>
   phase: <n>
   hours: <h>
   stage_changes: [<note>: <from>→<to>]
   ---
   ## Learned
   ## Built
   ## Stuck
   ## Next week
   ```
5. Với note Dong nói đã xong: chạy quiz 3 câu trước; qua thì đổi `stage: done`, `completed:`, `project:`. Không qua → giữ `learning`, ghi vào Stuck.
6. Tick checkbox trong phase file, chạy `node scripts/scaffold.mjs && node scripts/progress.mjs`, commit `log: <YYYY-Www>`.
7. Kết thúc bằng 2 câu retro thẳng thắn: đúng nhịp hay trễ, cần điều chỉnh gì.

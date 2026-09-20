Lên kế hoạch tuần học hiện tại.

1. Chạy `node scripts/progress.mjs` để lấy tiến độ.
2. Xác định tuần hiện tại: đọc `content/plan/weeks.md`, so với ngày hôm nay. Nếu Dong nói tuần khác ($ARGUMENTS), dùng tuần đó.
3. Đọc phase file tương ứng trong `content/roadmap/`, lấy section `## W<n>`.
4. Kiểm tra tuần trước có checkbox nào chưa tick → carry-over.
5. Trả về: 3 việc cụ thể cho tuần (ưu tiên build), note nào mở trước, note claude nào bị chặn vì base chưa done, giờ ước tính cho mỗi việc (tổng ≤ 6h).
6. Hỏi Dong xác nhận, rồi đổi `stage: learning` + `started:` cho các note tuần này.

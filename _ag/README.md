# _ag — Bàn giao việc cho Antigravity (AG)

Đây là thư mục "giao tiếp" giữa chủ dự án + Claude (người dựng kiến trúc) và **Antigravity (AG)** — công cụ
sẽ làm phần lặp lại: **soạn bản tiếng Việt cho các trang còn lại của website Sen's Homestay**.

## AG cần làm gì (tóm tắt 1 dòng)
Tạo các trang tiếng Việt trong thư mục `/vi/`, mỗi trang bám đúng **trang mẫu `vi/index.html`**, dùng
glossary + giọng văn quy định, và **rút gọn** nội dung cho khách Việt trẻ (20–30 tuổi) — KHÔNG dịch 1:1.

## Đọc theo thứ tự
1. `00-brief.md` — mục tiêu tổng & nguyên tắc.
2. `01-i18n-architecture.md` — cơ chế song ngữ (thư mục `/vi/`, nút EN|VI, language gate, đường dẫn ảnh, hreflang).
3. `02-glossary.md` — thuật ngữ EN→VI cố định + danh sách KHÔNG dịch.
4. `03-voice.md` — giọng văn tiếng Việt (khách trẻ).
5. `04-tasks.md` — danh sách trang cần làm + phần được phép bớt.
6. `05-checklist.md` — checklist bắt buộc trước khi coi 1 trang là xong.
7. `STATUS.md` — AG cập nhật tiến độ ở đây sau mỗi trang.

## Nguồn sự thật (KHÔNG sửa các file này)
- `../DESIGN.md` — hệ thống thiết kế ("Light Highland"): màu, font, nav, footer, component, checklist thiết kế.
- `../PRODUCT.md` — brand & khách hàng.
- `../vi/index.html` — **TRANG MẪU**. Khi phân vân, mở file này ra xem cách làm.
- `../index.html` — bản tiếng Anh gốc để đối chiếu nội dung.

## Quy tắc vàng cho AG
- **Không tự ý đổi thiết kế / màu / font / cấu trúc component.** Chỉ dịch + rút gọn nội dung.
- **Không sửa các trang tiếng Anh ở thư mục gốc** (trừ bước bật link VI ở cuối, xem `04-tasks.md`).
- Ảnh dùng chung: luôn trỏ `../images/...` (đừng copy ảnh vào `/vi/`).
- Nếu không chắc một từ/giá/lịch — **giữ nguyên như bản EN** và ghi chú vào `STATUS.md`, đừng bịa.

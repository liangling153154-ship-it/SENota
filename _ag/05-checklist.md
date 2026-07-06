# 05 · Checklist trước khi coi 1 trang VI là "xong"

Chạy hết list này cho mỗi `vi/<page>.html`.

## Kỹ thuật / cấu trúc
- [ ] `<html lang="vi">`.
- [ ] `<head>` có 3 dòng `hreflang` (vi / en / x-default) trỏ đúng file (`<page>.html` ↔ `../<page>.html`).
- [ ] Copy nguyên khối `:root` tokens + base + nav + footer + buttons từ trang mẫu. **Không** thêm màu/font mới.
      Không có font cấm (Playfair, Cormorant, DM Sans, Inter, Fraunces, Lora, Space Grotesk). Không hex xanh/cam cũ.
- [ ] Nav đúng 7 mục theo `02-glossary.md`, đúng thứ tự, có pill `EN | VI`, mục trang hiện tại `class="active"`.
- [ ] Menu mobile (≤960px) = nền terracotta, chữ trắng (giống trang mẫu).
- [ ] Copy nguyên **language gate** + **lang-hint** + đoạn `<script>` gate; `LANG_HERE = 'vi'`.
- [ ] Có footer + nút WhatsApp nổi (`.wa-float`).

## Đường dẫn
- [ ] Mọi ảnh/video trỏ `../images/...` (KHÔNG có `src="images/..."` thiếu `../`).
- [ ] Link nội bộ: trang VI đã tồn tại → `<page>.html`; trang VI chưa có → tạm `../<page>.html`.
- [ ] Không còn link chết. Không copy ảnh vào `/vi/`.

## Nội dung / ngôn ngữ
- [ ] Dịch theo `02-glossary.md`; giọng theo `03-voice.md` (trẻ, gọn, thật).
- [ ] Đã **rút gọn** đúng tinh thần `04-tasks.md` (bỏ phần giải thích cho người nước ngoài).
- [ ] Giá tiền & con số giữ nguyên như bản EN. Giờ đổi sang 24h.
- [ ] Mọi CTA WhatsApp có `text=` tiếng Việt, URL-encode đúng, số `84822946888`.
- [ ] Không còn sót chữ tiếng Anh trong phần khách nhìn thấy (trừ tên riêng: WhatsApp, Limousine, Sen's Homestay…).

## Hiển thị (tự kiểm)
- [ ] Không cuộn ngang ở 375 / 768 / 1024 / 1440px.
- [ ] Chữ trên ảnh dùng công thức scrim + chữ trắng (giữ nguyên như trang mẫu, đừng để chữ tối trên ảnh).
- [ ] Nút bấm ≥ 44px trên mobile.

## Công cụ kiểm (nếu chạy được)
- [ ] Detector thiết kế: `node ../.agents/skills/impeccable/scripts/detect.mjs vi/<page>.html`
      (cảnh báo em-dash/bounce/dark-glow là thứ yếu; sửa lỗi cấu trúc).
- [ ] Có thể dùng script Playwright sẵn có: sửa target trong `../.verify/vi-check.mjs` để trỏ trang mới,
      kiểm `hscroll=false`, `lang=vi`, `alts` đúng, `errs: none`.

## Cuối cùng
- [ ] Làm bước "bật link VI trong nav" ở `04-tasks.md`.
- [ ] Cập nhật `STATUS.md`.

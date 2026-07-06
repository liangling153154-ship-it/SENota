# 01 · Kiến trúc song ngữ (EN / VI)

Website là **HTML tĩnh thuần** (không framework, không build). Mỗi trang là 1 file `.html` tự chứa CSS/JS inline.

## Bố cục thư mục
```
/            (gốc = tiếng Anh — GIỮ NGUYÊN)
   index.html, rooms.html, motorbike.html, tours.html, food.html,
   services.html, itinerary.html, bus-ticket.html, welcome.html, how-to-ride.html
   bus/ban-gioc-bus-guide.html
   images/   (ẢNH DÙNG CHUNG cho cả EN và VI)
/vi/         (tiếng Việt)
   index.html    ← TRANG MẪU (đã xong, do Claude làm)
   rooms.html, motorbike.html, ...  ← AG tạo
```

## Chuyển ngôn ngữ = LINK (không swap JS)
Trên nav có một "pill" `EN | VI`. Trang hiện tại đánh dấu `class="active"`.
- Trên trang EN (gốc): `EN` active, link `VI` trỏ `vi/<page>.html`.
- Trên trang VI (`/vi/`): `VI` active, link `EN` trỏ `../<page>.html`.

Xem đúng khối này trong `../vi/index.html` (tìm `class="lang-switch"`):
```html
<span class="lang-switch">
  <a href="../index.html" onclick="setLang('en')">EN</a>
  <a href="index.html" class="active" aria-current="true">VI</a>
</span>
```

## Language gate (bảng hỏi ngôn ngữ lần đầu)
Overlay hỏi EN/VI, chỉ hiện khi chưa có `localStorage.senLang`. Đã có sẵn markup + CSS + JS trong trang mẫu.
**AG chỉ cần COPY nguyên khối** (markup `id="langGate"` + `id="langHint"`, CSS `.lang-gate*`/`.lang-hint*`,
và đoạn `<script>` "LANGUAGE GATE + SWITCH") sang trang mới. Với trang trong `/vi/`, biến `LANG_HERE = 'vi'`.

## Đường dẫn (QUAN TRỌNG — hay sai)
Trang trong `/vi/` nằm sâu hơn 1 cấp so với gốc, nên:
- **Ảnh / video / asset dùng chung:** `../images/...` (vd `../images/hero/hero-main.jpg`). Đừng copy ảnh vào `/vi/`.
- **Link tới trang tiếng Anh gốc:** `../<page>.html` (vd `../food.html`).
- **Link tới trang VI khác cùng thư mục:** chỉ tên file (vd `rooms.html`) → tự hiểu là `vi/rooms.html`.
- **Logo nav** trỏ `index.html` (tức trang chủ VI cùng thư mục).

> Lưu ý ở trang mẫu hiện tại: các nav-link VI đang **tạm trỏ `../rooms.html` (EN)** vì trang VI chưa có.
> Khi AG tạo xong `vi/rooms.html` thì quay lại đổi link đó thành `rooms.html` (xem `04-tasks.md`, bước cuối).

## SEO — hreflang & lang
Trong `<head>` mỗi trang VI:
```html
<html lang="vi">
...
<link rel="alternate" hreflang="vi" href="index.html" />
<link rel="alternate" hreflang="en" href="../index.html" />
<link rel="alternate" hreflang="x-default" href="../index.html" />
```
(Đổi `index.html` thành tên trang tương ứng, vd `rooms.html` ↔ `../rooms.html`.)
Trang EN gốc đã có cặp hreflang trỏ ngược lại `vi/<page>.html` — khi tạo trang VI mới, kiểm tra trang EN
tương ứng đã có 2 dòng hreflang chưa; nếu chưa, thêm vào (đây là ngoại lệ được phép chạm file EN, chỉ ở `<head>`).

## WhatsApp
Mọi CTA là deep-link `https://wa.me/84822946888?text=<lời nhắn URL-encoded>`.
Ở bản VI, **đổi lời nhắn sang tiếng Việt** và URL-encode. Ví dụ trong trang mẫu:
`text=Ch%C3%A0o%20Sen!%20M%C3%ACnh%20mu%E1%BB%91n%20%C4%91%E1%BA%B7t%20ph%C3%B2ng.` = "Chào Sen! Mình muốn đặt phòng."

# 04 · Danh sách trang cần làm

Làm lần lượt. Sau mỗi trang: chạy `05-checklist.md`, cập nhật `STATUS.md`.
Nguồn nội dung = trang EN tương ứng ở thư mục gốc (`../<page>.html`). Khuôn kỹ thuật = `../vi/index.html`.

| # | Tạo file | Nguồn EN | Ưu tiên | Ghi chú rút gọn cho khách Việt |
|---|---|---|---|---|
| 1 | `vi/rooms.html` | `../rooms.html` | Cao | Giữ đủ các loại phòng, giá, ảnh. Rút gọn câu chữ. |
| 2 | `vi/motorbike.html` | `../motorbike.html` | Cao | Giữ danh sách xe + giá. **Bỏ/rút** phần giải thích "xe số chạy sao". |
| 3 | `vi/tours.html` | `../tours.html` | Cao | Giữ đủ tour + giá + lịch trình. Tên địa danh dùng tiếng Việt (glossary). |
| 4 | `vi/bus-ticket.html` | `../bus-ticket.html` | Cao | Giữ chức năng chọn ngày/điểm đến. Giờ đổi sang 24h. |
| 5 | `vi/services.html` | `../services.html` | TB | Giữ các dịch vụ (bữa sáng, giặt là, gửi đồ…). Rút mô tả. Giữ anchor `#breakfast`, `#laundry`. |
| 6 | `vi/food.html` | `../food.html` | TB | Danh mục quán ăn. Có thể rút phần giới thiệu dài. |
| 7 | `vi/itinerary.html` | `../itinerary.html` | TB | Trang lên lịch trình. |

## Cân nhắc BỎ ở bản VI (không cần tạo)
- `how-to-ride.html` ("cách chạy xe số") — người Việt trẻ đa số biết rồi. **Mặc định BỎ.**
  → Ở nav bản VI, mục "Thuê xe máy" trỏ `motorbike.html` là đủ; không cần link "how to ride".
- `bus/ban-gioc-bus-guide.html` (hướng dẫn bắt xe buýt công cộng đi Bản Giốc) — mang tính cầm tay cho
  khách nước ngoài. **Mặc định BỎ khỏi bản VI.** (Trang mẫu `vi/index.html` đã bỏ card này rồi.)
- `welcome.html` — trang chào khách đã nhận phòng; làm sau cùng nếu chủ yêu cầu.

> Nếu chủ muốn giữ 2 trang trên cho bản VI, sẽ ghi lại trong `STATUS.md`. Mặc định thì bỏ.

## Bước cuối MỖI trang: bật link VI trong nav
Sau khi tạo xong `vi/<page>.html`:
1. Trong **tất cả** các trang VI đã có (kể cả `vi/index.html`), sửa nav-link tương ứng từ tạm-trỏ-EN
   (`../<page>.html`) thành trỏ trang VI cùng thư mục (`<page>.html`).
   Ví dụ khi xong `vi/rooms.html`: đổi `<a href="../rooms.html">Phòng</a>` → `<a href="rooms.html">Phòng</a>`.
2. Đảm bảo trang EN gốc tương ứng đã có 2 dòng `hreflang` trỏ sang `vi/<page>.html` trong `<head>`
   (đây là ngoại lệ được phép chạm file EN — chỉ thêm ở `<head>`, không đụng nội dung).
3. Đánh dấu `class="active"` cho đúng mục nav của trang hiện tại.

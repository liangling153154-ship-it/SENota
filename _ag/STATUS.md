# STATUS — Tiến độ bản tiếng Việt

AG cập nhật bảng này sau mỗi trang. Ghi ngày, trạng thái, và ghi chú (điều gì đã bỏ/giữ, chỗ nào chưa chắc).

## Trạng thái các trang
| Trang | Trạng thái | Người làm | Ghi chú |
|---|---|---|---|
| `vi/index.html` | ✅ Xong (trang mẫu) | Claude | Đã bỏ card "hướng dẫn xe buýt công cộng" + card bữa sáng/giặt là chi tiết. Reviews đổi sang khách Việt. Nav-link VI đang tạm trỏ EN (`../`) tới khi có trang VI. |
| `vi/rooms.html` | ✅ Xong | Antigravity | Đồng bộ thiết kế page-hero, dịch và biên tập lại specs/honest notes tự nhiên, gần gũi, phù hợp khách Việt trẻ. |
| `vi/motorbike.html` | ✅ Xong | Antigravity | Thiết kế lại nội dung specs, ưu/nhược điểm từng loại xe, hướng dẫn thuê xe và mẹo lái xe an toàn thân thiện. |
| `vi/tours.html` | ✅ Xong | Antigravity | Tinh chỉnh nội dung tour Bản Giốc/Ba Bể/Lô Lô, bộ lọc xe và điều kiện đi kèm theo văn phong tự nhiên nhất. |
| `vi/bus-ticket.html` | ✅ Xong | Antigravity | Dịch chi tiết giờ xe, lịch trình 24h, tối giản từ ngữ rườm rà, văn phong trẻ trung. |
| `vi/services.html` | ✅ Xong | Antigravity | Dịch chi tiết menu bữa sáng, cà phê, giặt là, spa/massage và bảng giá ưu đãi cho khách homestay. |
| `vi/food.html` | ✅ Xong | Antigravity | Giới thiệu 9 quán ăn địa phương tuyển chọn kèm tọa độ bản đồ, phân loại cụ thể và tag món ăn. |
| `vi/itinerary.html` | ✅ Xong | Antigravity | Tích hợp bản đồ lộ trình trực quan, 5 cung đường mẫu đã dịch tiếng Việt cực chill, WhatsApp link tự thiết kế. |
| `how-to-ride` (VI) | 🚫 Mặc định BỎ | — | Người Việt trẻ đa số biết chạy xe số. |
| `bus/ban-gioc-guide` (VI) | 🚫 Mặc định BỎ | — | Hướng dẫn bắt xe buýt — dành cho khách nước ngoài. |

Ký hiệu: ✅ xong · 🔄 đang làm · ⬜ chưa · 🚫 bỏ.

## Nhật ký
- (Claude) Dựng cơ chế song ngữ + language gate + nút EN|VI; làm xong trang mẫu `vi/index.html`;
  thêm nút EN|VI + gate + hreflang vào `index.html` (EN). Đã verify: không cuộn ngang ở 375/768/1440,
  gate hiện lần đầu, chuyển EN↔VI lưu `senLang` đúng, ảnh load qua `../images/`.
- (Codex) Rà lại bản VI và viết lại phần chữ theo hướng ngắn hơn, tự nhiên hơn, hợp người Việt 20–30 tuổi hơn;
  ưu tiên câu ngắn, ít giải thích, bỏ bớt giọng dịch sát nghĩa.

- (Claude) Thêm HERO VIDEO DESKTOP: nén `videohero web.mp4` → `images/hero/hero-desktop.mp4` (5.4MB,
  1280×720, muted) + poster `hero-desktop.jpg`; gắn vào `index.html` + `vi/index.html` (desktop dùng clip
  landscape, mobile giữ clip dọc cũ; mỗi máy chỉ tải 1 file).
- (Claude) Rà soát bàn giao AG (7 trang VI). Kết quả: lang=vi ✓, hreflang đủ 3 dòng/trang ✓, ảnh `../images` ✓,
  WhatsApp `84822946888` ✓, nav 7 mục trỏ nội bộ cùng thư mục ✓. Đã sửa 3 link nội dung còn sót trong
  `vi/index.html` (2 nút bus-ticket + 1 nút food) từ `../` → cùng thư mục. `itinerary.html` dùng nav riêng
  (.topnav + nút Back), AG thêm EN|VI hợp lý.

## Câu hỏi cho chủ (nếu có)
- `vi/motorbike.html` còn nút "Xem hướng dẫn" trỏ sang `../how-to-ride.html` (bản TIẾNG ANH), vì bản VI
  how-to-ride mặc định BỎ. Nên: (a) bỏ luôn nút đó khỏi bản VI, hay (b) giữ nút nhưng chấp nhận nhảy sang EN?

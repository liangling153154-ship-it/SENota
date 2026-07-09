/* =====================================================================
   CAO BANG TRAVEL MAP — DATA
   ---------------------------------------------------------------------
   Edit this file to add / move / remove places. No build step needed.
   Every place below comes from Sen's own lists:
     · assets/itinerary-v2/itinerary-v2-data.js  (sights)
     · assets/food.html                          (restaurants)
     · Sen's services (rooms, motorbike rental, Ban Gioc bus)

   Fields:
     id        unique slug
     name      English display name
     localName Vietnamese name (shown small — useful to show drivers)
     category  one of CATEGORIES keys below (chips only appear for
               categories that are actually used)
     tier      "province" (shown when zoomed out) | "city" (zoom >= 12)
     lat, lng  WGS84 coordinates  (open index.html?edit and click the
               map to copy exact coordinates to your clipboard)
     minZoom   optional — hide the pin below this zoom (declutters)
     desc      1–2 line English description
     distance  optional — travel info line (province tier)
     price     optional — price hint, shown next to distance
     img       optional — photo path/URL (falls back to styled header)
     maps      optional — the place's real Google Maps link (the "Google
               Maps" button opens it — reviews, hours, photos)
     mapsName  optional — the place's registered Google Maps name; makes the
               "Directions" button route to the exact business (not a bare pin)
     bookUrl   optional — shows a "Book now" button
     guideUrl  optional — shows a guide button (label = guideLabel)
     phone     optional — shows a "Call" button
     pick      true = "Sen's pick" badge on the card
     veg       true = "Veg-friendly" badge on the card
     approx    true = coordinates are approximate, please fine-tune
     featured  true = highlighted pin with a star badge

   Photos live in the "assets" folder — deploy it together with the map
   (paths below are relative, case-sensitive on Linux!).
   ===================================================================== */

var ASSETS = "assets/";

var CATEGORIES = {
  sights:    { label: "Sights & Nature",   color: "#0E9F6E", icon: "mountain" },
  culture:   { label: "Culture & History", color: "#D97706", icon: "landmark" },
  stay:      { label: "Stay",              color: "#6366F1", icon: "bed" },
  food:      { label: "Food & Café",       color: "#EA580C", icon: "food" },
  nightlife: { label: "Nightlife",         color: "#DB2777", icon: "wine" },
  shopping:  { label: "Shopping",          color: "#9333EA", icon: "bag" },
  services:  { label: "Services",          color: "#475569", icon: "wrench" },
  health:    { label: "Health",            color: "#DC2626", icon: "health" },
  transport: { label: "Transport",         color: "#0284C7", icon: "bus" },
  fuel:      { label: "Petrol",            color: "#E11D48", icon: "fuel" }
};

var MAP_CONFIG = {
  cityCenter: [22.666, 106.2575],
  cityZoom: 15,
  cityThreshold: 12,          // city-tier pins appear at this zoom
  provinceCenter: [22.75, 106.20],
  provinceZoom: 9,
  maxBounds: [[21.00, 103.80], [24.20, 108.60]],
  cityImg: ASSETS + "images/places/cao-bang-city.jpg",
  cityPinImg: ASSETS + "images/places/cao-bang-city.jpg"   // photo shown in the city's map pin
};

/* ---------------------------------------------------------------------
   TOWNS — district capitals / townships, shown only as small orientation
   labels on the province map (NOT clickable places). They help visitors
   read where they are; each is a real district seat with coordinates from
   its Google Maps pin. Rendered as a tiny dot + name, hidden at city zoom
   and while a trip is active. Keep this separate from POIS.
   --------------------------------------------------------------------- */
var TOWNS = [
  { id: "town-bao-lac",     name: "Bao Lac",     localName: "TT. Bảo Lạc",     lat: 22.9506206, lng: 105.6814232 },
  { id: "town-pac-mieu",    name: "Pac Mieu",    localName: "TT. Pác Miầu",    lat: 22.8375556, lng: 105.4937867 },
  { id: "town-nuoc-hai",    name: "Nuoc Hai",    localName: "TT. Nước Hai",    lat: 22.7377463, lng: 106.1527843 },
  { id: "town-thong-nong",  name: "Thong Nong",  localName: "TT. Thông Nông",  lat: 22.7839686, lng: 105.9830988 },
  { id: "town-xuan-hoa",    name: "Xuan Hoa",    localName: "TT. Xuân Hòa",    lat: 22.9017851, lng: 106.0777214 },
  { id: "town-thanh-nhat",  name: "Thanh Nhat",  localName: "TT. Thanh Nhật",  lat: 22.6886489, lng: 106.6715246 },
  { id: "town-dong-khe",    name: "Dong Khe",    localName: "TT. Đông Khê",    lat: 22.4302294, lng: 106.4331808 },
  { id: "town-nguyen-binh", name: "Nguyen Binh", localName: "TT. Nguyên Bình", lat: 22.6503037, lng: 105.9605228 },
  { id: "town-tinh-tuc",    name: "Tinh Tuc",    localName: "TT. Tĩnh Túc",    lat: 22.6507543, lng: 105.885985  },
  { id: "town-trung-khanh", name: "Trung Khanh", localName: "TT. Trùng Khánh", lat: 22.8351068, lng: 106.5247732 },
  { id: "town-tra-linh",    name: "Tra Linh",    localName: "TT. Trà Lĩnh",    lat: 22.8287264, lng: 106.3227523 },
  { id: "town-quang-uyen",  name: "Quang Uyen",  localName: "TT. Quảng Uyên",  lat: 22.6966395, lng: 106.4412868 },
  { id: "town-ta-lung",     name: "Ta Lung",     localName: "TT. Tà Lùng",     lat: 22.4796449, lng: 106.5779043 },
  { id: "town-hoa-thuan",   name: "Hoa Thuan",   localName: "TT. Hòa Thuận",   lat: 22.530951,  lng: 106.5133739 }
];

var POIS = [

  {
    id: "ban-gioc",
    priority: 1,
    name: "Ban Gioc Waterfall",
    localName: "Thác Bản Giốc",
    category: "sights",
    tier: "province",
    lat: 22.85436,
    lng: 106.72427,
    photoPin: true,
    zPriority: 700,
    featured: true,
    labelAbove: true,
    desc: "Southeast Asia's widest waterfall, thundering in tiers on the Chinese border. Best flow Sep–Nov; bamboo rafts run right into the spray.",
    distance: "84.6 km east · ~2 h drive",
    img: ASSETS + "images/places/ban-gioc.jpg",
    maps: "https://maps.app.goo.gl/gyWXajPY783VWbYRA",
    mapsName: "Thác Bản Giốc"
  },

  {
    id: "nguom-ngao",
    name: "Nguom Ngao Cave",
    localName: "Động Ngườm Ngao",
    category: "sights",
    tier: "province",
    lat: 22.84542,
    lng: 106.70585,
    minZoom: 10,
    desc: "A 2 km walk-through cave of golden stalactites, 10 minutes from Ban Gioc. Cool inside all year — perfect midday escape.",
    distance: "83.5 km east · pairs with Ban Gioc",
    img: ASSETS + "images/places/nguom-ngao.jpg",
    maps: "https://maps.app.goo.gl/cbi4wK8gWubkjGKS6"
  },

  {
    id: "khuoi-ky",
    name: "Khuoi Ky Stone Village",
    localName: "Làng đá Khuổi Ky",
    category: "culture",
    tier: "province",
    lat: 22.85485,
    lng: 106.70091,
    minZoom: 11,
    desc: "400-year-old Tày village of stone stilt houses between Ban Gioc and Nguom Ngao. Several families run homestays.",
    img: ASSETS + "images/places/stone-village.jpg",
    maps: "https://maps.app.goo.gl/fwJ37eFqSRSDfErf6"
  },

  {
    id: "phat-tich-pagoda",
    name: "Phat Tich Truc Lam Pagoda",
    localName: "Chùa Phật Tích Trúc Lâm Bản Giốc",
    category: "culture",
    tier: "province",
    lat: 22.85085,
    lng: 106.72313,
    minZoom: 11,
    desc: "Hillside pagoda with the classic panorama over Ban Gioc falls. Free entry, short climb, best light in the afternoon.",
    img: ASSETS + "images/places/phat-tich.jpg",
    maps: "https://maps.app.goo.gl/aqcQssDgcGJYH9HQ6"
  },

  {
    id: "quay-son-swim",
    name: "Quay Son River Swim Spot",
    localName: "Tắm sông Quây Sơn",
    category: "sights",
    tier: "province",
    lat: 22.856,
    lng: 106.708,
    minZoom: 12,
    approx: true,
    desc: "Jade-green swimming hole in the Quay Son river near Khuoi Ky village. Summer only — the water is glacial-clear and cold.",
    distance: "83 km east · 1.5 km from Ban Gioc",
    img: ASSETS + "images/places/swimming-quay-son-river.jpg"
  },

  {
    id: "pi-pha",
    name: "Pi Pha Viewpoint",
    localName: "Điểm ngắm cảnh Pì Phà",
    category: "sights",
    tier: "province",
    lat: 22.884,
    lng: 106.583,
    minZoom: 10,
    approx: true,
    desc: "Ridge-top panorama over the Phong Nam valley — rice paddies, jade river bends and karst towers. Best light at sunrise.",
    distance: "95 km east · 30 min beyond Ban Gioc",
    img: ASSETS + "images/places/pi-pha-viewpoint.jpg"
  },

  {
    id: "pac-nga-bridge",
    name: "Pac Nga Hanging Bridge",
    localName: "Cầu treo Pác Ngà",
    category: "sights",
    tier: "province",
    lat: 22.899,
    lng: 106.562,
    minZoom: 11,
    approx: true,
    desc: "Wooden hanging bridge swaying over the Quay Son river, deep in the Phong Nam rice-paddy valley. A photographers' favourite.",
    distance: "92.5 km east",
    img: ASSETS + "images/places/pac-nga-hanging-bridge.jpg"
  },

  {
    id: "ba-quang",
    priority: 1,
    name: "Ba Quang Hills",
    localName: "Đồi cỏ cháy Vinh Quý (Bả Quang)",
    category: "sights",
    tier: "province",
    lat: 22.67261,
    lng: 106.6175,
    photoPin: true,
    zPriority: 600,
    desc: "Bare golden hills with 360° panoramas — the famous 'burnt grass' look peaks in the dry season. Locals camp here for sunset.",
    distance: "68.2 km east · ~1 h 45 min",
    img: ASSETS + "images/places/ba-quang.jpg",
    maps: "https://maps.app.goo.gl/u34WeRJym6qau61BA"
  },

  {
    id: "thoongot",
    name: "Thoong Got Panorama",
    localName: "Thoong Gót",
    category: "sights",
    tier: "province",
    lat: 22.83006,
    lng: 106.61694,
    minZoom: 11,
    desc: "Roadside panorama over a horseshoe bend of the Quay Son river — an easy photo stop on the way to Ban Gioc.",
    distance: "70.7 km east · on the Ban Gioc road",
    img: ASSETS + "images/places/thoongot.jpg",
    maps: "https://maps.app.goo.gl/NMmEz9uQupietzm36"
  },

  {
    id: "blacksmith",
    name: "Pac Rang Forging Village",
    localName: "Làng rèn Pác Rằng, Phúc Sen",
    category: "culture",
    tier: "province",
    lat: 22.68546,
    lng: 106.42057,
    minZoom: 10,
    desc: "Nung An blacksmiths have hand-forged knives over coal fires here for 300+ years. Watch the sparks fly, then buy a blade.",
    distance: "32.3 km east · ~45 min",
    img: ASSETS + "images/places/blacksmith.jpg",
    maps: "https://maps.app.goo.gl/i59gAWAHYFwmf3TMA"
  },

  {
    id: "phia-thap",
    name: "Phia Thap Incense Village",
    localName: "Làng hương Phia Thắp",
    category: "culture",
    tier: "province",
    lat: 22.696,
    lng: 106.398,
    minZoom: 11,
    approx: true,
    desc: "Nùng An village where every yard dries fans of pink incense sticks made from wild bee-tree bark. Next door to the forging village.",
    distance: "35 km east · ~50 min",
    img: ASSETS + "images/places/phia-thap-village-incense.jpg"
  },

  {
    id: "dia-tren",
    name: "Dia Tren Paper Village",
    localName: "Làng giấy bản Dìa Trên",
    category: "culture",
    tier: "province",
    lat: 22.714,
    lng: 106.41,
    minZoom: 12,
    approx: true,
    desc: "Village still hand-making 'giay ban' bamboo paper the ancient way — soaking, pulping and sun-drying sheets in the yard.",
    distance: "28.5 km east",
    img: ASSETS + "images/places/dia-tren-village-paper.jpg"
  },

  {
    id: "nung-indigo",
    name: "Nung Indigo Cafe & Homestay",
    localName: "Nùng INDIGO Cafe & Homestay",
    category: "stay",
    img: ASSETS + "images/places/nung-indigo.jpg",
    tier: "province",
    lat: 22.6894384,
    lng: 106.3871184,
    minZoom: 11,
    desc: "Cafe-homestay run by the Nung An community — watch indigo cloth being dyed and stitched by hand, then browse handmade textile souvenirs over coffee.",
    distance: "~30 km east · near the forging & incense villages",
    maps: "https://maps.app.goo.gl/zepousmdRpjJpCeRA",
    mapsName: "Nùng INDIGO Cafe & Homestay"
  },

  {
    id: "thang-hen",
    name: "Thang Hen Lake",
    localName: "Hồ Thang Hen",
    category: "sights",
    tier: "province",
    lat: 22.759,
    lng: 106.2972,
    minZoom: 10,
    labelAbove: true,
    desc: "A chain of 36 karst lakes that rise and fall with underground rivers. Kayak rental and stilt-house lodges on the shore.",
    distance: "28.2 km northeast · ~45 min",
    img: ASSETS + "images/places/thang-hen.jpg",
    maps: "https://maps.app.goo.gl/Vw7fLEnYAZUcYExaA"
  },

  {
    id: "mat-than",
    priority: 1,
    name: "Angel Eye Mountain",
    localName: "Núi Mắt Thần",
    category: "sights",
    tier: "province",
    lat: 22.77421,
    lng: 106.31766,
    photoPin: true,
    zPriority: 800,
    labelAbove: true,
    desc: "A karst peak pierced by a giant circular 'eye', ringed by meadows and grazing horses. Cao Bang's favourite picnic and camping spot.",
    distance: "26.5 km northeast · short walk from the road",
    img: ASSETS + "images/places/eye-mountain.jpg",
    maps: "https://maps.app.goo.gl/RHmtCPCC7nrTbKcm7"
  },

  {
    id: "pac-bo",
    priority: 1,
    name: "Pac Bo Cave",
    localName: "Khu di tích Pác Bó",
    category: "culture",
    tier: "province",
    lat: 22.98708,
    lng: 106.0504,
    photoPin: true,
    zPriority: 500,
    featured: true,
    desc: "The border cave where Ho Chi Minh returned to Vietnam in 1941, beside the impossibly jade Lenin Stream. Easy boardwalk trails.",
    distance: "50.4 km north · ~1 h 15 min",
    img: ASSETS + "images/places/pac-bo.jpg",
    maps: "https://maps.app.goo.gl/CbrfWz1GHAASczcm9",
    mapsName: "Hang Cốc Bó"
  },

  {
    id: "kim-dong",
    name: "Kim Dong Memorial",
    localName: "Khu di tích Kim Đồng",
    category: "culture",
    tier: "province",
    lat: 22.93281,
    lng: 106.04641,
    minZoom: 10,
    desc: "Memorial of Kim Dong, the 14-year-old revolutionary messenger — a peaceful, shaded stop on the road to Pac Bo.",
    distance: "44.6 km north · on the Pac Bo road",
    img: ASSETS + "images/places/kim-dong.jpg",
    maps: "https://maps.app.goo.gl/yzf3SmD1Ch8d6ohSA"
  },

  {
    id: "lung-luong",
    name: "Lung Luong Stone Flowers",
    localName: "Cúc đá Lũng Luông",
    category: "sights",
    tier: "province",
    lat: 22.92765,
    lng: 106.06731,
    minZoom: 11,
    desc: "A hillside scattered with rare daisy-shaped 'stone flower' fossils above a quiet valley — combine with Pac Bo.",
    distance: "46.4 km north",
    img: ASSETS + "images/places/lung-luong.jpg",
    maps: "https://maps.app.goo.gl/H4yuti4Z2HXgUiqh6"
  },

  {
    id: "ban-giang",
    name: "Ban Giang Waterfall",
    localName: "Thác Bản Giàng",
    category: "sights",
    img: ASSETS + "images/places/ban-giang.jpg",
    tier: "province",
    lat: 22.91214,
    lng: 106.05841,
    minZoom: 11,
    approx: true,
    desc: "A quieter, less-visited waterfall a short ride from Pac Bo — cascading pools good for a cool dip away from the crowds.",
    distance: "~50 km north · near Pac Bo",
    maps: "https://maps.app.goo.gl/Bpfe8KCGCXymrptbA",
    mapsName: "Thác Bản Giàng"
  },

  {
    id: "phia-oac",
    name: "Phia Oac Peak",
    localName: "Đỉnh Phia Oắc 1931 m",
    category: "sights",
    tier: "province",
    lat: 22.61527,
    lng: 105.86343,
    desc: "1,931 m cloud-forest summit famous for winter frost and abandoned French villas. Part of the UNESCO Global Geopark.",
    distance: "63.4 km southwest · ~2 h",
    img: ASSETS + "images/places/phia-oac.jpg",
    maps: "https://maps.app.goo.gl/psHFoHu77Bmb4vkv9"
  },

  {
    id: "kolia",
    name: "Kolia Tea Farm & Lodge",
    localName: "Đồn điền chè Kolia, Phia Đén",
    category: "stay",
    tier: "province",
    lat: 22.55935,
    lng: 105.86123,
    minZoom: 10,
    desc: "Organic tea terraces at 1,200 m with rooms, farm-to-table meals and sunrise cloud-hunting on Phia Oac's slopes.",
    distance: "69.7 km southwest",
    img: ASSETS + "images/places/kolia-tea.jpg",
    maps: "https://maps.app.goo.gl/mk9rtcNMpH4z66yUA"
  },

  {
    id: "bamboo-forest",
    name: "Nguyen Binh Bamboo Forest",
    localName: "Rừng trúc Nguyên Bình",
    category: "sights",
    tier: "province",
    lat: 22.68268,
    lng: 105.84408,
    minZoom: 10,
    desc: "A boardwalk winds through a silent forest of giant bamboo — cool, green and other-worldly, best in morning mist.",
    distance: "68.1 km southwest · ~2 h",
    img: ASSETS + "images/places/bamboo.jpg",
    maps: "https://maps.app.goo.gl/38ibUAVzZFtbFi4dA"
  },

  {
    id: "khau-coc-cha",
    priority: 1,
    name: "Khau Coc Cha Pass",
    localName: "Đèo Khau Cốc Chà (15 tầng)",
    category: "sights",
    tier: "province",
    lat: 22.92637,
    lng: 105.7832,
    photoPin: true,
    zPriority: 400,
    desc: "Vietnam's wildest road: 15 stacked switchbacks climbing out of the Bao Lac valley. The photo viewpoint is a short hike above the road.",
    distance: "87.9 km west · ~2 h 45 min",
    img: ASSETS + "images/places/khau-coc-cha.jpg",
    maps: "https://maps.app.goo.gl/2aMpTG8VB2NJbous5"
  },

  {
    id: "sens-homestay",
    name: "Sen's Homestay",
    localName: "Sen's Homestay – Tours & Motorbike Rental",
    category: "stay",
    tier: "city",
    lat: 22.67379,
    lng: 106.25561,
    minZoom: 12,
    zPriority: 300,
    featured: true,
    desc: "Cosy rooms with big-screen projectors, homemade breakfast & coffee, motorbike rental and honest local tips — book hourly or overnight.",
    img: ASSETS + "images/homestay.jpg",
    maps: "https://maps.app.goo.gl/PQXqThDmfQtj135CA",
    mapsName: "Sen’s Homestay – Tours & Motobike Rental",
    bookUrl: "https://sen-nghi-gio-production.up.railway.app/book",
    phone: "0822946888"
  },

  {
    id: "hoa-an-hotel",
    name: "Hoa An Hotel",
    localName: "Hoà An Hotel",
    category: "stay",
    tier: "city",
    lat: 22.68404,
    lng: 106.21849,
    minZoom: 13,
    desc: "Comfortable mid-range hotel on the northwest edge of town, handy for the bus station and the road out to Pac Bo.",
    maps: "https://maps.app.goo.gl/VoxTwvR8qB1AorL37",
    mapsName: "Hoà An Hotel (Cao Bằng)"
  },

  {
    id: "motorbike-rental",
    name: "Motorbike Rental at Sen's",
    localName: "Thuê xe máy — Sen's Homestay",
    category: "services",
    tier: "city",
    lat: 22.6739,
    lng: 106.256,
    minZoom: 13,
    desc: "Well-kept semi-autos, scooters and manuals for the Ban Gioc loop — helmets, rain gear and route advice included.",
    price: "180–550k₫/day",
    img: ASSETS + "images/bikes/bike-rental-hero.jpg",
    maps: "https://maps.app.goo.gl/PQXqThDmfQtj135CA",
    mapsName: "Sen’s Homestay – Tours & Motobike Rental",
    guideUrl: ASSETS + "motorbike.html",
    guideLabel: "Bikes & prices",
    phone: "0822946888"
  },

  {
    id: "ban-gioc-bus-stop",
    name: "Ban Gioc Bus Stop (at Sen's)",
    localName: "Xe buýt Hòa Bình đi Bản Giốc",
    category: "transport",
    tier: "city",
    lat: 22.6736,
    lng: 106.2552,
    minZoom: 13,
    desc: "The Hoa Binh public bus to Ban Gioc passes right in front of Sen's — flag it down from the pavement and pay on board. Best departures 7:25–8:00 am; last bus back from the falls at 5 pm.",
    img: ASSETS + "bus/bus-hero.jpg",
    guideUrl: ASSETS + "bus/ban-gioc-bus-guide.html",
    guideLabel: "Bus guide"
  },

  {
    id: "pho-chua-quyen",
    name: "Pho Chua Quyen",
    localName: "Phở Chua Gia Truyền Quyên",
    category: "food",
    tier: "city",
    lat: 22.66593,
    lng: 106.25623,
    minZoom: 13,
    pick: true,
    desc: "Cold rice-noodle salad with roast duck, crispy fried potato and a tangy sweet-sour dressing — a Cao Bang original you won't find elsewhere.",
    price: "from 35,000₫ · breakfast–lunch",
    img: ASSETS + "images/Food/pho-chua/1.jpg",
    maps: "https://maps.app.goo.gl/Bv9JXW63mBWqjyrBA",
    mapsName: "Phở Chua Gia Truyền Quyên",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "banh-cuon-phong-uyen",
    name: "Banh Cuon Phong Uyen",
    localName: "Bánh cuốn Phong Uyên (Phố Cũ)",
    category: "food",
    tier: "city",
    lat: 22.66418,
    lng: 106.25696,
    minZoom: 13,
    pick: true,
    desc: "Silky steamed rice rolls served Cao Bang-style: in hot pork-bone broth with a poached egg, not fish sauce.",
    price: "~35,000₫ · all day",
    img: ASSETS + "images/Food/banh-cuon/1.jpg",
    maps: "https://maps.app.goo.gl/MeTDqWwXvL1vTvSVA",
    mapsName: "Bánh cuốn Phố Cũ(bánh cuốn phong uyên)",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "pho-vit-dung-thinh",
    name: "Pho Vit Dung Thinh",
    localName: "Phở Vịt Dung Thịnh",
    category: "food",
    tier: "city",
    lat: 22.66423,
    lng: 106.26515,
    minZoom: 13,
    desc: "Roast-duck pho — duck marinated with mac mat forest leaves and roasted till the skin shatters. This branch roasts fresh in the evening.",
    price: "from 40,000₫ · dinner",
    img: ASSETS + "images/Food/pho-vit-quay/1.jpg",
    maps: "https://maps.app.goo.gl/uaWm8fFdpRFge5zb6",
    mapsName: "Phở Vịt Dung Thịnh - Đặc Sản Cao Bằng - Cao Bang Specialties",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "vit-quay-o-thoa",
    name: "Vit Quay Gion O Thoa",
    localName: "Vịt Quay Giòn O Thoa",
    category: "food",
    tier: "city",
    lat: 22.66205,
    lng: 106.25992,
    minZoom: 13,
    pick: true,
    desc: "Crispy roast duck and pork belly over fragrant rice or noodles — plus rare Hong Kong-style char siu, genuinely excellent.",
    price: "from 40,000₫ · lunch & dinner",
    img: ASSETS + "images/Food/vit-quay-gion/1.jpg",
    maps: "https://maps.app.goo.gl/rfJYvmaUDfKJ9LTy8",
    mapsName: "VỊT QUAY GIÒN O THOA",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "ap-chao-co-hac",
    name: "Ap Chao Co Hac",
    localName: "Áp chao vịt rán cô Hạc",
    category: "food",
    tier: "city",
    lat: 22.66996,
    lng: 106.25417,
    minZoom: 14,
    desc: "Deep-fried duck dumplings with a shattering crust — the street snack Cao Bang is famous for on cool evenings.",
    price: "7,000₫/piece · evening",
    img: ASSETS + "images/Food/ap-chao/1.jpg",
    maps: "https://maps.app.goo.gl/gbaghegtzEAn1Aah6",
    mapsName: "Áp chao vịt rán cô Hạc",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "nem-nuong-co-lo",
    name: "Nem Nuong Co Lo",
    localName: "Nem nướng Cô Lô",
    category: "food",
    tier: "city",
    lat: 22.6656,
    lng: 106.26172,
    minZoom: 14,
    desc: "Charcoal-grilled pork rolls you wrap yourself in rice paper with herbs and green mango — the warm shrimp dip is the star.",
    price: "40,000₫ · lunch & dinner",
    img: ASSETS + "images/Food/nem-nuong/1.jpg",
    maps: "https://maps.app.goo.gl/qvcCdVDPVsR4epGe9",
    mapsName: "Quan co lien",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "bun-cha-ha-thanh",
    name: "Bun Cha Ha Thanh",
    localName: "Bún chả Hà Thành",
    category: "food",
    tier: "city",
    lat: 22.65807,
    lng: 106.26712,
    minZoom: 14,
    desc: "Hanoi-style pork patties grilled over real charcoal, dunked in warm tangy broth with cold vermicelli and herbs.",
    price: "45,000₫ · breakfast–lunch",
    img: ASSETS + "images/Food/bun-cha/1.jpg",
    maps: "https://maps.app.goo.gl/PE3RL2QB63dm3PE29",
    mapsName: "Bún Chả Hà Thành",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "banh-mi-thu-thang",
    name: "Banh Mi Chao Thu Thang",
    localName: "Bánh mỳ chảo Thu Thắng",
    category: "food",
    tier: "city",
    lat: 22.66213,
    lng: 106.25998,
    minZoom: 14,
    desc: "A sizzling iron pan of eggs, grilled pork and rich meat sauce lands at your table — mop it all up with warm baguettes.",
    price: "from 45,000₫",
    img: ASSETS + "images/Food/banh-mi-chao/1.jpg",
    maps: "https://maps.app.goo.gl/J8HEs3XWh91UfQFp6",
    mapsName: "Bánh mỳ Thu Thắng",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "tiem-banh-trang",
    name: "Tiem Banh Trang",
    localName: "Tiệm Bánh Tráng",
    category: "food",
    tier: "city",
    lat: 22.66529,
    lng: 106.26134,
    minZoom: 15,
    veg: true,
    desc: "Grilled rice-paper 'street pizza', rice-paper salad and rolls — the perfect afternoon snack stop.",
    price: "~40,000₫ · snack",
    img: ASSETS + "images/Food/banh-trang/1.jpg",
    maps: "https://maps.app.goo.gl/Gr6YpBkR3HLWq4Mq5",
    mapsName: "Tiệm Bánh Tráng",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "pedros-pizza",
    name: "Pedro's Pizza",
    localName: "Pedro's Pizza",
    category: "food",
    tier: "city",
    lat: 22.66756,
    lng: 106.26157,
    minZoom: 13,
    veg: true,
    desc: "Hand-rolled thin-crust pizza from real Italian recipes — the town's western comfort-food hideout, with proper veggie options.",
    price: "from 150,000₫",
    img: ASSETS + "images/Food/pedros-pizza/1.jpg",
    maps: "https://maps.app.goo.gl/bEwd77hNN9HogEDU8",
    mapsName: "Pedro's Pizza",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "lela-vegan",
    name: "Lela Vegan Bistro",
    localName: "Lela Vegan",
    category: "food",
    tier: "city",
    lat: 22.6635,
    lng: 106.25954,
    minZoom: 13,
    pick: true,
    veg: true,
    desc: "The city's beloved vegan bistro — creative plant-based Vietnamese in a bright, modern room. Rare for northern Vietnam.",
    price: "from 40,000₫",
    img: ASSETS + "images/Food/lela-vegan/1.jpg",
    maps: "https://maps.app.goo.gl/ffGQ2KDsymptXf6x5",
    mapsName: "Lela Vegan Bistro Cao Bằng",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "duong-gio-tai",
    name: "Duong Gio Tai BBQ",
    localName: "Đồ nướng Dương Gió Tai",
    category: "food",
    tier: "city",
    lat: 22.66639,
    lng: 106.25336,
    minZoom: 14,
    pick: true,
    desc: "Chinese-spiced skewers grilled live in front of you — pick your own from the fridge and order a cold beer.",
    price: "from 50,000₫ · dinner",
    img: ASSETS + "images/Food/duong-gio-tai/1.jpg",
    maps: "https://maps.app.goo.gl/HMHDy85BgT2LGMeEA",
    mapsName: "Dương gió tai",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "handak-chicken",
    name: "Handak Korean Chicken",
    localName: "Handak Korean Chicken",
    category: "food",
    tier: "city",
    lat: 22.66334,
    lng: 106.25776,
    minZoom: 15,
    desc: "The only Korean fried chicken in town — crispy, saucy and a fun break from noodles.",
    price: "from 50,000₫",
    img: ASSETS + "images/Food/handak/1.jpg",
    maps: "https://maps.app.goo.gl/HZ4gnWVmdD6ZRikZ7",
    mapsName: "Handak korean chicken restaurant",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "tao-pho-lanh",
    name: "Tao Pho Lanh",
    localName: "Tào Phớ Lành",
    category: "food",
    tier: "city",
    lat: 22.66833,
    lng: 106.26081,
    minZoom: 15,
    veg: true,
    desc: "The creamiest tofu pudding in the city — longan, lotus seed or caramel toppings. Opens late afternoon.",
    price: "from 8,000₫ · dessert",
    img: ASSETS + "images/Food/tao-pho-lanh/1.jpg",
    maps: "https://maps.app.goo.gl/aCKapfavtxCNrim57",
    mapsName: "Tào Phớ Lành",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "che-pho",
    name: "Che Pho Dessert Bar",
    localName: "Chè Phố",
    category: "food",
    tier: "city",
    lat: 22.66384,
    lng: 106.2606,
    minZoom: 15,
    pick: true,
    veg: true,
    desc: "Thai sweet soups, avocado ice cream and fruit yogurts right on the walking street — something for everyone.",
    price: "from 20,000₫ · dessert",
    img: ASSETS + "images/Food/che-pho/1.jpg",
    maps: "https://maps.app.goo.gl/s2ab9RysFCkZ6V5X8",
    mapsName: "Chè Phố",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "fenice-caffe",
    name: "Fenice Caffè",
    localName: "Fenice Caffè – Tiệm Cafe & Bánh Ngọt",
    category: "food",
    tier: "city",
    lat: 22.66413,
    lng: 106.25944,
    minZoom: 14,
    pick: true,
    veg: true,
    desc: "Proper espresso and cappuccino with Italian desserts — home of the best tiramisu in Cao Bang.",
    price: "from 30,000₫ · café",
    img: ASSETS + "images/Food/fenice-caffe/1.jpg",
    maps: "https://maps.app.goo.gl/z8JzJAkx1Ur937ZY8",
    mapsName: "Fenice Caffè - Tiệm Cafe & Bánh Ngọt",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "with-us-coffee",
    name: "With Us Coffee",
    localName: "With Us Coffee",
    category: "food",
    tier: "city",
    lat: 22.66247,
    lng: 106.25896,
    minZoom: 14,
    pick: true,
    desc: "Premium matcha and good coffee alongside crispy local-style banh mi — a quick, reliable breakfast combo.",
    price: "from 20,000₫ · café",
    img: ASSETS + "images/Food/with-us-coffee/1.jpg",
    maps: "https://maps.app.goo.gl/Gv7oB79cdrhw2vGU8",
    mapsName: "With Us Coffee",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  {
    id: "yen-me-nau",
    name: "Yen — Ngon Nhu Me Nau",
    localName: "Yên - Ngon như mẹ nấu",
    category: "food",
    tier: "city",
    lat: 22.66538,
    lng: 106.25356,
    minZoom: 14,
    pick: true,
    desc: "Home-style Vietnamese family trays (com mam) and signature hotpots in a vintage room — the proper sit-down dinner in town.",
    price: "from 150,000₫ · lunch & dinner",
    img: ASSETS + "images/Food/yen-com-me-nau/1.jpg",
    maps: "https://maps.app.goo.gl/Hq7DbK77aLzs8pvUA",
    mapsName: "Yên - Ngon như mẹ nấu",
    guideUrl: ASSETS + "food.html",
    guideLabel: "Food guide"
  },

  /* ---------------------------------------------------------------------
     PRACTICAL SPOTS — added from Sen's list (USER GỬI CHO AI/Địa điểm.txt).
     Supermarkets, ATM/money exchange, pharmacies, markets, the night
     walking street, plus a few more local eateries & cafés. City tier,
     coordinates read from each place's Google Maps pin.
     --------------------------------------------------------------------- */

  {
    id: "nguyen-luong-market",
    name: "Nguyen Luong Supermarket",
    localName: "Siêu Thị Nguyễn Lương",
    category: "shopping",
    tier: "city",
    lat: 22.6839092,
    lng: 106.2179605,
    minZoom: 14,
    desc: "Handy grocery on the Đề Thám side of town — snacks, drinks and daily basics before you hit the road.",
    maps: "https://maps.app.goo.gl/mcy5KXdNvWBo2Jj36",
    mapsName: "Siêu Thị Nguyễn Lương"
  },

  {
    id: "vietinbank-atm-de-tham",
    name: "VietinBank ATM",
    localName: "ATM VietinBank",
    category: "services",
    tier: "city",
    lat: 22.6845542,
    lng: 106.219543,
    minZoom: 14,
    desc: "Reliable ATM near Đề Thám street for cash withdrawals.",
    maps: "https://maps.app.goo.gl/JRFf8Pok38aBpzBJ8",
    mapsName: "VietinBank"
  },

  {
    id: "long-chau-pharmacy-de-tham",
    name: "Long Chau Pharmacy",
    localName: "Nhà Thuốc FPT Long Châu",
    category: "health",
    tier: "city",
    lat: 22.684094,
    lng: 106.2211574,
    minZoom: 14,
    desc: "Trusted pharmacy chain — medicines, first-aid and travel basics.",
    maps: "https://maps.app.goo.gl/FdfCfDv8P8e3iabTA",
    mapsName: "Nhà Thuốc FPT Long Châu"
  },

  {
    id: "com-ngon-vi-nha-lam",
    name: "Local Rice Eatery",
    localName: "Cơm Ngon Vị Nhà Làm",
    category: "food",
    tier: "city",
    lat: 22.6836519,
    lng: 106.2178027,
    minZoom: 14,
    desc: "Simple home-style rice eatery (cơm bình dân) — pick a few dishes over rice for a cheap, filling local lunch.",
    maps: "https://maps.app.goo.gl/qX7PXuetmeSSo86s6",
    mapsName: "Cơm Ngon vị nhà làm"
  },

  {
    id: "thanh-an-bakery",
    name: "Thanh An Bakery",
    localName: "Bánh Thanh An",
    category: "food",
    tier: "city",
    lat: 22.683912,
    lng: 106.220435,
    minZoom: 14,
    desc: "Local bakery for fresh bread, cakes and quick sweet bites.",
    maps: "https://maps.app.goo.gl/KM1nq8ZjtYPKHvXm8",
    mapsName: "Thanh An bakerry"
  },

  {
    id: "cao-bang-city-square",
    name: "Cao Bang City Square",
    localName: "Quảng trường TP. Cao Bằng",
    category: "culture",
    tier: "city",
    lat: 22.6793742,
    lng: 106.2216028,
    minZoom: 13,
    desc: "The city's main public square — locals gather here in the evenings; open space for a stroll.",
    maps: "https://maps.app.goo.gl/jB66tGtJnboZKyKd9",
    mapsName: "Cao Bang City Square"
  },

  {
    id: "de-tham-central-market",
    name: "De Tham Central Market",
    localName: "Chợ Trung tâm km5 (Đề Thám)",
    category: "shopping",
    tier: "city",
    lat: 22.6838946,
    lng: 106.2209829,
    minZoom: 13,
    desc: "Busy central market on Đề Thám — fresh produce, local goods and a slice of everyday Cao Bang life.",
    maps: "https://maps.app.goo.gl/Hum4rrJ7irhHuW4i7",
    mapsName: "Central Market km5"
  },

  {
    id: "winmart-de-tham",
    name: "WinMart+ De Tham",
    localName: "Siêu thị WinMart+ Đề Thám",
    category: "shopping",
    tier: "city",
    lat: 22.6841339,
    lng: 106.2200355,
    minZoom: 14,
    desc: "Modern convenience supermarket — snacks, drinks, toiletries and packaged goods.",
    maps: "https://maps.app.goo.gl/aowv4XRHMQCsKMWC7",
    mapsName: "Siêu thị Winmart+ Đề Thám"
  },

  {
    id: "bun-cha-ha-noi",
    name: "Bun Cha Ha Noi",
    localName: "Bún Chả Hà Nội",
    category: "food",
    tier: "city",
    lat: 22.6834763,
    lng: 106.2242752,
    minZoom: 14,
    desc: "Hanoi-style grilled pork with vermicelli — a solid breakfast or lunch stop.",
    price: "breakfast & lunch",
    maps: "https://maps.app.goo.gl/9qidL5Q7YAiS8LHS9",
    mapsName: "Bún Chả Hà Nội"
  },

  {
    id: "banh-cuon-mo-hoang",
    name: "Banh Cuon Mo Hoang",
    localName: "Bánh Cuốn Mơ Hoàng",
    category: "food",
    tier: "city",
    lat: 22.6826795,
    lng: 106.2183386,
    minZoom: 14,
    desc: "Local Cao Bang banh cuon — silky rice rolls served in warm bone broth, a regional specialty.",
    price: "breakfast",
    maps: "https://maps.app.goo.gl/RPj8eEoEadEcWLzV6",
    mapsName: "Bánh cuốn Mơ Hoàng"
  },

  {
    id: "quan-que-noodles",
    name: "Quan Que (Pho · Chao · Bun)",
    localName: "Quán Quế",
    category: "food",
    tier: "city",
    lat: 22.6810625,
    lng: 106.2312933,
    minZoom: 14,
    desc: "Night eatery for noodle soups, rice congee with minced meat and other warming local bowls.",
    price: "evening",
    maps: "https://maps.app.goo.gl/K3PBEovuSHpGFaej9",
    mapsName: "QUÁN QUẾ (PHỞ, CHÁO, BÚN, MIẾN)"
  },

  {
    id: "pho-nha-do-duck",
    name: "Pho Nha Do (Roast Duck Pho)",
    localName: "Phở Nhà Đổ",
    category: "food",
    img: ASSETS + "images/Food/pho-nha-do/1.jpg",
    tier: "city",
    lat: 22.679376,
    lng: 106.2181974,
    minZoom: 14,
    pick: true,
    desc: "Well-known roast-duck pho spot — crispy-skinned duck over rice noodles in a rich broth, a Cao Bang classic.",
    maps: "https://maps.app.goo.gl/GUzptY3wngc3XskN6",
    mapsName: "PHỞ NHÀ ĐỔ"
  },

  {
    id: "nga-ba-song-fish-hotpot",
    name: "Nga Ba Song Fish Hotpot",
    localName: "Nhà Hàng Ngã Ba Sông - Lẩu Thức Yến",
    category: "food",
    tier: "city",
    lat: 22.673561,
    lng: 106.2540119,
    minZoom: 14,
    desc: "Locally famous fish hotpot restaurant — great for a shared sit-down dinner by the river.",
    maps: "https://maps.app.goo.gl/mgcKLH2117cuYPVd7",
    mapsName: "Nhà Hàng Ngã Ba Sông-Lẩu Thức Yến"
  },

  {
    id: "long-chau-pharmacy-song-hien",
    name: "Long Chau Pharmacy (Song Hien)",
    localName: "Nhà Thuốc FPT Long Châu",
    category: "health",
    tier: "city",
    lat: 22.6744765,
    lng: 106.2568224,
    minZoom: 14,
    desc: "Second Long Châu pharmacy branch, handy on the Sông Hiến side of town.",
    maps: "https://maps.app.goo.gl/hW94RsiCuwA2WJKQ9",
    mapsName: "Nhà Thuốc FPT Long Châu"
  },

  {
    id: "ngoc-xuan-supermarket",
    name: "Ngoc Xuan Supermarket",
    localName: "Siêu thị Ngọc Xuân",
    category: "shopping",
    tier: "city",
    lat: 22.6743175,
    lng: 106.2571614,
    minZoom: 13,
    desc: "One of the bigger supermarkets in town — a good one-stop for groceries and supplies.",
    maps: "https://maps.app.goo.gl/F22wfoAuvzbZAtLH6",
    mapsName: "Siêu thị Ngọc Xuân"
  },

  {
    id: "lang-ben-song-cafe",
    name: "Riverside Garden Cafe",
    localName: "Làng Bên Sông",
    category: "food",
    tier: "city",
    lat: 22.6766402,
    lng: 106.2477205,
    minZoom: 14,
    desc: "Relaxed riverside garden café — a leafy spot for coffee away from the traffic.",
    maps: "https://maps.app.goo.gl/Yh6yoJSNLRwmu3gg9",
    mapsName: "Làng Bên Sông"
  },

  {
    id: "quan-an-dem-hieu-yen",
    name: "Hieu Yen Night Eatery",
    localName: "Quán Ăn Đêm Hiếu Yến",
    category: "food",
    tier: "city",
    lat: 22.684286,
    lng: 106.215768,
    minZoom: 14,
    desc: "Late-night local eatery — noodles, rice congee with minced meat, fried rice and more.",
    price: "evening & late night",
    maps: "https://maps.app.goo.gl/3v71ZMdmbKaZLGzF9",
    mapsName: "QUÁN ĂN ĐÊM HIẾU YẾN"
  },

  {
    id: "nang-cafe",
    name: "Nang Cafe",
    localName: "Nâng Café",
    category: "food",
    tier: "city",
    lat: 22.6680676,
    lng: 106.2543758,
    minZoom: 14,
    pick: true,
    desc: "Well-loved café set in traditional Tày–Nùng architecture — a characterful place for a coffee break.",
    maps: "https://maps.app.goo.gl/v32M3Q5fmwjXtubJ6",
    mapsName: "Nâng café"
  },

  {
    id: "hanwon-korean-bbq",
    name: "HanWon Korean BBQ Buffet",
    localName: "HanWon Cao Bằng",
    category: "food",
    tier: "city",
    lat: 22.6628725,
    lng: 106.2586243,
    minZoom: 14,
    desc: "All-you-can-eat Korean BBQ buffet — a fun change of pace for groups.",
    maps: "https://maps.app.goo.gl/TCwcQvHKJ56ZHNET7",
    mapsName: "HanWon Cao Bằng"
  },

  {
    id: "kim-dong-walking-street",
    name: "Kim Dong Night Walking Street",
    localName: "Phố Đi Bộ Kim Đồng",
    category: "nightlife",
    tier: "city",
    lat: 22.6640975,
    lng: 106.2605052,
    minZoom: 13,
    featured: true,
    desc: "The city's night walking street — food stalls, games and street life on Friday and Saturday evenings.",
    maps: "https://maps.app.goo.gl/TbAa2Fur4TEs2Bcj9",
    mapsName: "Phố Đi Bộ Kim Đồng"
  },

  {
    id: "kim-tin-jewelry-exchange",
    name: "Kim Tin Jewelry (Money Exchange)",
    localName: "Kim Tín Jewelry",
    category: "services",
    tier: "city",
    lat: 22.665546,
    lng: 106.2610609,
    minZoom: 14,
    desc: "Jewelry store where you can also exchange currency at a good local rate.",
    maps: "https://maps.app.goo.gl/FoU99ewXveo6eZ2Z8",
    mapsName: "Kim Tin Jewelry Group"
  },

  {
    id: "banh-my-pate-89",
    name: "Banh Mi Pate 89",
    localName: "Bánh Mỳ Pate 89",
    category: "food",
    img: ASSETS + "images/Food/banh-mi-pate-89/1.jpg",
    tier: "city",
    lat: 22.6630914,
    lng: 106.2603396,
    minZoom: 14,
    pick: true,
    desc: "Famous local traditional banh mi with pâté — a beloved quick breakfast in town.",
    maps: "https://maps.app.goo.gl/etWDEBeR8JyPt9rn6",
    mapsName: "Banh my Pate 89"
  },

  /* ---------------------------------------------------------------------
     PETROL / FUEL STATIONS — added from Sen's list. Province-wide network
     (Petrolimex + local stations); a few sit inside Cao Bang city, the rest
     mark fuel stops between districts. Category "fuel" (its own filter chip).
     Coordinates read from each place's Google Maps pin.
     --------------------------------------------------------------------- */

  {
    id: "fuel-cay-xang-can-yen-1",
    name: "⛽ Cần Yên",
    localName: "Cây xăng Cần Yên",
    category: "fuel",
    tier: "province",
    lat: 22.9092803,
    lng: 105.9136406,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/LKXLQHq6hu2GdkCfA",
    mapsName: "Cây xăng Cần Yên"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-27-2",
    name: "⛽ 27",
    localName: "Petrolimex Cửa hàng số 27",
    category: "fuel",
    tier: "province",
    lat: 22.6882057,
    lng: 106.4321942,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/zPVQQXHhoJRJxiZa8",
    mapsName: "Petrolimex Cửa hàng số 27"
  },
  {
    id: "fuel-petrolimex-cao-bang-3",
    name: "⛽ Cao Bằng",
    localName: "Petrolimex Cao Bằng",
    category: "fuel",
    tier: "city",
    lat: 22.6680624,
    lng: 106.2654265,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/MVUB7E42agJxEqmd6",
    mapsName: "Petrolimex Cao Bằng"
  },
  {
    id: "fuel-cua-hang-xang-dau-bang-ca-4",
    name: "⛽ Bằng Ca",
    localName: "Cửa hàng xăng dầu Bằng Ca",
    category: "fuel",
    tier: "province",
    lat: 22.7818661,
    lng: 106.7727207,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/idBbXqdRS6G238xbA",
    mapsName: "Cửa hàng xăng dầu Bằng Ca"
  },
  {
    id: "fuel-cua-hang-xang-dau-bach-dang-petrolimex-5",
    name: "⛽ Bạch Đằng",
    localName: "Cửa hàng xăng dầu Bạch Đằng (Petrolimex)",
    category: "fuel",
    tier: "city",
    lat: 22.6623697,
    lng: 106.1971671,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/eFerjdWXEUyxjXBX6",
    mapsName: "Cửa hàng xăng dầu Bạch Đằng (Petrolimex)"
  },
  {
    id: "fuel-cua-hang-xang-dau-ho-hong-6",
    name: "⛽ Hở Hồng",
    localName: "Cửa hàng xăng dầu Hở Hồng",
    category: "fuel",
    tier: "province",
    lat: 22.8333456,
    lng: 106.5345757,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/eS1CJ8pPASxAC9KD9",
    mapsName: "Cửa hàng xăng dầu Hở Hồng"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-24-7",
    name: "⛽ 24",
    localName: "Petrolimex Cửa hàng số 24",
    category: "fuel",
    tier: "province",
    lat: 22.709213,
    lng: 106.327065,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/nTU4Twjry6fPjqg88",
    mapsName: "Petrolimex Cửa hàng số 24"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-29-8",
    name: "⛽ 29",
    localName: "Petrolimex Cửa hàng số 29",
    category: "fuel",
    tier: "province",
    lat: 22.6935876,
    lng: 106.6821447,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/xJkuzX7nDyBD7QGFA",
    mapsName: "Petrolimex Cửa hàng số 29"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-25-9",
    name: "⛽ 25",
    localName: "Petrolimex Cửa hàng số 25",
    category: "fuel",
    tier: "province",
    lat: 22.7724869,
    lng: 106.505568,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/G4jZ2xqjHn2agKNg9",
    mapsName: "Petrolimex Cửa hàng số 25"
  },
  {
    id: "fuel-cay-xang-hoang-anh-10",
    name: "⛽ Hoàng Anh",
    localName: "Cây xăng Hoàng Anh",
    category: "fuel",
    tier: "province",
    lat: 22.8214403,
    lng: 106.6220563,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/Vt48K4RGPqZi5k4m9",
    mapsName: "Cây xăng Hoàng Anh"
  },
  {
    id: "fuel-cay-xang-trung-khanh-11",
    name: "⛽ Trùng Khánh",
    localName: "Cây xăng Trùng Khánh",
    category: "fuel",
    tier: "province",
    lat: 22.8563899,
    lng: 106.6786999,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/Eas7DWvNx4Q1MKzT7",
    mapsName: "Cây xăng Trùng Khánh"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-26-12",
    name: "⛽ 26",
    localName: "Petrolimex Cửa hàng số 26",
    category: "fuel",
    tier: "province",
    lat: 22.9303224,
    lng: 106.5407596,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/xf6vvs8fUKWxHqoc6",
    mapsName: "Petrolimex Cửa hàng số 26"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-08-13",
    name: "⛽ 8",
    localName: "Petrolimex Cửa hàng số 08",
    category: "fuel",
    tier: "province",
    lat: 22.8286624,
    lng: 106.3241586,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/RRP3BxFCUwFUVcwt8",
    mapsName: "Petrolimex Cửa hàng số 08"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-28-14",
    name: "⛽ 28",
    localName: "Petrolimex Cửa hàng số 28",
    category: "fuel",
    tier: "province",
    lat: 22.8052021,
    lng: 106.3315601,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/neW74HPcf4qZHnFx8",
    mapsName: "Petrolimex Cửa hàng số 28"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-09-15",
    name: "⛽ 9",
    localName: "Petrolimex Cửa hàng số 09",
    category: "fuel",
    tier: "province",
    lat: 22.734381,
    lng: 106.1570601,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/zWDZVTjSaZ1Z3Qhx9",
    mapsName: "Petrolimex Cửa hàng số 09"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-21-16",
    name: "⛽ 21",
    localName: "Petrolimex Cửa hàng số 21",
    category: "fuel",
    tier: "province",
    lat: 22.8283341,
    lng: 106.1371233,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/ZLr5qNE4CzCkjZVJ7",
    mapsName: "Petrolimex Cửa hàng số 21"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-17-17",
    name: "⛽ 17",
    localName: "Petrolimex Cửa hàng số 17",
    category: "fuel",
    tier: "province",
    lat: 22.8894915,
    lng: 106.0894829,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/fqKFu6tGRvGCdSuW7",
    mapsName: "Petrolimex Cửa hàng số 17"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-30-18",
    name: "⛽ 30",
    localName: "Petrolimex Cửa hàng số 30",
    category: "fuel",
    tier: "city",
    lat: 22.681159,
    lng: 106.2595754,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/8XtgRJQrcNkoueTG8",
    mapsName: "Petrolimex Cửa hàng số 30"
  },
  {
    id: "fuel-cua-hang-xang-dau-so-3-cao-bang-19",
    name: "⛽ 3",
    localName: "Cửa hàng xăng dầu số 3 Cao Bằng",
    category: "fuel",
    tier: "city",
    lat: 22.6728987,
    lng: 106.2466795,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/mBidArThJiXv4D5A9",
    mapsName: "Cửa hàng xăng dầu số 3 Cao Bằng"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-12-20",
    name: "⛽ 12",
    localName: "Petrolimex Cửa hàng số 12",
    category: "fuel",
    tier: "city",
    lat: 22.6287254,
    lng: 106.1851742,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/9evnHPgos91AjrHK9",
    mapsName: "Petrolimex Cửa hàng số 12"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-18-21",
    name: "⛽ 18",
    localName: "Petrolimex Cửa hàng số 18",
    category: "fuel",
    tier: "province",
    lat: 22.7735994,
    lng: 105.9835532,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/UENBHNuCuWJ2LPdZ8",
    mapsName: "Petrolimex Cửa hàng số 18"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-10-22",
    name: "⛽ 10",
    localName: "Petrolimex Cửa hàng số 10",
    category: "fuel",
    tier: "province",
    lat: 22.9420416,
    lng: 105.6741609,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/uw1Dvzms2FzrgxEu9",
    mapsName: "Petrolimex Cửa hàng số 10"
  },
  {
    id: "fuel-petrolimex-cua-hang-so-32-23",
    name: "⛽ 32",
    localName: "Petrolimex Cửa hàng số 32",
    category: "fuel",
    tier: "province",
    lat: 22.944823,
    lng: 105.708558,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/e4vXCuRQ9QWPr1e47",
    mapsName: "Petrolimex Cửa hàng số 32"
  },

  /* ---------------------------------------------------------------------
     MORE ADDITIONS — Tham Kham waterfall (with a homestay right beside it,
     east of the city near Quang Uyen) and one extra petrol stop by KM5.
     --------------------------------------------------------------------- */

  {
    id: "thac-thang-kham",
    name: "Tham Kham Waterfall & Homestay",
    localName: "Thác & Homestay Thàng Khám",
    category: "sights",
    img: ASSETS + "images/places/thac-thang-kham.jpg",
    tier: "province",
    lat: 22.6771433,
    lng: 106.5971808,
    minZoom: 10,
    desc: "A quiet local waterfall east of the city near Quang Uyen — a refreshing off-the-beaten-path stop, with a homestay right beside it if you want to stay the night.",
    maps: "https://maps.app.goo.gl/nN8sAU4icCjuvCwX6",
    mapsName: "Thác Thàng Khám"
  },

  {
    id: "fuel-km5",
    name: "⛽ KM5",
    localName: "Cây xăng KM5",
    category: "fuel",
    tier: "city",
    lat: 22.6837905,
    lng: 106.2233431,
    minZoom: 11,
    desc: "Petrol / fuel station by KM5 — handy top-up right in town.",
    maps: "https://maps.app.goo.gl/mSro58T3Kh17gUTU7",
    mapsName: "Garage Ô Tô Thái Tuấn"
  },

  /* ---------------------------------------------------------------------
     MORE ADDITIONS (2) — western-district petrol stations (Nguyen Binh /
     Bao Lac side) + Nam Thoong stream tourist area.
     --------------------------------------------------------------------- */

  {
    id: "fuel-thuan-huong",
    name: "⛽ Thuận Hương",
    localName: "Cây Xăng Dầu Thuận Hương",
    category: "fuel",
    tier: "province",
    lat: 22.564631,
    lng: 105.8692311,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/M5aSQyokexkp85ox7",
    mapsName: "Cây Xăng Dầu Thuận Hương"
  },

  {
    id: "fuel-petrolimex-so-20",
    name: "⛽ 20",
    localName: "Cửa hàng Xăng dầu Petrolimex Số 20",
    category: "fuel",
    tier: "province",
    lat: 22.6467747,
    lng: 105.8978051,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/kncJjUWZMLoQFv4v6",
    mapsName: "Cửa hàng Xăng dầu Petrolimex Số 20"
  },

  {
    id: "fuel-so-2-nguyen-binh",
    name: "⛽ 2 Nguyên Bình",
    localName: "Cửa Hàng Xăng Dầu Số 2 Nguyên Bình",
    category: "fuel",
    tier: "province",
    lat: 22.6532365,
    lng: 105.9517144,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/KrbUe31ky5YzRwSV8",
    mapsName: "Cửa Hàng Xăng Dầu Số 2 Nguyên Bình"
  },

  {
    id: "fuel-petrolimex-so-11",
    name: "⛽ 11",
    localName: "Cửa hàng Xăng dầu Petrolimex Số 11",
    category: "fuel",
    tier: "province",
    lat: 22.6530059,
    lng: 105.9792297,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/7pNPRLbZt2pNHqRm6",
    mapsName: "Cửa hàng Xăng dầu Petrolimex Số 11"
  },

  {
    id: "fuel-na-bao",
    name: "⛽ Nà Bao",
    localName: "Cửa hàng xăng dầu Nà Bao",
    category: "fuel",
    tier: "province",
    lat: 22.6706126,
    lng: 106.0849132,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/NUHYDCA3ACnEAw5N6",
    mapsName: "Cửa hàng xăng dầu Nà Bao"
  },

  {
    id: "nam-thoong-stream",
    name: "Nam Thoong Stream",
    localName: "Khu du lịch Suối Nặm Thoong",
    category: "sights",
    img: ASSETS + "images/places/nam-thoong.jpg",
    tier: "province",
    lat: 22.7770149,
    lng: 106.1221351,
    minZoom: 10,
    desc: "A stream-side tourist area north of the city — a cool, green spot to stop and relax on the way through.",
    maps: "https://maps.app.goo.gl/qxNiHnZy9osWCHCW8",
    mapsName: "Khu du lịch Suối Nặm Thoong"
  },

  /* ---------------------------------------------------------------------
     MORE ADDITIONS (3) — Ba Be Lake (Bac Kan province, just southwest of
     Cao Bang; a natural extension of the trip) + one western petrol stop.
     --------------------------------------------------------------------- */

  {
    id: "ba-be-lake",
    priority: 1,
    name: "Ba Be Lake",
    localName: "Hồ Ba Bể",
    category: "sights",
    img: ASSETS + "images/places/ba-be-lake.jpg",
    tier: "province",
    lat: 22.4119661,
    lng: 105.6133961,
    minZoom: 8,
    featured: true,
    desc: "Vietnam's largest natural mountain lake, in neighbouring Bac Kan — emerald water ringed by karst forest. A popular add-on to a Cao Bang loop, best by boat.",
    distance: "~130 km southwest · pairs with a Cao Bang trip",
    maps: "https://maps.app.goo.gl/ySnbB8DqyZTXNCoKA",
    mapsName: "Hồ Ba Bể"
  },

  {
    id: "fuel-viet-khanh-2",
    name: "⛽ Việt Khanh 2",
    localName: "Cây Xăng Việt Khanh 2",
    category: "fuel",
    tier: "province",
    lat: 22.7785199,
    lng: 105.7445914,
    minZoom: 11,
    desc: "Petrol / fuel station — handy to top up before longer rides between towns.",
    maps: "https://maps.app.goo.gl/PwU58SPQjZKNsPNQ9",
    mapsName: "Cây Xăng Việt Khanh 2"
  },

  /* ---------------------------------------------------------------------
     MA PHUC PASS — a scenic mountain pass on QL3 east of the city, on the
     way to Trung Khanh / Ban Gioc. A classic photo stop.
     --------------------------------------------------------------------- */

  {
    id: "ma-phuc-pass",
    name: "Ma Phuc Pass",
    localName: "Đèo Mã Phục",
    category: "sights",
    tier: "province",
    img: ASSETS + "images/places/deo-ma-phuc.jpg",
    lat: 22.7278271,
    lng: 106.3368496,
    minZoom: 10,
    desc: "A dramatic switchback pass on QL3 east of the city, framed by karst peaks — the gateway you cross on the way to Trung Khanh and Ban Gioc.",
    distance: "~22 km east · on the way to Ban Gioc",
    maps: "https://maps.app.goo.gl/zXm84hic7FxvsLco7",
    mapsName: "Đèo Mã Phục"
  },

  {
    id: "ma-phuc-checkin",
    name: "Ma Phuc Viewpoint",
    localName: "Điểm check-in Đèo Mã Phục",
    category: "sights",
    tier: "province",
    img: ASSETS + "images/places/ma-phuc-checkin.jpg",
    lat: 22.7155035,
    lng: 106.329728,
    minZoom: 11,
    desc: "The popular photo pull-out on Ma Phuc Pass — sweeping views over the terraced valleys and limestone ridges.",
    maps: "https://maps.app.goo.gl/MYqEnRbKLa1bdkyU7",
    mapsName: "Điểm check-in Đèo Mã Phục"
  },
];

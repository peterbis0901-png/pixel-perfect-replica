type L = { vi: string; en: string };
const l = (vi: string, en: string): L => ({ vi, en });

export const nav = [
  { id: "overview", label: l("Tổng quan", "Overview") },
  { id: "itinerary", label: l("Lịch trình", "Itinerary") },
  { id: "pricing", label: l("Bảng giá", "Pricing") },
  { id: "video", label: l("Video", "Video") },
  { id: "policies", label: l("Chính sách", "Policies") },
  { id: "faq", label: l("Hỏi đáp", "FAQ") },
  { id: "contact", label: l("Liên hệ", "Contact") },
];

export const hero = {
  eyebrow: l("Tour di sản miền Bắc", "Northern Heritage Tour"),
  title: l("Hành trình di sản", "Heritage Journey"),
  route: "Hà Nội – Ninh Bình – Hạ Long",
  slogan: l(
    "Bốn ngày chạm vào nghìn năm văn hiến, non nước hữu tình và kỳ quan thế giới.",
    "Four days through a thousand years of culture, karst landscapes and a world wonder.",
  ),
  badges: [
    { k: l("Thời gian", "Duration"), v: l("4 ngày 3 đêm", "4 days 3 nights") },
    { k: l("Hành trình", "Route"), v: l("Hà Nội · Ninh Bình · Hạ Long", "Hanoi · Ninh Binh · Ha Long") },
    { k: l("Phương tiện", "Transport"), v: l("Xe Limousine + Du thuyền", "Limousine coach + Cruise") },
  ],
  book: l("Đặt tour ngay", "Book now"),
  view: l("Xem lịch trình", "View itinerary"),
};

export const overview = {
  title: l("Tổng quan hành trình", "Tour overview"),
  body: l(
    "Khởi hành từ thủ đô ngàn năm Hà Nội, bạn sẽ đến với cố đô Hoa Lư và quần thể danh thắng Tràng An – di sản kép UNESCO, rồi nghỉ đêm trên du thuyền giữa vịnh Hạ Long. Hành trình được thiết kế nhịp nhàng, đủ thời gian khám phá, thưởng thức ẩm thực và nghỉ ngơi.",
    "Starting in thousand-year-old Hanoi, you travel to the ancient capital Hoa Lu and the Trang An landscape complex – a UNESCO mixed heritage site – then spend a night aboard a cruise in Ha Long Bay. The pace is balanced, with time to explore, taste and rest.",
  ),
  hlTitle: l("Điểm nổi bật & giá trị trải nghiệm", "Highlights & experiential value"),
  highlights: [
    { tag: l("Văn hoá", "Culture"), t: l("Phố cổ & Hồ Gươm", "Old Quarter & Hoan Kiem"), d: l("Dạo 36 phố phường, đền Ngọc Sơn và văn hoá vỉa hè Hà Nội.", "Stroll the 36 guild streets, Ngoc Son temple and Hanoi street life.") },
    { tag: l("Cảnh quan", "Scenic"), t: l("Đi thuyền Tràng An", "Trang An boat ride"), d: l("Xuyên hang động đá vôi giữa ruộng lúa và núi non.", "Row through limestone caves between rice fields and peaks.") },
    { tag: l("Tâm linh", "Spiritual"), t: l("Chùa Bái Đính", "Bai Dinh Pagoda"), d: l("Quần thể chùa lớn bậc nhất Đông Nam Á.", "One of Southeast Asia's largest pagoda complexes.") },
    { tag: l("Kỳ quan", "Wonder"), t: l("Đêm trên vịnh Hạ Long", "A night on Ha Long Bay"), d: l("Ngắm hoàng hôn, chèo kayak, câu mực đêm.", "Sunset, kayaking and night squid fishing.") },
    { tag: l("Ẩm thực", "Cuisine"), t: l("Hương vị Bắc Bộ", "Northern flavours"), d: l("Phở, bún chả, cơm cháy dê núi, hải sản Hạ Long.", "Pho, bun cha, goat & crispy rice, Ha Long seafood.") },
    { tag: l("Lịch sử", "History"), t: l("Cố đô Hoa Lư", "Hoa Lu ancient capital"), d: l("Kinh đô đầu tiên của nhà nước phong kiến tập quyền.", "Vietnam's first capital of a centralised dynasty.") },
  ],
};

export type Stop = { time: string; t: L; d: L; buffer?: L };
export const days: { label: L; title: L; stops: Stop[] }[] = [
  {
    label: l("Ngày 1", "Day 1"),
    title: l("Hà Nội – Thủ đô ngàn năm", "Hanoi – Thousand-year capital"),
    stops: [
      { time: "07:00 – 07:15", t: l("Đón khách tại khách sạn", "Hotel pick-up"), d: l("Hướng dẫn viên đón tại khu Phố cổ.", "Guide meets you in the Old Quarter."), buffer: l("Dự phòng kẹt xe 15'", "15' traffic buffer") },
      { time: "08:00 – 10:00", t: l("Lăng Bác & Chùa Một Cột", "Ho Chi Minh Mausoleum & One Pillar Pagoda"), d: l("Tham quan quần thể Ba Đình.", "Explore the Ba Dinh complex.") },
      { time: "10:30 – 12:00", t: l("Văn Miếu – Quốc Tử Giám", "Temple of Literature"), d: l("Trường đại học đầu tiên của Việt Nam.", "Vietnam's first university.") },
      { time: "12:00 – 13:30", t: l("Ăn trưa bún chả", "Bun cha lunch"), d: l("Nhà hàng địa phương.", "Local restaurant.") },
      { time: "15:00 – 18:00", t: l("Hồ Gươm & Phố cổ", "Hoan Kiem Lake & Old Quarter"), d: l("Dạo bộ, cà phê trứng.", "Walking tour and egg coffee."), buffer: l("Dự phòng giờ cao điểm 20'", "20' rush-hour buffer") },
    ],
  },
  {
    label: l("Ngày 2", "Day 2"),
    title: l("Ninh Bình – Non nước Tràng An", "Ninh Binh – Trang An landscapes"),
    stops: [
      { time: "07:00 – 07:15", t: l("Trả phòng, lên xe", "Check-out & depart"), d: l("Di chuyển ~2 giờ đến Ninh Bình.", "~2 hour drive to Ninh Binh."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
      { time: "09:30 – 11:00", t: l("Cố đô Hoa Lư", "Hoa Lu ancient capital"), d: l("Đền vua Đinh, vua Lê.", "Temples of the Dinh and Le kings.") },
      { time: "11:30 – 13:00", t: l("Ăn trưa đặc sản", "Specialty lunch"), d: l("Dê núi, cơm cháy.", "Mountain goat and crispy rice.") },
      { time: "13:30 – 16:00", t: l("Đi thuyền Tràng An", "Trang An boat trip"), d: l("Hành trình xuyên 3–4 hang động.", "Through 3–4 caves by sampan.") },
      { time: "16:30 – 18:00", t: l("Hang Múa", "Mua Cave viewpoint"), d: l("Leo 500 bậc ngắm hoàng hôn.", "Climb 500 steps for sunset.") },
    ],
  },
  {
    label: l("Ngày 3", "Day 3"),
    title: l("Bái Đính – Vịnh Hạ Long", "Bai Dinh – Ha Long Bay"),
    stops: [
      { time: "07:30 – 09:30", t: l("Chùa Bái Đính", "Bai Dinh Pagoda"), d: l("Tham quan quần thể chùa.", "Visit the pagoda complex.") },
      { time: "09:45 – 12:45", t: l("Di chuyển đến Hạ Long", "Transfer to Ha Long"), d: l("Cao tốc Ninh Bình – Hạ Long.", "Expressway to Ha Long."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
      { time: "13:00 – 14:00", t: l("Lên du thuyền, ăn trưa", "Board cruise & lunch"), d: l("Hải sản trên boong.", "Seafood on deck.") },
      { time: "15:00 – 17:30", t: l("Hang Sửng Sốt & kayak", "Sung Sot Cave & kayaking"), d: l("Khám phá vịnh.", "Explore the bay.") },
      { time: "19:00 – 21:00", t: l("Tiệc tối & câu mực", "Dinner & squid fishing"), d: l("Nghỉ đêm trên vịnh.", "Overnight on the bay.") },
    ],
  },
  {
    label: l("Ngày 4", "Day 4"),
    title: l("Bình minh trên vịnh – Về Hà Nội", "Bay sunrise – Return to Hanoi"),
    stops: [
      { time: "06:00 – 06:45", t: l("Tập Thái Cực Quyền", "Tai Chi on deck"), d: l("Đón bình minh.", "Greet the sunrise.") },
      { time: "07:00 – 10:30", t: l("Đảo Ti Tốp & brunch", "Ti Top Island & brunch"), d: l("Tắm biển, ngắm toàn cảnh.", "Swim and panoramic view.") },
      { time: "11:00 – 14:30", t: l("Về Hà Nội", "Return to Hanoi"), d: l("Trả khách tại khách sạn.", "Drop-off at your hotel."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
    ],
  },
];

export const pricing = {
  title: l("Bảng giá & dịch vụ", "Pricing & services"),
  per: l("/ khách", "/ guest"),
  incTitle: l("Bao gồm", "Included"),
  excTitle: l("Không bao gồm", "Excluded"),
  packages: [
    { name: l("Tiêu chuẩn", "Standard"), price: "5.990.000₫", note: l("Khách sạn 3★ · Du thuyền 3★", "3★ hotel · 3★ cruise"), featured: false },
    { name: l("Cao cấp", "Superior"), price: "7.990.000₫", note: l("Khách sạn 4★ · Du thuyền 4★", "4★ hotel · 4★ cruise"), featured: true },
    { name: l("Thượng hạng", "Premium"), price: "11.490.000₫", note: l("Khách sạn 5★ · Du thuyền 5★", "5★ hotel · 5★ cruise"), featured: false },
  ],
  included: [
    l("Xe Limousine đời mới suốt tuyến", "Modern limousine for the whole route"),
    l("2 đêm khách sạn + 1 đêm du thuyền", "2 hotel nights + 1 cruise night"),
    l("Các bữa ăn theo chương trình", "Meals as per itinerary"),
    l("Vé tham quan, thuyền Tràng An, kayak", "Entrance fees, Trang An boat, kayak"),
    l("Hướng dẫn viên song ngữ", "Bilingual tour guide"),
    l("Bảo hiểm du lịch", "Travel insurance"),
  ],
  excluded: [
    l("Vé máy bay đến/từ Hà Nội", "Flights to/from Hanoi"),
    l("Đồ uống ngoài thực đơn", "Drinks outside the set menu"),
    l("Chi phí cá nhân, tiền tip", "Personal expenses and tips"),
    l("Thuế VAT", "VAT"),
  ],
};

export const video = {
  title: l("Trailer hành trình", "Tour trailer"),
  body: l("Ba phút cảm nhận vẻ đẹp di sản miền Bắc.", "Three minutes of Northern Vietnam's heritage."),
  youtubeId: "8nPBz9nPBJo",
};

export const policies = {
  title: l("Điều khoản, cam kết & chính sách", "Terms, commitments & policies"),
  items: [
    { q: l("Điều kiện tham gia", "Participation conditions"), a: l("Khách có sức khoẻ bình thường, mang CCCD/hộ chiếu còn hạn. Trẻ em dưới 12 tuổi đi cùng người lớn. Phụ nữ mang thai cần thông báo trước.", "Guests in normal health with a valid ID or passport. Children under 12 must travel with an adult. Pregnant guests please inform us in advance.") },
    { q: l("Quy định huỷ vé", "Cancellation rules"), a: l("Huỷ trước 15 ngày: hoàn 90%. Trước 7–14 ngày: hoàn 50%. Dưới 7 ngày: không hoàn. Đổi ngày miễn phí 1 lần trước 10 ngày.", "Cancel 15+ days ahead: 90% refund. 7–14 days: 50%. Under 7 days: no refund. One free date change up to 10 days before.") },
    { q: l("Bảo hiểm du lịch", "Travel insurance"), a: l("Bảo hiểm mức bồi thường tối đa 100.000.000₫/vụ, áp dụng suốt hành trình.", "Coverage up to 100,000,000₫ per incident, valid throughout the trip.") },
    { q: l("Cam kết của chúng tôi", "Our commitments"), a: l("Đúng lịch trình, không phát sinh chi phí ẩn, không ghé điểm mua sắm. Hoàn tiền nếu dịch vụ không đúng cam kết.", "On-schedule, no hidden fees, no shopping stops. Refund if services fall short of what's promised.") },
  ],
};

export const faq = {
  title: l("Câu hỏi thường gặp", "Frequently asked questions"),
  items: [
    { q: l("Tôi được mang bao nhiêu hành lý?", "How much baggage can I bring?"), a: l("Mỗi khách 1 vali tối đa 20kg và 1 túi xách nhỏ. Hành lý lớn được gửi tại khách sạn khi lên du thuyền.", "One suitcase up to 20kg plus a small bag per guest. Large luggage can stay at the hotel during the cruise.") },
    { q: l("Thời tiết như thế nào?", "What's the weather like?"), a: l("Tháng 10–4 mát mẻ 15–25°C, nên mang áo khoác nhẹ. Tháng 5–9 nóng 28–35°C, có mưa rào; nên mang áo mưa và kem chống nắng.", "Oct–Apr is cool (15–25°C), bring a light jacket. May–Sep is hot (28–35°C) with showers; bring a raincoat and sunscreen.") },
    { q: l("Bữa ăn có những gì? Có món chay không?", "What about meals? Vegetarian options?"), a: l("Bao gồm 3 bữa sáng, 4 bữa trưa, 3 bữa tối với đặc sản địa phương. Có thực đơn chay khi báo trước.", "3 breakfasts, 4 lunches and 3 dinners featuring local specialties. Vegetarian menus available on request.") },
    { q: l("Chỗ ở ra sao?", "What is the accommodation like?"), a: l("Phòng đôi/twin tại khách sạn và cabin riêng có ban công trên du thuyền, tuỳ gói đã chọn.", "Double/twin hotel rooms and a private balcony cabin on the cruise, depending on your package.") },
  ],
};

export const contact = {
  title: l("Sẵn sàng cho hành trình?", "Ready for the journey?"),
  body: l("Gọi hotline hoặc để lại thông tin, chúng tôi sẽ liên hệ trong 30 phút.", "Call our hotline or leave your details – we'll reply within 30 minutes."),
  hotlines: ["09XX-XXX-XXX", "09XX-XXX-XXX"],
  email: "booking@disanmienbac.vn",
  agency: l("Công ty Du lịch Di Sản Miền Bắc", "Northern Heritage Travel Co."),
  address: l("Số 1 Hàng Bạc, Hoàn Kiếm, Hà Nội", "1 Hang Bac St, Hoan Kiem, Hanoi"),
  form: {
    name: l("Họ và tên", "Full name"),
    phone: l("Số điện thoại", "Phone number"),
    guests: l("Số khách", "Guests"),
    date: l("Ngày khởi hành", "Departure date"),
    submit: l("Gửi yêu cầu", "Send request"),
    thanks: l("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.", "Thank you! We'll be in touch soon."),
  },
};

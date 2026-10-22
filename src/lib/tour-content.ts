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
    { k: l("Thời gian", "Duration"), v: l("4 ngày 3 đêm · Khởi hành thứ Năm hằng tuần", "4 days 3 nights · Departs every Thursday") },
    { k: l("Hành trình", "Route"), v: l("Hà Nội · Ninh Bình · Hạ Long", "Hanoi · Ninh Binh · Ha Long") },
    { k: l("Phương tiện", "Transport"), v: l("Xe du lịch 35 chỗ · Đón tại sân bay Nội Bài", "35-seat tourist bus · Meet at Noi Bai Airport") },
  ],
  book: l("Đặt tour ngay", "Book now"),
  view: l("Xem lịch trình", "View itinerary"),
};

export const overview = {
  title: l("Tổng quan hành trình", "Tour overview"),
  body: l(
    "Hành trình 4 ngày 3 đêm do Công ty Cổ phần Dấu chân Việt tổ chức, khởi hành thứ Năm hằng tuần. Đón đoàn tại sân bay Nội Bài, khám phá thủ đô Hà Nội ngàn năm văn hiến, Hoàng thành Thăng Long về đêm, quần thể danh thắng Tràng An – di sản kép UNESCO, và kỳ quan vịnh Hạ Long. Di chuyển bằng xe du lịch 35 chỗ (không bao gồm vé máy bay).",
    "A 4-day, 3-night journey by Dau Chan Viet JSC, departing every Thursday. We meet you at Noi Bai Airport, then explore thousand-year-old Hanoi, the Thang Long Imperial Citadel by night, the Trang An landscape complex – a UNESCO mixed heritage site – and the wonder of Ha Long Bay. Travel by 35-seat tourist bus (flights not included).",
  ),
  hlTitle: l("Điểm nổi bật & giá trị trải nghiệm", "Highlights & experiential value"),
  highlights: [
    { tag: l("Lịch sử", "History"), t: l("Khu di tích Hồ Chí Minh", "Ho Chi Minh Relic Complex"), d: l("Quảng trường Ba Đình, Bảo tàng, Nhà sàn Bác và Chùa Một Cột.", "Ba Dinh Square, the museum, the Stilt House and One Pillar Pagoda.") },
    { tag: l("Văn hoá", "Culture"), t: l("Văn Miếu – Quốc Tử Giám", "Temple of Literature"), d: l("Trường đại học đầu tiên của Việt Nam, trải nghiệm xin chữ thư pháp.", "Vietnam's first university, with a calligraphy experience.") },
    { tag: l("Di sản đêm", "Night heritage"), t: l("Hoàng thành Thăng Long về đêm", "Thang Long Citadel by night"), d: l("Đoan Môn, điện Kính Thiên, nghi lễ giếng Ngọc, múa cung đình, trà sen.", "Doan Mon, Kinh Thien Palace, King's Well ritual, royal dance, lotus tea.") },
    { tag: l("Cảnh quan", "Scenic"), t: l("Đi thuyền Tràng An", "Trang An boat ride"), d: l("Sông Sào Khê, hang Sáng, hang Tối, hang Nấu Rượu.", "Sao Khe river, Bright, Dark and Wine-cooking Caves.") },
    { tag: l("Kỳ quan", "Wonder"), t: l("Vịnh Hạ Long & hang Thiên Cung", "Ha Long Bay & Thien Cung Cave"), d: l("Hòn Đỉnh Hương, hòn Con Rùa, hòn Gà Chọi.", "Incense Burner, Turtle and Fighting Cocks islets.") },
    { tag: l("Ẩm thực", "Cuisine"), t: l("Hương vị Bắc Bộ", "Northern flavours"), d: l("Ẩm thực Hà Nội, dê núi & cơm cháy Ninh Bình, đặc sản Quảng Ninh.", "Hanoi street food, Ninh Binh goat & crispy rice, Quang Ninh specialties.") },
  ],
};

export type Stop = { time: string; t: L; d: L; buffer?: L };
export const days: { label: L; title: L; stops: Stop[] }[] = [
  {
    label: l("Ngày 1", "Day 1"),
    title: l("Hà Nội – Thủ đô ngàn năm", "Hanoi – Thousand-year capital"),
    stops: [
      { time: "Sáng / Morning", t: l("Đón đoàn tại sân bay Nội Bài", "Pick-up at Noi Bai Airport"), d: l("Hướng dẫn viên đón đoàn, xe 35 chỗ đưa vào trung tâm.", "Your guide meets the group; 35-seat bus into the city."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
      { time: "Sáng / Morning", t: l("Khu di tích Chủ tịch Hồ Chí Minh", "President Ho Chi Minh Relic Complex"), d: l("Quảng trường Ba Đình, Bảo tàng Hồ Chí Minh, Nhà sàn Bác, Chùa Một Cột.", "Ba Dinh Square, Ho Chi Minh Museum, Stilt House, One Pillar Pagoda.") },
      { time: "Trưa / Noon", t: l("Ăn trưa tại khách sạn", "Lunch at the hotel"), d: l("Nhận phòng, nghỉ ngơi.", "Check in and rest.") },
      { time: "Chiều / Afternoon", t: l("Đền Ngọc Sơn – Cầu Thê Húc – Hồ Hoàn Kiếm", "Ngoc Son Temple – The Huc Bridge – Hoan Kiem Lake"), d: l("Chiêm ngưỡng tiêu bản rùa Hồ Gươm dài 1,2m.", "See the 1.2m preserved Hoan Kiem turtle specimen.") },
      { time: "Tối / Evening", t: l("Tự do khám phá ẩm thực Hà Nội", "Free time for Hanoi cuisine"), d: l("Nghỉ đêm tại Hà Nội.", "Overnight in Hanoi.") },
    ],
  },
  {
    label: l("Ngày 2", "Day 2"),
    title: l("Hà Nội – Văn hiến & Hoàng thành", "Hanoi – Literature & the Citadel"),
    stops: [
      { time: "Sáng / Morning", t: l("Ăn sáng buffet", "Buffet breakfast"), d: l("Tại khách sạn.", "At the hotel.") },
      { time: "Sáng / Morning", t: l("Văn Miếu – Quốc Tử Giám", "Temple of Literature"), d: l("Trải nghiệm xin chữ thư pháp.", "Calligraphy experience.") },
      { time: "Trưa / Noon", t: l("Ăn trưa", "Lunch"), d: l("Nhà hàng địa phương.", "Local restaurant.") },
      { time: "Chiều / Afternoon", t: l("Bảo tàng Lịch sử Quốc gia (Cơ sở 2)", "National Museum of History (Facility 2)"), d: l("Tìm hiểu lịch sử dân tộc.", "Discover Vietnam's history.") },
      { time: "19:00 – 20:30", t: l("Hoàng thành Thăng Long về đêm", "Thang Long Imperial Citadel night tour"), d: l("Khu di sản UNESCO, Đoan Môn, điện Kính Thiên, nghi lễ lấy nước giếng Ngọc, múa cung đình, thưởng trà sen.", "UNESCO heritage area, Doan Mon, Kinh Thien Palace, King's Well water ritual, royal dance and lotus tea tasting."), buffer: l("Dự phòng kẹt xe 15'", "15' traffic buffer") },
    ],
  },
  {
    label: l("Ngày 3", "Day 3"),
    title: l("Hà Nội – Ninh Bình – Hạ Long", "Hanoi – Ninh Binh – Ha Long"),
    stops: [
      { time: "Sáng / Morning", t: l("Ăn sáng, trả phòng, đi Ninh Bình", "Breakfast, check-out, depart for Ninh Binh"), d: l("Di chuyển bằng xe 35 chỗ.", "By 35-seat bus."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
      { time: "Sáng / Morning", t: l("Đi thuyền Quần thể danh thắng Tràng An", "Trang An Scenic Landscape boat tour"), d: l("Sông Sào Khê, núi đá vôi, hang Sáng, hang Tối, hang Nấu Rượu.", "Sao Khe river, limestone peaks, Bright Cave, Dark Cave, Wine-cooking Cave.") },
      { time: "Trưa / Noon", t: l("Ăn trưa đặc sản", "Specialty lunch"), d: l("Dê núi Ninh Bình & cơm cháy.", "Ninh Binh mountain goat & crispy rice.") },
      { time: "Chiều / Afternoon", t: l("Đi Hạ Long theo Quốc lộ 10", "To Ha Long via Highway 10"), d: l("Qua Nam Định, Thái Bình, Hải Phòng, ngắm sông Bạch Đằng.", "Through Nam Dinh, Thai Binh, Hai Phong, past the Bach Dang River."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
      { time: "Tối / Evening", t: l("Nhận phòng khách sạn Hạ Long", "Check in at Ha Long hotel"), d: l("Tự do dạo bãi biển Bãi Cháy, Công viên Hoàng gia, chợ đêm Hạ Long.", "Free time at Bai Chay Beach, Royal Park and Ha Long Night Market.") },
    ],
  },
  {
    label: l("Ngày 4", "Day 4"),
    title: l("Hạ Long – Sân bay Nội Bài", "Ha Long – Noi Bai Airport"),
    stops: [
      { time: "Sáng / Morning", t: l("Ăn sáng, trả phòng", "Breakfast & check-out"), d: l("Ra cảng Tuần Châu.", "Transfer to Tuan Chau Marina.") },
      { time: "Sáng / Morning", t: l("Du thuyền vịnh Hạ Long – Hang Thiên Cung", "Ha Long Bay cruise – Thien Cung Cave"), d: l("Tham quan hang Thiên Cung trên đảo Đầu Gỗ.", "Visit Thien Cung Cave on Dau Go Island.") },
      { time: "Trưa / Noon", t: l("Ăn trưa trên du thuyền", "Lunch on board"), d: l("Ngắm hòn Đỉnh Hương, hòn Con Rùa, hòn Gà Chọi.", "Pass Incense Burner, Turtle and Fighting Cocks islets.") },
      { time: "Chiều / Afternoon", t: l("Mua sắm tại chợ Cái Dăm", "Shopping at Cai Dam Market"), d: l("Đặc sản Quảng Ninh.", "Quang Ninh specialties.") },
      { time: "Chiều / Afternoon", t: l("Về sân bay Nội Bài, kết thúc tour", "Transfer to Noi Bai Airport, tour ends"), d: l("Chia tay đoàn.", "Farewell."), buffer: l("Dự phòng kẹt xe 30'", "30' traffic buffer") },
    ],
  },
];

export const pricing = {
  title: l("Bảng giá trọn gói & dịch vụ", "Package prices & services"),
  per: l("/ khách", "/ guest"),
  incTitle: l("Bao gồm", "Included"),
  excTitle: l("Không bao gồm", "Excluded"),
  packages: [
    { name: l("Người lớn & trẻ từ 10 tuổi", "Adults & children 10+"), price: "5.560.000₫", note: l("Giá trọn gói 100%", "Full package price"), featured: true },
    { name: l("Trẻ em 5 – 10 tuổi", "Children 5–10"), price: "4.170.000₫", note: l("75% giá người lớn", "75% of adult price"), featured: false },
    { name: l("Trẻ em 2 – 5 tuổi", "Children 2–5"), price: "2.780.000₫", note: l("50% giá người lớn", "50% of adult price"), featured: false },
    { name: l("Trẻ em dưới 2 tuổi", "Children under 2"), price: l("Miễn phí", "Free"), note: l("Phụ thu phòng đơn: 1.600.000₫", "Single room supplement: 1,600,000₫"), featured: false },
  ],
  included: [
    l("Xe du lịch 35 chỗ đưa đón suốt tuyến từ sân bay Nội Bài", "35-seat tourist bus for the whole route from Noi Bai Airport"),
    l("3 đêm khách sạn (2 đêm Hà Nội, 1 đêm Hạ Long), 2 khách/phòng", "3 hotel nights (2 Hanoi, 1 Ha Long), 2 guests per room"),
    l("Các bữa ăn theo chương trình, gồm dê núi & cơm cháy, bữa trưa trên du thuyền", "Meals as per itinerary, incl. goat & crispy rice and lunch on the cruise"),
    l("Vé tham quan: Hoàng thành về đêm, thuyền Tràng An, du thuyền & hang Thiên Cung", "Entrance fees: Citadel night tour, Trang An boat, Ha Long cruise & Thien Cung Cave"),
    l("Hướng dẫn viên suốt tuyến", "Tour guide throughout"),
    l("Bảo hiểm du lịch, nước uống trên xe", "Travel insurance, bottled water on the bus"),
  ],
  excluded: [
    l("Vé máy bay đến/từ sân bay Nội Bài", "Flights to/from Noi Bai Airport"),
    l("Phụ thu phòng đơn: 1.600.000₫", "Single room supplement: 1,600,000₫"),
    l("Ăn tối tự do Ngày 1 & Ngày 3, đồ uống ngoài thực đơn", "Free-choice dinners on Day 1 & 3, drinks outside the set menu"),
    l("Chi phí cá nhân, mua sắm, tiền tip", "Personal expenses, shopping and tips"),
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
    { q: l("Điều kiện tham gia", "Participation conditions"), a: l("Khách có sức khoẻ bình thường, mang CCCD/hộ chiếu còn hạn. Trẻ em đi cùng người lớn. Khách tự túc vé máy bay, tập trung tại sân bay Nội Bài. Khởi hành thứ Năm hằng tuần.", "Guests in normal health with a valid ID or passport. Children must travel with an adult. Guests arrange their own flights and meet at Noi Bai Airport. Departs every Thursday.") },
    { q: l("Thanh toán", "Payment"), a: l("Đặt cọc 50% khi đăng ký, thanh toán phần còn lại trước ngày khởi hành 7 ngày bằng tiền mặt hoặc chuyển khoản.", "50% deposit on booking; balance due 7 days before departure by cash or bank transfer.") },
    { q: l("Quy định huỷ tour", "Cancellation rules"), a: l("Huỷ trước 15 ngày: hoàn 90%. Trước 7–14 ngày: hoàn 50%. Dưới 7 ngày: không hoàn.", "Cancel 15+ days ahead: 90% refund. 7–14 days: 50%. Under 7 days: no refund.") },
    { q: l("Cam kết của chúng tôi", "Our commitments"), a: l("Đúng lịch trình, không phát sinh chi phí ẩn. Hoàn tiền nếu dịch vụ không đúng cam kết.", "On-schedule, no hidden fees. Refund if services fall short of what's promised.") },
  ],
};

export const faq = {
  title: l("Câu hỏi thường gặp", "Frequently asked questions"),
  items: [
    { q: l("Tôi được mang bao nhiêu hành lý?", "How much baggage can I bring?"), a: l("Mỗi khách 1 vali và 1 túi xách nhỏ; hành lý theo quy định của hãng bay bạn chọn.", "One suitcase plus a small bag per guest; flight allowance depends on your airline.") },
    { q: l("Thời tiết như thế nào?", "What's the weather like?"), a: l("Tháng 10–4 mát mẻ 15–25°C, nên mang áo khoác nhẹ. Tháng 5–9 nóng 28–35°C, có mưa rào; nên mang áo mưa và kem chống nắng.", "Oct–Apr is cool (15–25°C), bring a light jacket. May–Sep is hot (28–35°C) with showers; bring a raincoat and sunscreen.") },
    { q: l("Bữa ăn có những gì? Có món chay không?", "What about meals? Vegetarian options?"), a: l("Các bữa theo chương trình với đặc sản địa phương. Có thực đơn chay khi báo trước.", "Meals per itinerary featuring local specialties. Vegetarian menus available on request.") },
    { q: l("Chỗ ở ra sao?", "What is the accommodation like?"), a: l("2 đêm khách sạn tại Hà Nội và 1 đêm tại Hạ Long, phòng đôi/twin. Muốn ở phòng đơn phụ thu 1.600.000₫.", "2 hotel nights in Hanoi and 1 in Ha Long, double/twin rooms. Single room supplement 1,600,000₫.") },
  ],
};

export const contact = {
  title: l("Sẵn sàng cho hành trình?", "Ready for the journey?"),
  body: l("Gọi hotline Mr. Thắng hoặc để lại thông tin, chúng tôi sẽ liên hệ sớm.", "Call Mr. Thang's hotline or leave your details – we'll be in touch soon."),
  hotlines: ["Mr. Thắng – 090.xxx.xxx"],
  email: "booking@dauchanviet.vn",
  agency: l("Công ty Cổ phần Dấu chân Việt", "Dau Chan Viet Joint Stock Company"),
  address: l("Nhóm 3 Lớp 11A3 – 131 Cô Bắc, Phường Cầu Ông Lãnh, TP. Hồ Chí Minh", "Group 3, Class 11A3 – 131 Co Bac St, Cau Ong Lanh Ward, Ho Chi Minh City"),
  form: {
    name: l("Họ và tên", "Full name"),
    phone: l("Số điện thoại", "Phone number"),
    guests: l("Số khách", "Guests"),
    date: l("Ngày khởi hành (thứ Năm)", "Departure date (Thursday)"),
    submit: l("Gửi yêu cầu", "Send request"),
    thanks: l("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.", "Thank you! We'll be in touch soon."),
  },
};

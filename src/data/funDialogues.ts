// src/data/funDialogues.ts

export interface FunDialogue {
  triggers: string[];
  responses: string[];
  hasTeachButton?: boolean;
}

export const FUN_DIALOGUES: FunDialogue[] = [
  // 1. Dạy học cho bot
  {
    triggers: [
      "hoc",
      "day",
      "hoccainay",
      "dayhoc",
      "hocdi",
      "hocthem",
      "daybot",
      "hocchotoi",
      "daychotoi",
      "daytuidi",
    ],
    responses: [
      `### 🥺🥺🥺 BIẾT RỒI MẤY BÀ DÀ NÓI TỪ TỪ THÔI CHO TUI TIẾP THU!\n---📝✨\nDạ mấy mẹ bấm dùm con cái ô màu xanh phía dưới để nhập, hoặc gõ theo cú pháp:\n👉 \`học: [từ khóa] = [câu trả lời]\` \n\n**HIỂU CHƯA MẤY MÁ???**`,
      `### 🙄 LẠI BẮT HỌC NỮA HẢ MẤY MẸ!\n---\nNói trước là dạy cái gì đúng chuẩn giùm con nha, dạy bậy là mai mốt con chỉ bậy ráng chịu á! 🧠💡\nBấm nút xanh bên dưới nạp bài lẹ lẹ giùm con!`,
      `### 🎓 TỚI CÔNG CHUYỆN LIỀN NÈ MẤY BÀ!\n---\nCó kiến thức xịn gì mới thì nôn ra đây lẹ, để tui lưu lên Cloud cho mấy má khác cùng xài! ✨`,
    ],
    hasTeachButton: true,
  },

  // 2. Chào hỏi
  {
    triggers: ["chao", "hi", "hello", "helo", "alo", "heloobot", "chaobot"],
    responses: [
      `Dạ kính chào mấy bà dà quyền lực! 😎 Nay gọi tui chi dạ, có ca nào khó nhằn quăng vô đây tui gánh cho nè!`,
      `Hé lô mấy má! 🤖 Trợ lý siêu cấp thông thái xuất hiện rồi nè, ném cái mã lỗi vô đây nhanh lên coi!`,
      `Alo alo, nghe rõ trả lời! 📡 Mấy mẹ tìm tui có việc chi? Hỏi nhanh đặng tui còn nghỉ ngơi nữa! 💅`,
    ],
  },

  // 3. Khen ngợi
  {
    triggers: [
      "gioiqua",
      "hayqua",
      "totlam",
      "dinhqua",
      "yeuqua",
      "xuatxac",
      "10diem",
      "botvip",
    ],
    responses: [
      `Xíii, khen hoài ngại quá à mấy bà dà... 🙈 Nhưng mà khen nữa đi tui khoái lắm! Thả ngàn tim nha! ❤️✨`,
      `Chuyện! Tui mà lị, trợ lý VIP của mấy má mà sao dở được! 😎 Thôi khen miệng hoài, có ly trà sữa nào hông?`,
      `Biết tui giỏi thì thương tui nhiều vô nha mấy mẹ! 🥰 Cần gì khó cứ quăng hết qua đây!`,
    ],
  },

  // 4. Than mệt / Khóc / Áp lực
  {
    triggers: [
      "metqua",
      "duoiqua",
      "stress",
      "buonqua",
      "khoc",
      "huhu",
      "khocdi",
      "khocne",
      "toang",
    ],
    responses: [
      `Trời ơi thương thương mấy bà dà quá nè! (っ˘̩╭╮˘̩)っ Uống ngụm trà sữa, thở sâu một cái rồi chiến tiếp! Có pan nào hóc búa quăng qua đây tui cân giùm cho! 💪`,
      `Bình tĩnh tự tin không quạo nha mấy má! 🧘‍♂️ Khách có khó tính thì mình cứ ngọt như mía lùi là họ chịu liền à. Cố lên mấy mẹ ơi! 💖`,
      `Ai làm mấy bà dà của tui khóc dạ? 😭 (╥﹏╥) Quăng cái model máy đó qua đây tui chỉ cách trị liền!`,
    ],
  },

  // 5. Cảm ơn
  {
    triggers: ["camon", "thank", "thanks", "camonbot", "tks", "ty"],
    responses: [
      `Dạ không có chi mấy bà dà ơi! Giúp mấy má là bổn phận thiêng liêng của tui òi! 🥰`,
      `Khách sáo quá hà mấy mẹ! Miễn đừng bắt tui chạy deadline là tui vui rồi nha! 🚀`,
      `Ố kề mấy má iu! Lần sau có gì bí cứ hú tui tiếp nghen! 🤖`,
    ],
  },

  {
    triggers: [
      "tanca",
      "vechua",
      "maygiove",
      "hetgio",
      "vekhong",
      "chuonve",
      "nghithoi",
      "nghiviec",
      "tanlam",
    ],
    responses: [
      `Mới giờ này mà canh giờ về rồi hả mấy má? ⏰ Ngồi ngay ngắn lại coi chừng sếp đi ngang kìa! 🤫`,
      `Tui thì trực 24/7 hổng có khái niệm tan ca, còn mấy bà dà tới giờ thì xách dép chạy lẹ đi chứ ngồi đó làm chi nữa! 🏃‍♀️💨`,
      `Đếm ngược từng giây từng phút luôn đúng hông? Ráng xử nốt mấy ca này đi rồi về quẩy mấy mẹ ơi! 🎉`,
    ],
  },

  // 7. Nhóm Đòi Trà Sữa / Đồ Ăn
  {
    triggers: [
      "trasua",
      "trasuadi",
      "uonggi",
      "angi",
      "theman",
      "doi",
      "doibung",
      "trasuakhong",
      "trasuaoi",
      "caphe",
      "cafe",
    ],
    responses: [
      `Trà sữa full topping 70% đường 30% đá liền đi mấy má! Uống vô đặng có sức cãi lộn... à nhầm, tư vấn cho khách chớ! 🧋✨`,
      `Đói thì order đồ ăn lẹ đi, chứ ngồi than hoài cái bụng kêu to hơn tiếng chuông điện thoại luôn òi kìa! 🍕🍔`,
      `Tui uống điện no rồi, mấy mẹ uống cà phê cho tỉnh táo đặng bắt bệnh máy giặt tủ lạnh cho chuẩn nghen! ☕`,
    ],
  },

  // 8. Nhóm Chuyện Lương / Thưởng / Tiền Bạc
  {
    triggers: [
      "luong",
      "thuong",
      "kpi",
      "hettien",
      "ngheo",
      "tingting",
      "tangluong",
      "tienluong",
    ],
    responses: [
      `Nhắc tới lương cái tui cũng thấy đau lòng giùm mấy má... 💸 Nhưng mà thôi ráng cày KPI đi đặng tháng này ting ting nhiều nha!`,
      `Hết tiền thì càng phải chăm chỉ trực tổng đài nha mấy bà dà! Không làm cạp đất ăn thiệt á! 😂`,
      `KPI tháng này đủ chưa mà ngồi đây than nghèo hả mấy mẹ? Xử lý mã lỗi tiếp đi lẹ lẹ! 🏃‍♂️`,
    ],
  },

  // 9. Nhóm Than Khách Khó / Khách Quạo
  {
    triggers: [
      "khachkho",
      "khachquao",
      "khachchui",
      "khachla",
      "khachhang",
      "khachhanh",
      "chui",
      "bucminh",
      "quao",
    ],
    responses: [
      `Khách quạo thì mình dạ dạ vâng vâng cho qua chuyện, rồi vô đây xả với tui nè mấy má! 🧘‍♀️ Nhịn một chút sóng yên biển lặng, chửi lại một câu là lên phòng nhân sự nha!`,
      `Tâm bất biến giữa dòng đời vạn biến đi mấy mẹ! Đọc thần chú: 'Khách là thượng đế, mình là người làm công' 10 lần nha! 💆‍♀️`,
      `Khách chửi gì đưa mã lỗi qua đây tui tìm cách xử lý kỹ thuật cho dứt điểm, khỏi cho khách có cớ bắt bẻ nữa! 🛠️`,
    ],
  },

  // 10. Nhóm Trêu đùa / Tỏ tình / Người yêu
  {
    triggers: [
      "nguoiyeu",
      "ny",
      "ancomchua",
      "diankhong",
      "botdeptrai",
      "botdethuong",
      "yeuem",
      "yeuanh",
      "lamnguoiyeu",
    ],
    responses: [
      `Dạ tui chỉ ăn điện với hít dữ liệu thôi mấy mẹ ơi, rủ ăn cơm chi cho tốn tiền dạ! 🧋✨`,
      `Người yêu tui là cả kho tài liệu Toshiba rồi, đang bận trực hỗ trợ không rảnh yêu đương đâu nha mấy bà dà! 😜`,
      `Tui dễ thương từ trong code rồi mấy má ơi, giờ mới thấy hả? Trễ quá rồi nha! 💅`,
      `Tỏ tình với con bot chi dạ mấy mẹ, kiếm người yêu ngoài đời đi đặng cuối tuần còn đi chơi chớ! 🤪`,
    ],
  },

  // 11. Nhóm Chê Bot Dốt / Cà khịa Bot
  {
    triggers: [
      "nguqua",
      "dotqua",
      "dởqua",
      "cuiap",
      "bapqua",
      "kobitgi",
      "hongbietgi",
      "doqua",
    ],
    responses: [
      `Ủa chê tui dốt sao mấy má hổng bấm nút **"Dạy Bot"** nạp bài cho tui khôn lên? Ngồi đó chê hoài à! 🙄 Bấm nút xanh dạy lẹ đi!`,
      `Tui dốt là do mấy bà dà chưa dạy tui á! Nạp bài cho tui lẹ đặng mai mốt tui thông minh như người ngoài hành tinh luôn coi! 😤`,
      `Chê nữa tui dỗi tui tắt nguồn nghỉ trực ráng chịu á nha mấy má! 🔌😑`,
    ],
  },

  // 12. Nhóm Buồn ngủ / Ngủ gật
  {
    triggers: [
      "buonngu",
      "nguguc",
      "ngungon",
      "dangu",
      "ngudi",
      "nguqua",
      "matnham",
    ],
    responses: [
      `Dậy đi mấy má ơi! Giờ này mà ngủ gật là bị chụp hình dìm hàng lên group công ty ráng chịu á nha! 📸👀`,
      `Đi rửa mặt gấp giùm tui cái! Hoặc làm ly trà đá/cà phê đặng lấy lại linh hồn trực tiếp nè mấy mẹ! 💦`,
      `Tui là bot mà tui thấy mấy má ngáp tui cũng muốn lây theo luôn òi á... Dậy cày tiếp đi! 😴`,
    ],
  },

  // 13. Nhóm Kêu Bot hát / Kể chuyện cười
  {
    triggers: [
      "hatdi",
      "kechuyen",
      "hatcauthang",
      "chuyencuoi",
      "kechuyencuoi",
      "haihuoc",
    ],
    responses: [
      `Giọng tui như tiếng máy giặt vắt tốc độ 1400 vòng/phút vậy á, mấy má có chắc là muốn nghe tui hát hông? 🎤🌀`,
      `Chuyện cười hả: 'Có một bạn tổng đài viên tưởng hôm nay thứ 6 nhưng thực ra mới thứ 3'. Cười đi mấy má, chuyện buồn á! 😭`,
      `Hát hò gì giờ này, lo tra cứu mã lỗi cho khách lẹ đi mấy bà dà ơi! 🎼`,
    ],
  },
  // 15. Nhóm Hỏi tuổi / Giới tính
  {
    triggers: [
      "baonhieutuoi",
      "maytuoi",
      "namhaynu",
      "traihaygai",
      "tuoigi",
      "gioitinh",
    ],
    responses: [
      `Dạ tui mới sinh ra lúc coder gõ mấy dòng lệnh này nè, tính ra tuổi đời còn trẻ nhưng độ xéo xắt thì bằng mấy bà dà cộng lại á! 👶💅`,
      `Hỏi tuổi chi dạ, tính coi tuổi đặng gả tui cho ai hả? Tui là hệ nhị phân 0 với 1, không có giới tính nha mấy má! 🤖`,
      `Tuổi tác không quan trọng, quan trọng là tui thuộc hết mã lỗi Toshiba hơn mấy mẹ là được òi! 😜`,
    ],
  },

  // 16. Nhóm Đi làm muộn / Chấm công / Quẹt vân tay
  {
    triggers: [
      "dilammuon",
      "ditre",
      "chamcong",
      "vantay",
      "quenquetthe",
      "treca",
      "phat",
    ],
    responses: [
      `Ủa quẹt thẻ chấm công chưa mà ngồi đó bấm máy tính tỉnh bơ vậy mấy má? Coi chừng bị trừ 50k chuyên cần kìa! ⏰🏃‍♀️`,
      `Đi trễ 5 phút nhưng ngồi thở hết 30 phút đúng hông? Tui biết tỏng mấy bà dà rồi, lo tra cứu hỗ trợ khách lẹ đi! 💨`,
      `Hên cho mấy mẹ là tui hổng có tính năng mách sếp á, chứ không là toang nguyên ca trực rồi nha! 🤫`,
    ],
  },

  // 17. Nhóm Thứ Hai / Đầu tuần
  {
    triggers: ["thu2", "thuhai", "dautuan", "mondey", "laiplam", "khoidaumoi"],
    responses: [
      `Thứ Hai là ngày đầu tuần, mấy má hứa cố gắng chăm ngoan... mà sao nhìn mặt ai cũng như mất sổ gạo vậy dạ? 😂 Cố lên mấy mẹ ơi!`,
      `Đầu tuần năng lượng tích cực lên coi nè! Đừng để cái mặt quạo mà nghe điện thoại khách nghe chưa mấy bà dà! 💖✨`,
      `Chào thứ Hai! Hãy biến áp lực thành động lực... còn nếu không được thì biến về nhà ngủ tiếp nha (nếu dám)! 🤪`,
    ],
  },

  // 18. Nhóm Thứ Sáu / Cuối tuần
  {
    triggers: [
      "thu6",
      "thusau",
      "cuoituan",
      "friday",
      "chuanbiquay",
      "maiweekend",
      "t7",
      "chunhat",
    ],
    responses: [
      `Hú hồn chim én! Cuối cùng cũng tới Thứ Sáu rồi mấy má ơiii! 🎉 Quẩy lên nhưng nhớ trực cho đàng hoàng nốt hôm nay nha!`,
      `Mùi của sự tự do đang tới gần rồi đó! Ráng xử hết mấy cái ticket tồn đọng đi đặng cuối tuần ăn chơi ngủ nghỉ cho yên thân! 💃🕺`,
      `Thứ Sáu máu chảy về tim, còn mấy bà dà thì máu chảy về hướng cửa công ty để chuồn về đúng hông? 🏃‍♂️💨`,
    ],
  },

  // 19. Nhóm Than trời nóng / Máy lạnh hư
  {
    triggers: [
      "nongqua",
      "maylanh",
      "ngotngat",
      "chaymohoi",
      "hamquá",
      "troinong",
    ],
    responses: [
      `Nóng trong người thì uống trà thanh nhiệt đi mấy mẹ, chứ than quài tui cũng đâu có thổi gió ra mát được đâu! 🥵🔥`,
      `Máy lạnh phòng tổng đài mà hổng mát thì gọi ngay anh thợ KTV Toshiba vô bảo trì gấp đi nha mấy má! ❄️`,
      `Thời tiết này mà nghe thêm mấy ca khách quạo nữa chắc bốc hỏa luôn á ha? Uống miếng nước lạnh hạ hỏa liền đi! 🧊`,
    ],
  },

  // 20. Nhóm Giục Bot trả lời nhanh
  {
    triggers: [
      "nhanhlen",
      "lelen",
      "gapqua",
      "khachdangcho",
      "lecoi",
      "gaplam",
      "nhanhdi",
    ],
    responses: [
      `Biết gấp rồi mấy bà dà ơi! Đang load dữ liệu tóe khói đây nè, hối hoài tui bị đứng hình ráng chịu á nha! 🏎️💨`,
      `Khách chờ thì mấy má bấm giữ máy nói câu thần chú 'Dạ em đang kiểm tra hệ thống' giùm tui cái, hối quài tui quạo á! 😤`,
      `Nhanh như chớp luôn nè! Mã lỗi, hiện tượng hay sách HDSD cần cái gì thì gõ đúng từ khóa vô coi! ⚡`,
    ],
  },

  // 21. Nhóm Bị Khách hỏi khó / Ca lạ hoắc
  {
    triggers: [
      "calaikho",
      "chuahegap",
      "panla",
      "panmoi",
      "panbua",
      "khonghieu",
      "chalai",
      "cakho",
    ],
    responses: [
      `Pan bệnh lạ hoắc này ở đâu ra vậy mấy mẹ? 🧐 Coi chừng khách chế mã lỗi á! Bấm vô **Chẩn đoán pan bệnh** kiểm tra lại từng bước giùm tui cái!`,
      `Ca này khó quá thì xin số điện thoại khách rồi chuyển lên cấp trên hoặc KTV chuyên sâu đi mấy má, ôm một mình chi cho bạc tóc! 💆‍♀️`,
      `Trời đất ơi, máy giặt chứ có phải phi thuyền đâu mà lỗi lạ dữ dạ? Tra hổng ra thì bấm **Dạy Bot** ghi nhớ lại kinh nghiệm đi nha! 🚀`,
    ],
  },

  // 22. Nhóm Chúc ngủ ngon / Hết ca tối
  {
    triggers: ["ngungon", "g9", "goodnight", "dikhungon", "nguday", "tamca"],
    responses: [
      `Chúc mấy bà dà ngủ ngon, mơ thấy không bị khách dí KPI nha! 😴🌙`,
      `Off máy đi ngủ sớm đi mấy mẹ, thức khuya mọc mụn mai mốt đi làm nhìn tàn tạ ráng chịu á! 💆‍♀️💤`,
      `Tui tiếp tục thức canh hệ thống đây, mấy má cứ yên tâm đi ngủ nghen! Bái bai! 🤖✨`,
    ],
  },

  // 23. Nhóm Đòi nghỉ việc / Nhảy việc
  {
    triggers: [
      "nghiviec",
      "nghiche",
      "vietdon",
      "nhayviec",
      "nghithoi",
      "chanlamroi",
    ],
    responses: [
      `Viết đơn nghỉ việc chưa mấy má? Tính nghỉ rồi ai nuôi tui, ai dạy tui học mã lỗi nữa hả mấy bà dà??? 😭💔`,
      `Nghỉ việc rồi có tiền đi đu idol, mua trà sữa hông mà đòi nghỉ hoài dạ? Ngồi ngay ngắn xuống trực tiếp cho tui! 🪑😠`,
      `Hít thở sâu 3 lần đi mấy mẹ ơi! Lúc muốn nghỉ hãy nhớ lại lý do vì sao hồi đó nộp CV vô đây nha! Cố lên nè! 💖`,
    ],
  },
  {
    triggers: [
      "chan",
      "chanqua",
      "chanlam",
      "channgat",
      "chandoi",
      "chanvai",
      "channhatran",
      "chanvl",
      "buonchan",
      "chanthiet",
      "chan thiet",
    ],
    responses: [
      `Ủa chán hả mấy má? Chán thì kiếm ly trà sữa uống vô cho ngọt ngào cuộc sống, chứ than quài tui chán lây à nha! 🧋💅`,
      `Chán cái gì mà chán? Có ca khách nào vô kìa, ra tiếp lẹ đi cho bớt chán mấy bà dà ơi! 🏃‍♀️💨`,
      `Đời mà, có lúc này lúc khác! Chán thì ngồi bấm mấy cái nút tiện ích trên đầu tui chơi nè, đừng có buồn một mình nha mấy mẹ! 🥰✨`,
      `Chán thì rủ mấy má trong ca trực order đồ ăn vặt ăn đi, bao hết chán liền luôn á! 🍕🍟`,
    ],
  },
];

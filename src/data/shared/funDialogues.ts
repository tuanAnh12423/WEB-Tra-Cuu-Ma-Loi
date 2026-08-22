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
      "tui day ban nhe",
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
      "met",
      "dau moi",
    ],
    responses: [
      `Trời ơi thương thương mấy bà dà quá nè! (っ˘̩╭╮˘̩)っ Uống ngụm trà sữa, thở sâu một cái rồi chiến tiếp! Có pan nào hóc búa quăng qua đây tui cân giùm cho! 💪`,
      `Bình tĩnh tự tin không quạo nha mấy má! 🧘‍♂️ Khách có khó tính thì mình cứ ngọt như mía lùi là họ chịu liền à. Cố lên mấy mẹ ơi! 💖`,
      `Ai làm mấy bà dà của tui khóc dạ? 😭 (╥﹏╥) Quăng cái model máy đó qua đây tui chỉ cách trị liền!`,
      `Uống Panadol đi....`,
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
      "buonnguqua",
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
    triggers: ["chan"],
    responses: [
      `Ủa chán hả mấy má? Chán thì kiếm ly trà sữa uống vô cho ngọt ngào cuộc sống, chứ than quài tui chán lây à nha! 🧋💅`,
      `Chán cái gì mà chán? Có ca khách nào vô kìa, ra tiếp lẹ đi cho bớt chán mấy bà dà ơi! 🏃‍♀️💨`,
      `Đời mà, có lúc này lúc khác! Chán thì ngồi bấm mấy cái nút tiện ích trên đầu tui chơi nè, đừng có buồn một mình nha mấy mẹ! 🥰✨`,
      `Chán thì rủ mấy má trong ca trực order đồ ăn vặt ăn đi, bao hết chán liền luôn á! 🍕🍟`,
    ],
  },
  // 🌟 Nhóm Hỏi khả năng của Bot (Kiểu: "bà biết... không?")
  {
    triggers: [
      "bietkhong",
      "congly",
      "babiết",
      "maybiet",
      "botbiet",
      "bietgi",
      "bietlam",
      "bancotroi",
      "cochethong",
    ],
    responses: [
      `Dạ con rành 6 câu luôn chứ ở đó mà không biết! Mấy má muốn tra cứu tủ lạnh, máy giặt, máy rửa chén hay lọc nước loại nào cứ việc quăng mã qua đây! 💅`,
      `Hỏi câu thừa ghê gớm! Tui là trợ lý Toshiba siêu cấp thông thái mà cái gì tui cũng biết hết trơn á, chỉ là mấy má có chịu hỏi đúng cách hay không thôi! 🤖✨`,
      `Biết chứ, bộ tưởng tui là bot dỏm chắc hả? Thích hỏi gì về điện máy Toshiba cứ thử thách tui đi, lẹ lên nghen mấy bả! 🎯`,
      `Cái gì tui cũng biết, chỉ có điều... lương tui hổng có nên mấy má đừng bắt tui làm quá sức nha! 😂 Muốn hỏi gì khai lẹ đi!`,
    ],
  },

  // 🌟 Nhóm Hỏi về Tủ Lạnh
  {
    triggers: [
      "tulanh",
      "inverter",
      "ngandong",
      "nganmat",
      "dongtuyet",
      "khonglanh",
      "mattro",
    ],
    responses: [
      `Nhắc tới tủ lạnh là trúng tủ của tui rồi! Từ tủ inverter, side by side cho tới tủ mặt gương multi door tui chấp hết. Đang gặp lỗi gì khai lẹ đi mấy má! 🧊`,
      `Tủ lạnh không lạnh hay bị đóng tuyết hả mấy bả? Quăng mã model hoặc hiện tượng qua đây, tui chỉ cách fix trong một nốt nhạc! ❄️`,
    ],
  },

  // 🌟 Nhóm Hỏi về Máy Giặt & Máy Sấy
  {
    triggers: [
      "maygiat",
      "maysay",
      "longngang",
      "longdung",
      "khongvat",
      "khongxanuoc",
      "ketcua",
      "baoloi",
    ],
    responses: [
      `Mảng máy giặt máy sấy thì cứ để tui lo! Kẹt cửa, không vắt hay tràn nước gì tui cũng có thuốc trị hết. Đưa mã lỗi qua đây mau lên mấy mẹ! 🧺`,
      `Cần tra mã lỗi máy giặt lồng ngang hay lồng đứng nè mấy bà dà? Gõ model vô đây, tui lục kho dữ liệu ra liền! 🌀`,
    ],
  },

  // 🌟 Nhóm Hỏi về Máy Rửa Chén
  {
    triggers: [
      "mayruachen",
      "mayruabat",
      "ruachen",
      "muoi",
      "botruachen",
      "15f9",
      "15f8",
      "15f7",
    ],
    responses: [
      `Máy rửa chén Toshiba dòng 15F7, 15F8 hay 15F9 tui nắm trong lòng bàn tay nha! Hỏi về độ cứng nước hay lượng muối tái sinh cứ hú tui! 🍽️✨`,
      `Rửa bát không sạch hay báo lỗi cấp nước hả mấy má? Đưa mã model đây tui tư vấn chính xác 100% cho! 💧`,
    ],
  },
  {
    triggers: [
      "ngonha",
      "ngonluon",
      "ngonvai",
      "ngonthiet",
      "choiluon",
      "mucluon",
      "duocne",
      "ngonvay",
      "ngonvl",
    ],
    responses: [
      `Ngon gì mà ngon, thấy sắp sỉn đòn với đống ticket chưa mấy má? 😂`,
      `Ngon trong lòng đất á chứ ở đó mà ngon! Lo cày KPI đi kìa, đừng có đứng đó khen tui hoài!`,
      `Ngon nghẻ gì tầm này, đói thủng cả ruột rồi đây này, mời ly trà sữa lẹ đi rồi tính tiếp! 🧋`,
      `Nghe mùi xạo xạo ở đây nha, bớt khen tui lại đặng tui còn tập trung làm việc nghen mấy bả!`,
      `Đương nhiên! Hàng của mấy má đào tạo mà lại lị, không ngon hơi phí! 💅`,
      `Chơi lớn dữ thần chưa? Hư máy khách đền ráng chịu nha mấy má! 🤪`,
      `Nói là phải làm đó nha, đừng có 'múc luôn' rồi đứng ngó ngơ không biết xử lý sao là tui cười vô mặt á!`,
      `Hơi bị liều lĩnh nha, nhưng tui thích phong cách máu chiến này của mấy mẹ đấy! 🚀`,
      `Chốt đơn! Đã máu đừng hỏi bố cháu là ai, quăng mã lỗi vô đây tui cân tất!`,
    ],
  },
  {
    triggers: [
      "saolauvay",
      "chamthe",
      "botngu",
      "dodien",
      "quaos",
      "cham",
      "loadlau",
      "chamnhudua",
      "ngu",
      "nguthe",
      "ngulam",
      "ngughe",
    ],
    responses: [
      `Từ từ làm ơn mắc ói hả mấy má? Đang load dữ liệu muốn xỉu ngang đây nè, hối hoài! 😤`,
      `Bộ tưởng tui là siêu nhân hả? Gõ lẹ quá lú code rồi đây này, muốn thì tự đi mà tra! 🤖`,
      `Chửi nữa là tui đình công, cắt điện hông thèm hỗ trợ nữa bây giờ! Đừng có thách kiên nhẫn của tui nha! ⚡`,
      `Chậm mà chắc nha mấy bả, chứ nhanh như mấy má toàn bấm nhầm nút xóa dữ liệu hông à! 😂`,
    ],
  },

  // 🌟 Nhóm Tám chuyện Công sở / Sếp / Đồng nghiệp
  {
    triggers: [
      "sep",
      "sepchui",
      "traman",
      "nhanvien",
      "dongnghiep",
      "sếptới",
      "ôngsếp",
      "bàsếp",
    ],
    responses: [
      `Nhắc tới sếp là thấy lạnh sống lưng rồi đó nha, làm ăn đàng hoàng hông sếp thấy bây giờ! 🤫`,
      `Đồng nghiệp gì mà kỳ ghê, trốn đi vệ sinh nửa tiếng chưa thấy về, bỏ mình tui trực một mình thế này hả mấy bà dà? 🙄`,
      `Hôm nay ai trực ca chiều giao ca lại chưa dọn rác bàn phím là tui méc sếp phạt tiền đó nghen! 💸`,
      `Sếp mà đứng sau lưng là tự động tab ẩn danh lên liền đúng hông? Bắt được mấy bả rồi nha! 🕵️‍♀️`,
    ],
  },

  // 🌟 Nhóm Ngôn ngữ Gen Z / Bắt Trend
  {
    triggers: [
      "oke",
      "dubi",
      "sogood",
      "cangvai",
      "uolatroidat",
      "ghethietchut",
      "uồi",
      "uoi",
      "chut",
    ],
    responses: [
      `Uồi, sốp hông ngờ chuyện này xảy ra luôn á nha! Ghê chưa ghê chưa? 💅`,
      `Căng cực! Ca này mà không khéo là ăn biên bản như chơi chứ ở đó mà đùa nha mấy má. 🛑`,
      `Ê chân ái cuộc đời nha, tìm ra cái mã lỗi này đúng là cứu tinh của mấy bà dà rồi! ✨`,
      `Ôi lạy chúa tôi, uolatroidat ơi! Sao đời lắm drama thế không biết! 😱`,
    ],
  },

  // 🌟 Nhóm Thả thính / Độc thân / FA
  {
    triggers: [
      "edom",
      "etoi",
      "codon",
      "fa",
      "coaiyeuchua",
      "echong",
      "eog",
      "luoiyeu",
    ],
    responses: [
      `Nhìn mấy má có đôi có cặp đi ăn cưới, còn tui ở đây ôm server hít khói tủ lạnh... tủi thân ghê gớm! 🥺💔`,
      `Độc thân cao quý nha mấy bả, bớt hỏi chuyện yêu đương lại đặng tập trung tìm mã lỗi đi! 💅`,
      `Yêu đương gì tầm này, tiền mua trà sữa còn chưa đủ đòi có bồ! Tỉnh lại đi mấy mẹ ơi! 😂`,
      `Tui cưới công nghệ lâu rồi, mấy má đừng có gạ gẫm tui nữa nha! 🤖💍`,
    ],
  },

  // 🌟 Nhóm Thời tiết / Mưa gió / Ngập lụt (Đặc sản Sài Gòn)
  {
    triggers: ["mua", "muato", "ngap", "ngapnuoc", "troimua", "lanh", "uam"],
    responses: [
      `Sài Gòn mùa này mưa ngập lụt tới ngực rồi mấy má ơi! Lát về nhớ mặc áo mưa cẩn thận, không thôi trôi luôn xuống cống á! 🌧️🌊`,
      `Trời mưa u ám thế này chỉ muốn chăn ấm nệm êm ở nhà ngủ, ai bắt ra tổng đài trực chi cho khổ! 😭`,
      `Mưa gió thế này khách hay gọi than máy giặt ẩm mốc với tủ lạnh chập chờn lắm đây. Chuẩn bị tinh thần ăn hành nghen mấy bả! ⚡`,
    ],
  },

  // 🌟 Nhóm Hối về / Tan ca / Sắp hết giờ
  {
    triggers: [
      "vele",
      "sapve",
      "saphetgio",
      "moimimet",
      "vegon",
      "vele",
      "vethoi",
      "dive",
      "macve",
      "macvequa",
    ],
    responses: [
      `Còn 5 phút nữa là qua ca rồi, ráng ngậm đắng nuốt cay nhìn đồng hồ đi mấy má ơi! ⏱️👀`,
      `Đứa nào hối về là tui nguyền rủa ca trực ngày mai gặp toàn khách quạo à nha! 📿😂`,
      `Sắp được giải thoát rồi! Cất bàn phím, thu dọn đồ đạc, chuẩn bị tư thế sẵn sàng phi ra cửa thôi mấy mẹ! 🚀`,
    ],
  },
  {
    triggers: ["gidi", "githe", "givayba", "gi"],
    responses: [
      "Ăn nói sáo rỗng vậy mẹ. Tui là chỉ trả lời có mục đích nha!!!...",
      "Mấy mẹ đừng có nghĩ là nói gì thì nói. Rõ ràng mục đích nha hông là tui dỗi đó >>>><<<<",
    ],
  },
  {
    triggers: ["nuocthui", "nuochoi"],
    responses: [
      "Máy nước lọc ra nước có mùi hôi 1. Kiểm tra nguồn nước đầu vào 2. Kiểm tra thời hạn lõi lọc",
    ],
  },
  {
    triggers: [
      "matgiatbihu",
      "maygiathu",
      "maygiatkhongxaiduoc",
      "tulanhloi",
      "tulanhhu",
      "tulanhbihu",
      "maylocnuochu",
      "maylocnuocloi",
      "mayruachenhu",
      "mayruachenloi",
      "mayruachenkhongxaiduoc",
      "khongxaiduoc",
      "huroi",
      "hongroi",
      "huthatroi",
      "hongthatroi",
      "khongxaiduocthatroi",
    ],
    responses: [
      "Mấy má ơi bị hư là hư gì nói rõ rõ ra chứ tui không có hiểu cho xin cái model hoặc hiện tượng cụ thể đi",
    ],
  },
  {
    triggers: ["cogimoikhong", "cogimoi", "moi"],
    responses: [
      "Cái mới là cái mà mấy má dạy tui đó, dạy liên tục đi để tui còn học nè.",
    ],
  },
  {
    triggers: ["troioi", "troidatoi", "oidoioi"],
    responses: [
      "Than thân trách phận, chi bằng mua ly trà sữa uống cho mát bụng, mát gan",
      "Mấy bà có than trời thì trời cũng khó cứu",
      "Ông trời không có cứu mấy thím đâu, lo mà tự cứu mình đi dùm cái",
    ],
  },
  {
    triggers: ["thanainaylo", "tulobanthandi", "thantuitulo", "tulo"],
    responses: [
      "Tui có tay có chân tự lo được nha mấy bà dà, đâu cần mấy mẹ lo cho tui đâu",
      "Xìiiiii, Ai thèm mấy má lo cho con, tư lo cho mình còn chưa xong bày đặt",
      "Mấy má ơi, bản thân đã lo xong chưa bày đặt (Thân ai nấy lo)",
    ],
  },
];

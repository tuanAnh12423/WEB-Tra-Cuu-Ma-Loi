import type { ErrorItem } from "../../errors";

export const waterPurifierError: ErrorItem[] = [
  {
    id: "WP01",
    category: "waterPurifierError",
    code: "(WP19) Không lấy được nước lạnh",
    title: "Máy lọc nước Không lấy được nước lạnh",
    description: "Máy lọc nước không lấy được nước lạnh khi sử dụng",
    steps: [
      { text: "Kiểm tra nhiệt độ nước lạnh trên bảng điều khiển" },
      {
        text: "Kiểm tra công tắc lạnh đằng sau lưng máy",
        images: [
          "https://lh3.googleusercontent.com/d/1ItlyHgxe1_oNevJu-7YcaDy0jhDagR6g",
        ],
      },
      {
        text: "Kiểm tra đã mở van cấp nguồn nước chưa",
        images: [
          "https://lh3.googleusercontent.com/d/1zJUKqtLXa4nqAxiCfWrJlAAchU0C2EQK",
        ],
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1ERWbFR5jmA6to5wHG1cCtT3PF4eF8otj/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP02",
    category: "waterPurifierError",
    code: "Máy lọc nước bị chảy nước",
    title: "Máy lọc nước bị chảy nước ra sàn",
    description: "Trong quá trình sử dụng máy lọc nước bị chảy nước ra sàn nhà",
    steps: [
      { text: "Kiểm tra lại các khớp nối có bị hở" },
      { text: "Kiểm tra các co nối lõi lọc có bị rỉ nước" },
      {
        text: "Kiểm tra xem máy sử dụng có lâu chưa, đã đến thời hạn thay lõi lọc chưa",
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1ryCWPP8dHMml9Krxxm_A1qzokwvQdra4/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP03",
    category: "waterPurifierError",
    code: "(WP31) Cảnh báo E6",
    title: "Máy lọc nước hiện cảnh báo E6",
    description:
      "Máy lọc nước hiện cảnh báo E6 và không thể sử dụng được (Lấy nước, lạnh nóng, thường đều không sử dụng được",
    steps: [
      { text: "Kiểm tra van khoá nước có bị khoá hay không ?" },
      {
        text: "Kiểm tra dưới đáy có nước không, nếu có xả hết nước dưới đáy và cấp nguồn lại cho máy",
      },
      { text: "Kiểm tra đến kỳ hạn thay lỏi lọc hay chưa" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1t_lo7EcnxWGCmTXh0ZTzPsZsqusmGuzO",
      "https://lh3.googleusercontent.com/d/1zAJRLeWcCFBHvHFYSfnjhOfck0BjdEn4",
    ],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1ryCWPP8dHMml9Krxxm_A1qzokwvQdra4/preview",
        type: "vertical",
      },
      {
        url: "https://drive.google.com/file/d/1Lbk1CPSO8L4HHIPz6GHwp4nv_BqMbs83/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP04",
    category: "waterPurifierError",
    code: "(WP01) Không lấy được nước nóng",
    title:
      "Máy lọc nước không lấy được nước nóng, hoặc chọn lấy nước nóng mà nước không nóng",
    description:
      "Trong khi sử dụng, chọn chế độ lấy nước nóng mà nước ra không nóng, hoặc không lấy được nước nóng.",
    steps: [
      {
        text: "Kiểm tra công tắc nước nóng đã được bật hay chưa",
        images: [
          "https://lh3.googleusercontent.com/d/1ItlyHgxe1_oNevJu-7YcaDy0jhDagR6g",
        ],
      },
      {
        text: "Kiểm tra nếu bạn có dùng tính năng ECO, nên tắt tính năng khi có nhu cầu sử dụng nhiều nước nóng.",
        images: [
          "https://lh3.googleusercontent.com/d/1rGSd1r5pHcj6NFCEkVgn9v1nJfmzBXDr",
        ],
      },
      {
        text: "Kiểm tra Nếu được bật tính năng ECO mà để trong phòng tối, thì sẽ ảnh hướng đến việc lấy nước nóng",
      },
      {
        text: "Kiểm tra nhiệt độ trên bảng điều khiển xem nhiệt độ nước nóng đang bao nhiêu.",
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1H9KYHlVoxg5R2_N7Uy0OWL0i8Y_D0uYT/preview",
        type: "vertical",
      },
      {
        url: "https://drive.google.com/file/d/1nKl2Qs0CC5WD8YvRkzJm5Qs0ESqLTKHK/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP05",
    category: "waterPurifierError",
    code: "(WP06) Không lấy được nước",
    title: "Máy lọc nước không thể lấy được nước nóng, lạnh, thường",
    description:
      "Trong quá trình sử dụng bạn không thể lấy dược nước khi sử dụng.",
    steps: [
      { text: "Bạn đang không thể lấy được nước nào: Nóng, Lạnh, thường" },
      {
        text: "Kiểm tra màn hình hiển thị có hiện giọt nước màu đỏ",
        images: [
          "https://lh3.googleusercontent.com/d/1t_lo7EcnxWGCmTXh0ZTzPsZsqusmGuzO",
        ],
      },
      { text: "Chờ khoảng 15-25 phút để máy cấp nước đầy bình chứa" },
      {
        text: "Kiểm tra dưới đáy máy có nước hay không. Nếu có phải xả hết nước dưới đáy ra",
        images: [
          "https://lh3.googleusercontent.com/d/1y6v9lP5L0yg2agxJ5hZSjmHWK0WuXWTR",
          "https://lh3.googleusercontent.com/d/1toO_bskuwjKcNpo4RMf1qpbCoOP3kzJi",
        ],
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1ryCWPP8dHMml9Krxxm_A1qzokwvQdra4/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP06",
    category: "waterPurifierError",
    code: "Không sử dụng được tính năng lấy nước không chạm, Touchless",
    title:
      "Máy lọc nước không sử dụng được tính năng lấy nước không chạm, Touchless",
    description:
      "Bạn mới mua máy, nhưng không biết cách sử dụng tính năng lấy nước không chạm, phần này sẽ hướng dẫn bạn cách sử dụng tính năng",
    steps: [
      {
        text: "Kiểm tra nếu tính năng đang tắt nên bật lên",
        images: [
          "https://lh3.googleusercontent.com/d/1k0K-qTQn7uxHFBerDJVgffysg_fHsdKk",
        ],
      },
      { text: "Để tay cách cảm biến 6 - 9 cm để lấy nước không chạm" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/12D_hehyCmusXUN-rpvNCLQjFSy5k9Lm4",
    ],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1V4FSNKJHDHo2ILkjM58eVaTJ98GtEq_P/preview",
        type: "vertical",
      },
      {
        url: "https://drive.google.com/file/d/1wOiwksfDmDFTVM6Ozw8cjG2ABr_Q-ntL/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP07",
    category: "waterPurifierError",
    code: "(WP14) Máy lọc nước báo chớp đèn nóng, lạnh, không lấy được nước",
    title:
      "Máy lọc nước cảnh báo Đèn nóng lạnh chớp liên tục, không lấy được nước, và không bơm nước lại",
    description:
      "Đối với các model TWP-WA2SVN(K), TWP-WA3SVN(K), bạn không lấy được nước tại vòi, đèn nóng, lạnh trên bảng điều khiển chớp liên tục. Phần này sẽ hướng dẫn bạn cách xử lý",
    steps: [
      {
        text: "Cần phải có áp lực nước, bạn cần đấu trực tiếp nguồn nước máy của mình với máy lọc",
      },
      { text: "Kiểm tra lại van khoá nước đầu vào." },
      { text: "Kiểm tra van bình áp có khoá hay không" },
      {
        text: "Kiểm tra dưới đáy có nước hay không, xả hết nước nếu có nước dưới đáy",
      },
      {
        text: "Lưu ý: Không để đầu hút của máy bơm vào trong xô nước hoặc hồ nước cho máy tự hút.",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1agFsoL1Gktk-PJcM0AIXGvLj5j850dAg",
      "https://lh3.googleusercontent.com/d/1h3fWahzW-oXBt5HhIhHeZ_-sJcyp0pFe",
    ],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1W9yGTyNyAAEJ4RLnGfRc6CXoXYTTyfHl/preview",
        type: "vertical",
      },
      {
        url: "https://drive.google.com/file/d/1x1h3ppE9-RgnRmb9c-vTi8oJkF9OAR41/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP08",
    category: "waterPurifierError",
    code: "Lấy nước nóng, vòi nước lạnh chảy nước, hoặc ngược lại",
    title: "Máy lọc nước Lấy nước nóng, mà vòi lạnh chảy nước hoặc ngược lại",
    description:
      "Đối với các model TWP-WA2SVN(K), TWP-WA3SVN(K), bạn lấy nước nóng, mà vòi lạnh bị chảy hoặc rỉ nước, và ngược lại. Phần này sẽ hướng dẫn bạn cách xử lý",
    steps: [
      {
        text: "Kiểm tra lại ống xả khí sau lưng máy. Nếu bị treo vắt lên cao, nên thả ống tự do xuống đất.",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/10heIezjEPNfkvkRo_Kvx9lZp4bZycoVx",
    ],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/1AB-H8ZBDNBJX-hPSIWXsu15tRUzMic7l/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP09",
    category: "waterPurifierError",
    code: "(WP26) Hiện giọt nước đỏ, và Không lấy được nước",
    title: "Máy lọc nước hiện giọt nước đỏ, và không lấy được nước",
    description:
      "Bạn vừa mua và lắp xong máy lọc nước, nhưng màn hình cứ hiện giọt nước màu đỏ và không lấy nước được. Phần này sẽ hướng dẫn bạn cách xử lý vấn đề này.",
    steps: [
      { text: "Kiểm tra van khoá nguồn nước cấp cho máy" },
      {
        text: "Kiểm tra dưới đáy máy có nước không. Nếu có xả hết nước ra. Rút điện và cắm lại",
      },
      {
        text: "Sau đó đợi khoảng 15-20 phút để máy cấp đầy lại nước và sử dụng bình thường",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1t_lo7EcnxWGCmTXh0ZTzPsZsqusmGuzO",
    ],
    videoUrls: [
      {
        url: "https://drive.google.com/file/d/12wif_iUatmJzYQugy3_kelXDsnax3CES/preview",
        type: "vertical",
      },
    ],
  },
  {
    id: "WP10",
    category: "waterPurifierError",
    code: "(WP02) Nước Mùi vị bất thường",
    title: "Máy lọc nước - Nước Mùi vị bất thường",
    description: "Nước Mùi vị bất thường",
    steps: [
      { text: "Hỏi: Nước máy hay giếng? Mùi ở nước nóng/lạnh/thường? Từ khi nào?" },
      { text: "Nước sau khi lọc khách có dùng thường xuyên không? Có bảo quản nước lọc sau khi lấy không? → Kiểm tra bảo quản: Nước sau lọc có để ngăn mát? (Sau RO không còn Clo → dễ hỏng nếu để ngoài)" },
      { text: "Lõi lọc đã thay định kỳ chưa? HD xả nước cũ từ vòi dự phòng (dòng máy 23xx) hoặc nút xả đáy (sau lưng máy)" },
      { text: "Xả nước trong 10-15 phút (khoảng 2-3 xô nước) → lọc lại → kiểm tra mùi. → Hết → FOC. Vẫn còn → Tạo WO. Hướng dẫn xả nước từ vòi dự phòng - với dòng máy 23xx Ấn mạnh nắp đậy vòi để bật nắp ra Lấy vòi nước ra và tháo chụp vòi Kéo cần gạt mở sang phải để xả nước xong kéo cần gạt mở khóa về bên trái để lấy nước. Đậy nút lại đặt ống về vị trí cũ xong ấn mạnh nắp để đóng nắp lại." },
    ],
  },
  {
    id: "WP11",
    category: "waterPurifierError",
    code: "(WP03) Chớp đèn RO, Filter",
    title: "Máy lọc nước - Chớp đèn RO, Filter",
    description: "Chớp đèn RO, Filter",
    steps: [
      { text: "Giải thích: Đèn RO/Filter chớp = lõi lọc HẾT thời gian sử dụng." },
      { text: "Dựa vào ngày mua tư vấn KH thay lõi. → Lõi lọc là sản phẩm không được bảo hành nên KH có thể tự mua hoặc dùng dịch vụ thay lõi lọc của hãng (có thể tính phí)" },
      { text: "Sau khi thay lõi: → RESET tuổi thọ bộ lọc bằng nút nhấn sau máy 3 giây đến khi đèn hết chớp." },
    ],
  },
  {
    id: "WP12",
    category: "waterPurifierError",
    code: "(WP03-1) Đèn RO, Filter sáng đỏ",
    title: "Máy lọc nước - Đèn RO, Filter sáng đỏ",
    description: "Đèn RO, Filter sáng đỏ",
    steps: [
      { text: "Giải thích: Đèn RO/Filter sáng = lõi lọc HẾT thời gian sử dụng." },
      { text: "Dựa vào ngày mua tư vấn KH thay lõi. → Lõi lọc là sản phẩm không được bảo hành nên KH có thể tự mua hoặc dùng dịch vụ thay lõi lọc của hãng (có thể tính phí)" },
      { text: "Sau khi thay lõi: → RESET tuổi thọ bộ lọc bằng nút nhấn cài đặt lại phía trước máy 3 giây đến khi đèn tắt." },
    ],
  },
  {
    id: "WP13",
    category: "waterPurifierError",
    code: "(WP03-2) Đèn RO nhấp nháy liên tục, không lấy được nước ra",
    title: "Máy lọc nước - Đèn RO nhấp nháy liên tục, không lấy được nước ra",
    description: "Đèn RO nhấp nháy liên tục, không lấy được nước ra",
    steps: [
      { text: "Giải thích: Nhấp nháy đèn khi máy lọc quá 90 phút nhưng bình chưa đầy. → KHÔNG phải hỏng máy." },
      { text: "Kiểm tra van khóa nguồn nước đầu vào: ? Bị khóa? Đang cúp nước? Đường ống có gấp khúc? → Nếu đang khóa → mở ra hoàn toàn. →Nếu có gấp khúc, xử lý để ống được thẳng" },
      { text: "Kiểm tra phao chống tràn dưới đáy máy: → Có nước bên trong không? + Nếu phao ngập: → Rút điện → xả nước → lau khô → cắm lại → chờ 25–30 phút." },
      { text: "Thử lấy nước → Được → FOC. → Vẫn không khắc phục được → Tạo WO chuyển ASP" },
    ],
  },
  {
    id: "WP14",
    category: "waterPurifierError",
    code: "(WP04) Không lấy được nước nóng",
    title: "Máy lọc nước - Không lấy được nước nóng",
    description: "Không lấy được nước nóng",
    steps: [
      { text: "- Không lấy được nước nóng tại 1 thời điểm, không lấy được nước nóng mọi thời điểm." },
      { text: "Kiểm tra vòi lấy nước nóng có lấy được nước không? → Không có nước → quay về hướng dẫn bước kiểm tra nếu không lấy được nước. → Có nước bên lạnh nhưng không có nước bên nóng → Kiểm tra thao tác KH đã giữ khóa trẻ em >3 giây chưa? → Nếu đã thao tác đúng nhưng không thể lấy nước ra được Tạo WO chuyển ASP kiểm tra →Có nước nhưng không nóng → tiếp tục tư vấn." },
      { text: "Công tắc nước nóng đã bật chưa? →Nếu chưa → Bật lên" },
      { text: "Chế độ ECO có đang bật không? → ECO + ánh sáng yếu → tắt nóng → Tắt ECO đi." },
      { text: "Hướng dẫn chờ 30–45 phút: → Máy cần thời gian đun nóng lại." },
      { text: "Hướng dẫn khách ấn giữ nút mở khóa nước nóng trong 3s và bấm nút lấy nước nóng để lấy nước." },
      { text: "Sau 45 phút vẫn không nóng: → Tạo WO báo ASP kiểm tra." },
    ],
  },
  {
    id: "WP15",
    category: "waterPurifierError",
    code: "(WP05) Lấy nước nóng nhưng nước ra yếu",
    title: "Máy lọc nước - Lấy nước nóng nhưng nước ra yếu",
    description: "Lấy nước nóng nhưng nước ra yếu",
    steps: [
      { text: "Công tắc nước nóng phía sau máy đã bật chưa? →Nếu chưa → Bật lên và đợi tối thiểu 15 phút" },
      { text: "Hướng dẫn khách kiểm tra trên màn hình chức năng cảm ứng nút \"Hot\" khách chọn mức nhiệt độ 45/70/95 độ khi lấy nước sẽ ra mạnh hay yếu để nước được làm nóng. (nhiệt độ càng cao nước ra càng chậm để được làm nóng)" },
      { text: "Hướng dẫn thao tác lấy nước: Nhấn Hot → chọn nhiệt độ → giữ mở khóa 3s → bấm lấy nước." },
      { text: "Lưu ý: Khóa có thể tắt trên app TSmartLife." },
    ],
  },
  {
    id: "WP16",
    category: "waterPurifierError",
    code: "(WP07) Báo lỗi E6/ Không lấy được nước",
    title: "Máy lọc nước - Báo lỗi E6/ Không lấy được nước",
    description: "Báo lỗi E6/ Không lấy được nước / - Trường hợp CC ưu tiên chuyển ASP kiểm tra.",
    steps: [
      { text: "Giải thích: E6 = máy lọc quá 90–120 phút nhưng bình chưa đầy. → KHÔNG phải hỏng máy." },
      { text: "Kiểm tra van khóa nguồn nước đầu vào: ? Bị khóa? Đang cúp nước? Đường ống có gấp khúc? → Nếu đang khóa → mở ra hoàn toàn. →Nếu có gấp khúc, xử lý để ống được thẳng" },
      { text: "Kiểm tra phao chống tràn dưới đáy máy: → Có nước bên trong không? + Nếu phao ngập: → Rút điện → xả nước → lau khô → cắm lại → chờ 25–30 phút." },
      { text: "Thử lấy nước → Được → FOC. → Vẫn E6 → Tạo WO chuyển ASP ngay." },
    ],
    videoUrls: [
      { url: "https://www.youtube.com/shorts/MvqbGnmssgk", type: "horizontal" },
    ],
  },
  {
    id: "WP17",
    category: "waterPurifierError",
    code: "(WP08) Tự động chảy nước ra vòi",
    title: "Máy lọc nước - Tự động chảy nước ra vòi",
    description: "Tự động chảy nước ra vòi / - Trường hợp CC ưu tiên chuyển ASP kiểm tra.",
    steps: [
      { text: "Model TWP-N/H/W2396: → Tự chảy không có tác động → Chuyển ASP NGAY." },
      { text: "Model W2398/W2399 (cảm biến lấy nước không chạm): → Kiểm tra vật cản phía trên cảm biến <30cm (kệ, đèn LED, hồng ngoại)." },
      { text: "Tắt cảm biến không chạm NẾU không cần thiết → Chạm đồng thời nút Ambient(nước nguội) + nút lấy nước trong 3 giây. (sau đó thử đưa tay để kiểm tra đã tắt hay chưa)" },
      { text: "Nước chảy vài giọt sau khi lấy xong: → BÌNH THƯỜNG – đặt khăn thấm. + Lấy nước không chạm : HD khách chạm đồng thời 2 phím Ambient+ nút lấy nước trong 3s để tắt/ mở lấy nước không chạm.(Khi đặt tay gần cảm biến không chạm nghe tiếng bíp liên tục là máy đang ở trạng thái khóa.) Nếu máy ở trạng thái đã mở chỉ cần dùng bàn tay che cảm biến từ trên xuống khoảng cách 30-70cm khi máy phát tiếng bíp giữ nguyên bàn tay chờ nước lấy ra vòi,lấy tay ra khỏi cảm biến sẽ ngắt nước." },
    ],
  },
  {
    id: "WP18",
    category: "waterPurifierError",
    code: "(WP09) Hoạt động kêu to, ồn",
    title: "Máy lọc nước - Hoạt động kêu to, ồn",
    description: "Hoạt động kêu to, ồn / - Trường hợp CC ưu tiên chuyển ASP kiểm tra.",
    steps: [
      { text: "Hỏi: Tiếng ồn phát từ đâu? → Máy nén / Bơm lọc / Bơm nước / Tiếng sôi?" },
      { text: "BÌNH THƯỜNG: → Tiếng hoạt động bơm của bơm lọc (Trường hợp nguồn nước nhà KH yếu có thể gây tiếng bơm lớn hơn bình thường một ít) → Tiếng sôi khi làm nóng (phân tử nước + cặn va đập bình). → Tiếng máy nén khi làm lạnh (chỉ kéo dài trong lúc làm lạnh)." },
      { text: "Khẳng định: Tiếng sôi và máy nén là bình thường, tự ngừng khi đạt nhiệt độ." },
      { text: "Tiếng ồn lạ, bất thường, không xác định: → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "WP19",
    category: "waterPurifierError",
    code: "(WP10) Ống xả thải có đặt cao hơn máy được không",
    title: "Máy lọc nước - Ống xả thải có đặt cao hơn máy được không",
    description: "Ống xả thải có đặt cao hơn máy được không",
    steps: [
      { text: "Giải thích KH ống xả nước thải được thiết kế để xả tự nhiên." },
      { text: "Theo tiêu chuẩn ống cần được lắp đặt bằng hoặc thấp hơn vị trí ống từ thân máy" },
      { text: "Tùy thuộc vào điều kiện và nhu cầu của khách có thể lắp cao hơn, tuy nhiên không khuyến nghị tránh khiếu nại về sau do nghẹt đường nước vì ống không thể thoát hết nước bên trong" },
    ],
  },
  {
    id: "WP20",
    category: "waterPurifierError",
    code: "(WP11) Tại sao lõi lọc mau nghẹt và có được bảo hành không?",
    title: "Máy lọc nước - Tại sao lõi lọc mau nghẹt và có được bảo hành không?",
    description: "Tại sao lõi lọc mau nghẹt và có được bảo hành không?",
    steps: [
      { text: "Giải thích: Lõi lọc là phụ kiện tiêu hao. → Chất lượng nước kém → lõi nghẹt nhanh hơn." },
      { text: "Chính sách: Lõi lọc KHÔNG được bảo hành miễn phí." },
      { text: "Tư vấn KH mua lõi chính hãng. → Không tự thay được → Báo trạm dịch vụ (có phí). Tiêu chuẩn Toshiba: TDS đầu vào ≤ 300 ppm." },
    ],
  },
  {
    id: "WP21",
    category: "waterPurifierError",
    code: "(WP12) Nước tự chảy dù không có tác động của khách",
    title: "Máy lọc nước - Nước tự chảy dù không có tác động của khách",
    description: "Nước tự chảy dù không có tác động của khách",
    steps: [
      { text: "Kiẻm tra vị trí đặt máy lọc nước, máy có đặt trong hộc tủ hoặc kệ không? → Nếu có, kiểm tra khoảng cách có <30cm không?" },
      { text: "Model W2398/W2399 được trang bị cảm biến không chạm. → Kiểm tra vật cản phía trên cảm biến <30cm (kệ, đèn LED, hồng ngoại)." },
      { text: "Tắt cảm biến không chạm NẾU không dùng tính năng này và khi máy đang đặt dưới hộc tủ. kệ → Chạm đồng thời nút Ambient(nước nguội) + nút lấy nước trong 3 giây. (sau đó thử đưa tay để kiểm tra đã tắt hay chưa)" },
      { text: "Nước chảy vài giọt sau khi lấy xong: → BÌNH THƯỜNG – đặt khăn thấm." },
    ],
  },
  {
    id: "WP22",
    category: "waterPurifierError",
    code: "(WP13) Giải thích hiện tượng khách hàng lấy nước nóng buổi sáng nhưng nước không nóng khi khách hàng chọn chức năng ECO",
    title: "Máy lọc nước - Giải thích hiện tượng khách hàng lấy nước nóng buổi sáng nhưng nước không nóng khi khách hàng chọn chức năng ECO",
    description: "Giải thích hiện tượng khách hàng lấy nước nóng buổi sáng nhưng nước không nóng khi khách hàng chọn chức năng ECO",
    steps: [
      { text: "Nguyên lý ECO: cảm biến ánh sáng yếu 1 phút → máy tắt nóng để tiết kiệm điện." },
      { text: "Có vật che cảm biến ánh sáng không? (khăn, đồ vật phía trên máy)." },
      { text: "Muốn nước nóng buổi sáng → Tắt ECO trước khi dùng hoặc đợi đủ thời gian làm nóng nước" },
    ],
  },
  {
    id: "WP23",
    category: "waterPurifierError",
    code: "(WP15) Nước lấy ra ở vòi yếu",
    title: "Máy lọc nước - Nước lấy ra ở vòi yếu",
    description: "Nước lấy ra ở vòi yếu",
    steps: [
      { text: "Ống thoát khí nóng (thoát hơi) sau máy: → Đã lắp chưa? Nằm xuôi xuống? Không dài >3m? (A2–A3)" },
      { text: "Van khóa bình áp đã mở hoàn toàn chưa? → Nếu chưa → Mở hoàn toàn van" },
      { text: "Áp lực nước đầu vào có quá yếu không? → Thử mở vòi nước khác trong nhà xem mạnh không." },
      { text: "Kiểm tra hết mà vẫn yếu: → Tạo WO chuyển ASP." },
    ],
    videoUrls: [
      { url: "https://www.youtube.com/watch?v=Ch1BPKrH0wo&list=PLfUiFUmhOVfet4L5nmFd29V4ax2ztnZ65", type: "horizontal" },
    ],
  },
  {
    id: "WP24",
    category: "waterPurifierError",
    code: "(WP16) Thời gian làm lạnh sau khi máy lọc đầy nước là bao lâu?",
    title: "Máy lọc nước - Thời gian làm lạnh sau khi máy lọc đầy nước là bao lâu?",
    description: "Thời gian làm lạnh sau khi máy lọc đầy nước là bao lâu?",
    steps: [
      { text: "Model A3: Thời gian làm lạnh ~45–60 phút. Thời giàn làm nóng 15-20 phút Công suất làm lạnh 2L/h ≤10°C | làm nóng 4L/h ≥85°C." },
      { text: "Model A2: lần đầu ~3 tiếng. Trung bình 2 tiếng. Nếu >5 tiếng chip vẫn sáng → Có khả năng hư chip → Báo ASP. Công suất làm lạnh 0,6L/h ≤15°C | làm nóng 4L/h ≥85°C" },
      { text: "Nếu chờ sau hơn 60 phút (A3) và hơn 5 tiếng (A2) → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WP25",
    category: "waterPurifierError",
    code: "(WP17) Nhiệt độ nước nóng + nước lạnh không đạt như mong muốn",
    title: "Máy lọc nước - Nhiệt độ nước nóng + nước lạnh không đạt như mong muốn",
    description: "Nhiệt độ nước nóng + nước lạnh không đạt như mong muốn",
    steps: [
      { text: "Kiểm tra công tắc làm nóng/lạnh đã bật hay chưa? →Nếu chưa → Bật công tắc và đợi theo thời gian." },
      { text: "Model A3: Thời gian làm lạnh ~45–60 phút. Thời giàn làm nóng 15-20 phút Công suất làm lạnh 2L/h ≤10°C | làm nóng 4L/h ≥85°C." },
      { text: "Model A2: lần đầu ~3 tiếng. Trung bình 2 tiếng. Công suất làm lạnh 0,6L/h ≤15°C | làm nóng 4L/h ≥85°C." },
      { text: "Kiểm tra xem khách hàng có lấy quá nhiều nước trong 1 lần lấy nước → hết trữ lượng: → Cần chờ đủ thời gian làm nóng/lạnh (đèn tắt) rồi dùng tiếp." },
      { text: "Nếu chờ sau hơn 60 phút (A3) và hơn 5 tiếng (A2) nước vẫn không lạnh → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WP26",
    category: "waterPurifierError",
    code: "(WP18) Nước sau khi lọc có những bọt trắng nhỏ li ti",
    title: "Máy lọc nước - Nước sau khi lọc có những bọt trắng nhỏ li ti",
    description: "Nước sau khi lọc có những bọt trắng nhỏ li ti",
    steps: [
      { text: "Xác nhận: Lần đầu dùng hoặc vừa thay lõi mới không?" },
      { text: "Giải thích: Bọt trắng = không khí trong lõi mới bị đẩy ra. → Hiện tượng BÌNH THƯỜNG, không phải lỗi." },
      { text: "Khẳng định: Bọt sẽ tự hết sau vài lần lấy nước." },
    ],
  },
  {
    id: "WP27",
    category: "waterPurifierError",
    code: "(WP20) Cánh cửa/ mặt sản phẩm bị bể",
    title: "Máy lọc nước - Cánh cửa/ mặt sản phẩm bị bể",
    description: "Cánh cửa/ mặt sản phẩm bị bể",
    steps: [
      { text: "- Thuyết phục khách hàng gửi các hình ảnh để CC làm việc với TS: - Hình tổng thể tủ. Khoanh vị trí lỗi - Hình lỗi chi tiết (3- 4 tấm hình) Riêng TH của Dealer - Hình 4 mặt vỏ thùng - Hình 4 mặt tủ - Hình bên trong tủ - Hình tem tũ - Chi tiết lỗi" },
    ],
  },
  {
    id: "WP28",
    category: "waterPurifierError",
    code: "(WP21) Khi lấy nước nóng/ lạnh, nước RỈ NƯỚC SAU LƯNG MÁY",
    title: "Máy lọc nước - Khi lấy nước nóng/ lạnh, nước RỈ NƯỚC SAU LƯNG MÁY",
    description: "Khi lấy nước nóng/ lạnh, nước RỈ NƯỚC SAU LƯNG MÁY / - Trường hợp CC ưu tiên chuyển ASP kiểm tra.",
    steps: [
      { text: "CC nhờ khách hàng kiểm tra các đường ống phía sau lưng máy." },
      { text: "Kiểm tra ống sau lưng máy trên cùng (màu xám), vị trí ống có tên \"ống thoát hơi\" trên cùng → Đã được gắn hoặc gắn chặt chưa? →Nếu chưa → cần gắn ống để thoát hơi đúng cách. (vị trí đường thoát phải thấp hơn vị trí lắp ống sau lưng máy) →Nếu đã gắn → thử rút ra và cắm lại để đảm bảo đã gắn chặt" },
      { text: "Thử lấy nước nóng → vòi lạnh còn rỉ không? →Nếu Hết → FOC. Vẫn rỉ → Tạo WO." },
    ],
  },
  {
    id: "WP29",
    category: "waterPurifierError",
    code: "(WP22) Đọng nước ở khoang đặt máy nén",
    title: "Máy lọc nước - Đọng nước ở khoang đặt máy nén",
    description: "Đọng nước ở khoang đặt máy nén",
    steps: [
      { text: "CC tư vấn KH kiểm tra xem lượng nước nhiều hay ít: Nếu ít: Khả năng nước đọng sương ở đường ống nước lạnh bên dưới bình chứa. Đây là hiện tượng bình thường khi đường ống nước lạnh gặp điều kiện độ ẩm cao. Tư vấn khách hàng nếu đọng vài giọt thì không phải là sự cố Nếu nhiều đến mức tác động phao chống tràn: Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WP30",
    category: "waterPurifierError",
    code: "(WP23) Máy không có nguồn",
    title: "Máy lọc nước - Máy không có nguồn",
    description: "Máy không có nguồn",
    steps: [
      { text: "Kiểm tra ổ cắm điện: → Bị lỏng không? Phích cắm có bị cháy không?" },
      { text: "Đề xuất KH thử cắm sang ổ điện khác." },
      { text: "Vẫn không lên nguồn: → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "WP31",
    category: "waterPurifierError",
    code: "(WP24) Không làm đá viên",
    title: "Máy lọc nước - Không làm đá viên",
    description: "Không làm đá viên",
    steps: [
      { text: "Máy mới mua: Cần đợi máy nén làm lạnh nước (tối thiểu 60 phút) trước khi bật tính năng làm đá." },
      { text: "Máy dùng lâu: Bật ĐỒNG THỜI cả 2 tính năng làm đá và làm lạnh nước" },
      { text: "Chờ tối thiểu 60 phút → kiểm tra lại." },
      { text: "Vẫn không làm được đá: → Tạo WO chuyển ASP kiểm tra." },
    ],
  },
  {
    id: "WP32",
    category: "waterPurifierError",
    code: "(WP25) Không lấy được nước nóng/ nước lạnh",
    title: "Máy lọc nước - Không lấy được nước nóng/ nước lạnh",
    description: "Không lấy được nước nóng/ nước lạnh / Trường hợp máy mới lắp đặt",
    steps: [
      { text: "Đây là nguyên lý bảo vệ an toàn của sản phẩm - Tính năng làm nóng/ làm lạnh nước sẽ không hoạt động khi bình chứa nước chưa đầy nước. A./ Kiểm tra KH đã bật công tắc làm nóng/ làm lạnh hay chưa? → Nếu chưa → Chỉ BẬT công tắc khi tiếng bơm đã dừng hẳn B./ Nếu bật nhưng không có nước nóng/ nước lạnh | đèn hiển thị không sáng → Các bước sau:" },
      { text: "HD KH tắt công tắc, rút nguồn điện khỏi ổ cắm" },
      { text: "Đợi 1 phút, cắm lại nguồn điện, lấy nước vòi nóng/ vòi lạnh mỗi bên 1 ly nhỏ" },
      { text: "Đợi đến khi bơm dừng hoạt động hẳn → BẬT CÔNG TẮC NÓNG/ LẠNH" },
      { text: "Nếu đèn hiển thị nóng/ lạnh sáng → Bắt đầu làm nóng/ lạnh nước | sẽ tắt khi đủ nhiệt độ" },
      { text: "Nếu làm theo hướng dẫn nhưng đèn không sáng → Tạo WO chuyển ASP kiểm tra" },
    ],
  },
  {
    id: "WP33",
    category: "waterPurifierError",
    code: "(WP27) Không lấy được nước nóng do mất tính năng Khóa trẻ em",
    title: "Máy lọc nước - Không lấy được nước nóng do mất tính năng Khóa trẻ em",
    description: "Không lấy được nước nóng do mất tính năng Khóa trẻ em",
    steps: [
      { text: "Tính năng Child lock có thể bật hoặc tắt bằng app Tsmart life. Khi tắt tính năng này, nước nóng sẽ lấy bằng cách chạm vào phím nóng + lấy nước để lấy nước như cách lấy nước lạnh hoặc nguội." },
      { text: "Hướng dẫn khách hàng kiểm tra trên app Tsmart life, dòng Child lock On/Off, nếu dòng này đang OFF (màu xám) thì chạm vào để ON (màu xanh) để bật tính năng khóa trẻ em lên" },
      { text: "Nếu đã thao tác nhưng vẫn không thể lấy nước nóng → Tạo WO chuyển ASP" },
    ],
  },
  {
    id: "WP34",
    category: "waterPurifierError",
    code: "(WP28) Không lấy được nước nóng/ lạnh dù đã thao tác.",
    title: "Máy lọc nước - Không lấy được nước nóng/ lạnh dù đã thao tác.",
    description: "Không lấy được nước nóng/ lạnh dù đã thao tác. / Đặc biệt với trường hợp nước nóng",
    steps: [
      { text: "Nhiều trường hợp KH thao tác chưa đúng. TDV hỏi thao tác lấy nước của KH để đảm bảo KH đã thao tác đúng Thao tác lấy nước: NƯỚC NGUỘI: CHẠM PHÍM NGUỘI (AMBIENT) → CHẠM PHÍM LẤY NƯỚC → CHẠM PHÍM LẤY NƯỚC LẦN NỮA ĐỂ DỪNG NƯỚC LẠNH: CHẠM PHÍM LẠNH (COLD) → CHẠM PHÍM LẤY NƯỚC → CHẠM PHÍM LẤY NƯỚC LẦN NỮA ĐỂ DỪNG NƯỚC NÓNG: NHẤN & GIỮ KHÓA TRẺ EM (CHILD LOCK) >3 giây ĐỂ MỞ KHÓA (đến khi phím NÓNG SÁNG) → CHẠM PHÍM LẤY NƯỚC → CHẠM PHÍM LẤY NƯỚC LẦN NỮA ĐỂ DỪNG" },
    ],
  },
  {
    id: "WP35",
    category: "waterPurifierError",
    code: "(WP29) Nhấp nháy tất cả các đèn/ Không lấy được nước",
    title: "Máy lọc nước - Nhấp nháy tất cả các đèn/ Không lấy được nước",
    description: "Nhấp nháy tất cả các đèn/ Không lấy được nước / - Trường hợp CC ưu tiên chuyển ASP kiểm tra.",
    steps: [
      { text: "Giải thích: Nhấp nháy đèn khi máy lọc quá 90 phút nhưng bình chưa đầy. → KHÔNG phải hỏng máy." },
      { text: "Kiểm tra van khóa nguồn nước đầu vào: ? Bị khóa? Đang cúp nước? Đường ống có gấp khúc? → Nếu đang khóa → mở ra hoàn toàn. →Nếu có gấp khúc, xử lý để ống được thẳng" },
      { text: "Kiểm tra phao chống tràn dưới đáy máy: → Có nước bên trong không? + Nếu phao ngập: → Rút điện → xả nước → lau khô → cắm lại → chờ 25–30 phút." },
      { text: "Thử lấy nước → Được → FOC. → Vẫn không khắc phục được → Tạo WO chuyển ASP" },
      { text: "Trong trường hợp tạo WO chuyển ASP → nhắc nhở trạm mang theo linh kiện \"Linh kiện cảm biến mực nước điện tử - PN: 17463200011457\" để thay thế" },
    ],
    videoUrls: [
      { url: "https://www.youtube.com/shorts/MvqbGnmssgk", type: "horizontal" },
    ],
  },
  {
    id: "WP36",
    category: "waterPurifierError",
    code: "(WP30) Rò rỉ nước vòi nóng khi lấy nước lạnh hoặc rò rỉ nước vòi lạnh khi lấy nước nóng",
    title: "Máy lọc nước - Rò rỉ nước vòi nóng khi lấy nước lạnh hoặc rò rỉ nước vòi lạnh khi lấy nước nóng",
    description: "Rò rỉ nước vòi nóng khi lấy nước lạnh hoặc rò rỉ nước vòi lạnh khi lấy nước nóng",
    steps: [
      { text: "CC nhờ khách hàng kiểm tra các đường ống phía sau lưng máy." },
      { text: "Kiểm tra ống sau lưng máy trên cùng (màu xám), vị trí ống có tên \"ống thoát hơi\" trên cùng → Đã được gắn hoặc gắn chặt chưa? →Nếu chưa → cần gắn ống để thoát hơi đúng cách đảm bảo đường thoát phải thấp hơn vị trí lắp ống sau lưng máy. →Nếu đã gắn → thử rút ra và cắm lại để đảm bảo đã gắn chặt" },
      { text: "Thử lấy nước nóng → vòi lạnh còn rỉ không? →Nếu Hết → FOC. Vẫn rỉ → Tạo WO." },
    ],
  },
  {
    id: "WP37",
    category: "waterPurifierError",
    code: "(WP32) Không lấy được nước nóng.",
    title: "Máy lọc nước - Không lấy được nước nóng.",
    description: "Không lấy được nước nóng. / Cần gạt lấy nước nóng bị hỏng, không thao tác lấy nước được.",
    steps: [
      { text: "Hỏi KH không lấy nước được cả 2 vòi, hay chỉ ở vòi nước nóng + Nếu không lấy được nước cả 2 vòi" },
      { text: "Kiểm tra khách hàng trên màn hình hiển thị có nhấp nháy đèn báo thiếu nước (3 model trên) → Nếu nhấp nháy đèn thiếu nước, tư vấn khách thay bình nước, kiểm tra ống hút nước không chạm vào thành bình nước." },
      { text: "Nếu khách hàng phản hồi không lấy được nước ở vòi nóng: → Kiểm tra đã bật công tắc làm nóng phía sau máy chưa? → Hõi kỹ khách hàng đã ấn phím mở khóa trước khi lấy nước nóng chưa?" },
      { text: "Nếu vẫn không khắc phục được → Tạo WO chuyển ASP" },
    ],
    videoUrls: [
      { url: "https://youtube.com/shorts/vE2bTmIV680", type: "horizontal" },
    ],
  },
  {
    id: "WP38",
    category: "waterPurifierError",
    code: "(WP33) Sau khi cúp nước, nếu máy gặp hiện tượng bên dưới:",
    title: "Máy lọc nước - Sau khi cúp nước, nếu máy gặp hiện tượng bên dưới:",
    description: "Sau khi cúp nước, nếu máy gặp hiện tượng bên dưới: / '+ Không lấy được nước ra / + Nhấp nháy đèn giọt nước đỏ hoặc báo E6 / + Nhấp nháy đèn nóng lạnh / + Nhấp nháy tất cả các đèn -N2396",
    steps: [
      { text: "TDV hỏi KH trước đó nhà ở có bị cúp nước, mất nước hay bị thiếu nước trên bồn chứa không? - Nếu có: Hướng dẫn KH rút nguồn điện - Cắm lại sau 1 phút và theo dõi. - Nếu không: Tư vấn theo các mã WP06, WP07, WP14" },
    ],
  },
];

import type { ErrorItem } from "./errors";

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
];

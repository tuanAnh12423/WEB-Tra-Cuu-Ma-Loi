import type { ErrorItem } from "./errors";

export const washingErrors: ErrorItem[] = [
  {
    id: "W01",
    category: "washing",
    code: "(WM01) Cảnh báo E1",
    subtype: "Lồng đứng",
    title: "Máy giặt lồng đứng không có nước cấp trong thời gian quy định",
    description:
      "Máy giặt lồng đứng không có nước cấp trong một khoảng thời gian. Lý do áp lực nước quá yếu. Lưới lọc Van cấp bẩn.",
    steps: [
      {
        text: "Kiểm tra ống và vòi khoá nước cấp của máy giặt.",
        images: [
          "https://lh3.googleusercontent.com/d/1-b_lHmxY0cSLkn0ZyfdoPuPWIaHtTVCr",
        ],
      },
      {
        text: "Nếu áp lực nước quá thấp thời gian cấp nước sẽ không đủ hãy cải thiện nguồn nước",
        images: [
          "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
        ],
      },
      {
        text: "Kiểm tra lưới lọc van cấp → Vệ sinh nếu bẩn",
        images: [
          "https://lh3.googleusercontent.com/d/1nk21oHoXrBX-d0KODdRJef5jl3MrX1zJ",
          "https://lh3.googleusercontent.com/d/17WB5fAmpXu6MnH-Gl_i5wFIxxMnzVtBO",
        ],
      },
      {
        text: "Sau khi kiểm tra và vệ sinh. Thử lại một chương trình giặt mới",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1c02WRUg_sBBezXaw7aoVCxqbb7TDUmiz",
    ],
    videoUrls: [
      { url: "https://www.youtube.com/embed/I-dCP2bbx5o", type: "horizontal" },
    ],
  },
  {
    id: "W02",
    category: "washing",
    code: "(WM02)CẢNH BÁO E10",
    subtype: "Lồng ngang",
    title:
      "Máy giặt lồng ngang Không có nước cấp trong khoảng thời gian quy định",
    description:
      "Máy giặt không có nước cấp trong một khoảng thời gian. Lý do nước quá yếu. (Chỉ xuất hiện ở máy giặt lồng ngang)",
    steps: [
      {
        text: "Kiểm tra áp lực nước",
        images: [
          "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
        ],
      },
      {
        text: "Kiểm tra lưới lọc van cấp => Vệ sinh nếu bẩn",
        images: [
          "https://lh3.googleusercontent.com/d/1ZduTPVJIyppJ4GxqYcZ-nUAufEZLj1hB",
          "https://lh3.googleusercontent.com/d/1nk21oHoXrBX-d0KODdRJef5jl3MrX1zJ",
        ],
      },
      {
        text: "Kiểm tra vòi khoá nước",
        images: [
          "https://lh3.googleusercontent.com/d/1-b_lHmxY0cSLkn0ZyfdoPuPWIaHtTVCr",
        ],
      },
      {
        text: "Sau khi kiểm tra và vệ sinh xong hãy thử lại một chu trình giặt mới",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1cKsWIHdZZC6pOv-rUqcwh5uLC2_f1rcb",
    ],
    videoUrls: [
      { url: "https://www.youtube.com/embed/I-dCP2bbx5o", type: "horizontal" },
    ],
  },

  {
    id: "W03",
    category: "washing",
    code: "(WM03) CẢNH BÁO E2",
    title: "Máy giặt lồng đứng không thoát nước, không xả nước",
    description: "Sau khi giặt xong máy không bơm nước ra ngoài.",
    steps: [
      {
        text: "Kiểm tra nếu ống thoát nước có đang vắt quá cao phải thả ống xả xuống",
        images: [
          "https://lh3.googleusercontent.com/d/1q25amVal08cVpXzyDANZ6kjYYN5YBxnJ",
          "https://lh3.googleusercontent.com/d/1zYeOB_XkqkLIZkzd8c_LS0Gmwkav01X0",
        ],
      },
      {
        text: "Kiểm tra ống thoát nước có bị gập hoặc tắc không",
        images: [
          "https://lh3.googleusercontent.com/d/1WtO2CcFOlGRuMVsd7xwEViNLSDLoHdG8",
        ],
      },
      { text: "Vệ sinh ống thoát nước nếu có dị vật bên trong" },
    ],
    images: [],
    videoUrls: [
      { url: "https://www.youtube.com/embed/Ai8_TK_SOSA", type: "horizontal" },
    ],
  },
  {
    id: "W04",
    category: "washing",
    code: "(WM04) CẢNH BÁO E21",
    title: "Máy giặt lồng ngang không thoát nước, không xả nước",
    description: "Sau khi giặt xong máy không xả được nước",
    steps: [
      { text: "Kiểm tra ống xả nước có bị gấp khúc, hoặc tắc nghẽn" },
      {
        text: "Kiểm tra bộ lọc bơm xả ở phía trước máy. Vệ sinh nếu như bộ lọc bẩn",
        images: [
          "https://lh3.googleusercontent.com/d/1hNbL-9Ii6Sx0XRLQHFJYWgt0PhIo7tuD",
        ],
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1g0OIGS7xa9dk_U0DKqsq3bz552ZYnXyn",
      "https://lh3.googleusercontent.com/d/1KIOhN9PV7N8xf3eWMdmEFM_mVLkuR3A7",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/cwZoiQgDX-Q?feature=share",
        type: "vertical",
      },
    ],
    //Giao diện KTV
  },
  {
    id: "W05",
    category: "washing",
    code: "(WM09) CẢNH BÁO E7-1, E7-4",
    subtype: "Lồng đứng",
    title: "Máy giặt giặt quá tải hoặc nguồn điện yếu",
    description:
      "Khách hàng giặt quá nhiều đồ vượt số ký của máy giặt. Hoặc nguồn điện của nhà khách hàng quá yếu gây nên tình trạng này (XUẤT HIỆN TRÊN MÁY GIẶT LỒNG ĐỨNG)",
    steps: [
      {
        text: "Bạn cứ yên tâm hiện tượng này không phải là lỗi mà có thể khắc phục tại nhà rất đơn giản.",
      },
      {
        text: "Kiểm tra lại ổ cắm điện, sử dụng loại ổ cắm tốt hơn",
        images: [
          "https://lh3.googleusercontent.com/d/16s4paTA6w5iurRt6EsByaVPUWkRwAcSE",
        ],
      },
      { text: "Lấy bớt quần áo ra khỏi máy giặt" },
      {
        text: "Nhấn thao tác tổ hợp phím theo hướng dẫn để xoá lỗi",
        images: [
          "https://lh3.googleusercontent.com/d/1GDh2QsA6jysFUI40kbOLeENSep95Qch-",
          "https://lh3.googleusercontent.com/d/1L337ieKbaBmShdIy8b8h0qAfsNtT6Yq4",
          "https://lh3.googleusercontent.com/d/1nj3ogz0vJ85uIn423IQfDtMs0OtT8lUT",
          "https://lh3.googleusercontent.com/d/1pXz0oVoZujrFFIPuDxsBWXbByh371ran",
        ],
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1Pj2mpSCSAmjhkr0XMsRbPV-aiMKpcYgJ",
      "https://lh3.googleusercontent.com/d/1tPIFlxQrWr3njEo9jElRPp9uNSkkye9S",
      "https://lh3.googleusercontent.com/d/1hNMu2te5en38DcxYyF9OA0YCOBxAlUVO",
      "https://lh3.googleusercontent.com/d/1oNi_PrYVZPmdpueAijmybV87l95pJmOY",
    ],
    // 🔥 Cấu trúc mới: Mỗi video tự mang theo cấu hình tỷ lệ của chính nó
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/5gh2MvcOuyM?si=Q88pMKKtBFw9Rner",
        type: "vertical",
      },
      {
        url: "https://www.youtube.com/embed/G_bcKXOIVRw?si=wmTHtUvsuPVjGSjs",
        type: "horizontal",
      },
    ],
  },
  {
    id: "W06",
    category: "washing",
    code: "(WM31) MÁY GIẶT RUNG LẮC, ỒN",
    subtypes: ["Lồng đứng", "Lồng ngang"],
    title: "Máy giặt hoạt động rung lắc ồn, Trong quá trình vắt hoặc giặt",
    description:
      "Khi khách hàng giặt, hoặc vắt bằng máy giặt, máy tạo nên âm thanh rung hoặc lắc mạnh lồng giặt, gây tiếng ồn khó chịu",
    steps: [
      {
        text: "Giải thích khách hàng hiện tượng không phải là lỗi và có thể khắc phục tại nhà",
      },
      {
        text: "Hiện tượng chỉ xảy ra khi vị trí đặt máy không cân bằng, đặt trên chân đế gây rung lắc mạnh khi giặt và vắt",
        images: [
          "https://lh3.googleusercontent.com/d/1wyEChm-IpBFB7GVPybXgM5RNbHwQ-7iy",
          "https://lh3.googleusercontent.com/d/1iCf5jKtSF9_Af4SSC0AVCLb6A3g3pByn",
          "https://lh3.googleusercontent.com/d/109q3aiisp1Wm88G8059J0Y6FpwbneG8R",
        ],
      },
      {
        text: "Quần áo bị dồn về 1 phía gây rung lắc => Phân phối lại quần áo",
      },
      {
        text: "Cân chỉnh lại chân máy khi đã đặt máy tại vị trí mặt phẳng cứng, hoặc đã bỏ ra khỏi chân đế",
        images: [
          "https://lh3.googleusercontent.com/d/109q3aiisp1Wm88G8059J0Y6FpwbneG8R",
        ],
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/T4UFSzV5FVE?si=2ErNqQjy--VOJ2I-",
        type: "vertical",
      },
    ],
  },
  {
    id: "W07",
    category: "washing",
    code: "(WM05) CẢNH BÁO E3",
    title: "Máy giặt lồng đứng cảnh báo E3 (Chưa đóng nắp cửa)",
    description:
      "Trong quá trình sử dụng nếu gặp mã cảnh báo E3. Nguyên nhân: Cửa máy giặt chưa đóng kín hoặc kẹt đồ",
    steps: [
      { text: "Kiểm tra và đóng nắp máy giặt" },
      { text: "Kiểm tra có kẹt quần áo khi đóng lại hay không ?" },
      {
        text: "Nếu máy đang đặt trên chân đế thử để máy xuống nền phẳng và thử chu trình khác",
        images: [
          "https://lh3.googleusercontent.com/d/1C1gCiTbEywoo7BaHW7JvEae3utsn3h6I",
          "https://lh3.googleusercontent.com/d/109q3aiisp1Wm88G8059J0Y6FpwbneG8R",
        ],
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1yU58juDaDy2NryKM_g-6_4LJbEZA4Zc8",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/V4Zk5PtISrA?feature=share",
        type: "vertical",
      },
    ],
  },
  {
    id: "W08",
    category: "washing",
    code: "(WM06)CẢNH BÁO E30",
    title: "Máy giặt lồng ngang cảnh báo E30 (Chưa đóng nắp cửa)",
    description:
      "Trong quá trình sử dụng nếu gặp mã cảnh báo E30. Nguyên nhân: Cửa máy giặt chưa đóng kín hoặc kẹt đồ",
    steps: [
      { text: "Kiểm tra và đóng nắp máy giặt" },
      { text: "Kiểm tra có kẹt quần áo khi đóng lại hay không ?" },
      {
        text: "Nếu máy đang đặt trên chân đế thử để máy xuống nền phẳng và thử chu trình khác",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1C1gCiTbEywoo7BaHW7JvEae3utsn3h6I",
      "https://lh3.googleusercontent.com/d/176pmKknZR7938Yi1Fpk0HXsB6wVF5FKF",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/A0lut76uIPY?feature=share",
        type: "vertical",
      },
    ],
  },
  {
    id: "W09",
    category: "washing",
    code: "(WM57) CẢNH BÁO CL",
    title: "Máy giặt hiện Cảnh báo CL (Khoá trẻ em)",
    description:
      "Bạn vừa mở máy lên và máy giặt hiện cảnh báo CL, và bạn không thể thao tác được để giặt quần áo. Phần này sẽ hướng dẫn bạn xử lý vấn đề này.",
    steps: [
      {
        text: "Tìm nút khoá trẻ em trên bảng điều khiển và nhấn giữ trong 3-5 giây để khoá/ mở khoá",
        images: [
          "https://lh3.googleusercontent.com/d/1u_ZmgGEwoNJJ70fmJ_UwK0cjrgNGhKMm",
          "https://lh3.googleusercontent.com/d/1mlyf_u2CZszhbPd0jqJGPlsZJegjycnT",
          "https://lh3.googleusercontent.com/d/1jFtLoMeaeddkqM5HCeVxlcPKNu6Bc3DS",
        ],
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1uvt_1lFnSM8JchKnaL5OnRA_g9pqRcZv",
      "https://lh3.googleusercontent.com/d/19Nx-SSDVO09Q5ZaRsuXMN7Q4m9lRf9wg",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/y_CN6J7xsMI",
        type: "horizontal",
      },
      {
        url: "https://www.youtube.com/embed/oyc7jn9KRho",
        type: "horizontal",
      },
      {
        url: "https://www.youtube.com/embed/I7dGUz5j8tA",
        type: "horizontal",
      },
      {
        url: "https://www.youtube.com/embed/IcW3uDMUkeI",
        type: "horizontal",
      },
    ],
  },
  {
    id: "W010",
    category: "washing",
    code: "(WM38) GIẶT KHÔNG THƠM",
    title: "Máy giặt giặt xong quần áo không thơm",
    description:
      "Sau khi bạn giặt xong, quần áo không thơm. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Nếu model sản phẩm là loại có tự đông châm nước giặt/ xả, cần mở tính năng lên",
      },
      {
        text: "Hãy chú ý xem bạn có bỏ nhầm nước giặt/ bột giặt, vào ngăn chứa nước xả hay không, hoặc ngược lại",
        images: [
          "https://lh3.googleusercontent.com/d/1GzcMhhT_pLTthsWYMAh-k60NgRC9K7HY",
        ],
      },
      {
        text: "Nếu đã sử dụng một loại nước giặt, nước xả 1 thời gian dài, hãy thử đổi loại khác và giặt lại",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1fevsmIDC91WAvEm4RIvFjtm9u4OzSdVT",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/Bp8hk49zUrA",
        type: "horizontal",
      },
    ],
  },
  {
    id: "W011",
    category: "washing",
    code: "GIẶT KHÔNG SẠCH, GIẶT DƠ",
    title: "Máy giặt giặt xong quần áo không sạch",
    description:
      "Sau khi bạn giặt xong, quần áo không sạch. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Hãy chú ý chọn chương trình giặt phù hợp với lượng quần áo cho vào",
      },
      { text: "Hãy lấy hết giấy tờ, hoá đơn khỏi các túi áo, túi quần" },
      { text: "Chú ý bỏ vừa phải lượng đồ, không bỏ quá số ký máy giặt" },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1TyfTWNYVuDlR1cfI6bR_APQSlbOOEGwn",
    ],
    videoUrls: [],
  },
  {
    id: "W012",
    category: "washing",
    code: "(WM59) CÒN NƯỚC TRONG LỒNG GIẶT (Máy giặt cửa trên)",
    title:
      "Máy giặt giặt xong vẫn còn nước trong lồng giặt ở máy giặt cửa trên",
    description:
      "Sau khi hoàn tất chu trình giặt, bạn phát hiện còn nước trong lồng giặt, máy không xả ra hết. Phần này sẽ hướng dẫn bạn cách xử lý",
    steps: [
      {
        text: "Kiểm tra ống xả có đang treo lên hay không. Phải thả ống xả xuống đất đối với máy cửa trên",
        images: [
          "https://lh3.googleusercontent.com/d/1WtO2CcFOlGRuMVsd7xwEViNLSDLoHdG8",
        ],
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W013",
    category: "washing",
    code: "(WM61) MÁY GIẶT KHÔNG GIẶT (Máy giặt cửa trước)",
    title: "Máy giặt cửa trước có nguồn nhưng không giặt",
    description:
      "Bạn mở máy lên bấm giặt máy giảm thời gian, nhưng không giặt, không thấy nước cấp hoặc nước cấp vào rất yếu",
    steps: [
      { text: "Kiểm tra van khoá nước cấp của máy. Nếu van bị khoá cần mở ra" },
      {
        text: "Kiểm tra ổ điện cắm máy, nếu ổ điện kém chất lượng cần thay thế và thử lại chương trình khác",
      },
      { text: "Nếu sử dụng máy được một thời gian cần vệ sinh bộ lọc van cấp" },
      {
        text: "Mẹo: Hãy thử chương trình chỉ vắt => Nếu máy vẫn vắt bình thường hãy kiểm tra lại nguồn nước của bạn.",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/14sWU6WV8ItvLxf-ebop9q4bX8UMIWyCz",
      "https://lh3.googleusercontent.com/d/1wm2MThJLQqFllCJRitltj7xT1LK7ygsW",
      "https://lh3.googleusercontent.com/d/17N3mSG5_dGn_Tu_eNMrR2tFa10S9jFYj",
    ],
    videoUrls: [],
  },
  {
    id: "W014",
    category: "washing",
    code: "(WM53) KHÔNG HOÀN TẤT CHU TRÌNH GIẶT, TĂNG THỜI GIAN GIẶT, GIẶT LÂU",
    title:
      "Máy giặt không hoàn tất được chu trình giặt, hoặc bị tăng thời gian giặt",
    description:
      "Bạn bắt đầu chương trình giặt sau khi gần kết thúc máy tự tăng thời gian, hoặc không hoàn tất chu trình giặt",
    steps: [
      {
        text: "Nguồn nước cấp cho máy quá yếu. Thử vệ sinh bộ lọc van cấp nếu sử dụng máy một thời gian dài",
      },
      {
        text: "Kiểm tra ống xả nước của máy. Chỉnh lại ống xả hoặc vệ sinh nếu ống xả bị tắc hoặc gấp khúc",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/14sWU6WV8ItvLxf-ebop9q4bX8UMIWyCz",
      "https://lh3.googleusercontent.com/d/1wm2MThJLQqFllCJRitltj7xT1LK7ygsW",
    ],
    videoUrls: [],
  },
  {
    id: "W015",
    category: "washing",
    code: "(WM48) VẮT KHÔNG KHÔ",
    title: "Máy giặt vắt không khô",
    description:
      "Bạn hoàn thành chu trình giặt nhưng quần áo vẫn vắt chưa khô. Phần này sẽ hướng dẫn bạn cách xử lý vấn đề này",
    steps: [
      {
        text: "Kiểm tra xem có quá nhiều quần áo, hoặc quá ít quần áo, sẽ làm máy giặt hoặc vắt kém hiệu quả",
      },
      {
        text: "Đồ giặt bị dồn về 1 phía. Dàn trải quần áo ra đều khắp lồng giặt",
      },
      {
        text: "Kiểm tra vị trí lắp máy, cân chỉnh lại chân máy nếu máy có dấu hiệu rung lắc",
      },
      {
        text: "Kiểm tra lại ống xả nước, nếu ống xả bị tắc hoặc gấp khúc cần chỉnh ngay",
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/A0lut76uIPY?feature=share",
        type: "vertical",
      },
    ],
  },
  {
    id: "W016",
    category: "washing",
    code: "(WM25) TRÀO BỌT, CÒN XÀ BÔNG TRONG LỒNG GIẶT, QUẦN ÁO",
    title:
      "Máy sau khi giặt xong nhưng vẫn còn xà bông, bột giặt trên quần áo, lồng giặt, cửa,...",
    description:
      "Bạn giặt đồ như thường ngày và sau một hồi xà phòng tràn ra rất nhiều. Phần này sẽ giúp bạn xử lý vấn đề này.",
    steps: [
      {
        text: "Kiểm tra lại loại nước giặt, bột giặt mình đang sử dụng là gì?",
      },
      {
        text: "Nếu là loại cho lồng đứng mà sử dụng cho cửa trước. Bạn nên đổi lại đúng loại cho máy cửa trước.",
      },
    ],
    images: [
      "https://lh3.googleusercontent.com/d/1TyfTWNYVuDlR1cfI6bR_APQSlbOOEGwn",
      "https://lh3.googleusercontent.com/d/1yr1NQfz48rrFreSaVkloSPuRYc3AUwlk",
    ],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/WcfoL8K5FRQ?feature=share",
        type: "vertical",
      },
    ],
  },
  {
    id: "W017",
    category: "washing",
    code: "(WM60) MÁY GIẶT KHÔNG GIẶT (Máy giặt cửa trên)",
    title: "Máy giặt cửa trên có nguồn nhưng không giặt",
    description:
      "Bạn mở máy lên bấm giặt máy giảm thời gian, nhưng không giặt, không thấy nước cấp hoặc nước cấp vào rất yếu, hoặc giặt một lúc máy rung lắc sau đó ngưng không giặt nữa.",
    steps: [
      { text: "Kiểm tra van khoá nước cấp của máy. Nếu van bị khoá cần mở ra" },
      {
        text: "Kiểm tra ổ điện cắm máy, nếu ổ điện kém chất lượng cần thay thế và thử lại chương trình khác",
        images: [
          "https://lh3.googleusercontent.com/d/17N3mSG5_dGn_Tu_eNMrR2tFa10S9jFYj",
        ],
      },
      {
        text: "Nếu sử dụng máy được một thời gian cần vệ sinh bộ lọc van cấp",
        images: [
          "https://lh3.googleusercontent.com/d/1ZduTPVJIyppJ4GxqYcZ-nUAufEZLj1hB",
          "https://lh3.googleusercontent.com/d/1nk21oHoXrBX-d0KODdRJef5jl3MrX1zJ",
          "https://lh3.googleusercontent.com/d/17WB5fAmpXu6MnH-Gl_i5wFIxxMnzVtBO",
        ],
      },
      {
        text: "Kiểm tra máy có lắp đặt trên chân kệ hay không. Bỏ máy xuống sản phẳng và cân bằng lại máy",
        images: [
          "https://lh3.googleusercontent.com/d/1gbBwjE5YZaAji9wa0niOV8mUbDzlgoYM",
        ],
      },
      {
        text: "Mẹo: Hãy thử chương trình chỉ vắt => Nếu máy vẫn vắt bình thường hãy kiểm tra lại nguồn nước của bạn.",
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/V4Zk5PtISrA?si=Q56aG5Y5NqYPms5e",
        type: "vertical",
      },
    ],
  },
  {
    id: "W019",
    category: "washing",
    code: "(WM47) MÁY GIẶT KHÔNG VẮT (Máy giặt cửa trên)",
    title: "Máy giặt cửa trên không vắt khi đã hoàn tất chu trình giặt",
    description:
      "Sau khi hoàn tất chu trình giặt máy giặt cửa trên của bạn không vắt không xả nước ra ngoài. Phần này sẽ hướng dẫn xử lý vấn đề đó.",
    steps: [
      {
        text: "Kiểm tra dây thoát nước của máy có bị đưa lên cao quá 15cm hoặc gấp khúc hay không. Ống xả của máy cửa trên không được treo cao mà phải thả xuống sàn.",
      },
      { text: "Kiểm tra lại cân bằng của máy." },
      {
        text: "Kiểm tra khi bỏ quần áo vào có bị dồn về 1 phía hay không hãy sắp xếp lại quần áo",
      },
      {
        text: "Kiểm tra máy có lắp đặt trên chân kệ hay không. Bỏ máy xuống sản phẳng và cân bằng lại máy",
      },
    ],
    images: [],
    videoUrls: [
      {
        url: "https://www.youtube.com/embed/V4Zk5PtISrA?si=Q56aG5Y5NqYPms5e",
        type: "vertical",
      },
    ],
  },
  {
    id: "W020",
    category: "washing",
    code: "(WM47) MÁY GIẶT KHÔNG VẮT (Máy giặt cửa trước)",
    title: "Máy giặt cửa trước không vắt khi đã hoàn tất chu trình giặt",
    description:
      "Sau khi hoàn tất chu trình giặt máy giặt cửa trước của bạn không vắt không xả nước ra ngoài. Phần này sẽ hướng dẫn xử lý vấn đề đó.",
    steps: [
      {
        text: "Kiểm tra máy dừng vắt ở giai đoạn nào. Có hiển thị báo lỗi trên bảng hiển thị không?",
      },
      {
        text: "Kiểm tra ống xả có bị thả xuống, Cố định lại ống xả theo quy định và theo dõi lại chu trình giặt khác. ",
      },
      {
        text: "Vệ sinh bộ lọc bơm xả.",
      },
      {
        text: "Thử lại chu trình giặt khác nếu không khắc phục được chuyển ASP kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W021",
    category: "washing",
    code: "(WM08) Cảnh báo E4 (Các Model sau này rất ít hiển thị E4 mà thay thành E3)",
    title: "Mất cân bằng chân máy hoặc liên quan đến cửa máy giặt.",
    description:
      "Máy giặt cửa trên hoặc cửa trước báo lỗi E4 hoặc E3. Nguyên nhân: Máy giặt bị mất cân bằng, hoặc liên quan đến cửa máy giặt.",
    steps: [
      {
        text: "Quần áo có thể bị mất cân bằng trong lồng giặt - Nên phân loại đồ trước khi giặt",
      },
      {
        text: "Bạn có thể chỉ giặt một món đồ nặng như chăn bông hoặc quần jean, hoặc những món đồ nhỏ trong lưới giặt. ",
      },
      {
        text: "Có thể bạn đang giặt quá nhiều đồ lớn như ga trải giường.",
      },
      {
        text: "Máy giặt có thể đang bị lắp đặt trên sàn nghiêng hoặc có thể không bằng phẳng.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W022",
    category: "washing",
    code: "(WM10) Lỗi C8",
    title: "Lỗi C8 - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi kết nối. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W023",
    category: "washing",
    code: "(WM11) Lỗi F2",
    title: "Lỗi F2 - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi bộ nhớ. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W024",
    category: "washing",
    subtype: "Lồng đứng",
    code: "(WM12) Lỗi F5",
    title: "Lỗi F5 - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cân đồ. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W025",
    category: "washing",
    code: "(WM13) Lỗi F8",
    title: "Lỗi F8 - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cảm biến mực nước. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W026",
    category: "washing",
    code: "(WM14) Lỗi Fd",
    title: "Lỗi Fd - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi khoá nắp. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W027",
    category: "washing",
    code: "(WM15) Lỗi E50/ E52 / E57/ E58 / E64 /,... ",
    title: "Lỗi liên quan đến motor máy giặt - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi liên quan đến motor máy giặt. Chuyển ASP kiểm tra",
      },
      {
        text: "TĐV báo trạm bảo hành chuẩn bị sẵn linh kiện thay thế cho khách nếu máy nằm trong phạm vi bảo hành.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W028",
    category: "washing",
    code: "(WM16) Lỗi E33",
    title: "Lỗi cảm biến mực nước - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cảm biến mực nước. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W029",
    category: "washing",
    code: "(WM17) Lỗi E34",
    title: "Lỗi cảm biến nhiệt độ nước - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cảm biến nhiệt độ nước. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W030",
    category: "washing",
    code: "(WM18) Lỗi E35",
    title: "Lỗi cảm biến nhiệt độ nước - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cảm biến nhiệt độ nước. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W031",
    category: "washing",
    code: "(WM19) Lỗi E36",
    title: "Lỗi cảm biến nhiệt độ. - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi cảm biến nhiệt độ. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W032",
    category: "washing",
    code: "(WM20) Lỗi E37",
    title: "Lỗi hệ thống sấy. - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi hệ thống sấy. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W033",
    category: "washing",
    code: "(WM21) Lỗi E38",
    title: "Lỗi hệ thống sấy. - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi hệ thống sấy. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W034",
    category: "washing",
    code: "(WM22) Lỗi E3A",
    title: "Lỗi hệ thống sấy. - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi hệ thống sấy. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W035",
    category: "washing",
    code: "(WM23) Lỗi E80",
    title: "Lỗi bo mạch chính. - Không thể tư vấn.",
    description: "Lỗi liên quan đến kỹ thuật máy giặt",
    steps: [
      {
        text: "Lỗi bo mạch chính. Chuyển ASP kiểm tra",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W036",
    category: "washing",
    code: "(WM24) Nước còn đọng 1 ít trong hộc chứa xà phòng/ nước xã vải",
    title: "Còn nước trong hộc chứa xà phòng/ nước xã vải.",
    description:
      "Sau khi giặt xong vẫn còn nước trong hộc chứa xà phòng/ nước xã vải. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Áp lực nước thấp (sách HDSD). Hãy kiểm tra lại áp lực nước cấp cho máy giặt.",
      },
      {
        text: "Máy bị nghiêng, không cân bằng. Hãy kiểm tra lại vị trí đặt máy giặt, cân chỉnh lại chân máy.",
      },
      {
        text: "Hộc nước xã/ nước giặt bị nghẹt. Hãy vệ sinh hộc chứa nước giặt/ nước xã vải.",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W037",
    category: "washing",
    code: "(WM26) Mùi bất thường",
    title: "Mùi bất thường sau khi giặt.",
    description:
      "Sau khi giặt xong vẫn còn mùi bất thường. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Có thể có nấm mốc, bụi bẩn hoặc cặn chất tẩy rửa trên lồng giặt, ống xả có ghim vào đường thoát nước không?",
      },
      {
        text: "TDV tư vấn khách hàng vệ sinh vệ sinh ron cao su (đối với các model máy giặt cửa trước)",
      },
      {
        text: "Kiểm tra model có chức năng vệ sinh lồng giặt và khuyến nghị khách hàng thực hiện. Bao lâu rồi chưa vệ sinh máy giặt?",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W038",
    category: "washing",
    code: "(WM27) Tất cả các phím không thể điều khiển được",
    title: "Tất cả các phím không thể điều khiển được",
    description:
      "Không thể thao tác hay điều khiển các phím trên bảng điều khiển. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Khóa trẻ em có thể đang được kích hoạt. Hãy kiểm tra và tắt chế độ khoá trẻ em (CL) nếu đang bật.",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W039",
    category: "washing",
    code: "(WM28) Không thể mở nắp cửa khi hết chương trình giặt",
    title: "Không thể mở nắp cửa khi hết chương trình giặt",
    description:
      "Sau khi giặt xong không thể mở nắp cửa. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Máy giặt cửa TRÊN: TDV báo KH rút nguồn và 1 phút sau cắm lại",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W040",
    category: "washing",
    code: "(WM29) Máy mất nguồn",
    title: "Máy mất nguồn",
    description:
      "Máy giặt bật không lên nguồn hoặc đang thao tác thì bị mất nguồn. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "TDV tư vấn KH kiểm tra lại cắm điện/ phích cắm, ổ cắm điện, dây nguồn, cầu dao điện, aptomat, dây điện có bị hở hay không.",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W041",
    category: "washing",
    code: "(WM30) Hiển thị các thay đổi thời gian còn lại",
    title: "Hiển thị các thay đổi thời gian còn lại",
    description:
      "Máy giặt giặt lâu, hoặc giặt gần xong thì tăng lại thời gian lên. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Thời gian giặt có thể bị kéo dài nếu tải không cân bằng, vì máy giặt cố gắng điều chỉnh sự mất cân bằng.",
      },
      {
        text: "Thời gian giặt có thể bị kéo dài khi có quá nhiều bọt, vì cần phải thực hiện thêm hành động loại bỏ bọt.",
      },
      {
        text: "Áp lực nước yếu có thể kéo dài thời gian cấp nước vào lồng giặt, vì vậy hãy kiểm tra áp lực nước.",
      },
      {
        text: "Đường thoát nước xả của máy đang lắp đặt sai. (Hãy kiểm tra máy của KH là cửa trước hay cửa trên).",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W042",
    category: "washing",
    code: "(WM32) Tiếng ồn trong chu kỳ xả nước",
    subtype: "Lồng ngang",
    title: "Tiếng ồn trong chu kỳ xả nước",
    description:
      "Máy đang xả nước và KH nghe thấy tiếng ồn. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Điều này là bình thường. Có thể có tiếng ồn khi máy bơm xả đang hoạt động (chỉ xuất hiện máy giặt cửa trước)",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W043",
    category: "washing",
    code: "(WM33) Tiếng ồn hoặc độ rung bất thường ",
    subtype: "Lồng ngang",
    title: "Tiếng ồn hoặc độ rung bất thường ",
    description:
      "Máy đang hoạt động và có tiếng ồn hoặc rung mạnh. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Tiếng của motor xã nước (chỉ có ở máy giặt lồng ngang)",
      },
      {
        text: "Các bu lông vận chuyển có thể chưa được tháo ra.",
      },
      {
        text: "Máy giặt có thể được lắp đặt trên bề mặt dốc hoặc không ổn định hoặc đặt trên chân inox, hoặc chân máy gập gềnh",
      },
      {
        text: "Có thể có vật lạ bên trong lồng giặt.",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W044",
    category: "washing",
    code: "(WM34) Nước cấp và xã ra đồng thời liên tục",
    title: "Nước cấp và xã ra đồng thời liên tục",
    description:
      "Máy cấp nước và xả nước đồng thời liên tục. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Kiểm tra lại van cấp nước có bị bẩn. (Vệ sinh)",
      },
      {
        text: "Kiểm tra lại ống xả có bị thả xuống (Nếu là máy giặt lồng ngang). Nếu bị thả xuống giải thích với KH và hướng dẫn KH treo lại ống xả lên theo HDSD.",
      },
      {
        text: "Máy giặt có thể được lắp đặt trên bề mặt dốc hoặc không ổn định hoặc đặt trên chân inox, hoặc chân máy gập gềnh",
      },
      {
        text: "Đối với máy giặt lồng ngang nếu ống xã không được treo cao sẽ xuất hiện tình trạng này.",
      },
      {
        text: "Nếu không khắc phục được hãy liên hệ trung tâm bảo hành kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W045",
    category: "washing",
    code: "(WM35) Công tắc cửa đóng/ mở liên tục",
    title: "Công tắc cửa đóng/ mở liên tục",
    description:
      "Công tắc cửa đóng/ mở liên tục. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "TĐV chuyển ASP kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W046",
    category: "washing",
    code: "(WM36) Nước xả ra liên tục",
    title: "Nước xả ra liên tục",
    description: "Nước xả ra liên tục.",
    steps: [
      {
        text: "TĐV chuyển ASP kiểm tra.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W047",
    category: "washing",
    subtype: "Máy sấy",
    code: "(WM37) Quần áo còn ướt sau khi sấy. Sấy không khô",
    title: "Quần áo còn ướt sau khi sấy, sấy không khô",
    description:
      "Quần áo còn ướt sau khi sấy, sấy không khô. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Phân loại đồ trước khi cho vào máy sấy. Nên vắt quần áo ráo nước để máy sấy sấy hiệu quả hơn.",
      },
      {
        text: "Không nên sấy vượt quá số kg quy định, Tư vấn KH sử dụng loại ổ điện tốt.",
      },
      {
        text: "Nếu KH không phân loại quần áo, nên hướng dẫn KH chọn chương trình đồ hỗn hợp và chọn mức sấy cao nhất. Sau đó sấy lại 1 lần khác",
      },
      {
        text: "Kiểm tra và vệ sinh bộ lọc xơ vải.",
      },
    ],
    images: [],
    videoUrls: [],
  },
  {
    id: "W048",
    category: "washing",
    code: "(WM38) Quần áo giặt không thơm",
    title: "Quần áo giặt không thơm",
    description:
      "Quần áo giặt không thơm sau khi giặt xong. Phần này sẽ hướng dẫn bạn xử lý vấn đề đó.",
    steps: [
      {
        text: "Xác định ngày mua nếu khách hàng mua thời gian dài. HD KH thuê thợ vệ sinh chuyên sau máy giặt. Và HD KH vệ sinh máy hằng ngày (khay chứa nước giặt, bộ lọc van cấp,...)",
      },
      {
        text: "TDV xác nhận model máy → xác nhận có chức năng dosing không?",
      },
      {
        text: "Không có auto dosing: tư vấn khách hàng có thay đổi loại nước giặt gần đây không? Thuyết phục KH thêm/ bớt nước xã cho phù hợp.",
      },
      {
        text: "Nếu có Auto Dosing. Hướng dẫn KH bật tính năng.",
      },
    ],
    images: [],
    videoUrls: [],
  },
];

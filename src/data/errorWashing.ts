import type { ErrorItem } from "./errors";

export const washingErrors: ErrorItem[] = [
  {
    id: "W01",
    category: "washing",
    code: "Cảnh báo E1",
    title: "Máy giặt lồng đứng không có nước cấp trong thời gian quy định",
    description: "Máy giặt lồng đứng không có nước cấp trong một khoảng thời gian. Lý do áp lực nước quá yếu. Lưới lọc Van cấp bẩn.",
    steps: [
      { text: "Kiểm tra ống và vòi khoá nước cấp của máy giặt.", images: ["https://lh3.googleusercontent.com/d/1-b_lHmxY0cSLkn0ZyfdoPuPWIaHtTVCr"] },
      { text: "Nếu áp lực nước quá thấp thời gian cấp nước sẽ không đủ hãy cải thiện nguồn nước", images: ["https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v"] },
      {
        text: "Kiểm tra lưới lọc van cấp → Vệ sinh nếu bẩn",
        images: [
          "https://lh3.googleusercontent.com/d/1ZduTPVJIyppJ4GxqYcZ-nUAufEZLj1hB",
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
    code: "CẢNH BÁO E10",
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
    code: "CẢNH BÁO E2",
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
    code: "CẢNH BÁO E21",
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
    code: "CẢNH BÁO E7-1, E7-4",
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
    code: "MÁY GIẶT RUNG LẮC, ỒN",
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
    code: "CẢNH BÁO E3",
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
    code: "CẢNH BÁO E30",
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
    code: "CẢNH BÁO CL",
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
    code: "GIẶT KHÔNG THƠM",
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
    code: "CÒN NƯỚC TRONG LỒNG GIẶT (Máy giặt cửa trên)",
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
    code: "MÁY GIẶT KHÔNG GIẶT (Máy giặt cửa trước)",
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
    code: "KHÔNG HOÀN TẤT CHU TRÌNH GIẶT, TĂNG THỜI GIAN GIẶT, GIẶT LÂU",
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
    code: "VÁT KHÔNG KHÔ",
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
    code: "TRÀO BỌT, CÒN XÀ BÔNG TRONG LỒNG GIẶT, QUẦN ÁO",
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
    code: "MÁY GIẶT KHÔNG GIẶT (Máy giặt cửa trên)",
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
    code: "MÁY GIẶT KHÔNG VẮT (Máy giặt cửa trên)",
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
];
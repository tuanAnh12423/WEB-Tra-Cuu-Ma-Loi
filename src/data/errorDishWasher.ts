import type { ErrorItem } from "./errors";

export const dishWasherError: ErrorItem[] = [
    {
        id: "DW01",
        category: "dishWasher",
        code: "Cảnh báo E1",
        title: "Máy rửa chén hiện cảnh báo E1",
        description:
            "Máy rửa chén vừa bắt đầu chu trình rửa đột nhiên hiện cảnh E1 và không chạy tiếp được",
        steps: [
            {
                text: "Kiểm tra xem có bị cúp nước, hoặc áp lực nước cấp vào có quá yếu. Áp lực nước tối thiểu là: 0.04MPa, Tối đa là: 1MPa.",
                images: [
                    "https://lh3.googleusercontent.com/d/17RWtS1AsR0Qfxtd3B_Te09xQX3AagB9v",
                    "https://lh3.googleusercontent.com/d/1WLexKVEsKO8SD6aQLUmhzuRiTVOwt94N",
                ],
            },
            {
                text: "Kiểm tra van khoá nguồn nước cấp có bị khoá lại hay không ?",
                images: [
                    "https://lh3.googleusercontent.com/d/1-b_lHmxY0cSLkn0ZyfdoPuPWIaHtTVCr",
                ],
            },
            {
                text: "Kiểm tra ống cấp nước có bị gấp khúc hoặc xoắn",
                images: [
                    "https://lh3.googleusercontent.com/d/1w_ljL1Sr4wn2BO_W_80GDTipslvJi-Qo",
                    "https://lh3.googleusercontent.com/d/1XP6ifwy0_hRHL3hj71Hi7UwUu4-fNCEe",
                ],
            },
            {
                text: "Kiểm tra lại ổ cắm điện",
                images: [
                    "https://lh3.googleusercontent.com/d/16s4paTA6w5iurRt6EsByaVPUWkRwAcSE",
                ],
            },
        ],
        images: [
            "https://lh3.googleusercontent.com/d/1egUhySEkbnAwsHWBkmriTliPWDy6pEqk",
            "https://lh3.googleusercontent.com/d/1qG-yZUQ3XwasKqqOP-wqd5lJltD4x9As",
        ],
    },
    {
        id: "DW02",
        category: "dishWasher",
        code: "Máy rửa chén sấy không khô",
        title: "Máy rửa chén sau khi rửa xong chén đĩa không khô",
        description:
            "Sau khi rửa xong chu trình bạn mở cửa máy ra và phát hiện chén đĩa có cái khô cái không, hoặc chưa khô hẳn",
        steps: [
            {
                text: "Kiểm tra đèn muối và nước bóng có báo. Nếu thiếu cần bổ sung thêm cả 2",
            },
            {
                text: "Kiểm tra chương trình đang chọn là gì. Một số chương trình không tích hợp tính năng sấy",
            },
            { text: "Bạn nên sử dụng thêm tính năng bảo quản tích hợp trên máy" },
        ],
        images: [
            "https://lh3.googleusercontent.com/d/1xx7u47fe0DWdbkc_BJtsCEXvVW4DT-mg",
        ],
    },
    {
        id: "DW03",
        category: "dishWasher",
        code: "Máy rửa chén rửa không sạch",
        title: "Máy rửa chén sau khi rửa xong chén đĩa không khô",
        description:
            "Sau khi rửa xong chu trình bạn mở cửa máy ra và phát hiện chén đĩa có cái khô cái không, hoặc chưa khô hẳn",
        steps: [
            {
                text: "Kiểm tra đèn muối và nước bóng có báo. Nếu thiếu cần bổ sung thêm cả 2",
            },
            {
                text: "Kiểm tra chương trình đang chọn là gì. Một số chương trình không tích hợp tính năng sấy",
            },
            { text: "Bạn nên sử dụng thêm tính năng bảo quản tích hợp trên máy" },
        ],
        images: [
            "https://lh3.googleusercontent.com/d/1kswgCeI58wIlLp_6CwNE0pMCwIzWfZxU",
            "https://lh3.googleusercontent.com/d/1yWN4JGOQ52vjPR8D1SNjsqVFs9PvQfva",
        ],
    },
];

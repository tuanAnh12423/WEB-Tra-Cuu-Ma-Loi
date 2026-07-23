import type { ErrorItem } from "./errors";

export const dryerError: ErrorItem[] = [
    {
        id: "TD01",
        category: "dryer",
        code: "Máy sấy sấy không khô",
        title: "Máy sấy sau khi hoàn tất chu trình mà quần áo chưa khô",
        description:
            "Bạn sử dụng máy sấy một thời gian, thì một ngày sau khi sấy quần áo thì không còn khô nữa. Phần này sẽ hướng dẫn bạn khắc phục vấn đề này.",
        steps: [
            { text: "Kiểm tra chương trình đang chọn có phù hợp với đồ sấy" },
            { text: "Phân loại quần áo trước khi cho vào sấy" },
            { text: "Kiểm tra bộ lọc xơ vải đã được vệ sinh hay chưa" },
            { text: "Kiểm tra đường ống thông hơi có bị chặn hoặc xoắn (Tuỳ model)" },
            { text: "Kiểm tra và đồ hộp chứa nước, nếu hộp đã đầy (Tuỳ model)" },
        ],
        images: [
            "https://lh3.googleusercontent.com/d/1037LS7VuiTooJG0yj_FaydAD8cwhgWu9",
            "https://lh3.googleusercontent.com/d/1u7_HVKrBOB28AExzURh5VOY8Q0SfJEa8",
            "https://lh3.googleusercontent.com/d/1Z41qemMwdbEBvuYG3A0CCKRWrjjO29Ap",
        ],
        videoUrls: [
            {
                url: "https://www.youtube.com/embed/0UiIGGD1QsY",
                type: "horizontal",
            },
            {
                url: "https://www.youtube.com/embed/AVntvRo0Pnk?feature=share",
                type: "vertical",
            },
        ],
    },
    {
        id: "TD02",
        category: "dryer",
        code: "Máy sấy bị giảm thời gian",
        title:
            "Máy sấy đang trong chu trình sấy thì bị giảm thời gian đột ngột và quần áo chưa khô",
        description:
            "Bạn vừa mua một chiếc máy sấy, nhưng khi đang sấy lại bị giảm thời gian, kết thúc sớm hơn, mà quần áo lại chưa khô. Phần này sẽ hướng dẫn bạn hiểu rõ hơn vấn đề đó.",
        steps: [
            { text: "Kiểm tra chương trình đang chọn có phù hợp với quần áo sấy" },
            { text: "Phân loại quần áo trước khi cho vào sấy" },
            {
                text: "Nếu bạn đang cho quá ít quần áo (Chỉ 1, 2 bộ) thì nên bỏ thêm để cảm biến có thể cảm nhận quần áo dễ hơn",
            },
        ],
        images: [
            "https://lh3.googleusercontent.com/d/1g2KJIVSCypzHhuSuR1lLFeStnoinqpXm",
        ],
    },
];

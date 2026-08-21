export interface DeviceImageItem {
  id: string;
  title: string;
  category: "washing" | "fridge" | "dishwasher" | "waterPurifier";
  model: string;
  images: string[];
  description: string;
  keywords: string[];
}

export const deviceImages: DeviceImageItem[] = [
  {
    id: "img_f9_detail",
    title: "Hình ảnh Máy rửa chén DW-15F9(B)-VN",
    category: "dishwasher",
    model: "DW-15F9",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/dmx/Products/Images/5475/337769/Kit/may-rua-chen-doc-lap-toshiba-dw-15f9-b-vn-note-638868998608951403.jpg", // Ảnh bảng điều khiển
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/kitchen-appliances/dishwasher/dw-15f9(b)-vn/pdp-kitchen-appliances-dishwasher-dw-15f9(b)-vn-15F9-CLOSE-DOOR-1-1200x1200.png", // Ảnh khay xếp đồ
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/kitchen-appliances/dishwasher/dw-15f9(b)-vn/pdp-kitchen-appliances-dishwasher-dw-15f9(b)-vn-15F9-FULL-OPEN-SIDE-1200x1200.png", // Ảnh bộ lọc rác
    ],
    description:
      "Bao gồm: Sơ đồ nút bấm điều khiển, hệ thống giỏ xếp chén đĩa 3 tầng và cụm bộ lọc đáy.",
    keywords: [
      "anh dw-15f9",
      "so do 15f9",
      "bang dieu khien f9",
      "hinh anh 15f9",
    ],
  },
  {
    id: "img_rf611_detail",
    title: "Hình ảnh Tủ lạnh Multi Door GR-RF611WI",
    category: "fridge",
    model: "GR-RF611WI",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/multi-door-refrigerator/gr-rf611wi-pgv(22)-xk/pdp-refrigerator-multi-door-refrigerator-gr-rf611wi-pgv(22)-xk-6-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/multi-door-refrigerator/gr-rf611wi-pgv(22)-xk/pdp-refrigerator-multi-door-refrigerator-gr-rf611wi-pgv(22)-xk-7-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/multi-door-refrigerator/gr-rf611wi-pgv(22)-xk/pdp-refrigerator-multi-door-refrigerator-gr-rf611wi-pgv(22)-xk-3-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/multi-door-refrigerator/gr-rf611wi-pgv(22)-xk/pdp-refrigerator-multi-door-refrigerator-gr-rf611wi-pgv(22)-xk-1-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/multi-door-refrigerator/gr-rf611wi-pgv(22)-xk/pdp-refrigerator-multi-door-refrigerator-gr-rf611wi-pgv(22)-xk-2-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/multi-door/gr-rf611wi-pgv(22)-xk/Refrigerator-7-1000x1000.jpg",
    ],
    description:
      "Bao gồm: Mặt trước màn hình cảm ứng, cấu tạo khay kính ngăn mát và ngăn kéo Flexible Zone.",
    keywords: [
      "anh tu lanh rf611",
      "hinh anh rf611",
      "so do rf611",
      "bang dieu khien rf611",
    ],
  },
  {
    id: "img_washing_detail",
    title: "Hình ảnh Máy giặt Cửa trước Toshiba TW-T37BZP140MWV(WT)",
    category: "washing",
    model: "TW-T37BZP140MWV(WT)",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/laundry/washer/tw-t37bzp140mwv(wt)/1.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/laundry/washer/tw-t37bzp140mwv(wt)/6.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/laundry/washer/tw-t37bzp140mwv(wt)/3.png",
    ],
    description:
      "Sơ đồ nút bấm, núm xoay chọn chu trình và vị trí dây kéo mở cửa khẩn cấp.",
    keywords: [
      "anh may giat toshiba",
      "hinh anh may giat",
      "bang dieu khien tw-t37BZP140MWV(WT)",
      "japandi",
    ],
  },
  {
    id: "img_waterPurifier",
    title: "Hình ảnh Máy Lọc Nước TOSHIBA TWP-WA3SVN(K)",
    category: "waterPurifier",
    model: "TWP-WA3SVN(K)",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/living-appliances/water-care/twp-wa3svn(k)/pdp-living-appliances-water-care-twp-wa3svn-k-Thumb-66-A3-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/living-appliances/water-care/twp-wa3svn(k)/pdp-living-appliances-water-care-twp-wa3svn-k-Thumb-1-A3-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/living-appliances/water-care/twp-wa3svn(k)/Living-Appliances-A3-2-2000x2000.png",
    ],
    description: "Hình ảnh tổng quan của máy lọc nước",
    keywords: ["hinh anh may loc nuoc A3", "anh loc nuoc A3", "hinh may A3"],
  },
  {
    id: "img_gr_rt236we",
    title: "Hình ảnh tủ lạnh TOSHIBA GR-RT236WE-PMV(68)",
    category: "fridge",
    model: "GR-RT236WE-PMV(68)",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/1.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/2.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/3.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/4.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/5.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt236we-pmv(68)/6.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/rt236-268-310-349/%E1%BA%A2nh4.png",
      "https://lh3.googleusercontent.com/d/1JGRBYlK9Pbb7bjcoh7lIbzqJoYnXUneS",
      "https://lh3.googleusercontent.com/d/1XByHveT8-x2UUxjgCFuxz9V0FHYKYuDL",
      "https://lh3.googleusercontent.com/d/1z1DJWa0Ec1ngmt4ELgL72agiUwK5PbGR",
      "https://lh3.googleusercontent.com/d/1a8cuis-PxevH-LBQO2_HASRBmjmW1Jlx",
      "https://lh3.googleusercontent.com/d/1Pq20s50KfAXv4mXF7b9TcuNVlan2GJqj",
      "https://lh3.googleusercontent.com/d/1LkITXqefyzHw51_3p4eM1NnYaII0EchJ",
      "https://lh3.googleusercontent.com/d/1HV3XGrXkssvw_t7HeZl2KhRDUr206wFO",
      "https://lh3.googleusercontent.com/d/1Afkg1eUd8tpdot7mOpbYw_ruZGrmiTtE",
      "https://lh3.googleusercontent.com/d/1y2noroaHPJ1Ln0awSIhQkOePCx5hjIyN",
      "https://lh3.googleusercontent.com/d/1qhLRYZg3LjPO1tPK9aoixPWXEkKDvb1N",
      "https://lh3.googleusercontent.com/d/1YR6lrC4Xg4ss1EifnNb-Z-wIsGTpf-GY",
      "https://lh3.googleusercontent.com/d/1ODOuiSFfOzfTTljbaSfydcPI88IODHmt",
      "https://lh3.googleusercontent.com/d/1MGC64KyT6u1yvcLH1cj9i26wvBxLjnuI",
      "https://lh3.googleusercontent.com/d/1EkszTVnZfiuV2sEXjHY0FiKx4AF269e7",
      "https://lh3.googleusercontent.com/d/17xMg7Oe56DhgQzfGBJERirqqOCTM2bqn",
    ],
    description: "Hình ảnh tổng quan của tủ lạnh ngăn đá trên",
    keywords: ["hinh tu lanh rt236we", "anh tu lanh rt236", "picture rt236"],
  },
  {
    id: "img_gr_rt303we",
    title: "Hình ảnh tủ lạnh TOSHIBA GR-RT303WE-PMV(52)",
    category: "fridge",
    model: "GR-RT303WE-PMV(52)",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt303we-pmv(52)/Refrigerator-5-ngan-dong-cuc-lon-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt303we-pmv(52)/Refrigerator-6-ngan-dong-mem-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt303we-pmv(52)/Refrigerator-7-lam-lanh-da-chieu-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt303we-pmv(52)/Refrigerator-8-ke-cua-toi-uu-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt303we-pmv(52)/pdp-refrigerator-top-freezer-refrigerator-gr-rt303we-pmv(52)-1-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt303we-pmv(52)/pdp-refrigerator-top-freezer-refrigerator-gr-rt303we-pmv(52)-2-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt303we-pmv(52)/pdp-refrigerator-top-freezer-refrigerator-gr-rt303we-pmv(52)-3-1200x1200.png",
    ],
    description: "Hình ảnh tổng quan của tủ lạnh ngăn đá trên",
    keywords: [
      "hinh anh tu lanh rt303we",
      "anh tu lanh rt303we",
      "hinh rt303we",
      "anh rt303we",
    ],
  },
  {
    id: "img_gr_rt535wea",
    title: "Hình ảnh tủ lạnh TOSHIBA GR-RT535WEA-PMV(06)-MG",
    category: "fridge",
    model: "GR-RT535WEA-PMV(06)-MG",
    images: [
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt535wea-pmv(06)-mg/pdp-refrigerator-top-freezer-refrigerator-gr-rt535wea-pmv(06)-mg-1-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt535wea-pmv(06)-mg/pdp-refrigerator-top-freezer-refrigerator-gr-rt535wea-pmv(06)-mg-2-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/refrigerator/top-freezer-refrigerator/gr-rt535wea-pmv(06)-mg/pdp-refrigerator-top-freezer-refrigerator-gr-rt535wea-pmv(06)-mg-3-1200x1200.png",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt535wea-pmv(06)-mg/Refrigerator-1-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt535wea-pmv(06)-mg/Refrigerator-3-1000x1000.jpg",
      "https://web-res.midea.com/content/dam/toshiba-aem/vn/vn-new/pdp/feature/refrigerator/top-freezer-/gr-rt535wea-pmv(06)-mg/Refrigerator-6-1000x1000.jpg",
    ],
    description: "Hình ảnh tổng quan của tủ lạnh ngăn đá trên",
    keywords: [
      "hinh anh tu lanh rt535wea",
      "anh tu lanh rt535wea",
      "hinh rt535wea",
      "anh rt535wea",
    ],
  },
];

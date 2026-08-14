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
];

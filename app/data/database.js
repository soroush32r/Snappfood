import KetringLogo from "../../public/images/Restaurants/Ketring-logo.jpg";
import KetringBackground from "../../public/images/Restaurants/Ketring-background.jpg";
import PalestineLogo from "../../public/images/Restaurants/Palestine-logo.jpg";
import PalestineBackground from "../../public/images/Restaurants/Palestine-background.jpeg";
import ParastoLogo from "../../public/images/Restaurants/Parasto-logo.jpg";
import ParastoBackground from "../../public/images/Restaurants/Parasto-background.jpg";
import PashaLogo from "../../public/images/Restaurants/Pasha-logo.jpg";
import PashaBackground from "../../public/images/Restaurants/Pasha-background.jpg";
import ShilaLogo from "../../public/images/Restaurants/Shila-logo.jpg";
import ShilaBackground from "../../public/images/Restaurants/Shila-background.jpg";

import JojeKetring from "../../public/images/Foods/Ketring_Joje.jpeg";
import KobidehKetring from "../../public/images/Foods/Ketring_Kobideh.jpeg";
import ZereshtKetring from "../../public/images/Foods/Ketring_Zereshk.jpeg";
import TorshKetring from "../../public/images/Foods/Ketring_Torsh.jpeg";
import MexicanKetring from "../../public/images/Foods/Ketring_Mexican.jpeg";
import PalestineDigi from "../../public/images/Foods/Palestine_Digi.jpg";
import PalestineDigi1 from "../../public/images/Foods/Palestine_Digi_1.jpg";
import PalestinePackage from "../../public/images/Foods/Palestine_Package.jpg";
import PalestineMasalaMorgh from "../../public/images/Foods/Palestine_MasalaMorgh.jpg";
import PalestineMasalaMorgh1 from "../../public/images/Foods/Palestine_MasalaMorgh_1.jpg";
import PalestineSalad from "../../public/images/Foods/Palestine_Salad.jpg";
import PalestineKotlet from "../../public/images/Foods/Palestine_Kotlet.jpg";
import Palestine_Kotlet1 from "../../public/images/Foods/Palestine_Kotlet_1.jpg";
import Palestine_Yatimche from "../../public/images/Foods/Palestine_Kotlet_1.jpg";

export const IRANI = "ایرانی";
export const FASTFOOD = "فست فود";
export const KEBAB = "کباب";
export const PIZZA = "پیتزا";
export const BURGER = "برگر";
export const SANDWICH = "ساندویچ";
export const SOKHARI = "سوخاری";
export const PASTA = "پاستا";
export const SALAD = "سالاد";
export const SEAFOOD = "دریایی";
export const INTERNATIONAL = "بین‌الملل";
export const GILANI = "گیلانی";

export const CATEGORIES = [
  IRANI,
  FASTFOOD,
  KEBAB,
  PIZZA,
  BURGER,
  SANDWICH,
  SOKHARI,
  PASTA,
  SALAD,
  SEAFOOD,
  INTERNATIONAL,
  GILANI,
];

export const PRODUCTS = [
  {
    id: 1,
    title: "چلو جوجه کباب",
    description:
      "۴۰۰ گرم برنج ایرانی یک سیخ ۱۶۰ گرم جوجه ( سینه مرغ بدون استخوان مزه دار شده)",
    price: 154000,
    main_img: JojeKetring,
    other_img: "",
    rate: "4.2",
    restaurant_id: 1,
    category: [IRANI, KEBAB],
  },
  {
    id: 2,
    title: "چلو کباب کوبیده",
    description:
      "۴۰۰ گرم برنج ایرانی یک سیخ ۱۵۰ گرم کوبیده (گوشت گوساله و گوسفند))",
    price: 154000,
    main_img: KobidehKetring,
    other_img: "",
    rate: "4.2",
    restaurant_id: 1,
    category: [IRANI, KEBAB],
  },
  {
    id: 3,
    title: "چلو کباب کوبیده(اقتصادی)",
    description:
      "یک سیخ کوبیده ۱۲۰ گرمی با گوشت گوسفندی و گوساله، ۳۰۰ گرم برنج اعلاء ایرانی، کره حیوانی، گوجه کبابی",
    price: 120000,
    main_img: KobidehKetring,
    other_img: "",
    rate: "4.4",
    restaurant_id: 1,
    category: [IRANI, KEBAB],
  },
  {
    id: 4,
    title: "زرشک پلو بامرغ سینه",
    description: "۴۰۰ گرم برنج ایرانی ۳۵۰ گرم مرغ سس پز",
    price: 170000,
    main_img: ZereshtKetring,
    other_img: "",
    rate: "4.2",
    restaurant_id: 1,
    category: [IRANI],
  },
  {
    id: 5,
    title: "چلو جوجه کباب ترش گیلکی",
    description:
      "۴۰۰ گرم برنج ایرانی یک سیخ ۲۵۰ گرم جوجه ( ران مرغ بدون استخوان مزه دار شده)",
    price: 230000,
    main_img: TorshKetring,
    other_img: "",
    rate: "4.2",
    restaurant_id: 1,
    category: [IRANI, KEBAB, GILANI],
  },
  {
    id: 6,
    title: "چلو جوجه کباب مکزیکی",
    description:
      "۴۰۰ گرم برنج ایرانی- یک سیخ ۲۵۰ گرم جوجه( ران مرغ بدون استخوان مزه دار شده)",
    price: 225000,
    main_img: MexicanKetring,
    other_img: "",
    rate: "3.9",
    restaurant_id: 1,
    category: [IRANI, KEBAB, INTERNATIONAL],
  },
  {
    id: 7,
    title: "چلو کباب دیگی از چلوپز",
    description:
      "۱۵۰ گرم گوشت گوساله، ۳۳۵ گرم برنج ساده به همراه ۳۰ گرم برنج زعفرانی (صددرصد ایرانی)، گوجه کبابی، کره یک نفره، بسته بندی بهداشتی مایکروفری",
    price: 138400,
    main_img: PalestineDigi,
    other_img: [PalestineDigi, PalestineDigi1, PalestinePackage],
    rate: "4.2",
    restaurant_id: 2,
    category: [IRANI, KEBAB],
  },
  {
    id: 8,
    title: "مرغ ماسالای هندی با برنج از چلوپز (تند)",
    description:
      "۴۰۰ گرم برنج صددرصد ایرانی درجه یک به همراه سس مخصوص ماسالا، ۳۵۰ گرم ران مرغ، ادویه مخصوص ماسالای هندی، بسته بندی بهداشتی مایکروفری",
    price: 153500,
    main_img: PalestineMasalaMorgh,
    other_img: [PalestineMasalaMorgh, PalestineMasalaMorgh1, PalestinePackage],
    rate: "4.2",
    restaurant_id: 2,
    category: [IRANI],
  },
  {
    id: 9,
    title: "سالاد شیرازی از چلوپز",
    description: "سالاد شیرازی ۱۰۰ گرمی",
    price: 12000,
    main_img: PalestineSalad,
    other_img: [],
    rate: "4.2",
    restaurant_id: 2,
    category: [SALAD],
  },
  {
    id: 10,
    title: "کتلت از چلوپز",
    description:
      "۱۰۰ گرم گوشت چرخ کرده، ۱۴۰ گرم سیب زمینی، ۶۰ گرم گوجه فرنگی اسلایسی، ۶۰ گرم خیارشور، یک عدد نان لواش، بسته بندی بهداشتی مایکروفری",
    price: 112600,
    main_img: PalestineKotlet,
    other_img: [PalestineKotlet, Palestine_Kotlet1, PalestinePackage],
    rate: "4.2",
    restaurant_id: 2,
    category: [IRANI],
  },
  {
    id: 11,
    title: "کتلت از چلوپز",
    description:
      "۱۰۰ گرم گوشت چرخ کرده، ۱۴۰ گرم سیب زمینی، ۶۰ گرم گوجه فرنگی اسلایسی، ۶۰ گرم خیارشور، یک عدد نان لواش، بسته بندی بهداشتی مایکروفری",
    price: 112600,
    main_img: PalestineKotlet,
    other_img: [PalestineKotlet, Palestine_Kotlet1, PalestinePackage],
    rate: "4.2",
    restaurant_id: 2,
    category: [IRANI],
  },
  {
    id: 12,
    title: "خوراک یتیمچه از چلوپز",
    description:
      "۱۲۰ گرم سینه مرغ، بادمجان پوست گرفته شده، کدو خرد شده، گوجه فرنگی نگینی، سیب زمینی، سیر تازه، ادویه مخصوص چلوپز، یک عدد نان لواش، بسته بندی بهداشتی مایکروفری",
    price: 115400,
    main_img: Palestine_Yatimche,
    other_img: [Palestine_Yatimche, PalestinePackage],
    rate: "4.1",
    restaurant_id: 2,
    category: [IRANI],
  },
];

export const RESTAURANTS = [
  {
    id: 1,
    name: "کترینگ سینتو پلو",
    category: [IRANI, KEBAB],
    logo: KetringLogo,
    background: KetringBackground,
    rate: "4.3",
  },
  {
    id: 2,
    name: "چلوپز (فلسطین)",
    category: [IRANI, KEBAB],
    logo: PalestineLogo,
    background: PalestineBackground,
    rate: "4.3",
  },
  {
    id: 3,
    name: "فست فود پرستو",
    category: [FASTFOOD, SOKHARI],
    logo: ParastoLogo,
    background: ParastoBackground,
    rate: "جدید",
  },
  {
    id: 4,
    name: "کترینگ پاشا",
    category: [IRANI, FASTFOOD, PASTA],
    logo: PashaLogo,
    background: PashaBackground,
    rate: "جدید",
  },
  {
    id: 5,
    name: "پیتزا شیلا (حجاب)",
    category: [FASTFOOD, PIZZA, SANDWICH],
    logo: ShilaLogo,
    background: ShilaBackground,
    rate: 4.7,
  },
];

export const DATABASE = {
  categories: CATEGORIES,
  // products: PRODUCTS,
  restaurants: RESTAURANTS,
};

import KetringLogo from "../../public/images/Restaurants/Ketring-logo.jpg";
import KetringBackground from "../../public/images/Restaurants/Ketring-background.jpg";
import PalestineLogo from "../../public/images/Restaurants/Palestine-logo.jpg";
import PalestineBackground from "../../public/images/Restaurants/Palestine-background.jpeg";
import PashaLogo from "../../public/images/Restaurants/Pasha-logo.jpg";
import PashaBackground from "../../public/images/Restaurants/Pasha-background.jpg";
import ShilaLogo from "../../public/images/Restaurants/Shila-logo.jpg";
import ShilaBackground from "../../public/images/Restaurants/Shila-background.jpg";
import SalizLogo from "../../public/images/Restaurants/Saliz-logo.jpeg";
import SalizBackground from "../../public/images/Restaurants/Saliz-background.jpg";

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
import Palestine_Yatimche from "../../public/images/Foods/Palestine_Yatimche.jpg";
import Shila_ChickenCheeze from "../../public/images/Foods/Shila_ChickenCheeze.jpg";
import Shila_Chicken from "../../public/images/Foods/Shila_Chicken.jpg";
import Shila_Mix from "../../public/images/Foods/Shila_Mix.jpg";
import Shila_Morgh from "../../public/images/Foods/Shila_Morgh.jpg";
import Shila_Peperoni from "../../public/images/Foods/Shila_Peperoni.jpg";
import Pasha_Gheimeh from "../../public/images/Foods/Pasha_Gheimeh.jpeg";
import Pasha_Ghormeh from "../../public/images/Foods/Pasha_Ghormeh.jpeg";
import Pasha_Kobideh from "../../public/images/Foods/Pasha_Kobideh.jpeg";
import Pasha_Vaziri from "../../public/images/Foods/Pasha_Vaziri.jpeg";
import Pasha_Zereshk from "../../public/images/Foods/Pasha_Zereshk.jpeg";
import Saliz_Burger from "../../public/images/Foods/Saliz_Burger.jpg";
import Saliz_Mashrom from "../../public/images/Foods/Saliz_Mashrom.jpg";
import Saliz_Zhambon from "../../public/images/Foods/Saliz_Zhambon.jpg";
import Saliz_ZhambonMix from "../../public/images/Foods/Saliz_ZhambonMix.jpg";
import Saliz_Special from "../../public/images/Foods/Saliz_Special.jpeg";

import irani from "../../public/images/All_Food_Category/Irani.jpg";
import fastfood from "../../public/images/All_Food_Category/fastfood.jpg";
import kebab from "../../public/images/All_Food_Category/kebab.jpg";
import pizza from "../../public/images/All_Food_Category/pizza.jpg";
import burger from "../../public/images/All_Food_Category/burger.jpg";
import sandwich from "../../public/images/All_Food_Category/sandwich.jpg";
import sokhari from "../../public/images/All_Food_Category/sokhari.jpg";
import pasta from "../../public/images/All_Food_Category/pasta.jpg";
import salad from "../../public/images/All_Food_Category/salad.jpg";
import seafood from "../../public/images/All_Food_Category/seafood.jpg";
import international from "../../public/images/All_Food_Category/international.jpg";
import gilani from "../../public/images/All_Food_Category/gilani.jpg";

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

export const ALL_CATEGORY_ADDRESS = [
  { url: "irani", img: irani, name: IRANI },
  { url: "fastfood", img: fastfood, name: FASTFOOD },
  { url: "kebab", img: kebab, name: KEBAB },
  { url: "pizza", img: pizza, name: PIZZA },
  { url: "burger", img: burger, name: BURGER },
  { url: "sandwich", img: sandwich, name: SANDWICH },
  { url: "sokhari", img: sokhari, name: SOKHARI },
  { url: "pasta", img: pasta, name: PASTA },
  { url: "salad", img: salad, name: SALAD },
  { url: "seafood", img: seafood, name: SEAFOOD },
  { url: "international", img: international, name: INTERNATIONAL },
  { url: "gilani", img: gilani, name: GILANI },
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
    category: KEBAB,
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
    category: KEBAB,
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
    category: KEBAB,
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
    category: IRANI,
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
    category: GILANI,
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
    category: INTERNATIONAL,
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
    category: KEBAB,
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
    category: IRANI,
  },
  {
    id: 9,
    title: "سالاد شیرازی از چلوپز",
    description: "سالاد شیرازی ۱۰۰ گرمی",
    price: 12000,
    main_img: PalestineSalad,
    other_img: "",
    rate: "4.2",
    restaurant_id: 2,
    category: SALAD,
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
    category: IRANI,
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
    category: IRANI,
  },
  {
    id: 12,
    title: "خوراک یتیمچه از چلوپز",
    description:
      "۱۲۰ گرم سینه مرغ، بادمجان پوست گرفته شده، کدو خرد شده، گوجه فرنگی نگینی، سیب زمینی، سیر تازه، ادویه مخصوص چلوپز، یک عدد نان لواش، بسته بندی بهداشتی مایکروفری",
    price: 115400,
    main_img: Palestine_Yatimche,
    other_img: [Palestine_Yatimche, PalestinePackage],
    rate: "4.7",
    restaurant_id: 2,
    category: IRANI,
  },
  {
    id: 13,
    title: "پیتزا فیتکس مخلوط",
    description:
      "ژامبون گوشت و مرغ، هات داگ فرانکفورتر، قارچ، زیتون، گوجه، فلفل دلمه ای، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده",
    price: 144000,
    main_img: Shila_Mix,
    other_img: "",
    rate: "4.7",
    restaurant_id: 5,
    category: PIZZA,
  },
  {
    id: 14,
    title: "چیکن چیز کلاسیک",
    description: "مرغ سوخاری، پنیر پیتزا، سیب زمینی سرخ شده، سس مخصوص",
    price: 216000,
    main_img: Shila_ChickenCheeze,
    other_img: "",
    rate: "4.7",
    restaurant_id: 5,
    category: SOKHARI,
  },
  {
    id: 15,
    title: "پیتزا فیتکس مرغ و شوید",
    description:
      "سینه مرغ گریل شده، قارچ، شوید، زیتون، جعفری، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده",
    price: 158000,
    main_img: Shila_Morgh,
    other_img: "",
    rate: "4.7",
    restaurant_id: 5,
    category: PIZZA,
  },
  {
    id: 16,
    title: "پیتزا فیتکس پپرونی",
    description:
      "کالباس پپرونی، قارچ، پنیر موزارلا، سس مخصوص، سیب زمینی سرخ شده",
    price: 164000,
    main_img: Shila_Peperoni,
    other_img: "",
    rate: "4.7",
    restaurant_id: 5,
    category: PIZZA,
  },
  {
    id: 17,
    title: "چیکن استریپس",
    description:
      "۳ تکه فیله مرغ سوخاری، سس مخصوص سیر، سس مخصوص چیلی، سالاد کلم، سیب زمینی سرخ شده، نان بروتچن",
    price: 252000,
    main_img: Shila_Chicken,
    other_img: "",
    rate: "4.7",
    restaurant_id: 5,
    category: PIZZA,
  },
  {
    id: 18,
    title: "چلو کباب کوبیده یک سیخ",
    description:
      "کباب کوبیده گوشت مخلوط گوساله و گوسفندی ۱۰۰ گرمی، ۳۵۰ گرم برنج ایرانی",
    price: 95000,
    main_img: Pasha_Kobideh,
    other_img: "",
    rate: "4.4",
    restaurant_id: 4,
    category: KEBAB,
  },
  {
    id: 19,
    title: "چلو کباب وزیری",
    description:
      "یک سیخ کباب کوبیده گوشت مخلوط گوساله و گوسفندی ۱۰۰ گرمی، یک سیخ جوجه کباب سینه مرغ ۱۵۰ گرمی، ۳۵۰ گرم برنج ایرانی",
    price: 142500,
    main_img: Pasha_Vaziri,
    other_img: "",
    rate: "4.1",
    restaurant_id: 4,
    category: KEBAB,
  },
  {
    id: 20,
    title: "زرشک پلو با مرغ سس پز ران",
    description: "مرغ سس پز ۳۵۰ گرمی، ۳۵۰ گرم برنج ایرانی",
    price: 115000,
    main_img: Pasha_Zereshk,
    other_img: "",
    rate: "4.6",
    restaurant_id: 4,
    category: IRANI,
  },
  {
    id: 21,
    title: "چلو خورشت قیمه سیب زمینی",
    description:
      "۳۰۰ گرم خورشت قیمه سیب زمینی، ۵۰ گرم گوشت گوساله، سیب زمینی سرخ شده، ۳۵۰ گرم برنج ایرانی",
    price: 80000,
    main_img: Pasha_Gheimeh,
    other_img: "",
    rate: "4.3",
    restaurant_id: 4,
    category: IRANI,
  },
  {
    id: 22,
    title: "چلو خورشت قورمه سبزی",
    description:
      "۳۰۰ گرم خورشت قورمه سبزی، ۵۰ گرم گوشت گوساله، ۳۵۰ گرم برنج ایرانی",
    price: 80000,
    main_img: Pasha_Ghormeh,
    other_img: "",
    rate: "4.4",
    restaurant_id: 4,
    category: IRANI,
  },
  {
    id: 23,
    title: "پیتزا مخصوص آمریکایی",
    description:
      "خمیر پیتزا آمریکایی، سس مخصوص، پنیر پیتزا، ژامبون گوشت و مرغ ۹۰%، قارچ، فلفل دلمه ای، ذرت",
    price: 180000,
    main_img: Saliz_Special,
    other_img: "",
    rate: "4.0",
    restaurant_id: 3,
    category: PIZZA,
  },
  {
    id: 24,
    title: "برگر",
    description:
      "یک عدد برگر دستی ۹۰٪ گوشت گوساله ۱۶۰ گرمی، کاهو، گوجه، خیارشور، سس مخصوص، نان باگت",
    price: 165000,
    main_img: Saliz_Burger,
    other_img: "",
    rate: "4.6",
    restaurant_id: 3,
    category: BURGER,
  },
  {
    id: 25,
    title: "ماشروم برگر",
    description:
      "یک عدد برگر دستی ۹۰% گوشت گوسالە ۱۶۰ گرمی، ۱۰۰ گرم قارچ، کاھو، گوجە، خیارشور، سس مخصوص، نان باگت",
    price: 185000,
    main_img: Saliz_Mashrom,
    other_img: "",
    rate: "4.2",
    restaurant_id: 3,
    category: BURGER,
  },
  {
    id: 26,
    title: "ساندویچ ژامبون مرغ تنوری",
    description:
      "۱۳۰ گرم ژامبون مرغ ۹۰%، قارچ، پنیر، ذرت، کاهو، گوجه، خیارشور، سس مخصوص، نان باگت",
    price: 165000,
    main_img: Saliz_Zhambon,
    other_img: "",
    rate: "4.7",
    restaurant_id: 3,
    category: SANDWICH,
  },
  {
    id: 27,
    title: "ساندویچ ژامبون میکس سرد",
    description:
      "۱۳۰ گرم ژامبون گوشت و مرغ ۹۰%، کاهو، گوجه، خیارشور، خلال سیب زمینی، سس مایونز، نان باگت",
    price: 130000,
    main_img: Saliz_ZhambonMix,
    other_img: "",
    rate: "4.5",
    restaurant_id: 3,
    category: SANDWICH,
  },
];

export const RESTAURANTS = [
  {
    id: 1,
    name: "کترینگ سینتو پلو",
    category: [IRANI, KEBAB, GILANI, INTERNATIONAL],
    logo: KetringLogo,
    background: KetringBackground,
    rate: "4.3",
  },
  {
    id: 2,
    name: "چلوپز (فلسطین)",
    category: [IRANI, KEBAB, SALAD],
    logo: PalestineLogo,
    background: PalestineBackground,
    rate: "4.3",
  },
  {
    id: 3,
    name: "فست فود سالیز",
    category: [SANDWICH, BURGER, PIZZA],
    logo: SalizLogo,
    background: SalizBackground,
    rate: "4.4",
  },
  {
    id: 4,
    name: "کترینگ پاشا",
    category: [IRANI, KEBAB],
    logo: PashaLogo,
    background: PashaBackground,
    rate: "جدید",
  },
  {
    id: 5,
    name: "پیتزا شیلا (حجاب)",
    category: [PIZZA, SOKHARI],
    logo: ShilaLogo,
    background: ShilaBackground,
    rate: 4.7,
  },
];

export const DATABASE = {
  categories: CATEGORIES,
  products: PRODUCTS,
  restaurants: RESTAURANTS,
};

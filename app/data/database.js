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

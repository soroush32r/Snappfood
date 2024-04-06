import VendorsList from "@/app/components/VendorsList";
import { ALL_CATEGORY_ADDRESS } from "../data/database";
const linkDic = {
  restaurant: "رستوران",
  cafe: "کافه",
  cake: "شیرینی",
  bakery: "نانوایی",
  fruit: "میوه",
  protein: "پروتئین",
  juice: "آبمیوه و بستنی",
  nuts: "آجیل",
  other: "سایر",
};
const category = [
  "irani",
  "fastfood",
  "kebab",
  "pizza",
  "burger",
  "sandwich",
  "sokhari",
  "pasta",
  "salad",
  "seafood",
  "international",
  "gilani",
];

const Page = ({ params }) => {
  if (params.vendors !== "restaurant" && !!category.includes(params)) {
    return (
      <div className="flex justify-center my-60 items-center">
        در حال حاضر فروشنده‌ای در قسمت {linkDic[params.vendors]} وجود ندارد
      </div>
    );
  }

  return <VendorsList url={params.vendors} />;
};

export default Page;

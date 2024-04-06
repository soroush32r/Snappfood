import VendorsList from "@/app/components/VendorsList";
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
  const vendor = params.vendors.split("%24")[0];
  const url = params.vendors.split("%24")[1];
  if (vendor !== "restaurant") {
    return (
      <div className="flex justify-center my-60 items-center">
        در حال حاضر فروشنده‌ای در قسمت {linkDic[params.vendors]} وجود ندارد
      </div>
    );
  }

  return <VendorsList url={url} />;
};

export default Page;

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

const Page = ({ params }) => {
  if (params.vendors !== "restaurant") {
    return (
      <div className="flex justify-center my-60 items-center">
        در حال حاضر فروشنده‌ای در قسمت {linkDic[params.vendors]} وجود ندارد
      </div>
    );
  }

  return <VendorsList />;
};

export default Page;

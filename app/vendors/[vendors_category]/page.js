import VendorsList from "@/app/components/VendorsList";

const Page = ({ params }) => {
  if (params.vendors_category !== "restaurant") {
    return (
      <div className="flex justify-center mt-60 items-center">
        در حال حاضر فروشنده‌ای در قسمت {params.vendors_category} وجود ندارد
      </div>
    );
  }

  return <VendorsList />;
};

export default Page;

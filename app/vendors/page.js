"use client";
import { filterById } from "@/app/utils/filterById";
import { useSearchParams } from "next/navigation";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(searchParams.getAll());
  const RESTAURANT_PRODUCT = filterById(id);
  console.log(params.vendors);

  if (params.vendors !== "restaurant") {
    return (
      <div>در حال حاضر فروشنده‌ای در قسمت {params.vendors} وجود ندارد</div>
    );
  }

  return (
    <div>
      {id}
      {RESTAURANT_PRODUCT.map(({ title }) => (
        <div>{title}</div>
      ))}
    </div>
  );
};

export default Page;

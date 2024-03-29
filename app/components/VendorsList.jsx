import VendorsCard from "./VendorsCard";
import { ALL_CATEGORY_ADDRESS, RESTAURANTS } from "../data/database";
import Image from "next/image";

const VendorsList = () => {
  return (
    <div className="flex justify-around">
      <div className="flex w-11/12 pt-10 flex-col md:flex-row">
        <div className="p-4 md:w-1/3 w-full">
          <div className="rounded-lg shadow-lg border p-4">
            <div className="py-3 pr-2 bg-gray-200 rounded-md font-bold text-sm ">
              همه دسته‌بندی‌ها
            </div>
            <div>
              {ALL_CATEGORY_ADDRESS.map(({ img, name }) => (
                <div className="flex py-2 items-center cursor-pointer hover:bg-gray-100">
                  <Image src={img} className="w-8 h-8" alt={name} />
                  <p className="px-2 text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {RESTAURANTS.map(
              ({ id, name, background, rate, category, logo }) => (
                <VendorsCard
                  key={id}
                  id={id}
                  name={name}
                  background={background}
                  rate={rate}
                  category={category}
                  logo={logo}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsList;

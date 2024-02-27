import Image from "next/image";
import rateIcon from "../../public/icons/rate.svg";
import { ALL_FOOD_ADDRESS } from "./images";
import { RESTAURANTS } from "../data/database";

const Page = () => {
  return (
    <div className="flex justify-around">
      <div className="flex w-11/12 pt-10 flex-col md:flex-row">
        <div className="p-4 md:w-1/3 w-full">
          <div className="rounded-lg shadow-lg border p-4">
            <div className="py-3 pr-2 bg-gray-200 rounded-md font-bold text-sm ">
              همه دسته‌بندی‌ها
            </div>
            <div>
              {ALL_FOOD_ADDRESS.map(({ img, name }) => (
                <div className="flex py-2 items-center cursor-pointer">
                  <Image src={img} className="w-8 h-8" />
                  <p className="px-2 text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4">
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {RESTAURANTS.map(({ name, background, rate, category, logo }) => (
              <div className="border border-gray-100 rounded-md shadow-md w-full flex flex-col relative hover:shadow-lg">
                <div className="flex ">
                  <div className="h-48 w-full">
                    <Image
                      src={background}
                      className="h-full w-full rounded-t-md"
                    />
                  </div>
                  <div className="w-full flex items-center h-full absolute">
                    <div className="w-20 h-20 m-auto bg-white p-1 rounded-md">
                      <Image src={logo} className="w-full h-full rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-center p-4 pb-10">
                  <p className="font-semibold text-lg mb-1">{name}</p>
                  <div className="flex text-sm items-center justify-center">
                    <Image src={rateIcon} className="w-3 h-6 ml-1" />
                    {rate}
                  </div>
                  <div className="flex justify-center text-sm text-gray-400 pt-2">
                    {category.map((item, index) => (
                      <div className="flex">
                        <p>{item}</p>
                        {index !== category.length - 1 ? <span>،</span> : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

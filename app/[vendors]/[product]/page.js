"use client";
import { useSelector } from "react-redux";
import { filterProductByRestaurantId } from "../../utils/filterProductByRestaurantId";
import Image from "next/image";
import rateIcon from "../../../public/icons/rate.svg";
import warningIcon from "../../../public/icons/warning.png";
import Products from "../../components/Products";
import Link from "next/link";
import CartList from "../../components/CartList";
import { findRestaurantById } from "@/app/utils/findRestaurantById";

const Page = ({ params }) => {
  // const { id, name, rate, category, logo } = useSelector(
  //   (store) => store.currentRestaurant
  // );
  const restaurant = findRestaurantById(params.product);
  const { id, name, rate, category, logo } = restaurant[0];
  const RESTAURANT_PRODUCT = filterProductByRestaurantId(id);
  return (
    <div className="bg-gray-100 pt-20">
      <div className="mx-auto my-0 ">
        <div className="flex flex-col md:flex-row w-auto">
          <div className="flex flex-col justify-between md:flex-row w-full">
            <div className="p-4 w-full md:w-1/3">
              <div className="flex">
                <div className="w-20 h-20 bg-white p-1 rounded-md">
                  <Image
                    alt={name}
                    src={logo.src}
                    width={80}
                    height={80}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-around pr-2">
                  <div className="flex items-center">
                    <div className="pl-2">
                      <Image
                        alt="rateIcon"
                        src={rateIcon}
                        width={10}
                        height={10}
                      />
                    </div>
                    <div className="text-sm">{rate}</div>
                  </div>
                  <div>
                    <h1 className="font-bold">{name}</h1>
                  </div>
                </div>
              </div>
              <div className="flex">
                <button
                  dir="rtl"
                  className="rounded-3xl bg-white text-green-400 w-full p-2 border border-gray-100 shadow-md mt-7 flex justify-center items-center hover:text-green-600 text-sm"
                >
                  <div className="flex w-4 items-center ml-2">
                    <Image
                      alt="warningIcon"
                      src={warningIcon}
                      className="w-full"
                    />
                  </div>
                  اطلاعات و نظرات
                </button>
              </div>
              <div className="flex flex-col mt-5 md:text-left">
                {category.map((item) => (
                  <Link
                    key={item}
                    className="py-2"
                    href={`#${item}`}
                    scroll={true}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="p-4 w-full md:w-8/12">
              <Products
                category={category}
                RESTAURANT_PRODUCT={RESTAURANT_PRODUCT}
              />
            </div>
          </div>
          <div className="p-4 flex flex-col items-center w-full md:w-1/3">
            <CartList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

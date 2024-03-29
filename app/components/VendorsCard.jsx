"use client";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../redux/currentRestaurantSlice";
import rateIcon from "../../public/icons/rate.svg";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

const VendorsCard = ({ id, name, background, rate, category, logo }) => {
  const dispatch = useDispatch();

  const handleCardID = useCallback(() => {
    dispatch(addRestaurant({ id, name, background, rate, category, logo }));
  }, []);
  return (
    <Link href={`/Products`} onClick={handleCardID}>
      <div className="border border-gray-100 rounded-md shadow-md w-full flex flex-col relative hover:shadow-lg">
        <div className="flex ">
          <div className="h-48 w-full">
            <Image src={background} className="h-full w-full rounded-t-md" />
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
              <div className="flex" key={index}>
                <p>{item}</p>
                {index !== category.length - 1 ? <span>،</span> : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VendorsCard;

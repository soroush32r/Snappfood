"use client";
import { useSelector } from "react-redux";
import sortOrderByDate from "../utils/sortOrderByDate";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import OrderHistoryModal from "./OrderHistoryModal";
import Popup from "reactjs-popup";
import ReorderModal from "./ReorderModal";

const HistoryList = () => {
  const [data] = useSelector((store) => store.history);
  const { historyCart } = data;
  const [sortedOrder, setSortedOrder] = useState(historyCart);
  useEffect(() => {
    const result = sortOrderByDate(historyCart);
    setSortedOrder(result);
  }, [historyCart]);

  if (historyCart.length === 0) {
    return (
      <div className="flex justify-center items-center my-52 font-bold text-lg text-gray-400">
        تا به حال هیچ سفارشی ثبت نکرده‌اید!
      </div>
    );
  }
  return (
    <div className=" bg-white w-9/12 flex flex-col border rounded-md mx-auto shadow-md">
      <div className="p-4 font-bold">سفارش‌های من</div>
      {sortedOrder.map(({ restaurant, date, items, totalPrice }) =>
        restaurant.map(({ name, logo }) => (
          <div className="flex p-4 border-b flex-col">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="w-16 p-1 rounded-md bg-white border">
                  <Image className="rounded-md w-full" src={logo} alt="logo" />
                </div>
                <div className="flex flex-col justify-around pr-2 text-sm">
                  <div>{name}</div>
                  <div className="text-gray-400">{date}</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="font-bold pl-1">{totalPrice}</div>
                <div className="text-xs">تومان</div>
              </div>
            </div>
            <div className="flex mt-5 md:flex-row flex-col justify-between">
              <div className="flex">
                {items.map(({ main_img }) => (
                  <div className="w-12 h-12 rounded-md mx-2">
                    <Image
                      src={main_img}
                      className="w-full h-full rounded-md"
                      alt={main_img}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-5 md:mt-0">
                <Popup
                  className="flex justify-between"
                  trigger={
                    <button className="flex items-center justify-center mb-2 text-red-600 font-bold bg-gray-300 rounded-md  md:w-40 w-full">
                      <span class="material-symbols-outlined">autorenew</span>
                      سفارش مجدد
                    </button>
                  }
                  modal
                >
                  {(close) => (
                    <ReorderModal
                      items={items}
                      restaurant={restaurant}
                      totalPrice={totalPrice}
                      close={close}
                    />
                  )}
                </Popup>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HistoryList;

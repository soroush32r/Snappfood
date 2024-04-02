import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import noOrderIcon from "../../public/icons/noOrder.png";
import orderIcon from "../../public/icons/order.svg";
import sortOrderByDate from "../utils/sortOrderByDate";
import Link from "next/link";
import Popup from "reactjs-popup";
import ReorderModal from "./ReorderModal";
import OrderHistoryModal from "./OrderHistoryModal";

export default function SideBar() {
  const [data] = useSelector((store) => store.history);
  const { historyCart } = data;
  const [sortedOrder, setSortedOrder] = useState(historyCart);
  useEffect(() => {
    const result = sortOrderByDate(historyCart);
    setSortedOrder(result);
  }, [historyCart]);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <>
      {historyCart.length === 0 ? (
        <div className="flex flex-col w-full justify-center items-center h-screen">
          <div className="w-24 h-24 mb-14">
            <Image
              src={noOrderIcon}
              className="w-full h-full"
              alt="noOrderIcon"
            />
          </div>
          <div className="text-gray-400 text-sm">
            تا به حال هیچ سفارشی ثبت نکرده‌اید!
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full p-4 text-sm">
          سفارش‌های پیشین
          <div className="border rounded-xl mt-4">
            {sortedOrder.map(({ items, totalPrice, restaurant, date }, index) =>
              index <= 2
                ? restaurant.map(({ name, logo }) => (
                    <div className="flex p-4 border-b flex-col">
                      <div className="flex">
                        <div className="w-16 p-1 rounded-md bg-white border">
                          <Image
                            alt="logo"
                            className="rounded-md w-full"
                            src={logo}
                          />
                        </div>
                        <div className="flex flex-col justify-around pr-2 text-sm">
                          <div>{name}</div>
                          <div className="text-gray-400">{date}</div>
                        </div>
                      </div>
                      <div className="bg-gray-300 rounded-md mt-3 p-2 flex md:flex-row flex-col items-center justify-between">
                        <div className="text-xs text-gray-600">
                          نظرتان را درباره این سفارش به اشتراک بگذارید
                        </div>
                        <button className="text-green-700 font-bold mt-2 md:mt-0">
                          ثبت نظر
                        </button>
                      </div>
                      <div className="flex mt-5 md:flex-row flex-col justify-between">
                        <Popup
                          className="flex justify-between"
                          trigger={
                            <button className="flex items-center justify-center mb-2 md:mb-0 font-bold bg-gray-300 rounded-md py-1 px-4 md:w-48 w-full">
                              <span class="material-symbols-outlined ml-1">
                                info
                              </span>
                              مشاهده فاکتور
                            </button>
                          }
                          modal
                        >
                          <div className="md:mx-auto rounded-md shadow-black shadow-2xl bg-white md:w-[500px] p-8">
                            <OrderHistoryModal
                              items={items}
                              restaurantName={name}
                              totalPrice={totalPrice}
                            />
                          </div>
                        </Popup>

                        <Popup
                          className="flex justify-between"
                          trigger={
                            <button className="flex items-center font-bold justify-center bg-gray-300 rounded-md py-1 px-4 md:w-48 w-full">
                              <span class="material-symbols-outlined">
                                autorenew
                              </span>
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
                  ))
                : ""
            )}
          </div>
          <div className="flex justify-center text-green-600 font-bold mt-5">
            <Link
              className="flex items-center"
              href={"/history"}
              onClick={toggleDrawer(false)}
            >
              <span class="material-symbols-outlined">history</span>
              مشاهده همه سفارش‌ها
            </Link>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div>
      <div className="flex items-center pl-2 md:pr-4">
        <button onClick={toggleDrawer(true)} className="flex">
          <div className="md:mr-3">
            <Image src={orderIcon} alt="order icon" />
          </div>
          <div className="hidden md:block mr-2">سفارش‌ها</div>
        </button>
      </div>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "35vw",
            "@media (max-width: 1200px)": {
              width: "50%",
            },
            "@media (max-width: 720px)": {
              width: "75%",
            },
            boxSizing: "border-box",
          },
        }}
        className="z-0"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}

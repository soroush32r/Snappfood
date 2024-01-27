"use client";
import Image from "next/image";
import orderIcon from "../../public/icons/order.svg";
import userIcon from "../../public/icons/user.svg";
import snappIcon from "../../public/icons/snappLogo.svg";
import locationIcon from "../../public/icons/location.svg";
import searchIcon from "../../public/icons/search.svg";
import arrowIcon from "../../public/icons/arrow.svg";
import restaurant from "../../public/images/Header/restaurant.png";
import supermarket from "../../public/images/Header/supermarket.png";
import bakery from "../../public/images/Header/bakery.png";
import cake from "../../public/images/Header/cake.png";
import coffee from "../../public/images/Header/coffee.png";
import fruit from "../../public/images/Header/fruit.png";
import icecream from "../../public/images/Header/icecream.png";
import meat from "../../public/images/Header/meat.png";
import nuts from "../../public/images/Header/nuts.png";
import other from "../../public/images/Header/other.png";
import { useState } from "react";

const imageArray = [
  { name: "رستوران", path: restaurant },
  { name: "سوپرمارکت", path: supermarket },
  { name: "کافه", path: coffee },
  { name: "شیرینی", path: cake },
  { name: "نانوایی", path: bakery },
  { name: "میوه", path: fruit },
  { name: "پروتئین", path: meat },
  { name: "آبمیوه بستنی", path: icecream },
  { name: "آجیل", path: nuts },
  { name: "سایر", path: other },
];

const Header = () => {
  const [str, setStr] = useState("");
  const [blurScreen, setBlurScreen] = useState(false);
  return (
    <div className="flex flex-col shadow-md w-screen">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center w-1/3 ">
          <div className="ml-10">
            <Image
              src={snappIcon}
              className="hidden md:block w-16 h-10"
              alt="snappIcon"
            />
          </div>
          <div className="flex items-center">
            <Image src={locationIcon} className="opacity-50" alt="location" />
            <div className="text-[0.75rem] text-gray-400 mr-3 flex items-center">
              <span className="w-72">
                تهران ولیعصر خیابان تاج کوچه سروش روبه‌رو تربیت بدنی
                شسیشسیمشنسیت شمنستیمنشستی منشستیمنش ستیمن شتسیمن شست
              </span>
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-4 h-4 mr-3 mb-1.5"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Image
            src={searchIcon}
            alt="search icon"
            className="mx-1 opacity-50"
          />
        </div>
        <div className="hidden md:flex md:rounded-xl md:bg-gray-200 md:p-4 md:w-96">
          <Image
            src={searchIcon}
            alt="search icon"
            className={`mx-1 ${str !== "" ? "opacity-80" : "opacity-50"}`}
          />
          <input
            className="hidden md:block bg-gray-200 outline-none w-full"
            placeholder="جست‌وجو در اسنپ‌فود"
            value={str}
            onChange={(e) => {
              setStr(e.target.value);
            }}
            onClick={() => {
              setBlurScreen(true);
              if (str === "") {
                setBlurScreen(false);
              }
            }}
          />
        </div>

        <div className="flex justify-end items-center w-1/3">
          <div className="ml-3 p-4">
            <Image src={userIcon} alt="user icon" />
          </div>
          <div className="flex items-center pl-2 pr-4">
            <div className="mr-3">
              <Image src={orderIcon} alt="order icon" />
            </div>
            <div className="mr-2">سفارش‌ها</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4 overflow-y-scroll md:overflow-hidden">
        {imageArray.map(({ name, path }) => (
          <div key={name} className="flex flex-col items-center p-4">
            <Image src={path} alt={name} className="mb-4 w-10 h-10" />
            <p className="text-sm">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

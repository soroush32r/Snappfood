"use client";
import Image from "next/image";
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
import { useEffect, useState } from "react";
import Link from "next/link";
import SideBar from "./SideBar";
import Search from "./Search";
import Popup from "reactjs-popup";

const imageArray = [
  { name: "رستوران", path: restaurant, url: "/restaurant" },
  { name: "سوپرمارکت", path: supermarket, url: "https://snapp.express/" },
  { name: "کافه", path: coffee, url: "/cafe" },
  { name: "شیرینی", path: cake, url: "/cake" },
  { name: "نانوایی", path: bakery, url: "/bakery" },
  { name: "میوه", path: fruit, url: "/fruit" },
  { name: "پروتئین", path: meat, url: "/protein" },
  { name: "آبمیوه بستنی", path: icecream, url: "/juice" },
  { name: "آجیل", path: nuts, url: "/nuts" },
  { name: "سایر", path: other, url: "/other" },
];

const Header = () => {
  const [searchIsClicked, setSearchIsClicked] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [location, setLocation] = useState(
    "تهران خیابان ولیعصر کوچه تاج روبه‌رو تربیت بدنی "
  );
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    let truncatedText = "";
    if (isPhone) {
      truncatedText =
        location.length > 20 ? location.slice(0, 20) + "..." : location;
    } else {
      truncatedText =
        location.length > 40 ? location.slice(0, 40) + "..." : location;
    }
    setLocation(truncatedText);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const handleSearchClicked = (value) => {
    setSearchIsClicked(value);
  };

  return (
    <div className="flex flex-col shadow-md w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center w-2/3 md:w-1/3">
          <Link href={"/"} className="hidden md:block ml-10">
            <Image src={snappIcon} className="w-16 h-10" alt="snappIcon" />
          </Link>
          <div className="flex items-center">
            <Image src={locationIcon} className="opacity-50" alt="location" />
            <div className="text-[0.75rem] text-gray-400 mr-3 flex items-center">
              <span className="text-[0.625rem]">{location}</span>
              <Image
                src={arrowIcon}
                alt="arrow icon"
                className="w-4 h-4 mr-3 mb-1.5"
              />
            </div>
          </div>
        </div>

        <Search handleSearchClicked={handleSearchClicked} />
        <div className="flex md:justify-end justify-between items-center w-2/3 md:w-1/3">
          <Popup
            contentStyle={{
              justifyContent: "center",
              margin: "10px auto",
              height: "72px",
            }}
            onOpen={() => handleSearchClicked(true)}
            trigger={
              <button className="md:hidden">
                <Image
                  src={searchIcon}
                  alt="search icon"
                  className="mx-1 opacity-50"
                />
              </button>
            }
            modal
          >
            <div
              className={`${
                searchIsClicked
                  ? "flex justify-center rounded-md shadow-black shadow-2xl bg-white w-full p-2"
                  : "hidden"
              } `}
            >
              <Search
                searchIsClicked={searchIsClicked}
                handleSearchClicked={handleSearchClicked}
              />
            </div>
          </Popup>
          <div className="md:ml-3 p-4">
            <Image src={userIcon} alt="user icon" />
          </div>
          <SideBar />
        </div>
      </div>
      <div className="flex justify-between p-4 overflow-y-scroll md:overflow-hidden">
        {imageArray.map(({ name, path, url }) => (
          <Link href={url} key={name}>
            <div key={name} className="flex flex-col items-center p-4">
              <Image src={path} alt={name} className="mb-4 w-10 h-10" />
              <p className="text-sm">{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;

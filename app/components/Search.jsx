"use client";
import { useCallback, useMemo, useState } from "react";
import { searchByName } from "../utils/searchByName";
import searchIcon from "../../public/icons/search.svg";

import Image from "next/image";
import Link from "next/link";
import { findRestaurantById } from "../utils/findRestaurantById";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../redux/currentRestaurantSlice";

const Search = ({ searchIsClicked, handleSearchClicked }) => {
  const [search, setSearch] = useState("");

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const dispatch = useDispatch();
  const handleProductClicked = (restaurant_id) => {
    const restaurant = findRestaurantById(restaurant_id);
    const { id, name, background, rate, category, logo } = restaurant[0];
    dispatch(addRestaurant({ id, name, background, rate, category, logo }));
    handleSearchClicked(false);
    setSearch("");
  };

  const SEARCH_PRODUCT = useMemo(() => searchByName(search), [search]);
  return (
    <div className=" relative">
      <label
        class={`md:block md:w-96 ${
          searchIsClicked ? "w-[300px] block" : "hidden"
        }`}
      >
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <Image
            src={searchIcon}
            alt="search icon"
            className={`mx-1 ${search !== "" ? "opacity-80" : "opacity-50"}`}
          />
        </span>
        <input
          class="placeholder:italic placeholder:text-slate-400 block p-4 bg-gray-200 w-full rounded-md pr-9 pl-3 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:bg-white focus:ring-1 sm:text-sm"
          placeholder="جست‌وجو در اسنپ‌فود"
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </label>

      {search !== "" ? (
        <div className="w-full absolute shadow-2xl bg-white  mt-2 p-2 overflow-y-auto h-80">
          {SEARCH_PRODUCT.map((product, index) => (
            <Link
              key={index}
              onClick={() => handleProductClicked(product.restaurant_id)}
              href={`/${product.title}/${product.restaurant_id}/`}
            >
              <div
                className={`flex py-4 items-center ${
                  index !== SEARCH_PRODUCT.length - 1
                    ? "border-b"
                    : "border-none"
                }`}
              >
                <Image
                  src={product.main_img}
                  alt={product.title}
                  width={56}
                  className="rounded-md ml-2"
                />
                <div className="flex justify-between w-full">
                  <div className="text-sm font-bold ml-2">{product.title}</div>
                  <div className="flex items-center">
                    <div className="text-sm font-bold">{product.price}</div>
                    <div className="text-xs">تومان</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;

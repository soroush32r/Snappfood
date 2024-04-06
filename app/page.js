"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { ALL_CATEGORY_ADDRESS } from "./data/database";
import { Navigation } from "swiper/modules";
import { RESTAURANTS } from "./data/database";

import leftArrow from "../public/icons/leftArrow.svg";
import VendorsCard from "./components/VendorsCard";
import SwiperNavButtons from "./components/SwiperNavButtons";

export default function Home() {
  return (
    <div className="bg-gray-100 pb-16 px-4 md:px-10 pt-10">
      <div className="flex flex-col w-full pb-16">
        <div className="pb-8">دسته‌بندی‌ها</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {ALL_CATEGORY_ADDRESS.map(({ url, img, name }) => (
            <Link href={`/restaurant$${url}`} className="w-full">
              <div className="relative">
                <Image
                  src={img}
                  className="w-full h-full rounded-xl shadow-xl "
                  alt={name}
                />
                <div className="flex items-center absolute bottom-0 bg-white rounded-tl-xl rounded-br-xl px-2 h-8 ">
                  <p className="px-2 text-sm">{name}</p>
                  <Image src={leftArrow} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="font-bold text-2xl mb-6">ارسال رایگان</div>
        <div className="relative w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
            }}
            modules={[Navigation]}
          >
            {RESTAURANTS.map(
              ({ id, name, background, rate, category, logo }) => (
                <SwiperSlide className=" rounded-md mb-5 px-5">
                  <VendorsCard
                    id={id}
                    name={name}
                    background={background}
                    rate={rate}
                    category={category}
                    logo={logo}
                  />
                </SwiperSlide>
              )
            )}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>

      <div className="">
        <div></div>
      </div>
    </div>
  );
}

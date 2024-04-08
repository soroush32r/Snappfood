import { useSwiper } from "swiper/react";
import { useState } from "react";
import Image from "next/image";
import leftArrow from "../../public/icons/leftArrow.svg";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevSlideClick = () => {
    swiper.slidePrev();
    if (swiper.isBeginning) {
      setIsBeginning(true);
      setIsEnd(false);
    }
  };
  const handleNextSlideClick = () => {
    swiper.slideNext();
    if (swiper.isEnd) {
      setIsBeginning(false);
      setIsEnd(true);
    }

    if (!swiper.isBeginning && !swiper.isEnd) {
      setIsBeginning(false);
      setIsEnd(false);
    }
  };
  return (
    <div className="flex justify-between w-full absolute top-1/2 z-50">
      <button
        className={`rounded-full bg-white w-12 h-12 flex justify-center border-gray-200 border items-center transition ease-in-out duration-700 ${
          isBeginning ? "opacity-0" : "opacity-100"
        }`}
        onClick={handlePrevSlideClick}
      >
        <Image
          src={leftArrow}
          alt="arrow-icon"
          className="scale-x-[-1] w-1/3 h-1/3"
        />
      </button>
      <button
        className={`rounded-full bg-white w-12 h-12 flex justify-center border-gray-200 border items-center transition ease-in-out duration-700 ${
          isEnd ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleNextSlideClick}
      >
        <Image src={leftArrow} alt="arrow-icon" className="w-1/3 h-1/3" />
      </button>
    </div>
  );
};

export default SwiperNavButtons;

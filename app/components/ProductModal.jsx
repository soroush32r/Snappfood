"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import rateIcon from "../../public/icons/rate.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductButtons from "./ProductButtons";

const ProductModal = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(product.main_img);
  const handleMainImg = (img) => {
    setCurrentImg(img);
  };
  return (
    <div className="md:mx-auto mx-4 rounded-md shadow-black shadow-2xl bg-white md:w-[900px]  p-8">
      <div className="flex md:flex-row flex-col w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className="">
            <div className="w-full rounded-md">
              <Image src={currentImg} className="rounded-md w-full h-full" />
            </div>
            <div>
              {product["other_img"] !== "" ? (
                <div className="flex rounded-md">
                  {product["other_img"].map((item) => (
                    <button
                      className="w-20 py-2"
                      onClick={() => handleMainImg(item)}
                    >
                      <Image src={item} className="w-full rounded-md px-1" />
                    </button>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col justify-around w-full px-2">
            <div className="flex items-center">
              <div>{product.title}</div>
              <div className="mx-3 border rounded-md px-2 flex items-center">
                <Image src={rateIcon} className="mb-1 ml-1" />
                <div>{product.rate}</div>
              </div>
            </div>
            <div className="text-sm">{product.description}</div>
            <div className="flex justify-between items-center mt-4 w-full">
              <div className="w-1/3">
                <span>{product.price}</span>
                <span>تومان</span>
              </div>
              <div className="w-2/3 flex justify-end">
                <ProductButtons product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ProductModal;

"use client";

import Image from "next/image";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import calculateShoppingPrice from "../utils/calculateShoppingPrice";
import cartIcon from "../../public/icons/cart.png";
import ProductButtons from "./ProductButtons";
import { reset } from "../redux/cartSlice";
import { addToHistory } from "../redux/historySlice";
import { findRestaurantById } from "../utils/findRestaurantById";
import getCurrentDateTime from "../utils/getCurrentDate";

const CartList = () => {
  const { cart, totalProduct } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleResetCart = useCallback(() => {
    dispatch(reset());
  }, []);

  const totalPrice = useMemo(() => calculateShoppingPrice(cart), [cart]);

  const handleCheckout = useCallback(() => {
    const restaurant = findRestaurantById(cart[0].restaurant_id);
    const date = getCurrentDateTime();
    console.log(date);
    dispatch(
      addToHistory({
        userId: 1,
        items: cart,
        restaurant: restaurant,
        date,
        totalPrice,
      })
    );
    dispatch(reset());
  }, [totalPrice, cart]);

  if (cart.length === 0) {
    return (
      <>
        <div className="w-4 h-5 m-5">
          <Image
            src={cartIcon}
            className="opacity-60 w-full h-full"
            alt="cart icon"
          />
        </div>
        <div className="text-sm opacity-60">سبد خرید شما خالی است!</div>
      </>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="pl-2">سبد خرید</div>
          <div>({totalProduct})</div>
        </div>
        <div>
          <button
            onClick={handleResetCart}
            className="rounded-full bg-white hover:bg-gray-100 transition ease-in-out duration-300 w-8 h-8 flex justify-center items-center "
          >
            <span className="material-symbols-outlined text-red-600">
              delete
            </span>
          </button>
        </div>
      </div>
      <div className="py-7">
        {cart.map((product) => (
          <div className="flex flex-col">
            <div className="py-2">{product.title}</div>
            <div className="py-2 flex justify-between items-center w-full">
              <div>{product.price} تومان</div>
              <ProductButtons product={product} />
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full text-sm">
        <div className="flex justify-between items-center py-2">
          <div>مجموع</div>
          <div className="flex items-center">
            {totalPrice}
            <span className="text-gray-600 pr-1">تومان</span>
          </div>
        </div>
        <div className="flex justify-between py-2 text-sm">
          <div>هزینه ارسال</div>
          <div>رایگان</div>
        </div>
        <hr />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between font-bold py-4 text-sm">
          <div>قابل پرداخت</div>
          <div className="flex items-center">
            {totalPrice}
            <span className="text-gray-600 pr-1">تومان</span>
          </div>
        </div>
        <div className="w-full">
          <textarea
            className="w-full p-3 h-32 border rounded-md mt-4 mb-7"
            placeholder="توضیحات سفارش"
          />
        </div>
      </div>
      <div className="w-full text-center">
        <button
          onClick={handleCheckout}
          className="w-full h-12 rounded-md bg-myPink font-bold hover:opacity-75 transition ease-in-out duration-300 text-white"
        >
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default CartList;

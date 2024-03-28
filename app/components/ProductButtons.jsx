"use client";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseItem, deleteItem } from "../redux/cartSlice";

const ProductButtons = ({ product }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart(product));
  }, []);

  const handleDecreaseFromCart = useCallback((id) => {
    dispatch(decreaseItem(id));
  }, []);

  const handleRemoveItem = useCallback((id) => {
    dispatch(deleteItem(id));
  });

  const index = cart.findIndex((item) => item.id === product.id);

  if (index !== -1) {
    return (
      <div className="flex justify-between items-center w-1/3">
        {cart[index].count !== 1 ? (
          <button
            onClick={() => handleDecreaseFromCart(cart[index].id)}
            className="rounded-full bg-white border border-gray-200 shadow-md text-myPink font-bold  w-8 h-8"
          >
            -
          </button>
        ) : (
          <button
            onClick={() => handleRemoveItem(cart[index].id)}
            className="rounded-full bg-white hover:bg-gray-100 transition ease-in-out duration-300 w-8 h-8 flex justify-center items-center "
          >
            <span className="material-symbols-outlined text-gray-400">
              delete
            </span>
          </button>
        )}
        {cart[index].count}
        <button
          onClick={handleAddToCart}
          className="rounded-full bg-white border border-gray-200 shadow-md hover:bg-myPink hover:text-white transition ease-in-out duration-300 text-myPink font-bold  w-8 h-8"
        >
          +
        </button>
      </div>
    );
  } else {
    return (
      <div className="w-28 h-9">
        <button
          onClick={handleAddToCart}
          className="rounded-2xl text-myPink bg-white hover:bg-myPink hover:text-white px-5 py-2 text-sm w-full h-full shadow-md"
        >
          افزودن
        </button>
      </div>
    );
  }
};

export default ProductButtons;

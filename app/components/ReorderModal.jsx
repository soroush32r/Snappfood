import { useCallback } from "react";
import { useDispatch } from "react-redux";
import getCurrentDateTime from "../utils/getCurrentDate";
import { reset } from "../redux/cartSlice";
import { addToHistory } from "../redux/historySlice";
import OrderHistoryModal from "./OrderHistoryModal";

const ReorderModal = ({ restaurant, items, totalPrice, close }) => {
  const dispatch = useDispatch();

  const handleCheckout = useCallback(() => {
    const date = getCurrentDateTime();
    dispatch(
      addToHistory({
        userId: 1,
        items: items,
        restaurant: restaurant,
        date,
        totalPrice,
      })
    );
    dispatch(reset());
    close();
  }, []);

  return (
    <div className="md:mx-auto rounded-md shadow-black shadow-2xl bg-white md:w-[500px] p-8 z-50">
      <div className="mb-5">آیا از سفارش مجدد خود مطمئن هستید؟</div>
      <div>
        <OrderHistoryModal
          restaurantName={restaurant.name}
          items={items}
          totalPrice={totalPrice}
        />
      </div>
      <div className="flex md:flex-row flex-col w-full justify-between pt-8">
        <button
          onClick={close}
          className="md:w-1/3 my-3 md:my-0 bg-red-600 text-white py-2 rounded-md shadow-md"
        >
          لغو نمودن
        </button>
        <button
          onClick={handleCheckout}
          className="md:w-1/3 bg-green-600  md:bg-myPink text-white py-2 rounded-md shadow-md"
        >
          تایید سفارش
        </button>
      </div>
    </div>
  );
};

export default ReorderModal;

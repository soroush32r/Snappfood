import Image from "next/image";
import RatingStars from "./RatingStars";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/commentSlice";
import getCurrentDateTime from "../utils/getCurrentDate";

const AddComment = ({ name, logo, items, restaurant_id, close }) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(1);

  const handleComment = () => {
    const date = getCurrentDateTime();
    dispatch(
      addComment({
        userId: 1,
        items: items,
        rate: rate,
        restaurant_id: restaurant_id,
        date,
        description: description,
      }),
      close()
    );
  };
  return (
    <div className=" w-full flex flex-col items-center">
      <div className=" flex flex-col items-center border py-2 w-full rounded-md my-4">
        <div className="w-full flex justify-center py-2">
          <Image src={logo} width={50} />
        </div>
        <div className="text-sm font-bold">
          به سفارش‌تان از {name} چه امتیازی می‌دهید؟
        </div>
        <div className="flex justify-center">
          <RatingStars setRate={setRate} rate={rate} />
        </div>
      </div>
      <div className="flex flex-col border py-2 text-sm w-full rounded-md p-4">
        <div className="text-sm py-2">
          با نوشتن نظرتان درباره این سفارش به حفظ کیفیت کمک خواهید کرد.
        </div>
        <div className="w-full flex justify-center">
          <textarea
            className="w-full p-2 h-32"
            placeholder="نظرتان را اینجا بنویسید."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <button
        onClick={() => handleComment(description)}
        className="bg-myPink w-full text-center text-white rounded-md mt-4 py-2"
      >
        ثبت
      </button>
    </div>
  );
};

export default AddComment;

import { Rating } from "@mui/material";
import { useState } from "react";

const labels = {
  1: { name: "بد", color: "text-myPink bg-pink-100 w-10" },
  2: { name: "نسبتا بد", color: "text-myPink bg-pink-100 w-10" },
  3: { name: "معمولی", color: "text-black bg-gray-100 w-10" },
  4: { name: "خوب", color: "text-green-700 bg-green-100 w-10" },
  5: { name: "خیلی خوب", color: "text-green-700 bg-green-100 w-16" },
};

const RatingStars = ({ rate, setRate }) => {
  // const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);
  return (
    <div dir="ltr" className="flex flex-col items-center">
      {rate !== null && (
        <div
          className={`${
            labels[hover !== -1 ? hover : rate].color
          } text-xs text-center my-2`}
        >
          {labels[hover !== -1 ? hover : rate].name}
        </div>
      )}
      <Rating
        defaultValue={2}
        name="simple-controlled"
        value={rate}
        onChange={(event, newValue) => {
          setRate(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
    </div>
  );
};

export default RatingStars;

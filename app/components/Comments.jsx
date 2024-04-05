import { useSelector } from "react-redux";
import rateIcon from "../../public/icons/rate.svg";
import Image from "next/image";
import { findCommentsByRestaurantId } from "../utils/findCommentsByRestaurantId";

const Comments = ({ restaurnat_id }) => {
  const comments = findCommentsByRestaurantId(restaurnat_id);

  if (comments.length === 0) {
    return (
      <div className="text-sm p-2">
        <div className="font-bold py-4">نظرات کاربران</div>
        <div className="font-bold text-center">
          در حال حاضر نظری ثبت نشده است!
        </div>
      </div>
    );
  }
  return (
    <div className="text-sm p-2">
      <div className="font-bold py-4">نظرات کاربران</div>
      <div className="overflow-y-auto h-80">
        {comments.map(({ items, rate, description, date }, index) => (
          <div
            className={`flex py-2 ${
              index !== comments.length - 1 ? "border-b" : ""
            } `}
          >
            <div className="w-1/3">
              <div>{date}</div>
              <div className="inline-flex items-center border rounded-md py-1 px-2">
                <div className="pl-2 w-4 h-4">
                  <Image
                    alt="rateIcon"
                    src={rateIcon}
                    className="w-full h-full"
                  />
                </div>
                <div className="text-sm">{rate}</div>
              </div>
            </div>
            <div className="w-2/3">
              <div>{description}</div>
              <div className="flex flex-wrap py-2">
                {items.map(({ title }) => (
                  <div className="bg-gray-300 text-gray-700 py-1 px-2 rounded-md  m-1 text-xs">
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

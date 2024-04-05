import Image from "next/image";
import Comments from "./Comments";

const RestaurantDetails = ({ restaurant_id, logo, category, name, close }) => {
  return (
    <div className="md:w-[600px] w-[350px] bg-white p-2 shadow-2xl shadow-black">
      <div className="flex flex-col">
        <button onClick={close} className="flex justify-start">
          <span class="material-symbols-outlined text-gray-500">close</span>
        </button>
        <div className="flex py-2">
          <div>
            <Image
              alt={name}
              src={logo}
              width={80}
              height={80}
              className="rounded-md"
            />
          </div>
          <div>
            <div className="text-sm font-bold p-2">{name}</div>
            <div className="flex p-2">
              {category.map((item, index) => (
                <div className="mr-1 text-sm">
                  {index !== category.length - 1 ? `${item}،` : `${item}`}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex text-xs justify-around py-2">
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-gray-400">
              schedule
            </span>
            <div className="py-2">ساعت کاری</div>
            <div className="font-bold">از ساعت ۱۱ تا ۲۳</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-gray-400">
              payments
            </span>
            <div className="py-2">شیوه‌های پرداخت</div>
            <div className="font-bold">آنلاین</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="material-symbols-outlined text-gray-400">
              shopping_cart
            </span>
            <div className="py-2">حداقل سبد خرید</div>
            <div className="text-sm flex items-center">
              <div className="font-bold">70000</div>
              <div className="text-xs mr-1">تومان</div>
            </div>
          </div>
        </div>
      </div>
      <Comments restaurnat_id={restaurant_id} />
    </div>
  );
};

export default RestaurantDetails;

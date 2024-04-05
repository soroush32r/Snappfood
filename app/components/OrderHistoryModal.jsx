const OrderHistoryModal = ({ items, restaurantName, totalPrice, close }) => {
  return (
    <div className="md:mx-auto rounded-md shadow-black shadow-2xl bg-white md:w-[500px] p-8">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col w-full">
          <div className="flex flex-col">
            <button onClick={close} className="flex justify-start pb-5">
              <span class="material-symbols-outlined text-gray-500">close</span>
            </button>
            <div className="font-bold text-lg">فاکتور سفارش</div>
            <div className="text-xs py-2">{restaurantName}</div>
          </div>
          <div className="flex mt-5 flex-col">
            {items.map(({ count, title, price }) => (
              <div className="flex justify-between w-full py-2  border-b ">
                <div className="text-sm">{title}</div>
                <div className="flex items-center">
                  <div className="text-sm ml-2">x{count}</div>
                  <div className="flex items-center">
                    <div className="ml-1 font-bold">{price}</div>
                    <div className="text-xs">تومان</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="my-2 flex flex-col  text-sm">
            <div className="flex justify-between py-2">
              <div>جمع کل</div>
              <div className="flex items-center">
                <div className="ml-1">{totalPrice}</div>
                <div className="text-xs">تومان</div>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <div>هزینه ارسال</div>
              <div className="text-xs">رایگان</div>
            </div>
            <div className="flex justify-between py-2">
              <div className="font-bold">مجموع</div>
              <div className="flex items-center">
                <div className="ml-1 font-bold">{totalPrice}</div>
                <div className="text-xs">تومان</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryModal;

import Image from "next/image";

const Products = ({ category, RESTAURANT_PRODUCT }) => {
  return (
    <div className="bg-white pt-4 border border-collapse rounded-xl">
      {category.map((item) => (
        <div key={item} id={item}>
          <p className="text-center pt-8 pb-2">{item}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {RESTAURANT_PRODUCT.map(
              ({ title, description, category, main_img, id, price }, index) =>
                category === item ? (
                  <div key={id} className="py-4 border border-collapse px-2">
                    <div className="flex justify-between">
                      <div className="w-2/3 md:w-40 text-justify pl-2">
                        <h1 className="font-bold text-sm py-2">{title}</h1>
                        <div className="h-20 sm:overflow-clip">
                          <p className="text-xs text-gray-400">{description}</p>
                        </div>
                      </div>
                      <div className="w-28">
                        <Image
                          alt={name}
                          src={main_img}
                          className="w-full rounded-md"
                        />
                      </div>
                    </div>
                    <div className="pt-10 flex justify-between items-center">
                      <div>{price} تومان</div>
                      <div className="w-28 h-9">
                        <button className="rounded-2xl text-pink-500 bg-white hover:bg-pink-500 hover:text-white px-5 py-2 text-sm w-full h-full shadow-md">
                          افزودن
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

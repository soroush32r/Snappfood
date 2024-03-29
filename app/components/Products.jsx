import Popup from "reactjs-popup";
import ProductButtons from "./ProductButtons";
import ProductModal from "./ProductModal";
import Image from "next/image";

const Products = ({ category, RESTAURANT_PRODUCT }) => {
  return (
    <div className="bg-white pt-4 border border-collapse rounded-xl">
      {category.map((item) => (
        <div key={item} id={item}>
          <p className="text-center pt-8 pb-2">{item}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {RESTAURANT_PRODUCT.map((product) =>
              product.category === item ? (
                <div
                  key={product.id}
                  className="py-4 border border-collapse px-2"
                >
                  <Popup
                    className="flex justify-between"
                    trigger={
                      <button className=" flex justify-between w-full">
                        <div className="w-2/3 md:w-40 text-justify pl-2">
                          <h1 className="font-bold text-sm py-2">
                            {product.title}
                          </h1>
                          <div className="h-20 sm:overflow-clip">
                            <p className="text-xs text-gray-400">
                              {product.description}
                            </p>
                          </div>
                        </div>
                        <div className="w-28">
                          <Image
                            alt={product.title}
                            src={product.main_img}
                            className="w-full rounded-md"
                          />
                        </div>
                      </button>
                    }
                    modal
                  >
                    <ProductModal product={product} />
                  </Popup>
                  <div className="pt-10 flex justify-between items-center">
                    <div>{product.price} تومان</div>
                    <ProductButtons product={product} />
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

import { PRODUCTS } from "@/app/data/database";

export const filterProductByRestaurantId = (id) => {
  return PRODUCTS.filter((product) => product.restaurant_id == id);
};

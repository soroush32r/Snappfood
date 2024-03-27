import { PRODUCTS } from "@/app/data/database";

export const filterById = (id) => {
  return PRODUCTS.filter((product) => product.restaurant_id == id);
};

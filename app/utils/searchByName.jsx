import { PRODUCTS } from "../data/database";

export const searchByName = (search) => {
  return PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(search.toLocaleLowerCase())
  );
};

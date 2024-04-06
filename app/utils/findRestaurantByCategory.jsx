import { RESTAURANTS } from "@/app/data/database";
import { ALL_CATEGORY_ADDRESS } from "@/app/data/database";
export const findRestaurantByCategory = ({ url, category }) => {
  if (url !== "") {
    category = ALL_CATEGORY_ADDRESS.reduce((pre, cur) => {
      if (cur.url === url) {
        pre = cur.name;
        return pre;
      }
      return pre;
    }, "");
  }
  console.log(category);
  return RESTAURANTS.filter((restaurant) =>
    restaurant.category.includes(category)
  );
};

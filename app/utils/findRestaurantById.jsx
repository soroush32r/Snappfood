import { RESTAURANTS } from "@/app/data/database";

export const findRestaurantById = (id) => {
  return RESTAURANTS.filter((restaurant) => restaurant.id == id);
};

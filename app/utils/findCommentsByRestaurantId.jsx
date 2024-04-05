import { useSelector } from "react-redux";

export const findCommentsByRestaurantId = (id) => {
  const [data] = useSelector((store) => store.comment);
  const { comments } = data;
  return comments.filter((comments) => comments.restaurant_id == id);
};

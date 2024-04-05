import { createSlice } from "@reduxjs/toolkit";

import JojeKetring from "../../public/images/Foods/Ketring_Joje.jpeg";
import KobidehKetring from "../../public/images/Foods/Ketring_Kobideh.jpeg";
import { KEBAB } from "../data/database";

const commentSlice = createSlice({
  name: "comment",
  initialState: [
    {
      userId: 1,
      comments: [
        {
          id: 1,
          restaurant_id: 1,
          rate: 4.3,
          history_id: 1,
          items: [
            {
              id: 1,
              title: "چلو جوجه کباب",
              description:
                "۴۰۰ گرم برنج ایرانی یک سیخ ۱۶۰ گرم جوجه ( سینه مرغ بدون استخوان مزه دار شده)",
              price: 154000,
              main_img: JojeKetring,
              other_img: "",
              rate: "4.2",
              restaurant_id: 1,
              category: KEBAB,
            },
          ],
          date: "2024-04-05 11:25:56",
          description: "خیلی خوب بود ممنون",
        },
        {
          id: 2,
          restaurant_id: 1,
          rate: 4.3,
          history_id: 2,
          items: [
            {
              id: 1,
              title: "چلو جوجه کباب",
              description:
                "۴۰۰ گرم برنج ایرانی یک سیخ ۱۶۰ گرم جوجه ( سینه مرغ بدون استخوان مزه دار شده)",
              price: 154000,
              main_img: JojeKetring,
              other_img: "",
              rate: "4.2",
              restaurant_id: 1,
              category: KEBAB,
            },
            {
              id: 2,
              title: "چلو کباب کوبیده",
              description:
                "۴۰۰ گرم برنج ایرانی یک سیخ ۱۵۰ گرم کوبیده (گوشت گوساله و گوسفند))",
              price: 154000,
              main_img: KobidehKetring,
              other_img: "",
              rate: "4.2",
              restaurant_id: 1,
              category: KEBAB,
            },
          ],
          date: "2024-04-05 11:25:56",
          description:
            "ای کاش نون هم محصول خودشون بود و دست ساز ‌بود و بندری یکمی زیادی رب گوجه ای بود ولی در مجموع عالی عالی…",
        },
      ],
    },
  ],
  reducers: {
    addComment: (state, action) => {
      const { payload } = action;
      const {
        items,
        restaurant_id,
        date,
        rate,
        userId,
        description,
        history_id,
      } = payload;
      const index = state.findIndex((user) => user.userId === userId);
      state[index].commentsCart.push({
        id: Math.floor(Math.random() * 1000),
        items,
        restaurant_id,
        date,
        rate,
        history_id,
        description,
      });
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;

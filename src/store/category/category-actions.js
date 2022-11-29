import { CATEGORY_ACTION_TYPES } from "./category-action-types";

export const SetCategoryAction = (categoryData) => {
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORY_ACTION,
    payload: categoryData,
  };
};

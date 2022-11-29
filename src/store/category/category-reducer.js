import { CATEGORY_ACTION_TYPES } from "./category-action-types";

const INITIAL_STATE = {
  Categories: [],
};

const CategoryReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORY_ACTION:
      return { ...state, Categories: payload };

    default:
      return state;
  }
};

export default CategoryReducer;

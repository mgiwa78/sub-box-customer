import { createSelector } from "reselect";

const CategoriesState = (state) => state.Category;

export const SelectCategories = createSelector(
  [CategoriesState],
  (CategoriesState) => CategoriesState.Categories
);

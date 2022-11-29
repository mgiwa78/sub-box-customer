import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import CategoryReducer from "./category/category-reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  Category: CategoryReducer,
  cart: cartReducer,
});

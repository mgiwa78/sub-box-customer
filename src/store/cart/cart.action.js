import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  console.log(cartItems, productToAdd);
  const existingCartItem = cartItems.find(
    (cartItem) => productToAdd.product_id === cartItem.product_id
  );

  if (existingCartItem) {
    return cartItems.map((cartitem) =>
      cartitem.product_id === productToAdd.product_id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  return [{ ...productToAdd, quantity: 1 }, ...cartItems];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const itemToRemove = cartItems.find(
    (cartItem) => cartItemToRemove.product_id === cartItem.product_id
  );

  if (itemToRemove.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.product_id !== cartItemToRemove.product_id
    );
  }
  return cartItems.map((cartitem) =>
    cartitem.product_id === cartItemToRemove.product_id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};

const clearItem = (cartItems, cartItemToClear) => {
  return cartItems.filter(
    (cartItem) => cartItem.product_id !== cartItemToClear.product_id
  );
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItem = (cartItems, cartItemToClear) => {
  const newCartItems = clearItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_CART_STATE, boolean);

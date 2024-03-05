import { createContext, useReducer } from "react";
import { createActions } from "../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItem = (cartItems, productToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const CartContex = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemfromCart: () => {},
  cartCount: 0,
  delteFromCart: () => {},
  cartTotal: 0,
});

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
export const CART_ACRION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACRION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACRION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispacth] =
    useReducer(cartReducer, INITIAL_STATE);
  const upadteCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispacth(
      createActions(CART_ACRION_TYPES.SET_CART_ITEMS,{
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },));
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    upadteCartItemReducer(newCartItems);
  };
  const removeItemfromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    upadteCartItemReducer(newCartItems);
  };
  const delteFromCart = (productToRemove) => {
    const newCartItems = deleteItem(cartItems, productToRemove);
    upadteCartItemReducer(newCartItems);
  };
  const setIsCartOpen = (bool) => [
    dispacth(createActions(CART_ACRION_TYPES.SET_IS_CART_OPEN, bool)),
  ];
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemfromCart,
    delteFromCart,
    cartTotal,
  };
  return <CartContex.Provider value={value}>{children}</CartContex.Provider>;
};

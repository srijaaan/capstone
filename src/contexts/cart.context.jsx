import { createContext, useState, useEffect } from "react";

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

const removeCartItem = (cartItems, productToRemove) =>{
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if(existingCartItem.quantity === 1){
    return cartItems.filter((cartItem)=>cartItem.id!==productToRemove.id)
  }
  return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
}

const deleteItem = (cartItems, productToRemove)=>{
  return cartItems.filter((cartItem)=>cartItem.id!==productToRemove.id);
};

export const CartContex = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [], 
  addItemToCart: () => {},
  removeItemfromCart : ()=>{},
  cartItemCount: 0,
  delteFromCart: ()=>{}, 
  cartTotal : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setCartTotal(cartTotal+productToAdd.price)
  };
  const removeItemfromCart = (productToRemove)=>{
    setCartItems(removeCartItem(cartItems, productToRemove))
    setCartTotal(cartTotal-productToRemove.price)
  }
  const delteFromCart=(productToRemove)=>{
    setCartItems(deleteItem(cartItems, productToRemove))
    setCartTotal(cartTotal-(productToRemove.price*productToRemove.quantity))
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    removeItemfromCart,
    delteFromCart,
    cartTotal
  };
  return <CartContex.Provider value={value}>{children}</CartContex.Provider>;
};

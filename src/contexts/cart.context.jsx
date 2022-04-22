import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
  
  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map(cartItem => (
      cartItem.id === productToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem 
    ));
  }
  
  // return new array with modified cartItems/ new cart item
  return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [{
    "id": 4,
    "name": "Grey Brim",
    "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
    "price": 25,
    "quantity": 1
  }],
  addItemToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
import React, { createContext, useState, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);


  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const exists = prev.find((it) => it.id === product.id);
      if (exists) {
        return prev.map((it) =>
          it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);


  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  
  const increaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );
  }, []);

  
  const decreaseQuantity = useCallback((id) => {
    setCartItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it
      )
    );
  }, []);


  const totalPrice = cartItems.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const totalQuantity = cartItems.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

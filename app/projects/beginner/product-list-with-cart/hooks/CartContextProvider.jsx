import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export default function CartContextProvider({ children }) {
  //State:
  const [cartItems, setCartItems] = useState([]);

  //Handlers:
  const handleAdd = (dessertId) => {
    const isInCart = cartItems.find((item) => item.id === dessertId);
    if (!isInCart) {
      setCartItems((prevItems) => [
        ...prevItems,
        { id: dessertId, quantity: 1 },
      ]);
    } else {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === dessertId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      );
      setCartItems(newItems);
    }
  };
  const handleDeleteKind = (dessertId) => {
    const newItems = cartItems.filter((item) => item.id !== dessertId);
    setCartItems(newItems);
  };
  const handleDelete = (dessertId) => {
    const isLastDessert = cartItems.find(
      (item) => item.id === dessertId && item.quantity === 1,
    );

    if (isLastDessert) {
      handleDeleteKind(dessertId);
    } else {
      const newItems = cartItems.map((cartItem) =>
        cartItem.id === dessertId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem,
      );
      setCartItems(newItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAdd,
        handleDelete,
        handleDeleteKind,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

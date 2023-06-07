import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    // Recherche le produit par son ID dans votre liste de produits disponibles
    const productToAdd = availableProducts.find(product => product.id === productId);

    // Vérifie si le produit existe déjà dans le panier
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
      // Si le produit existe déjà, met à jour la quantité
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Si le produit n'existe pas, ajoute-le avec une quantité de 1
      setCartItems(prevItems => [...prevItems, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>;
};

export default CartProvider;
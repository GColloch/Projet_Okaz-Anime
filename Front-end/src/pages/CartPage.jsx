import React from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Panier</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <img>{item.picture}</img>
          <p>{item.price}</p>
          <p>{item.caracteristiques}</p>
          <p>{item.matière}</p>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

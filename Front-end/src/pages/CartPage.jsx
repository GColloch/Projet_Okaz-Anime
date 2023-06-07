import React from 'react';

const CartPage = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Panier</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;

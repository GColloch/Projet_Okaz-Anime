import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

const Panier = () => {
  return (
    <>
      <div className="degrade-block">
      </div>
      <div className='containerPanier'>
        <h1>VIDE</h1>
        <h2>???</h2>
        <p className='mangaPanier'>TM</p>
        <p className='productPanier2'>TM</p>
        <p className='productPanier1'>??? Manga France</p>
        <p className='pricePanier'>???</p>
        <p className='modèle'>MODÈLE :</p>
        <button className='boitePanier'>???</button>
        <button className='ajouterPanier'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>
        <button className='acheterPanier'>ACHETER MAINTENANT</button>
        <input className='quantity' type="number" name="quantite" min="1" max="999" defaultValue="1" />
        <p className='textQuantity'>Quantité</p>
        <p className='description'>DESCRIPTION :</p>
        <p className='descriptionText'>???</p>
        <p className='caractéristique'>CARACTÉRISTIQUE :</p>
        <p className='caractéristiqueText'>???</p>
        <p className='matière'>MATIÈRE :</p>
        <p className='matièreText'>???</p>
      </div>

    </>
  );
};

export default Panier;

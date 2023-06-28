import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

const PanierBerserk = () => {
  return (
    <>
      <div className="degrade-block">
        <img className="image-overlaypanier2" src="/media/posters/berserk.jpg" alt="Image superposée" />
      </div>
      <div className='containerPanier'>
        <h1>BERSERK</h1>
        <h2>BERSERK</h2>
        <p className='mangaPanier'>TM</p>
        <p className='productPanier2'>TM</p>
        <p className='productPanier1'>Poster Manga France</p>
        <p className='pricePanier'>19,99 €</p>
        <p className='modèle'>MODÈLE :</p>
        <button className='boitePanier'>Berserk avec boîte</button>
        <button className='ajouterPanier'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>
        <button className='acheterPanier'>ACHETER MAINTENANT</button>
        <input className='quantity' type="number" name="quantite" min="1" max="999" defaultValue="1" />
        <p className='textQuantity'>Quantité</p>
        <p className='description'>DESCRIPTION :</p>
        <p className='descriptionText'>Version super détaillée d'un poster Berserk, l'univers <br />
cultes de Berserk.</p>
        <p className='caractéristique'>CARACTÉRISTIQUE :</p>
        <p className='caractéristiqueText'>Haute qualité de détails <br />
Hauteur: 17 cm</p>
        <p className='matière'>MATIÈRE :</p>
        <p className='matièreText'>Papier</p>
      </div>
        <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Fréquemment achetés ensemble</h1>
      </div>
    </div>
    <div className="cardContainer">
  <div className="cardPanier">
    <img src="/media/posters/poster naruto.png" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/posters/mha.png" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/posters/onepiece.jpg" alt="Image" />
  </div>
  <button className='ajouterPanierCard'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>

</div>

    </>
  );
};

export default PanierBerserk;

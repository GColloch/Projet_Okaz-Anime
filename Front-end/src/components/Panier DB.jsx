import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

const PanierDB = () => {
  return (
    <>
      <div className="degrade-block">
        <img className="image-overlaypanier2" src="/media/mangas/dbz.jpg" alt="Image superposée" />
      </div>
      <div className='containerPanier'>
        <h1>DRAGON BALL</h1>
        <h2>DRAGON BALL</h2>
        <p className='mangaPanier'>TM</p>
        <p className='productPanier2'>TM</p>
        <p className='productPanier1'>Manga France</p>
        <p className='pricePanier'>6,99 €</p>
        <p className='modèle'>MODÈLE :</p>
        <button className='boitePanier'>Dragon Ball avec boîte</button>
        <button className='ajouterPanier'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>
        <button className='acheterPanier'>ACHETER MAINTENANT</button>
        <input className='quantity' type="number" name="quantite" min="1" max="999" defaultValue="1" />
        <p className='textQuantity'>Quantité</p>
        <p className='description'>DESCRIPTION :</p>
        <p className='descriptionText'>Version papier du Tome 1 de Dragon Ball, l'univers <br />
cultes de Dragon Ball.</p>
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
    <img src="/media/mangas/Naruto.jpg" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/mangas/manga one piece.png" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/mangas/chainsaw man.jpg" alt="Image" />
  </div>
  <button className='ajouterPanierCard'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>

</div>

    </>
  );
};

export default PanierDB;

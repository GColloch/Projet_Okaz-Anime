import React from 'react';
import { RiShoppingBasketLine } from 'react-icons/ri';

const PanierLaw = () => {
  return (
    <>
      <div className="degrade-block">
        <img className="image-overlaypanier" src="/media/figurines/trafalgar law.png" alt="Image superposée" />
      </div>
      <div className='containerPanier'>
        <h1>TRAFALGAR LAW</h1>
        <h2>ONE PIECE</h2>
        <p className='mangaPanier'>TM</p>
        <p className='productPanier2'>TM</p>
        <p className='productPanier1'>Figurine Manga France</p>
        <p className='pricePanier'>129,99 €</p>
        <p className='modèle'>MODÈLE :</p>
        <button className='boitePanier'>Trafalgar Law avec boîte</button>
        <button className='ajouterPanier'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>
        <button className='acheterPanier'>ACHETER MAINTENANT</button>
        <input className='quantity' type="number" name="quantite" min="1" max="999" defaultValue="1" />
        <p className='textQuantity'>Quantité</p>
        <p className='description'>DESCRIPTION :</p>
        <p className='descriptionText'>Version super détaillée de la figurine de Trafalgar Law, un des personnages <br />
cultes de One Piece.</p>
        <p className='caractéristique'>CARACTÉRISTIQUE :</p>
        <p className='caractéristiqueText'>Haute qualité de détails <br />
Hauteur: 17 cm</p>
        <p className='matière'>MATIÈRE :</p>
        <p className='matièreText2'>Polyethylene</p>
      </div>
        <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Fréquemment achetés ensemble</h1>
      </div>
    </div>
    <div className="cardContainer">
  <div className="cardPanier">
    <img src="/media/figurines/broly.png" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/posters/onepiece.jpg" alt="Image" />
  </div>
  <p className="textCardPanier">+</p>
  <div className="cardPanier">
    <img src="/media/figurines/zoro.png" alt="Image" />
  </div>
  <button className='ajouterPanierCard'>AJOUTER AU PANIER <RiShoppingBasketLine className='iconShop'/></button>

</div>

    </>
  );
};

export default PanierLaw;
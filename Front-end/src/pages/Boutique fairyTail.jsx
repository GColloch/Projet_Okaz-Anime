import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierFairyTail from '../components/Panier fairyTail';

const BoutiqueFairyTail = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierFairyTail/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueFairyTail;
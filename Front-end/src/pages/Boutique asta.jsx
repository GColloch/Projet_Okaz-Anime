import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierAsta from '../components/Panier Asta';

const BoutiqueAsta = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierAsta/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueAsta;
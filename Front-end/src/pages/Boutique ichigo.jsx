import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierIchigo from '../components/Panier ichigo';

const BoutiqueIchigo = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierIchigo/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueIchigo;
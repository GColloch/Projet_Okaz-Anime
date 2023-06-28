import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierBroly from '../components/Panier broly';

const BoutiqueBroly = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierBroly/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueBroly;
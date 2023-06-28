import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierEren from '../components/Panier eren';

const BoutiqueEren = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierEren/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueEren;
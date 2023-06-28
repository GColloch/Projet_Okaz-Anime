import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierOnepiece from '../components/Panier onepiece';

const BoutiqueOnepiece = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierOnepiece/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueOnepiece;
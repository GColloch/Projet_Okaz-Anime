import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierNaruto from '../components/Panier Naruto';

const BoutiqueNaruto = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierNaruto/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueNaruto;
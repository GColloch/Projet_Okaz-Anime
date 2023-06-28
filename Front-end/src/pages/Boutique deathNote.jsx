import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierDeathNote from '../components/Panier deathNote';

const BoutiqueDeathNote = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierDeathNote/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueDeathNote;
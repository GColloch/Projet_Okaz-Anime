import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierZoro from '../components/Panier zoro';

const BoutiqueZoro = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierZoro/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueZoro;
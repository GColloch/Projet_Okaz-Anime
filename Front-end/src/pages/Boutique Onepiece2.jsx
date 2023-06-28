import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierOnepiece2 from '../components/Panier Onepiece2';

const BoutiqueOnepiece2 = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierOnepiece2/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueOnepiece2;
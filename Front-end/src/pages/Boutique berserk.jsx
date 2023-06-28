import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierBerserk from '../components/Panier berserk';

const BoutiqueBerserk = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierBerserk/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueBerserk;
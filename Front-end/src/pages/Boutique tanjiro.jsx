import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierTanjiro from '../components/Panier tanjiro';

const BoutiqueTanjiro = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierTanjiro/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueTanjiro;
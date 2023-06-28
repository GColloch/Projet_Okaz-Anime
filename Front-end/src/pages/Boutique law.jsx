import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierLaw from '../components/Panier law';

const BoutiqueLaw = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierLaw/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueLaw;
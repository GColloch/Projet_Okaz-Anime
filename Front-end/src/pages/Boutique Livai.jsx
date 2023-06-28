import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierLivai from '../components/Panier livai';

const BoutiqueLivai = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierLivai/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueLivai;
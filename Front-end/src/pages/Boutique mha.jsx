import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierMha from '../components/Panier mha';

const BoutiqueMha = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierMha/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueMha;
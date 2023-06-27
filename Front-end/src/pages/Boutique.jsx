import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import Panier from '../components/Panier';

const Boutique = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <Panier/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default Boutique;
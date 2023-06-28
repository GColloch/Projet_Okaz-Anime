import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierSasukeItachi from '../components/Panier sasukeItachi';

const BoutiqueSasukeItachi = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierSasukeItachi/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueSasukeItachi;
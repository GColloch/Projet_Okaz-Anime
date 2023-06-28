import React from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import Footer from '../components/Footer';
import Cookies from '../components/Cookies';
import PanierDB from '../components/Panier DB';

const BoutiqueDB = () => {
  return (
    <div>
      <Livraison />
      <Navigation />
      <PanierDB/>
      <Footer />
      <Cookies />
    </div>
  );
};

export default BoutiqueDB;
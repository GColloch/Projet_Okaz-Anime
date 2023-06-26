import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../components/Footer';
import Cards_Figurines from '../components/Cards_Figurines';
import Livraison from '../components/Livraison';
import BannerFigurines from '../components/BannerFigurines';

const Figurines = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <BannerFigurines />
        <Cards_Figurines />
        <Footer />
        </div>
         
    );
};

export default Figurines;
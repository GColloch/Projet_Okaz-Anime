import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../components/Footer';
import Cards_Figurines from '../components/Cards_Figurines';
import Livraison from '../components/Livraison';

const Figurines = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <Cards_Figurines />
        <Footer />
        </div>
         
    );
};

export default Figurines;
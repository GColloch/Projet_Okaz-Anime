import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../components/Footer';
import Cards_Posters from '../components/Cards_Posters';
import Livraison from '../components/Livraison';

const Posters = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <Cards_Posters />
        <Footer />

        </div>
    );
};

export default Posters;
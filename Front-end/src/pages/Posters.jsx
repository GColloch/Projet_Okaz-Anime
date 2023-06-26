import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../components/Footer';
import Cards_Posters from '../components/Cards_Posters';
import Livraison from '../components/Livraison';
import BannerPosters from '../components/BannerPosters';

const Posters = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <BannerPosters />
        <Cards_Posters />
        <Footer />

        </div>
    );
};

export default Posters;
import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../components/Footer';
import Cards_Mangas from '../components/Cards_Mangas';
import Livraison from '../components/Livraison';
import BannerMangas from '../components/BannerMangas';

const Mangas = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <BannerMangas />
        <Cards_Mangas />
        <Footer />
        </div>
    );
};

export default Mangas;
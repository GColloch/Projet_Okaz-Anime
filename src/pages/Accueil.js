import React from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Présentation from '../components/Présentation';

const Accueil = () => {
    return (
        <div>
        <Navigation />
        <Présentation />
        <Cards  />
        <Footer />
            
        </div>
    );
};

export default Accueil;
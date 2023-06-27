import {useState} from 'react';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import FormContact from '../components/FormContact';
import BannerContact from '../components/BannerContact';
import Cookies from '../components/Cookies';

const Contact = () => {
    
    return (
        <div>
            <Livraison />
            <Navigation />
            <BannerContact />
            <FormContact />
            <img className='goku' src="./media/body/gokumail.png" alt="" />
            <Map />
            <Footer />
            <Cookies />
        </div>
    );
};

export default Contact;
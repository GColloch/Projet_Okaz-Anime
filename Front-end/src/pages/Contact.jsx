import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Map from '../components/Map';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';

const Contact = () => {
    return (
        <div>
            <Livraison />
            <Navigation />
            <Form />
            <Map />
            <Footer />
        </div>
    );
};

export default Contact;
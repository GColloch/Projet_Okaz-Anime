import Cards_Accueil from '../components/Cards_Accueil';
import Footer from '../components/Footer';
import Navigation from '../Navigation/Navigation';
import Partenariat from '../components/Partenariat';
import Livraison from '../components/Livraison';
import Banner from '../components/Banner';
import Carousel from '../components/Présentation';


const Accueil = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <Banner />
        <Carousel />
        <Cards_Accueil />
        <Partenariat />
        <Footer /> 
            
        </div>
    );
};

export default Accueil;
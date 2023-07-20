import Footer from '../components/Footer';
import Navigation from '../Navigation/Navigation';
import Partenariat from '../components/Partenariat';
import Livraison from '../components/Livraison';
import Banner from '../components/Banner';
import Presentation from '../components/Présentation';
import Cookies from '../components/Cookies';


const Accueil = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <Banner />
        <Presentation />
        <Partenariat />
        <Footer /> 
        <Cookies />
            
        </div>
    );
};

export default Accueil;
import Cards_Accueil from '../components/Cards_Accueil';
import Footer from '../components/Footer';
import Navigation from '../Navigation/Navigation';
import Partenariat from '../components/Partenariat';
import Présentation from '../components/Présentation';
import Livraison from '../components/Livraison';


const Accueil = () => {
    return (
        <div>
        <Livraison />
        <Navigation />
        <Présentation />
        <Cards_Accueil />
        <Partenariat />
        <Footer />
            
        </div>
    );
};

export default Accueil;
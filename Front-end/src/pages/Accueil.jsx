import Cards_Accueil from '../components/Cards_Accueil';
import Cards from '../components/Cards_Accueil';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Partenariat from '../components/Partenariat';
import Présentation from '../components/Présentation';


fetch("https://dummyjson.com/products").then((Response) => {
    console.log(Response)
})

const Accueil = () => {
    return (
        <div>
        <Navigation />
        <Présentation />
        <Cards_Accueil />
        <Partenariat />
        <Footer />
            
        </div>
    );
};

export default Accueil;
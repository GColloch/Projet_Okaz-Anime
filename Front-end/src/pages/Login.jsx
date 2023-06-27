import React from 'react';
import {useState} from 'react';
import Navigation from '../Navigation/Navigation';
import Livraison from '../components/Livraison';
import BannerConnexionInscription from '../components/BannerConnexionInscription';
import FormLogin from '../components/FormLogin';
import Cookies from '../components/Cookies';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Il doit s'agir d'une adresse électronique valide !",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "mot de passe",
      errorMessage:
        "Votre mot de passe doit comporter de 8 à 20 caractères, dont au moins 1 lettre, 1 chiffre et 1 caractère spécial !",
      label: "mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }
  ];
const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
            <Livraison />
            <Navigation />
            <BannerConnexionInscription />
            <div className="containerform">
      <form onSubmit={handleSubmit}>
        <h1>Connexion</h1>
        {inputs.map((input) => (
          <FormLogin
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='register'>Se connecter</button>
        <Link to="/Register">
  <button className='register'>Se déconnecter</button>
</Link>
      </form>
    </div>
    <Footer />
    <Cookies />
    </div>
    
  );
};

export default Login;
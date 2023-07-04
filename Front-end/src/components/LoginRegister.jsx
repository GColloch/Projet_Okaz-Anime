import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données de connexion au serveur
    axios.post('/api/login', { email, password })
      .then((response) => {
        // Traite la réponse du serveur
        // si le serveur renvoie un code de réussite 200
        // redirige l'utilisateur vers la page d'accueil
        if (response.status === 200) {
          window.location.href = '/home'; // Redirection vers la page d'accueil
        } else {
          // Si la réponse du serveur n'est pas conforme aux attentes, affiche un message d'erreur
          setError('Erreur lors de la connexion');
        }
      })
      .catch((error) => {
        // Traite les erreurs
        if (error.response && error.response.status === 400) {
          // Si le serveur renvoie un code d'erreur 400, affiche un message d'erreur
          setError('Erreur lors de la connexion');
        } else {
          // Gestion des autres erreurs
          setError('Erreur lors de la requête');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse e-mail" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
      {error && <p>{error}</p>}
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
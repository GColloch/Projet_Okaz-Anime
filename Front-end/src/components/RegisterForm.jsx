import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoye les données d'inscription au serveur
    const userData = { name, email, password };
    axios.post('/api/register', userData)
      .then((response) => {
        // Traite la réponse du serveur
        setMessage(response.data.message);
        // Réinitialise les champs du formulaire
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        // Traite les erreurs
        if (error.response) {
          // Erreur de réponse HTTP
          setMessage(error.response.data.message);
        } else {
          // Erreur de requête
          setMessage('Une erreur s\'est produite lors de l\'envoi de la requête.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse e-mail" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">S'inscrire</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterForm;

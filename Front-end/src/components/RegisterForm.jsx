import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoye les données d'inscription au serveur
    const userData = { name, email, birthday, password, confirmPassword, messageError };
    axios.post('/api/register', userData)
      .then((response) => {
        // Traite la réponse du serveur
        setMessage(response.data.messageError);
        // Réinitialise les champs du formulaire
        setName('');
        setEmail('');
        setBirthday('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        // Traite les erreurs
        if (error.response) {
          // Erreur de réponse HTTP
          setMessageError(error.response.data.messageError);
        } else {
          // Erreur de requête
          setMessageError('Une erreur s\'est produite lors de l\'envoi de la requête.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Prénom" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Adresse e-mail" />
      <input type="datePicker" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Anniversaire" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="mot de passe" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmer votre mot de passe" />
      <button type="submit">S'inscrire</button>
     <a href='/login'><button type="submit">Se connecter</button></a>
      {messageError && <p>{messageError}</p>}
    </form>
  );
};

export default RegisterForm;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // Bibliothèque de hachage de mots de passe
const User = require('../models/User'); // Modèle d'utilisateur

router.post('/login', async (req, res) => {
  try {
    // Récupére les données de connexion du corps de la requête
    const { email, password } = req.body;

    // Cherche l'utilisateur correspondant à l'adresse e-mail dans la base de donnée
    const user = await User.findOne({ email });

    if (!user) {
      // L'utilisateur n'existe pas
      return res.status(404).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }

    // Compare le mot de passe fourni avec celui stocké dans la base de donnée
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Le mot de passe est incorrect
      return res.status(401).json({ message: "L'adresse e-mail ou le mot de passe est incorrect." });
    }

    // Les informations de connexion sont valides
    return res.status(200).json({ message: 'Connexion réussie.' });
  } catch (error) {
    // Erreur lors du traitement de la requête
    console.error(error);
    return res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
  }
});

module.exports = router;
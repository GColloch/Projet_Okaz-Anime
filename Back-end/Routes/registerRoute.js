const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  // Récupére les données d'inscription du corps de la requête
  const { name, email, birthday, password, confirmPassword } = req.body;

  // Valide les données d'inscription
  if (!name || !email || !birthday || !password || !confirmPassword) {
    return res.status(400).json({ message: "Veuillez remplir tous les champs obligatoires." });
  }

  // Vérifie l'unicité de l'adresse e-mail dans la base de données
  User.findOne({ email: email }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ message: "Il doit s'agir d'une adresse électronique valide !" });
    }

    if (existingUser) {
      return res.status(409).json({ message: "L'adresse e-mail est déjà utilisée par un autre utilisateur." });
    }

    // Autres vérifications de validation (conformité du mot de passe, etc.) peuvent être ajoutées ici

    // Crée un nouvel enregistrement utilisateur dans la base de donnée
    const newUser = new User({
      name: name,
      email: email,
      birthday: birthday,
      password: password,
      confirmPassword: confirmPassword
    });

    newUser.save((err) => {
      if (err) {
        return res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement de l'utilisateur." });
      }

      // Envoye une réponse JSON avec un message de succès
      return res.status(200).json({ message: "Inscription réussie !" });
    });
  });
});

module.exports = router;

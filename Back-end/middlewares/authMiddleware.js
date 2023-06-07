const jwt = require('jsonwebtoken');

// Génération d'une clé secrète sécurisée
const secretKey = '9Bf0g3sRnWt4';

const authMiddleware = (req, res, next) => {
  // Logique pour vérifier l'authentification de l'utilisateur
  // Utilisation des jetons JWT

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token d\'authentification manquant' });
  }

  try {
    const decoded = jwt.verify(token, secretKey); 
    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token d\'authentification invalide' });
  }
};

module.exports = authMiddleware;

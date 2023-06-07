const express = require('express');
const mysql = require('mysql');
const cartRoutes = require('./routes/cart');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Guillaume',
  password: '9SY=<6j!jKx2',
  database: 'Produits'
});

// Connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données établie');
  }
});

app.use(express.json());

// Routes du panier
app.post('/cart/add', authMiddleware, (req, res) => {
  const { productId } = req.body;
  const userId = req.user.id;

  // Logique pour ajouter le produit au panier dans la base de données
  const addToCartQuery = 'INSERT INTO Cart (userId, productId) VALUES (?, ?)';
  connection.query(addToCartQuery, [userId, productId], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'ajout du produit au panier :', err);
      res.status(500).json({ error: 'Erreur lors de l\'ajout du produit au panier' });
    } else {
      res.status(200).json({ message: 'Produit ajouté au panier avec succès' });
    }
  });
});

app.delete('/cart/remove/:productId', authMiddleware, (req, res) => {
  const { productId } = req.params;
  const userId = req.user.id;

  // Logique pour supprimer le produit du panier dans la base de données
  const removeFromCartQuery = 'DELETE FROM Cart WHERE userId = ? AND productId = ?';
  connection.query(removeFromCartQuery, [userId, productId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression du produit du panier :', err);
      res.status(500).json({ error: 'Erreur lors de la suppression du produit du panier' });
    } else {
      res.status(200).json({ message: 'Produit supprimé du panier avec succès' });
    }
  });
});


// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// Fermeture de la connexion à la base de données
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
    } else {
      console.log('Connexion à la base de données fermée');
      process.exit(0);
    }
  });
});

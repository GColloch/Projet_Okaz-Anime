const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Guillaume',
  password: '9SY=<6j!jKx2',
  database: 'Produits'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données établie');
  }
});

app.get('/api/products', (req, res) => {
  connection.query('SELECT * FROM Figurines', (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

connection.end((err) => {
  if (err) {
    console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données fermée');
  }
});

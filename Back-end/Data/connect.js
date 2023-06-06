const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
host: 'localhost',
user: 'Guillaume',
password: '9SY=<6j!jKx2', database: 'Produits' }); // Établissement de la connexion à la base de données
  connection.connect((error)=> {
  if (error) {
  console.error('Erreur de connexion à la base de données :', error);
  return;
  }
  console.log('Connexion à la base de données réussie.');

  // Requête SQL pour récupérer les données des Figurines
  const sqlFigurines = 'SELECT * FROM Figurines';
  connection.query(sqlFigurines, (error, resultsFigurines) => {
  if (error) {
  console.error('Erreur lors de la récupération des Figurines :', error);
  return;
  }

  // Affichage des Figurines
  if (resultsFigurines.length > 0) {
  console.log('Figurines :');
  resultsFigurines.forEach((row) => {
  console.log('Nom:', row.nom);
  console.log('Anime:', row.anime);
  console.log('Description:', row.description);
  console.log('Prix:', row.prix);
  console.log('-------------------');
  });
  } else {
  console.log('Aucune Figurine trouvée.');
  }

  // Requête SQL pour récupérer les données des Mangas
  const sqlMangas = 'SELECT * FROM Mangas';
  connection.query(sqlMangas, (error, resultsMangas) => {
  if (error) {
  console.error('Erreur lors de la récupération des Mangas :', error);
  return;
  }

  // Affichage des Mangas
  if (resultsMangas.length > 0) {
  console.log('Mangas :');
  resultsMangas.forEach((row) => {
  console.log('Nom:', row.nom);
  console.log('Anime:', row.anime);
  console.log('Description:', row.description);
  console.log('Prix:', row.prix);
  console.log('-------------------');
  });
  } else {
  console.log('Aucun Manga trouvé.');
  }

  // Requête SQL pour récupérer les données des Posters
  const sqlPosters = 'SELECT * FROM Posters';
  connection.query(sqlPosters, (error, resultsPosters) => {
  if (error) {
  console.error('Erreur lors de la récupération des Posters :', error);
  return;
  }

  // Affichage des Posters
  if (resultsPosters.length > 0) {
  console.log('Posters :');
  resultsPosters.forEach((row) => {
  console.log('Nom:', row.nom);
  console.log('Anime:', row.anime);
  console.log('Description:', row.description);
  console.log('Prix:', row.prix);
  console.log('-------------------');
  });
  } else {
  console.log('Aucun Poster trouvé.');
  }

  // Fermeture de la connexion à la base de données
  connection.end((error) => {
  if (error) {
  console.error('Erreur lors de la fermeture de la connexion :', error);
  return;
  }
  console.log('Connexion à la base de données fermée.');
  });
  });
  });
  });
  });
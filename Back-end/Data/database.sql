/* Création de la base de donnée Produits */

CREATE DATABASE Produits;


/*Sélection de la base de donnée Produits*/

USE Produits;


/* Table des produits Figurines */

CREATE TABLE Figurines (
    id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  description TEXT,
  prix DECIMAL(10, 2)
);


/* Table des produits Mangas */

CREATE TABLE Mangas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  description TEXT,
  prix DECIMAL(10, 2)
);

/* Table des produits Posters */

CREATE TABLE Posters (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(255),
  description TEXT,
  prix DECIMAL(10, 2)
);



/*Inseration des produits Figurines dans la base de donnée*/

INSERT INTO Figurines (id, nom, anime, description, prix)
VALUES
  (1, 'Gojo',"Figurine de l'animé jujutsu kaisen", 29.99),
  (2, 'Broly', "Figurine de l'animé Dragon Ball Z", 32.99),
  (3, 'Livai' "Figurine de l'animé l'Attaque des Titan", 25.99),
  (4, 'Zoro', "Figurine de l'animé One Piece", 32.99),
  (5, 'Tanjiro', "Figurine de l'animé Demon slayer", 83.99),
  (6, 'Duo Sasuke / Itachi',"Figurine de l'animé Naruto", 56.99);


/*Inseration des produits Posters dans la base de donnée*/

INSERT INTO Posters (id, nom, description, prix)
VALUES
  (1, 'Asta',"Poster de l'animé Black Cover", 17.99),
  (2, 'Eren', "Poster de l'animé l'Attaque des Titan", 14.99),
  (3, 'Ichigo' "Poster de l'animé Bleach", 9.99),
  (4, 'Berserk', "Poster de l'animé Berserk", 19.99),
  (5, 'MHA', "Poster de l'animé My Hero Academia", 19.99),
  (6, 'One Piece',"Poster de l'animé One Piece", 18.99);


/*Inseration des Mangas Figurines dans la base de donnée*/

INSERT INTO Mangas (id, nom, description, prix)
VALUES
  (1, 'Fairy Tail',"Manga de l'animé Fairy Tail", 12.99),
  (2, 'Chainsaw Man', "Manga de l'animé Chainsaw Man", 15.99),
  (3, 'Death Note' "Manga de l'animé Death Note", 13.99),
  (4, 'Dragon Ball - Édition Originale', "Manga de l'animé Dragon Ball", 26.99),
  (5, 'One Piece Tome 100', "Manga de l'animé One Piece", 11.99),
  (6, 'Naruto',"Manga de l'animé Naruto", 16.99);
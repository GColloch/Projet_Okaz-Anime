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
  (1, 'Trafalgar Law',"Figurine de l’animé « One Piece »", 129.99),
  (2, 'Broly', "Figurine de l’animé « Dragon Ball Z »", 32.99),
  (3, 'Livai Ackerman', "Figurine de « l'animé l'Attaque des Titan »", 53.99),
  (4, 'Roronoa Zoro', "Figurine de l’animé « One Piece »", 32.99),
  (5, 'Kamado Tanjiro', "Figurine de l'animé « Demon slayer »", 83.99),
  (6, 'Sasuke / Itachi',"Figurine de l'animé « Naruto »", 95.99);


/*Inseration des produits Posters dans la base de donnée*/

INSERT INTO Posters (id, nom, description, prix)
VALUES
  (1, 'Asta',"Poster de l'animé « Black Clover »", 17.99),
  (2, 'Eren Jager', "Poster de l'animé « l’Attaque Des Titans »", 14.99),
  (3, 'Ichigo Kurosaki', "Poster de l'animé « Bleach »", 9.99),
  (4, 'Berserk', "Poster de l'animé « Berserk »", 19.99),
  (5, 'My Hero Academia', "Poster de l'animé « My Hero Academia »", 13.99),
  (6, 'One Piece',"Poster de l'animé « One Piece »", 18.99);


/*Inseration des Mangas Figurines dans la base de donnée*/

INSERT INTO Mangas (id, nom, description, prix)
VALUES
  (1, 'Fairy Tail',"Tome 03 : « Le Dragon de feu, le singe et la vache»", 3.99),
  (2, 'Chainsaw Man', "Tome 03 : « Tuez Denji ! »", 7.99),
  (3, 'Death Note' "Tome 04 : « Courant électrique »", 6.99),
  (4, 'Dragon Ball', "Tome 01 : « Son Gokû et ses amis Broché »", 6.99),
  (5, 'One Piece', "Tome 100 : « Le Fluide Royal »", 6.99),
  (6, 'Naruto',"Tome 04 : « Le pont des héros »", 5.99);
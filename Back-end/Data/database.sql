CREATE TABLE FigurinesManga (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    serie VARCHAR(100) NOT NULL,
    personnage VARCHAR(100) NOT NULL,
    date_sortie DATE,
    fabricant VARCHAR(100),
    prix DECIMAL(10, 2),
    description TEXT
);

INSERT INTO FigurinesManga (nom, serie, personnage, date_sortie, fabricant, prix, description)
VALUES ('Figurine A', 'Série X', 'Personnage Y', '2022-01-01', 'Fabricant Z', 29.99, 'Une description de la figurine A');

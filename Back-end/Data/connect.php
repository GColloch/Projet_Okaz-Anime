<?php
$servername = "localhost"; // Nom de l'hôte de la base de données
$username = "Guillaume"; // Nom d'utilisateur de la base de données
$password = "9SY=<6j!jKx2"; // Mot de passe de la base de données
$dbname = "FigurinesManga"; // Nom de la base de données

// Création de la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Erreur de connexion à la base de données : " . $conn->connect_error);
}

// Requête SQL pour récupérer les données
$sql = "SELECT * FROM FigurinesManga";
$result = $conn->query($sql);

// Vérification des résultats
if ($result->num_rows > 0) {
    // Parcourir les lignes de résultats et stocker les données dans un tableau
    $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Afficher les données sous forme de JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo "Aucun résultat trouvé.";
}

// Fermer la connexion lorsque vous avez terminé
$conn->close();
?>
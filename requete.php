
<?php
// Paramètres de connexion
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "ges_messages"; 

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Récupérer les données du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    $stmt = $conn->prepare("INSERT INTO users (nom, email, sujet, messages) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $nom, $email, $sujet, $message);
    //Connexion à la base de donnée
    // Exécution de la requête
    if ($stmt->execute()) {
        echo '<script language="JAVASCRIPT">alert("Le message est envoyé !")
        document.location.href="contact.html"</script>';
        
    } else {
        echo "Erreur : " . $stmt->error . "<br>";
    }

    // Fermer la déclaration
    $stmt->close();
}

// Fermer la connexion
$conn->close();
?>
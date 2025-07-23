<?php
$servername = "localhost"; // Typically 'localhost'
$username = "root"; // MySQL username
$password = ""; // MySQL password
$dbname = "growwork";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize and fetch input
$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$hashed_password = password_hash($password, PASSWORD_DEFAULT); // Hash the password
$country = mysqli_real_escape_string($conn, $_POST['country']);
$role = mysqli_real_escape_string($conn, $_POST['choce']);
$subscribe = isset($_POST['subscribe']) ? 1 : 0;

// Insert data into the database
$sql = "INSERT INTO users (name, email, password, country, role, subscribe) VALUES ('$name', '$email', '$hashed_password', '$country', '$role', '$subscribe')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
    header("Location: welcome.php"); // Redirect to a welcome page
    exit;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

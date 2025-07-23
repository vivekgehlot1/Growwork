<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "growwork";

// Create connection
$conn = new mysqli($"localhost","root","","growworkdb");
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input values
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Prevent SQL Injection
    $user = $conn->real_escape_string($user);
    $pass = $conn->real_escape_string($pass);

    // Query to check if the user exists
    $sql = "SELECT * FROM users WHERE (username='$user' OR email='$user') AND password='$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "Login successful!";
        // Redirect to a new page or dashboard here
    } else {
        echo "Invalid username or password!";
    }
}dfs

// Close the connection

?>
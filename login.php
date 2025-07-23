<?php
// connect.php
$servername = "localhost";
$username = "root"; // Default username, change if needed
$password = ""; // Default password, change if needed
$dbname = "growwork"; // Database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
<?php
// process.php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userType = $_POST['userType'];

    $sql = "INSERT INTO users (user_type) VALUES ('$userType')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>

<?php
// Database connection details
$host = "localhost"; // MySQL server address
$username = "root"; // MySQL username
$password = ""; // MySQL password
$database = "priyam"; // Database name

// Establish a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);
    $usertype = mysqli_real_escape_string($conn, $_POST["user-type"]);
        
    // SQL query to insert data into the database
    $sql = "INSERT INTO users (username, email, password, user_type) VALUES ('$username', '$email', '$password', '$usertype')";

    if ($conn->query($sql) === TRUE) {
        echo "Registration successful!";
        // You can redirect the user to another page here if registration is successful
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>

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

// Get username and password from the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($conn, $_POST["username"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    // SQL query to check if the entered username and password match the records
    $sql = "SELECT * FROM users WHERE Username='$username' AND Password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // Username and password are correct, redirect to the next page
        header("Location: Services.html"); // Replace "welcome.php" with the URL of the next page
    } else {
        // Username or password is incorrect
        echo "Login failed. Invalid username or password.";
    }

    // Close the database connection
    $conn->close();
}
?>

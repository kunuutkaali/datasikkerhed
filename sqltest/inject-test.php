<?php

// Get global post and count array:
$posted = count($_POST);

// Test if anything is submitted:
if(!$posted == 0){
    // Do something if there is posted.
    $msg = "Something is posted";

    // Setup db connection
    $host="localhost"; // Host
    $username="root"; // Username
    $password=""; // Password
    $db_name="sql_inject"; // Databasename

    // Create connection
    $conn = new mysqli($host, $username, $password, $db_name);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // prepare and bind inputs
    $stmt = $conn->prepare("SELECT userid, email from user_details where userid = ? and password = ? ");
    $stmt->bind_param("ss", $_POST['uid'], $_POST['passid']);

    // Execute statement and set result
    $stmt->execute();

    // Check number of rows:
    $stmt->store_result();
    if($stmt->num_rows() == 1){
        // Bind result
        $stmt->bind_result($userid, $email);

        // Fetch result
        $stmt->fetch();
    }

    // Close statement
    $stmt->close();

    // Close connection
    $conn->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST">
        <input type="text" name="uid" placeholder="User ID" required><br>
        <input type="password" name="passid" placeholder="Password" required><br>
        <input type="submit" value="Submit" />
    </form>
    <?php
    // Check if user has been fetched
    if(isset($userid)){
        echo 'User id: ' . $userid . ', with email: ' . $email . ' has been retrived';
    }
     ?>
</body>
</html>
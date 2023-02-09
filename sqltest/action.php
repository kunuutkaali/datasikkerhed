<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL-Injection Example</title>
</head>
<body>
    <?php
    // DB Credentials and settings
    $host="localhost"; // Host
    $username="root"; // Username
    $password=""; // Password
    $db_name="sql_inject"; // Databasename

    // Connect to DB
    $con = mysqli_connect("$host", "$username", "$password", $db_name) or die("cannot connect");
    // Check if Connection is a ok:
    if ($con->connect_errno) {
        printf("Connect failed: %s\n", $con->connect_error);
        exit();
    }

    $uid = $_POST['uid'];
    $passid = $_POST['passid'];


    // LE Query String
    $SQL = "select * from user_details where userid = '$uid' and password = '$passid' ";
    // Execute;
    $result = mysqli_query($con, $SQL);
    // Check if result is more than 0 rows
    if(mysqli_num_rows($result) > 0) 
    {
        echo "<h4>"."-- Personal Information -- "."</h4>";
        while($row = mysqli_fetch_row($result))
        {
            echo "<p>"."User ID : ".$row[0]."</p>";
            echo "<p>"."Password : ".$row[1]."</p>";
            echo "<p>"."First Name : ".$row[2]."</p>";
            echo "<p>"."Last Name : ".$row[3]."</p>";
            echo "<p>"."Gender : ".$row[4]."</p>";
            echo "<p>"."Date of Birth : ".$row[5]."</p>";
            echo "<p>"."Country : ".$row[6]."</p>";
            echo "<p>"."Email ID : ".$row[7]."</p>";
            echo "--------------------------------------------";
        }
    } else 
    {
        echo "Invalid user id or password";
    }
    // Close connection
    mysqli_close($con);
    ?>
</body>
</html>
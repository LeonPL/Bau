<?php

    $name = $_POST['nm'];
    $email = $_POST['em'];
    $deutsch = $_POST['hp'];




    /* Attempt MySQL server connection. Assuming you are running MySQL
    server with default setting (user 'root' with no password) */
    $mysqli = new mysqli("localhost", "root", "", "ajaxdata");

    // Check connection
    if($mysqli === false){
        die("ERROR: Could not connect. " . $mysqli->connect_error);
    }

    // Attempt insert query execution
    $sql = "INSERT INTO crud (name, email, deutsch) VALUES ('$name' ,'$email','$deutsch')";
    if($mysqli->query($sql) === true){
        echo "Records inserted successfully.";
    } else{
        echo "ERROR: Could not able to execute $sql. " . $mysqli->error;
    }

    // Close connection
    $mysqli->close();

?>

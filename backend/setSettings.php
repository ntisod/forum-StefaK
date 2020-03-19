<?php
    //Initialize the session
    session_start();

    //Check if the user is already logged in, if so, redirect him to the welcome page
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] != true)
    {
        header("location: ../actions/login.php");
        exit;
    }
?>
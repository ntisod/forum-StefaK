<?php
    //Initialize the session
    session_start();

    //Check if the user is already logged in, if so, redirect him to the welcome page
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] != true)
    {
        header("location: ../pages/actions/login.php");
        exit;
    }

    if ($_SESSION["theme"] === "/static/style/themes/default/default.css")
    {
        $_SESSION["theme"] = "/static/style/themes/default/default_dark.css";
    } 
    else {
        $_SESSION["theme"] = "/static/style/themes/default/default.css";
    }

    header("location: /");
?>
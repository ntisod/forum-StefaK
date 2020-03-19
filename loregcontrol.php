<?php 

//If the user is already logged in, then display the dashboard page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("Location: ./pages/actions/login.php");
} else {
    //Otherwise display the login page
    header("Location: ./pages/dashboard/dashboard.php");
}

?>
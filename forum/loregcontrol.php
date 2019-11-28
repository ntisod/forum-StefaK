<?php 

//If the user is already logged in, then display the dashboard page
if (isset($_SESSION['Username'])) {
     header("Location: ./pages/dashboard.php");
} else {
//Otherwise display the login/register page
    header("Location: ./pages/loginRegister.php");
}

?>
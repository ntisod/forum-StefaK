<?php 
    
    session_start();

    //Check whether the user is logged in
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true)
    {
        header("location: actions/login.php");
    } 
    exit;

    
?>

<?php require "./html/heady.html"; ?>

<?php require "./html/footer.html"; ?>
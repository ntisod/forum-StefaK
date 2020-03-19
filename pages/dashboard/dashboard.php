<?php 
    session_start();

    //Check whether the user is logged in
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true)
    {
        header("location: /login");
    } 

    require PAGES_FOLDER."reusable/head/head.php";
    require PAGES_FOLDER."dashboard/dashboard_large.php";
    require PAGES_FOLDER."dashboard/dashboard_mobileAndMedium.php";
    require PAGES_FOLDER."reusable/footer.html";
?>
<?php

//Methods for database connection
include "conn.php";
require "./backend/getSettings.php";

$conn = openConn();
mysqli_close($conn);

const PAGES_FOLDER = "./pages/";

//Start the session
session_start();

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case "/":
        require PAGES_FOLDER."dashboard/dashboard.php";
        break;
    case "/login":
        require PAGES_FOLDER."actions/login.php";
        break;
    case "/register":
        require PAGES_FOLDER."actions/register.php";
        break;
    case "/logout":
        require PAGES_FOLDER."actions/logout.php";
        break;
    case "/resetpass":
        require PAGES_FOLDER."actions/resetPassword.php";
        break;
    case "/profile":
        require PAGES_FOLDER . "profile.php";
        break;
    case "/forums":
        require PAGES_FOLDER . "forums.php";
        break;
    case "/api/toggleDarkMode":
        require "./backend/toggleDarkMode.php";
        break;
    case "/api/uploadUserPhoto":
        require "./backend/uploadUserPhoto.php";
        break;
    case "/500":
        require "./500.shtml";
        break;
    default:
        http_response_code(404);
        require __DIR__ ."/404.shtml";
        break;
}

?>
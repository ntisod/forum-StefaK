<?php 

function openConn()
{
    //Database information
    $dbserver = "localhost";
    $dbuser = "stefaK";
    $dbpass = "pass";
    $dbname = "forumdb";

    //Attempt to connect ot the database
    $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);
    
    //Check connection
    if($conn === false) 
    {
        die("ERROR: Could not connect. ".mysqli_connect_error());
    }

    return $conn;
}
?>
<?php 

function openConn()
{
    //Local db information
    $dbserver = "localhost";
    $dbuser = "te17stefan_stefak";
    $dbpass = "stifano";
    $dbname = "te17stefan_shforum";    

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
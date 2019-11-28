<?php

include "conn.php";

//Start the session
session_start();

//Open the connection
$conn = openConn();

echo "Connected Successfully!";

//List all forums
$query1 = mysqli_query($conn, 'SELECT * FROM main ORDER BY id DESC');
while ($output1 = mysqli_fetch_assoc($query1))
    echo('<h1>'.$output1['name'].'</h1>');

//Close the connection
closeConn($conn);

//Include the login/register control
include "./loregcontrol.php";
?>
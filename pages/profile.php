<?php 
    //Check whether the user is logged in
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true)
    {
        header("location: /login");
    } 

    require PAGES_FOLDER . "reusable/head/head.php";    
?>

<main id="profilePage">
    <div id="profilePageHead">
        <img src="/static/uploads/users/m.png">
        <h1><?php echo $_SESSION["username"]; ?></h1>
    </div>
    <hr>

    <div id="profilePageSettings">
        <form action="/api/uploadUserPhoto" method="POST" enctype="multipart/form-data">
            <input type="file" name="file">
            <button type="submit" name="submit"> Change Photo</button>
        </form>
    </div>
</main>

<?php require PAGES_FOLDER . "reusable/footer.html"; ?>
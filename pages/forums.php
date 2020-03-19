<?php 
    //Check whether the user is logged in
    if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true)
    {
        header("location: /login");
    } 

    require PAGES_FOLDER . "reusable/head/head.php";    
?>

<main id="forumsPage">
    <?php 
        $sql = "SELECT ForumID, ForumName, ForumHasDisplayPicture, AmountOfUsers, AmountOfPosts, AmountOfComments FROM forums";
        $conn = openConn();
        $result = $conn -> query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo 
                "
                    <div class=\"forumCard\">
                        <div class=\"forumCardHeader\">";
                if ($row["ForumHasDisplayPicture"] == 1)
                {
                    echo "<img src=\"/static/uploads/forumDisplayPictures/" . $row["ForumName"] . ".png\"";
                }          
                    echo "<button>Join</button>
                        </div>
                        <div class=\"forumCardBody\">
                            <header class=\"forumCardBodyTitle\">
                                <h1>" . $row["ForumName"] . " </h1>
                            </header>
                            <div class=\"forumCardBodyContent\">
                                
                            </div>
                        </div>
                    </div>
                ";
            }
        } else {
            echo "0 results";
        }
    ?>
</main>

<?php require PAGES_FOLDER . "reusable/footer.html"; ?>
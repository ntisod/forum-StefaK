<?php 
function uploadPhoto() {
    if (isset($_POST["submit"])) {
        $file = $_FILES["photo"];

        $fileName       = $_FILES["photo"]["name"];
        $fileType       = $_FILES["photo"]["type"];
        $fileTmpName    = $_FILES["photo"]["tmp_name"];
        $fileSize       = $_FILES["photo"]["size"];
        $fileError      = $_FILES["photo"]["error"];

        $fileExt = explode(".", $fileName);
        $fileActualExt = strtolower(end($fileExt));

        $allowed = array("jpg", "jpeg", "png");

        if (in_array($fileActualExt, $allowed)) {
            if ($fileError === 0) {
                //unit is kB
                if ($fileSize <= 5000) {
                    //File is uploaded here
                    $fileNameNew = $_SESSION["username"] . $fileActualExt;
                    $fileDestination = "./static/uploads/users/";
                    move_uploaded_file($fileTmpName, $fileDestination);
                    echo ""
                } else {
                    echo "Your file is too big!";
                }
            } else {
                echo "There was an error uploading your file";
            }
        } else {
            echo "You cannot upload files of this type!";
        }
    }
}
?>
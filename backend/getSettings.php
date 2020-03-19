<?php
    //Checks whether an user has a profile pic and returns true or false
    function userHasProfilePicture() {
        $sql = 'SELECT theme password, theme FROM users WHERE username = ?';
        
        if ($stmt = mysqli_prepare($conn, $sql)) {
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            $param_username = $_SESSION["username"];
            if(mysqli_stmt_execute($stmt)) {
                // Store result
                mysqli_stmt_store_result($stmt);

                if(mysqli_stmt_num_rows($stmt) == 1) {       
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $has_picture);
                    if(mysqli_stmt_fetch($stmt)) {
                        if ($has_picture == 0)
                            return false;
                        else return true;
                    } else {
                        header("location: /500");
                    }
                } else {
                    header("location: /500");
                }
            }
        }
    }

?>
<?php

require "../../conn.php";

$conn = openConn();

session_start();

//Check if the user is already logged in
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true)
{
    header("location: ../dashboard.php");
    exit;
}

//Define variables and initialize them with empty values
$username = $password = $confirm_password = $email = "";
$username_err = $password_err = $confirm_password_err = $email_err = "";

//Process form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
    //Validate username
    if (empty(trim($_POST["username"])))
    {
        $username_err = "Please enter a username!";
    } else 
    {
        //Prepare a select statement
        $sql = "SELECT id FROM users WHERE username = ?";

        if ($stmt = mysqli_prepare($conn, $sql))
        {
            //Bind variables to the prepared statement parameters
            mysqli_stmt_bind_param($stmt, "s", $param_username);

            //Set parameters
            $param_username = trim($_POST["username"]);

            //Attempt to execute the prepared statement (Doesn't change the database)
            if (mysqli_stmt_execute($stmt))
            {
                //Store result
                mysqli_stmt_store_result($stmt);

                //Check whether the username was already taken
                if (mysqli_stmt_num_rows($stmt) == 1)
                {
                    $username_err = "This username is already taken!";
                } else 
                {
                    //Store the username in the username variable for later use when we actually
                    //run the query aganist the database
                    $username = trim($_POST["username"]);
                }
            } else 
            {
                echo "Oops, something went wrong. Please try again.";
            }
        }

        //Close the statement
        mysqli_stmt_close($stmt);   
    }

    //Validate password
    if (empty(trim($_POST["psswd"])))
    {
        $password_err = "Please enter a password!";
    } elseif(strlen(trim($_POST["psswd"])) < 6)
    {
        $password_err = "Password must be at least 6 characters long!";
    } else 
    {
        //Store the password in the password variable for later use when we
        //run the query aganist the database
        $password = trim($_POST["psswd"]);
    }

    //Validate confirm password
    if (empty(trim($_POST["psswd"])))
    {
        $confirm_password_err = "Please confirm password";
    } else 
    {
        $confirm_password = trim($_POST["cpsswd"]);
        if (empty($password_err) && ($password != $confirm_password))
        {
            $confirm_password_err = "Password did not match!";
        }
    }

    //Validate email
    if (!empty(trim($_POST["email"])))
    {
        $email = $_POST["email"];

        //If the email address isn't well-formed, then store the error message
        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $email_err = "Error: Invalid email format.";
        }
    }

    //Check input errors before inserting in database
    if (empty($username_err) && empty($password_err) && empty($confirm_password_err) && empty($email_err))
    {
        //Prepare an insert statement
        $sql = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";

        if ($stmt = mysqli_prepare($conn, $sql))
        {
            //Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "sss", $param_username, $param_password, $param_email);

            //Set parameters
            $param_username = $username;
            //Creates password hash
            $param_password = password_hash($password, PASSWORD_DEFAULT);
            $param_email = $email;
            
            //Attempt to execute the prepared statement
            if (mysqli_stmt_execute($stmt))
            {
                //Redirect to the login page
                header("location: login.php");
            } else 
            {
                echo "Something went wrong, please try again";
            }
        }

        //Close statement
        mysqli_stmt_close($stmt);
    }

    //Close connection
    mysqli_close($conn);
}
?>

<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Sign Up</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
        <style type="text/css">
            body { 
                font: 14px sans-serif; 
            }
            .wrapper { 
                width: 350px; 
                padding: 20px; 
            }
        </style>
    </head>

    <body>
        <div class="wrapper">
            <h2>Sign Up</h2>
            <p>Please fill this form to create an account.</p>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
                <div class="form-group <?php echo (!empty($username_err)) ? 'has-error' : ''; ?>">
                    <label>Username</label>
                    <input type="text" name="username" class="form-control" value="<?php echo $username; ?>">
                    <span class="help-block"><?php echo $username_err; ?></span>
                </div>    
                <div class="form-group <?php echo (!empty($password_err)) ? 'has-error' : ''; ?>">
                    <label>Password</label>
                    <input type="password" name="psswd" class="form-control" value="<?php echo $password; ?>">
                    <span class="help-block"><?php echo $password_err; ?></span>
                </div>
                <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                    <label>Confirm Password</label>
                    <input type="password" name="cpsswd" class="form-control" value="<?php echo $confirm_password; ?>">
                    <span class="help-block"><?php echo $confirm_password_err; ?></span>
                </div>
                <div class="form-group <?php echo (!empty($email_err)) ? 'has-error' : ''; ?>">
                    <label>Email</label>
                    <input type="email" name="email" class="form-control" value="<?php echo $email_err; ?>">
                    <span class="help-block"><?php echo $email_err; ?></span>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Submit">
                    <input type="reset" class="btn btn-default" value="Reset">
                </div>
                <p>Already have an account? <a href="login.php">Login here</a>.</p>
            </form>
        </div>    
    </body>
</html>
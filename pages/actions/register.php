<?php

$conn = openConn();

session_start();

//Check if the user is already logged in
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true)
{
    header("location: /");
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
        $username = trim($_POST["username"]);
        //Prepare a select statement
        $sql = "SELECT id FROM users WHERE username = ?";

        if ($statement = mysqli_prepare($conn, $sql))
        {
            //Bind variables to the prepared statement parameters
            mysqli_stmt_bind_param($statement, "s", $param_username);

            //Set parameters
            $param_username = trim($_POST["username"]);

            //Attempt to execute the prepared statement (Doesn't change the database)
            if (mysqli_stmt_execute($statement))
            {
                //Store result
                mysqli_stmt_store_result($statement);

                //Check whether the username was already taken
                if (mysqli_stmt_num_rows($statement) >= 1)
                {
                    $username_err = "This username is already taken!";
                }
            } else 
            {
                header("location: /500.shtml");
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
        $email = trim($_POST["email"]);

        //If the email address isn't well-formed, then store the error message
        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $email_err = "Error: Invalid email format.";
        }

        //Check whether the email is already taken
        //Prepare a select statement
        $sql = "SELECT * FROM users WHERE email = ?";
        if ($statement = mysqli_prepare($conn, $sql))
        {
            //Bind variables to the prepared statement parameters
            mysqli_stmt_bind_param($statement, "s", $param_email);

            //Set tye parameters
            $param_email = $email;

            //Attempt to execute the prepared statement
            if (mysqli_stmt_execute($statement))
            {
                //Store result
                mysqli_stmt_store_result($statement);
                
                //Check whether the email was already taken
                if (mysqli_stmt_num_rows($statement) >= 1)
                {
                    $email_err = "This email is already taken!";
                }
           } else 
           {
               header("location: /500.shtml");
           }
        }
    }

    //Check input errors before inserting in database
    if (empty($username_err) && empty($password_err) && empty($confirm_password_err) && empty($email_err))
    {
        //Prepare an insert statement
        $sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';

        if ($statement = mysqli_prepare($conn, $sql))
        {
            //Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($statement, 'sss', $param_username, $param_password, $param_email);

            //Set parameters
            $param_username = $username;
            //Creates password hash
            $param_password = password_hash($password, PASSWORD_DEFAULT);
            $param_email = $email;
            
            //Attempt to execute the prepared statement
            if (mysqli_stmt_execute($statement))
            {
                //Redirect to the login page
                header("location: /login");
            } else 
            {
                header("location: /500.shtml");
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
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }

            .wrapper { 
                width: 400PX; 
                padding: 20px; 
            }

        </style>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
        <div class="wrapper">
            <h2>Sign Up</h2>
            <p>Please fill this form to create an account.</p>
            <form action="/register" method="post">
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
                    <input type="email" name="email" class="form-control" value="<?php echo $email; ?>">
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
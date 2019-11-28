<?php include "./html/header.html"; ?>

<form action="./actions/login.php" id="loginForm" method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="psswd" placeholder="Password" required>
    <button>Login</button>
</form>

<form action="./actions/register.php" id="registerForm" method="POST">
    <input type="text" name="username" placeholder="Username" required>
    <input type="password" name="psswd" placeholder="Password" required>
    <input type="password" name="cpsswd" placeholder="Confirm password" required>
    <input type="email" name="email" placeholder="Email">
    <button>Register</button>
</form>

<?php include "./html/footer.html"; ?>
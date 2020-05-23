import React from "react";

export default _ => {
    return (
        <diV>
            <h1>Register</h1>
            <form>
                <input type="text" name="username" placeholder="username" required></input>
                <input type="password" name="password" placeholder="password" required></input>
                <input type="password" name="cpassword" placeholder="confirm password" required></input> 
            </form>
        </diV>
    );
}
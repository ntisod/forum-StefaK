let isAuthenticated = _ => {
    return localStorage.getItem("is_logged_in");
}

export default isAuthenticated;
let makeAuthenticated = jwt => {
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("token", jwt);
}

export default makeAuthenticated;
const INIT_EVENT_LISTENERS = {
    init: _ => {
        INIT_EVENT_LISTENERS.initNavToggleMobileMenuButtons();
    },
    
    //The buttons that toggle the mobile menu
    initNavToggleMobileMenuButtons: function() {
        let menu   = document.getElementById("menu");
        let menuCover = document.getElementById("menu-cover");
        let closeMenuButton = document.getElementById("closeMenuButton");
        let openMenuButton = document.getElementById("menu-button");

        let toggleMenu = _ => {
            menu.classList.toggle("active");
            menuCover.classList.toggle("invisible");
        }

        menuCover.addEventListener("click", toggleMenu);
        closeMenuButton.addEventListener("click", toggleMenu);
        openMenuButton.addEventListener("click", toggleMenu);
    },

    //The navigation buttons inside the mobile menu
    initNavMobileMenuButtons: function() {
        let menu   = document.getElementById("menu");
        let menuChildren = menu.childNodes;
        let menuNav = menuChildren[3];
    
        menuNav.childNodes.forEach(menuNavButton => {
            //My profile button
            console.log(menuNavButton.textContent == "My Profile");
            if (menuNavButton.textContent.indexOf("My Profile") > -1)
                menuNavButton.addEventListener("click", REDIRECTS.profile);

            //Toggle dark mode
            if (menuNavButton.textContent.indexOf("Dark Mode") > -1 ||
                menuNavButton.textContent.indexOf("Light Mode") > -1 )
                menuNavButton.addEventListener("click", REDIRECTS.API.toggleDarkMode);
        });
    }
}
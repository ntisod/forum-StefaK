const REDIRECTS = {
    profile: _ => window.location.replace(document.location.origin + "/profile"),
    dashboard: _ => window.location.replace(document.location.origin + "/"),
    forums: _ => window.location.replace(document.location.origin + "/forums"),
    API: {
        toggleDarkMode: _ => window.location.replace(document.location.origin + "/api/toggleDarkMode")
    }
}
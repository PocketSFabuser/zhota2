function loadStylesheet() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    
    // Detect device type
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        link.href = "./styles/m-style-main.css"; // Mobile CSS
        console.warn("User is on Phone");
    } else {
        link.href = "./styles/style-main.css"; // PC CS
        console.warn('User is on PC');
    }
    
    document.head.appendChild(link);
}

loadStylesheet();

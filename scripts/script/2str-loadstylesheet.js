function loadStylesheet() {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    
    // Detect device type
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        link.href = "./styles/m-style-str2.css"; // Mobile CSS
        console.warn('User is on mobile');
    } else {
        link.href = "./styles/style-str2.css"; // PC CSS
        console.warn('User is on PC');
    }
    
    document.head.appendChild(link);
}

loadStylesheet();

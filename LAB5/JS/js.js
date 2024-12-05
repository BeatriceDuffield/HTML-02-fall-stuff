document.addEventListener('DOMContentLoaded', (loaded) =>{
    document.getElementById("global-header").innerHTML =
            "<div>"+
                "<a href='index.html'><img src='./img/white-logo.png' alt='Logo'></a>"+
            "</div>"+
            "<nav>"+
                "<menu>"+
                    "<li><a href='#' target='_self'>Home  |</a></li>"+
                    "<li><a href='#' target='_self'>About</a></li>"+
                    "<li><a href='#' target='_self'>|  Contact</a></li>"+
                "</menu>"+
            "</nav>";
});
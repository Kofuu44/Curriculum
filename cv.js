window.onload = function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Popup - More info
    let button = document.getElementById("MoreInfo");
    let popup = document.getElementById("popup-MoreInfo");
    let closeBtn = document.getElementById("closeBtn-moreinfo");

    button.onclick = function() { // Mostrar
        popup.style.display = "flex";
    }

    closeBtn.onclick = function() { // Cerrar el popup 
        popup.style.display = "none";
    }

    window.onclick = function(event) { // Cerrar el popup si el usuario hace clic fuera del contenido
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
};

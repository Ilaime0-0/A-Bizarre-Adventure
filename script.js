/* ═══════════════════════════════════════
   🕸️ NAVIGATION DES PAGES
═══════════════════════════════════════ */

let pageHistory = [];

let currentPage = "page-01";


function showPage(pageId) {

    const nextPage =
        document.getElementById(pageId);

    if (!nextPage || currentPage === pageId) {
        return;
    }


    /* Garder la page actuelle dans
       l'historique */

    pageHistory.push(currentPage);


    /* Cacher toutes les pages */

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    /* Afficher la nouvelle page */

    nextPage.classList.add("active");


    /* Mettre à jour la page actuelle */

    currentPage = pageId;


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* ═══════════════════════════════════════
   🕰️ REVENIR EN ARRIÈRE DANS LE TEMPS
═══════════════════════════════════════ */

function goBackInTime() {

    /* S'il n'y a rien avant,
       on ne fait rien */

    if (pageHistory.length === 0) {
        return;
    }


    /* Récupérer la page précédente */

    const previousPage =
        pageHistory.pop();


    /* Cacher toutes les pages */

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    /* Afficher la page précédente */

    const previous =
        document.getElementById(previousPage);

    if (previous) {

        previous.classList.add("active");

        currentPage = previousPage;

    }


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* ═══════════════════════════════════════
   ⌨️ TOUCHE ←
═══════════════════════════════════════ */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft") {

        goBackInTime();

    }

});


/* ═══════════════════════════════════════
   🕸️ TOILE QUI SUIT LA SOURIS
═══════════════════════════════════════ */

const spiderCursor =
    document.getElementById("spider-cursor");


document.addEventListener("mousemove", function(event) {

    spiderCursor.style.left =
        event.clientX + "px";

    spiderCursor.style.top =
        event.clientY + "px";

});


/* ═══════════════════════════════════════
   🕷️ L'ARAIGNÉE S'ÉCHAPPE AU CLIC
═══════════════════════════════════════ */

document.addEventListener("click", function(event) {

    const spider =
        document.createElement("div");

    spider.classList.add("escaping-spider");

    spider.textContent = "🕷️";

    spider.style.left =
        event.clientX + "px";

    spider.style.top =
        event.clientY + "px";

    document.body.appendChild(spider);


    setTimeout(function() {

        spider.remove();

    }, 1400);

});

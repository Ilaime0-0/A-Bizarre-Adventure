/* ═══════════════════════════════════════
   🕸️ NAVIGATION DES PAGES
═══════════════════════════════════════ */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const nextPage = document.getElementById(pageId);

    if (nextPage) {
        nextPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


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

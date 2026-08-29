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


    /* Garder la page actuelle
       dans l'historique */

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

    if (pageHistory.length === 0) {

        return;

    }


    const previousPage =
        pageHistory.pop();


    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


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

    if (!spiderCursor) {

        return;

    }

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

    spider.classList.add(
        "escaping-spider"
    );

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


/* ╔══════════════════════════════════════╗
   👁️ ÉLÉMENTS ÉTRANGES — PAGE 01
   ╚══════════════════════════════════════╝ */


/* ═══════════════════════════════════════
   DON'T
═══════════════════════════════════════ */

const strangeButton =
    document.querySelector(
        ".strange-button-one"
    );


const strangeMessage =
    document.getElementById(
        "strange-message"
    );


if (strangeButton) {

    strangeButton.addEventListener(
        "click",
        function() {

            strangeMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                strangeMessage.classList.remove(
                    "visible"
                );

            }, 2200);

        }
    );

}


/* ═══════════════════════════════════════
   ✦ SYMBOLE SECRET
═══════════════════════════════════════ */

const secretSymbol =
    document.querySelector(
        ".secret-symbol"
    );


if (secretSymbol) {

    secretSymbol.addEventListener(
        "click",
        function() {

            document.body.classList.add(
                "strange-glitch"
            );


            setTimeout(function() {

                document.body.classList.remove(
                    "strange-glitch"
                );

            }, 700);

        }
    );

}
/* ╔══════════════════════════════════════╗
   ☾ 02 — THE DIVIDE
   ╚══════════════════════════════════════╝ */


/* ═══════════════════════════════════════
   👁️ RESTART
═══════════════════════════════════════ */

const restartButton =
    document.querySelector(".restart-button");


const restartMessage =
    document.getElementById("restart-message");


if (restartButton) {

    restartButton.addEventListener(
        "click",
        function() {

            restartMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                restartMessage.classList.remove(
                    "visible"
                );

            }, 2200);

        }
    );

}


/* ═══════════════════════════════════════
   ✦ SECRET DE THE DIVIDE
═══════════════════════════════════════ */

const divideSecret =
    document.querySelector(".divide-secret");


if (divideSecret) {

    divideSecret.addEventListener(
        "click",
        function() {

            const clock =
                document.querySelector(".strange-clock");


            if (clock) {

                clock.textContent =
                    "00:00:00";

            }


            setTimeout(function() {

                if (clock) {

                    clock.textContent =
                        "01:??:??";

                }

            }, 1800);

        }
    );

}
 /* ═══════════════════════════════════════
    ✦ SECRET — THE LIVING SIDE
 ═══════════════════════════════════════ */

const lifeSecret =
    document.querySelector(".life-secret");


const lifeSecretMessage =
    document.getElementById("life-secret-message");


if (lifeSecret) {

    lifeSecret.addEventListener(
        "click",
        function() {

            lifeSecretMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                lifeSecretMessage.classList.remove(
                    "visible"
                );

            }, 2200);

        }
    );

}
/* ╔══════════════════════════════════════╗
   🕷️ SECRET — THE OTHER SIDE
   ╚══════════════════════════════════════╝ */

const deathSecret =
    document.querySelector(".death-secret");


const deathSecretMessage =
    document.getElementById(
        "death-secret-message"
    );


if (deathSecret) {

    deathSecret.addEventListener(
        "click",
        function() {

            deathSecretMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                deathSecretMessage.classList.remove(
                    "visible"
                );

            }, 2200);

        }
    );

}
/* ╔══════════════════════════════════════╗
   🌙 SECRET — CARPE NOCTEM
   ╚══════════════════════════════════════╝ */

const noctemSecret =
    document.querySelector(".noctem-secret");


const noctemSecretMessage =
    document.getElementById(
        "noctem-secret-message"
    );


if (noctemSecret) {

    noctemSecret.addEventListener(
        "click",
        function() {

            noctemSecretMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                noctemSecretMessage.classList.remove(
                    "visible"
                );

            }, 2200);

        }
    );

}

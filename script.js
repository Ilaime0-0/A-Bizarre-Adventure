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
/* ╔══════════════════════════════════════╗
   📖 SECRET — CHRONIQUES
   ╚══════════════════════════════════════╝ */

const chronicleSecret =
    document.querySelector(".chronicle-secret");


const chronicleSecretMessage =
    document.getElementById(
        "chronicle-secret-message"
    );


if (chronicleSecret) {

    chronicleSecret.addEventListener(
        "click",
        function() {

            chronicleSecretMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                chronicleSecretMessage.classList.remove(
                    "visible"
                );

            }, 2500);

        }
    );

}
/* ╔══════════════════════════════════════╗
   📚 SECRET — LIBRARY
   ╚══════════════════════════════════════╝ */

const librarySecret =
    document.querySelector(".library-secret");


const librarySecretMessage =
    document.getElementById(
        "library-secret-message"
    );


if (librarySecret) {

    librarySecret.addEventListener(
        "click",
        function() {

            librarySecretMessage.classList.add(
                "visible"
            );


            setTimeout(function() {

                librarySecretMessage.classList.remove(
                    "visible"
                );

            }, 2500);

        }
    );

}
/* ╔══════════════════════════════════════════════╗
   📅 EPHEMERIS — CALENDRIER
═══════════════════════════════════════════════ */

const calendarDays =
    document.getElementById("calendar-days");

const calendarMonth =
    document.getElementById("calendar-month");

const dateEntry =
    document.getElementById("date-entry");

const entryDate =
    dateEntry.querySelector(".entry-date");

const entryContent =
    dateEntry.querySelector(".entry-content");


let calendarDate =
    new Date(2026, 7, 1);


/* ═══════════════════════════════════════
   ENTRÉES ÉTRANGES
═══════════════════════════════════════ */

const strangeEvents = {

    "2026-08-17":
        "This date has been recorded twice.",

    "2026-08-29":
        "Nothing unusual happened today.",

    "2026-09-03":
        "You already missed this.",

    "2026-09-17":
        "This date should not exist.",

    "2026-10-31":
        "Something is waiting here.",

    "2026-12-31":
        "LAST RECORDED DATE."

};


/* ═══════════════════════════════════════
   NOMS DES MOIS
═══════════════════════════════════════ */

const monthNames = [

    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER"

];


/* ═══════════════════════════════════════
   FORMAT DATE
═══════════════════════════════════════ */

function getDateKey(year, month, day) {

    return (
        year +
        "-" +
        String(month + 1).padStart(2, "0") +
        "-" +
        String(day).padStart(2, "0")
    );

}


/* ═══════════════════════════════════════
   AFFICHER LE CALENDRIER
═══════════════════════════════════════ */

function renderCalendar() {

    calendarDays.innerHTML = "";

    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    calendarMonth.textContent =
        monthNames[month] +
        " " +
        year;


    const firstDay =
        new Date(year, month, 1);

    let startingDay =
        firstDay.getDay();

    /* Lundi = premier jour */

    startingDay =
        startingDay === 0
            ? 6
            : startingDay - 1;


    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    /* CASES VIDES */

    for (
        let i = 0;
        i < startingDay;
        i++
    ) {

        const empty =
            document.createElement("div");

        empty.classList.add(
            "calendar-day",
            "empty"
        );

        calendarDays.appendChild(empty);

    }


    /* JOURS */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const button =
            document.createElement("button");

        button.classList.add(
            "calendar-day"
        );


        const number =
            document.createElement("span");

        number.classList.add(
            "day-number"
        );

        number.textContent =
            String(day).padStart(2, "0");


        button.appendChild(number);


        const key =
            getDateKey(
                year,
                month,
                day
            );


        /* Événement étrange */

        if (strangeEvents[key]) {

            button.classList.add(
                "strange"
            );


            const symbol =
                document.createElement("span");

            symbol.classList.add(
                "day-symbol"
            );

            symbol.textContent =
                "✦";

            button.appendChild(symbol);

        }


        /* Aujourd'hui */

        if (
            year === 2026 &&
            month === 7 &&
            day === 29
        ) {

            button.classList.add(
                "today"
            );

        }


        button.addEventListener(
            "click",
            function() {

                selectDate(
                    year,
                    month,
                    day,
                    key
                );

            }
        );


        calendarDays.appendChild(
            button
        );

    }

}


/* ═══════════════════════════════════════
   CLIQUER SUR UNE DATE
═══════════════════════════════════════ */

function selectDate(
    year,
    month,
    day,
    key
) {

    entryDate.textContent =
        String(day).padStart(2, "0") +
        " / " +
        String(month + 1).padStart(2, "0") +
        " / " +
        year;


    if (strangeEvents[key]) {

        entryContent.textContent =
            strangeEvents[key];

    } else {

        entryContent.textContent =
            "nothing has been recorded.";

    }

}


/* ═══════════════════════════════════════
   MOIS PRÉCÉDENT
═══════════════════════════════════════ */

document
    .getElementById("previous-month")
    .addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );


/* ═══════════════════════════════════════
   MOIS SUIVANT
═══════════════════════════════════════ */

document
    .getElementById("next-month")
    .addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );


/* ═══════════════════════════════════════
   PREMIER AFFICHAGE
═══════════════════════════════════════ */

renderCalendar();


/* ═══════════════════════════════════════
   ✦ SECRET
═══════════════════════════════════════ */

const ephemerisSecret =
    document.getElementById(
        "ephemeris-secret"
    );


ephemerisSecret.addEventListener(
    "click",
    function() {

        entryDate.textContent =
            "UNKNOWN DATE";

        entryContent.textContent =
            "You weren't supposed to find this.";

    }
);

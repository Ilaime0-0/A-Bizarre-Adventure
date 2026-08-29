/* ╔══════════════════════════════════════════════╗
   📅 EPHEMERIS — CALENDRIER SECRET
   ╚══════════════════════════════════════════════╝ */


/* ═══════════════════════════════════════
   ÉLÉMENTS HTML
═══════════════════════════════════════ */

const EPHEMERIS_PASSWORD = "7023";

const ephemerisPage =
    document.getElementById("page-ephemeris");

const ephemerisPassword =
    document.getElementById("ephemeris-password");

const ephemerisUnlock =
    document.getElementById("ephemeris-unlock");

const passwordError =
    document.getElementById("password-error");

const calendarDays =
    document.getElementById("calendar-days");

const calendarMonth =
    document.getElementById("calendar-month");

const dateEntry =
    document.getElementById("date-entry");

const entryDate =
    dateEntry
        ? dateEntry.querySelector(".entry-date")
        : null;

const entryContent =
    dateEntry
        ? dateEntry.querySelector(".entry-content")
        : null;

const ephemerisSecret =
    document.getElementById("ephemeris-secret");


/* ═══════════════════════════════════════
   ÉTAT DU CALENDRIER
═══════════════════════════════════════ */

let ephemerisUnlocked = false;


/* ═══════════════════════════════════════
   MOIS ACTUEL
═══════════════════════════════════════ */

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
   FORMAT DE LA DATE
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

    if (
        !calendarDays ||
        !calendarMonth
    ) {

        return;

    }


    /* Vider les anciens jours */

    calendarDays.innerHTML = "";


    const year =
        calendarDate.getFullYear();

    const month =
        calendarDate.getMonth();


    /* Nom du mois */

    calendarMonth.textContent =
        monthNames[month] +
        " " +
        year;


    /* Ne rien afficher si verrouillé */

    if (!ephemerisUnlocked) {

        return;

    }


    /* ═══════════════════════════════
       PREMIER JOUR DU MOIS
    ═══════════════════════════════ */

    const firstDay =
        new Date(
            year,
            month,
            1
        );


    let startingDay =
        firstDay.getDay();


    /* Lundi = premier jour */

    startingDay =
        startingDay === 0
            ? 6
            : startingDay - 1;


    /* Nombre de jours */

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    /* ═══════════════════════════════
       CASES VIDES
    ═══════════════════════════════ */

    for (
        let i = 0;
        i < startingDay;
        i++
    ) {

        const emptyDay =
            document.createElement("div");

        emptyDay.classList.add(
            "calendar-day",
            "empty"
        );

        calendarDays.appendChild(
            emptyDay
        );

    }


    /* ═══════════════════════════════
       JOURS
    ═══════════════════════════════ */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const button =
            document.createElement("button");


        button.type = "button";


        button.classList.add(
            "calendar-day"
        );


        /* Numéro */

        const number =
            document.createElement("span");

        number.classList.add(
            "day-number"
        );

        number.textContent =
            String(day).padStart(
                2,
                "0"
            );

        button.appendChild(
            number
        );


        /* Date complète */

        const key =
            getDateKey(
                year,
                month,
                day
            );


        /* ═══════════════════════════════
           DATE ÉTRANGE
        ═══════════════════════════════ */

        if (
            strangeEvents[key]
        ) {

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


            button.appendChild(
                symbol
            );

        }


        /* ═══════════════════════════════
           AUJOURD'HUI
        ═══════════════════════════════ */

        if (
            year === 2026 &&
            month === 7 &&
            day === 29
        ) {

            button.classList.add(
                "today"
            );

        }


        /* ═══════════════════════════════
           CLIQUER SUR UNE DATE
        ═══════════════════════════════ */

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
   SÉLECTIONNER UNE DATE
═══════════════════════════════════════ */

function selectDate(
    year,
    month,
    day,
    key
) {

    if (
        !entryDate ||
        !entryContent
    ) {

        return;

    }


    entryDate.textContent =
        String(day).padStart(
            2,
            "0"
        ) +
        " / " +
        String(month + 1).padStart(
            2,
            "0"
        ) +
        " / " +
        year;


    if (
        strangeEvents[key]
    ) {

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

const previousMonth =
    document.getElementById(
        "previous-month"
    );


if (previousMonth) {

    previousMonth.addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() - 1
            );

            renderCalendar();

        }
    );

}


/* ═══════════════════════════════════════
   MOIS SUIVANT
═══════════════════════════════════════ */

const nextMonth =
    document.getElementById(
        "next-month"
    );


if (nextMonth) {

    nextMonth.addEventListener(
        "click",
        function() {

            calendarDate.setMonth(
                calendarDate.getMonth() + 1
            );

            renderCalendar();

        }
    );

}


/* ═══════════════════════════════════════
   🔐 DÉVERROUILLAGE
═══════════════════════════════════════ */

function unlockEphemeris() {

    if (!ephemerisPassword) {

        return;

    }


    if (
        ephemerisPassword.value.trim() ===
        EPHEMERIS_PASSWORD
    ) {

        /* Déverrouiller */

        ephemerisUnlocked = true;


        if (ephemerisPage) {

            ephemerisPage.classList.remove(
                "is-locked"
            );

            ephemerisPage.classList.add(
                "is-unlocked"
            );

        }


        if (passwordError) {

            passwordError.classList.remove(
                "visible"
            );

        }


        if (entryContent) {

            entryContent.textContent =
                "The records have been restored.";

        }


        renderCalendar();


        ephemerisPassword.blur();


    } else {

        /* Mauvais mot de passe */

        if (passwordError) {

            passwordError.classList.add(
                "visible"
            );

        }


        ephemerisPassword.value = "";


        ephemerisPassword.focus();

    }

}


/* ═══════════════════════════════════════
   BOUTON ENTER
═══════════════════════════════════════ */

if (ephemerisUnlock) {

    ephemerisUnlock.addEventListener(
        "click",
        unlockEphemeris
    );

}


/* ═══════════════════════════════════════
   TOUCHE ENTER DU CLAVIER
═══════════════════════════════════════ */

if (ephemerisPassword) {

    ephemerisPassword.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Enter"
            ) {

                unlockEphemeris();

            }

        }
    );

}


/* ═══════════════════════════════════════
   ✦ SECRET EPHEMERIS
═══════════════════════════════════════ */

if (ephemerisSecret) {

    ephemerisSecret.addEventListener(
        "click",
        function() {

            if (entryDate) {

                entryDate.textContent =
                    "UNKNOWN DATE";

            }


            if (entryContent) {

                entryContent.textContent =
                    "You weren't supposed to find this.";

            }

        }
    );

}


/* ═══════════════════════════════════════
   🔐 ÉTAT INITIAL
═══════════════════════════════════════ */

if (ephemerisPage) {

    ephemerisPage.classList.add(
        "is-locked"
    );

}


/* ═══════════════════════════════════════
   PREMIER AFFICHAGE
═══════════════════════════════════════ */

renderCalendar();

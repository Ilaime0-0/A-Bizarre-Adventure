(function () {

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

    const previousMonth =
        document.getElementById("previous-month");

    const nextMonth =
        document.getElementById("next-month");


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


    let ephemerisUnlocked = false;

    let calendarDate =
        new Date(2026, 7, 1);


    /* ═══════════════════════════════
       HELPERS
    ═══════════════════════════════ */

    function getDateKey(
        year,
        month,
        day
    ) {

        return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    }


    function isToday(
        year,
        month,
        day
    ) {

        const now = new Date();

        return (
            year === now.getFullYear() &&
            month === now.getMonth() &&
            day === now.getDate()
        );

    }


    /* ═══════════════════════════════
       RENDER CALENDAR
    ═══════════════════════════════ */

    function renderCalendar() {

        if (!calendarDays || !calendarMonth) {
            return;
        }

        calendarDays.innerHTML = "";

        const year =
            calendarDate.getFullYear();

        const month =
            calendarDate.getMonth();


        calendarMonth.textContent =
            `${monthNames[month]} ${year}`;


        /*
            The calendar itself only appears
            after entering the password.
        */

        if (!ephemerisUnlocked) {
            return;
        }


        const firstDay =
            new Date(year, month, 1);


        let startingDay =
            firstDay.getDay();


        /*
            JavaScript:
            Sunday = 0
            Monday = 1
            ...

            We want:
            Monday = first column
            Sunday = last column
        */

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


        /* EMPTY CELLS BEFORE DAY 1 */

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


        /* DAYS */

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


            /* STRANGE EVENT */

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


            /* TODAY */

            if (
                isToday(
                    year,
                    month,
                    day
                )
            ) {

                button.classList.add(
                    "today"
                );

            }


            /* CLICK */

            button.addEventListener(
                "click",
                () => {

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


    /* ═══════════════════════════════
       DATE SELECTION
    ═══════════════════════════════ */

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
            `${String(day).padStart(2, "0")} / ${String(month + 1).padStart(2, "0")} / ${year}`;


        const event =
            strangeEvents[key];


        /*
            If there are several events on
            the same date, display them separately.
        */

        if (Array.isArray(event)) {

            entryContent.innerHTML =
                event
                    .map(
                        text =>
                            `<div>${text}</div>`
                    )
                    .join("");

        } else {

            entryContent.textContent =
                event ||
                "nothing has been recorded.";

        }

    }


    /* ═══════════════════════════════
       MONTH NAVIGATION
    ═══════════════════════════════ */

    if (previousMonth) {

        previousMonth.addEventListener(
            "click",
            () => {

                calendarDate.setMonth(
                    calendarDate.getMonth() - 1
                );

                renderCalendar();

            }
        );

    }


    if (nextMonth) {

        nextMonth.addEventListener(
            "click",
            () => {

                calendarDate.setMonth(
                    calendarDate.getMonth() + 1
                );

                renderCalendar();

            }
        );

    }


    /* ═══════════════════════════════
       PASSWORD
    ═══════════════════════════════ */

    function unlockEphemeris() {

        if (!ephemerisPassword) {
            return;
        }


        if (
            ephemerisPassword.value.trim() ===
            EPHEMERIS_PASSWORD
        ) {

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


            setTimeout(() => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 100);

        } else {

            if (passwordError) {

                passwordError.classList.add(
                    "visible"
                );

            }


            ephemerisPassword.value = "";

            ephemerisPassword.focus();

        }

    }


    if (ephemerisUnlock) {

        ephemerisUnlock.addEventListener(
            "click",
            unlockEphemeris
        );

    }


    if (ephemerisPassword) {

        ephemerisPassword.addEventListener(
            "keydown",
            event => {

                if (event.key === "Enter") {

                    unlockEphemeris();

                }

            }
        );

    }


    /* ═══════════════════════════════
       EPHEMERIS SECRET
    ═══════════════════════════════ */

    if (ephemerisSecret) {

        ephemerisSecret.addEventListener(
            "click",
            () => {

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


    /* ═══════════════════════════════
       INITIAL STATE
    ═══════════════════════════════ */

    if (ephemerisPage) {

        ephemerisPage.classList.add(
            "is-locked"
        );

    }


    renderCalendar();

})();

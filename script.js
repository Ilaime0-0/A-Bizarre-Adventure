/* ═══════════════════════════════════════
   SUPABASE
═══════════════════════════════════════ */

const SUPABASE_URL = "https://jmkcmvkdplnqjiqgmacs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6P_SZeBcu721HqK_5umVbA_ykh-lruw";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

/* ═══════════════════════════════════════
   PAGE NAVIGATION
═══════════════════════════════════════ */

(function () {

    let pageHistory = [];
    let currentPage = "page-01";


    function showPage(pageId) {

        const nextPage = document.getElementById(pageId);

        if (!nextPage || currentPage === pageId) {
            return;
        }

        pageHistory.push(currentPage);

        document
            .querySelectorAll(".page")
            .forEach(page => {
                page.classList.remove("active");
            });

        nextPage.classList.add("active");

        currentPage = pageId;

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    function goBackInTime() {

        if (pageHistory.length === 0) {
            return;
        }

        const previousPageId = pageHistory.pop();

        const previousPage =
            document.getElementById(previousPageId);

        if (!previousPage) {
            return;
        }

        document
            .querySelectorAll(".page")
            .forEach(page => {
                page.classList.remove("active");
            });

        previousPage.classList.add("active");

        currentPage = previousPageId;

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    function showLostPage() {
        showPage("page-lost");
    }


    function restartAdventure() {

        pageHistory = [];

        document
            .querySelectorAll(".page")
            .forEach(page => {
                page.classList.remove("active");
            });

        const firstPage =
            document.getElementById("page-01");

        if (firstPage) {
            firstPage.classList.add("active");
        }

        currentPage = "page-01";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }


    /* ═══════════════════════════════
       KEYBOARD NAVIGATION
    ═══════════════════════════════ */

    document.addEventListener("keydown", event => {

        const activeElement = document.activeElement;

        const typing =
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            );

        if (event.key === "ArrowLeft" && !typing) {
            goBackInTime();
        }

    });


    window.showPage = showPage;
    window.goBackInTime = goBackInTime;
    window.showLostPage = showLostPage;
    window.restartAdventure = restartAdventure;


    /* ═══════════════════════════════
       SPIDER CURSOR
    ═══════════════════════════════ */

    const spiderCursor =
        document.getElementById("spider-cursor");


    document.addEventListener("mousemove", event => {

        if (!spiderCursor) {
            return;
        }

        spiderCursor.style.left =
            `${event.clientX}px`;

        spiderCursor.style.top =
            `${event.clientY}px`;

    });


    /* ═══════════════════════════════
       SPIDER ESCAPE ON CLICK
    ═══════════════════════════════ */

    document.addEventListener("click", event => {

        /*
         * Ne pas créer une araignée supplémentaire
         * lorsqu'on clique directement sur le curseur.
         */

        if (
            event.target.closest("#spider-cursor")
        ) {
            return;
        }


        const spider =
            document.createElement("div");

        spider.className =
            "escaping-spider";

        spider.textContent = "🕷️";

        spider.style.left =
            `${event.clientX}px`;

        spider.style.top =
            `${event.clientY}px`;

        document.body.appendChild(spider);


        setTimeout(() => {
            spider.remove();
        }, 1400);

    });


    /* ═══════════════════════════════
       SECRET MESSAGE HELPER
    ═══════════════════════════════ */

    function bindSecretReveal(
        trigger,
        message,
        duration = 2200
    ) {

        if (!trigger || !message) {
            return;
        }

        let hideTimeout;


        trigger.addEventListener("click", event => {

            event.stopPropagation();

            message.classList.add("visible");

            clearTimeout(hideTimeout);

            hideTimeout = setTimeout(() => {

                message.classList.remove("visible");

            }, duration);

        });

    }


    /* ═══════════════════════════════
       SECRET MESSAGES
    ═══════════════════════════════ */

    bindSecretReveal(
        document.querySelector(".strange-button-one"),
        document.getElementById("strange-message")
    );


    bindSecretReveal(
        document.querySelector(".restart-button"),
        document.getElementById("restart-message")
    );


    bindSecretReveal(
        document.querySelector(".life-secret"),
        document.getElementById("life-secret-message")
    );


    bindSecretReveal(
        document.querySelector(".death-secret"),
        document.getElementById("death-secret-message")
    );


    bindSecretReveal(
        document.querySelector(".noctem-secret"),
        document.getElementById("noctem-secret-message")
    );


    bindSecretReveal(
        document.querySelector(".chronicle-secret"),
        document.getElementById("chronicle-secret-message"),
        2500
    );


    bindSecretReveal(
        document.querySelector(".library-secret"),
        document.getElementById("library-secret-message"),
        2500
    );


    /* ═══════════════════════════════
       WELCOME SECRET
    ═══════════════════════════════ */

    const secretSymbol =
        document.querySelector(".secret-symbol");


    if (secretSymbol) {

        secretSymbol.addEventListener("click", event => {

            event.stopPropagation();

            document.body.classList.add(
                "strange-glitch"
            );


            setTimeout(() => {

                document.body.classList.remove(
                    "strange-glitch"
                );

            }, 700);

        });

    }


    /* ═══════════════════════════════
       RESTART BUTTON
    ═══════════════════════════════ */

    const restartButton =
        document.querySelector(".restart-button");


    if (restartButton) {

        restartButton.addEventListener("click", event => {

            event.stopPropagation();

            /*
             * On montre d'abord le message secret.
             * Le vrai retour au début se fait après.
             */

            const restartMessage =
                document.getElementById("restart-message");

            if (restartMessage) {

                restartMessage.classList.add("visible");

                setTimeout(() => {

                    restartMessage.classList.remove(
                        "visible"
                    );

                    restartAdventure();

                }, 1800);

            } else {

                restartAdventure();

            }

        });

    }


    /* ═══════════════════════════════
       DIVIDE SECRET CLOCK
    ═══════════════════════════════ */

    const divideSecret =
        document.querySelector(".divide-secret");

    const strangeClock =
        document.querySelector(".strange-clock");


    if (divideSecret && strangeClock) {

        divideSecret.addEventListener("click", event => {

            event.stopPropagation();

            strangeClock.textContent =
                "00:00:00";


            setTimeout(() => {

                strangeClock.textContent =
                    "01:??:??";

            }, 1800);

        });

    }


    /* ═══════════════════════════════
       ENTER PASSWORD WITH ENTER KEY
    ═══════════════════════════════ */

    const passwordInput =
        document.getElementById("ephemeris-password");

    const unlockButton =
        document.getElementById("ephemeris-unlock");


    if (passwordInput && unlockButton) {

        passwordInput.addEventListener("keydown", event => {

            if (event.key === "Enter") {

                event.preventDefault();

                unlockButton.click();

            }

        });

    }

})();


/* ═══════════════════════════════════════
   VISITOR BOOK — SUPABASE
═══════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

    const visitorName =
        document.getElementById("visitor-name");

    const visitorMessage =
        document.getElementById("visitor-message");

    const visitorSubmit =
        document.getElementById("visitor-submit");

    const visitorStatus =
        document.getElementById("visitor-status");

    const visitorMessageList =
        document.getElementById("visitor-message-list");


    /*
     * Si la page Visitor Book n'existe pas,
     * on ne fait rien.
     */

    if (
        !visitorName ||
        !visitorMessage ||
        !visitorSubmit ||
        !visitorStatus ||
        !visitorMessageList
    ) {
        return;
    }


    /* ═══════════════════════════════
       LOAD MESSAGES
    ═══════════════════════════════ */

    async function loadVisitorMessages() {

        const {
            data,
            error
        } = await supabaseClient
            .from("visitor_messages")
            .select("*")
            .order("created_at", {
                ascending: false
            });


        if (error) {

            console.error(
                "Erreur chargement messages :",
                error
            );

            visitorMessageList.innerHTML = `
                <div class="visitor-empty">
                    the book could not be opened.
                </div>
            `;

            return;
        }


        visitorMessageList.innerHTML = "";


        if (!data || data.length === 0) {

            visitorMessageList.innerHTML = `
                <div class="visitor-empty">
                    no messages have been left yet.
                    <br>
                    perhaps you could be the first.
                </div>
            `;

            return;
        }


        data.forEach(message => {

            const entry =
                document.createElement("div");

            entry.className =
                "visitor-message";


            const name =
                document.createElement("div");

            name.className =
                "visitor-message-name";

            name.textContent =
                message.name || "ANONYMOUS";


            const text =
                document.createElement("div");

            text.className =
                "visitor-message-text";

            text.textContent =
                message.message || "";


            const date =
                document.createElement("div");

            date.className =
                "visitor-message-date";


            if (message.created_at) {

                date.textContent =
                    new Date(
                        message.created_at
                    ).toLocaleDateString(
                        "en-GB",
                        {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        }
                    );

            }


            entry.appendChild(name);
            entry.appendChild(text);
            entry.appendChild(date);

            visitorMessageList.appendChild(entry);

        });

    }


    /* ═══════════════════════════════
       SEND MESSAGE
    ═══════════════════════════════ */

    visitorSubmit.addEventListener(
        "click",
        async () => {

            const name =
                visitorName.value.trim();

            const text =
                visitorMessage.value.trim();


            if (!text) {

                visitorStatus.textContent =
                    "you left nothing behind.";

                return;
            }


            visitorSubmit.disabled = true;

            visitorStatus.textContent =
                "leaving something behind...";


            const {
                error
            } = await supabaseClient
                .from("visitor_messages")
                .insert([
                    {
                        name:
                            name || "ANONYMOUS",

                        message:
                            text
                    }
                ]);


            if (error) {

                console.error(
                    "Erreur envoi message :",
                    error
                );

                visitorStatus.textContent =
                    "the message could not be recorded.";

                visitorSubmit.disabled = false;

                return;
            }


            visitorName.value = "";
            visitorMessage.value = "";


            visitorStatus.textContent =
                "your message has been recorded.";


            visitorSubmit.disabled = false;


            await loadVisitorMessages();

        }
    );


    /* ═══════════════════════════════
       LOAD AT START
    ═══════════════════════════════ */

    loadVisitorMessages();


    console.log(
        "Supabase connecté :",
        supabaseClient
    );

});
/* ═══════════════════════════════════════
   VISITOR BOOK → MYSTERY BOX
═══════════════════════════════════════ */

const visitorBookClose =
    document.getElementById("visitor-book-close");

const mysteryBoxOverlay =
    document.getElementById("mystery-box-overlay");

const mysteryBox =
    document.getElementById("mystery-box");

const boxMessage =
    document.getElementById("box-message");

const enterEphemeris =
    document.getElementById("enter-ephemeris");

const boxReturn =
    document.getElementById("box-return");


/* CLOSE THE BOOK */

if (visitorBookClose) {

    visitorBookClose.addEventListener("click", () => {

        mysteryBoxOverlay.classList.add("visible");

    });

}


/* OPEN THE BOX */

if (mysteryBox) {

    mysteryBox.addEventListener("click", () => {

        if (mysteryBox.classList.contains("opened")) {
            return;
        }

        mysteryBox.classList.add("opened");

        setTimeout(() => {

            boxMessage.classList.add("visible");

        }, 650);

    });

}


/* ENTER EPHEMERIS */

if (enterEphemeris) {

    enterEphemeris.addEventListener("click", () => {

        mysteryBoxOverlay.classList.remove("visible");

        mysteryBox.classList.remove("opened");

        boxMessage.classList.remove("visible");

        setTimeout(() => {

            showPage("page-ephemeris");

        }, 500);

    });

}


/* RETURN TO LIBRARY */

if (boxReturn) {

    boxReturn.addEventListener("click", () => {

        mysteryBoxOverlay.classList.remove("visible");

        mysteryBox.classList.remove("opened");

        boxMessage.classList.remove("visible");

        setTimeout(() => {

            showPage("page-library");

        }, 500);

    });

}

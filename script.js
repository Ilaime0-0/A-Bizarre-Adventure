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
   MAIN NAVIGATION
═══════════════════════════════════════ */

(function () {

    let pageHistory = [];
    let currentPage = "page-01";


    /* ─────────────────────────────────────
       SHOW PAGE
    ───────────────────────────────────── */

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


    /* ─────────────────────────────────────
       GO BACK
    ───────────────────────────────────── */

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


    /* ─────────────────────────────────────
       LOST PAGE
    ───────────────────────────────────── */

    function showLostPage() {
        showPage("page-lost");
    }


    /* ─────────────────────────────────────
       KEYBOARD NAVIGATION
    ───────────────────────────────────── */

    document.addEventListener("keydown", event => {

        const activeElement = document.activeElement;

        const typing =
            activeElement &&
            (
                activeElement.tagName === "INPUT" ||
                activeElement.tagName === "TEXTAREA"
            );

        if (
            event.key === "ArrowLeft" &&
            !typing
        ) {
            goBackInTime();
        }

    });


    /* Make functions available to HTML */

    window.showPage = showPage;
    window.goBackInTime = goBackInTime;
    window.showLostPage = showLostPage;


    /* ═══════════════════════════════════════
       SPIDER CURSOR
    ═══════════════════════════════════════ */

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


    /* ─────────────────────────────────────
       SPIDER ESCAPES WHEN CLICKING
    ───────────────────────────────────── */

    document.addEventListener("click", event => {

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


    /* ═══════════════════════════════════════
       SECRET MESSAGE SYSTEM
    ═══════════════════════════════════════ */

    function bindSecretReveal(
        trigger,
        message,
        duration = 2200
    ) {

        if (!trigger || !message) {
            return;
        }

        let hideTimeout;

        trigger.addEventListener("click", () => {

            message.classList.add("visible");

            clearTimeout(hideTimeout);

            hideTimeout = setTimeout(() => {

                message.classList.remove("visible");

            }, duration);

        });

    }


    /* ─────────────────────────────────────
       WELCOME SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".strange-button-one"),
        document.getElementById("strange-message")
    );


    /* ─────────────────────────────────────
       DIVIDE SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".restart-button"),
        document.getElementById("restart-message")
    );


    /* ─────────────────────────────────────
       LIFE SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".life-secret"),
        document.getElementById("life-secret-message")
    );


    /* ─────────────────────────────────────
       DEATH SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".death-secret"),
        document.getElementById("death-secret-message")
    );


    /* ─────────────────────────────────────
       NOCTEM SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".noctem-secret"),
        document.getElementById("noctem-secret-message")
    );


    /* ─────────────────────────────────────
       CHRONIQUES SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".chronicle-secret"),
        document.getElementById("chronicle-secret-message"),
        2500
    );


    /* ─────────────────────────────────────
       LIBRARY SECRET
    ───────────────────────────────────── */

    bindSecretReveal(
        document.querySelector(".library-secret"),
        document.getElementById("library-secret-message"),
        2500
    );


    /* ═══════════════════════════════════════
       WELCOME STRANGE SYMBOL
    ═══════════════════════════════════════ */

    const secretSymbol =
        document.querySelector(".secret-symbol");


    if (secretSymbol) {

        secretSymbol.addEventListener("click", () => {

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


    /* ═══════════════════════════════════════
       DIVIDE CLOCK
    ═══════════════════════════════════════ */

    const divideSecret =
        document.querySelector(".divide-secret");

    const strangeClock =
        document.querySelector(".strange-clock");


    if (divideSecret && strangeClock) {

        divideSecret.addEventListener(
            "click",
            () => {

                strangeClock.textContent =
                    "00:00:00";

                setTimeout(() => {

                    strangeClock.textContent =
                        "01:??:??";

                }, 1800);

            }
        );

    }

})();


/* ═══════════════════════════════════════
   VISITOR BOOK — SUPABASE
═══════════════════════════════════════ */

/*
   IMPORTANT :
   Le HTML possède deux zones "visitor-book".
   On utilise uniquement les éléments du
   véritable #page-visitor-book.
*/

const visitorBookPage =
    document.getElementById("page-visitor-book");


if (visitorBookPage) {

    const visitorName =
        visitorBookPage.querySelector("#visitor-name");

    const visitorMessage =
        visitorBookPage.querySelector("#visitor-message");

    const visitorSubmit =
        visitorBookPage.querySelector("#visitor-submit");

    const visitorStatus =
        visitorBookPage.querySelector("#visitor-status");

    const visitorMessageList =
        visitorBookPage.querySelector("#visitor-message-list");


    /* ═══════════════════════════════════════
       LOAD MESSAGES
    ═══════════════════════════════════════ */

    async function loadVisitorMessages() {

        if (!visitorMessageList) {
            return;
        }

        const {
            data,
            error
        } = await supabaseClient
            .from("visitor_messages")
            .select("*")
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


        /* ─────────────────────────────────────
           ERROR
        ───────────────────────────────────── */

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


        /* ─────────────────────────────────────
           EMPTY BOOK
        ───────────────────────────────────── */

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


        /* ─────────────────────────────────────
           CREATE EACH MESSAGE
        ───────────────────────────────────── */

        data.forEach(message => {

            const entry =
                document.createElement("div");

            entry.className =
                "visitor-message";


            /* NAME */

            const name =
                document.createElement("div");

            name.className =
                "visitor-message-name";

            name.textContent =
                message.name || "ANONYMOUS";


            /* MESSAGE */

            const text =
                document.createElement("div");

            text.className =
                "visitor-message-text";

            text.textContent =
                message.message || "";


            /* DATE */

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


    /* ═══════════════════════════════════════
       SEND MESSAGE
    ═══════════════════════════════════════ */

    if (
        visitorSubmit &&
        visitorMessage &&
        visitorStatus
    ) {

        visitorSubmit.addEventListener(
            "click",
            async () => {

                const name =
                    visitorName
                        ? visitorName.value.trim()
                        : "";

                const text =
                    visitorMessage.value.trim();


                /* EMPTY MESSAGE */

                if (!text) {

                    visitorStatus.textContent =
                        "you left nothing behind.";

                    return;
                }


                /* DISABLE BUTTON */

                visitorSubmit.disabled = true;

                visitorStatus.textContent =
                    "leaving something behind...";


                /* SEND TO SUPABASE */

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


                /* ERROR */

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


                /* SUCCESS */

                if (visitorName) {
                    visitorName.value = "";
                }

                visitorMessage.value = "";

                visitorStatus.textContent =
                    "your message has been recorded.";

                visitorSubmit.disabled = false;


                /* REFRESH BOOK */

                await loadVisitorMessages();

            }
        );

    }


    /* ═══════════════════════════════════════
       INITIAL LOAD
    ═══════════════════════════════════════ */

    loadVisitorMessages();


    console.log(
        "Supabase connecté :",
        supabaseClient
    );

}


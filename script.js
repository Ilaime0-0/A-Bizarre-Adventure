const SUPABASE_URL = "https://jmkcmvkdplnqjiqgmacs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_6P_SZeBcu721HqK_5umVbA_ykh-lruw";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
(function () {

    let pageHistory = [];
    let currentPage = "page-01";


    /* ═══════════════════════════════
       PAGE NAVIGATION
    ═══════════════════════════════ */

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


    document.addEventListener("keydown", event => {

        if (
            event.key === "ArrowLeft" &&
            !(
                document.activeElement &&
                document.activeElement.tagName === "INPUT"
            )
        ) {
            goBackInTime();
        }

    });


    window.showPage = showPage;
    window.goBackInTime = goBackInTime;
    window.showLostPage = showLostPage;


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


    document.addEventListener("click", event => {

        const spider =
            document.createElement("div");

        spider.classList.add(
            "escaping-spider"
        );

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

        trigger.addEventListener("click", () => {

            message.classList.add("visible");

            clearTimeout(hideTimeout);

            hideTimeout = setTimeout(() => {

                message.classList.remove("visible");

            }, duration);

        });

    }


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


    /* ═══════════════════════════════
       DIVIDE SECRET CLOCK
    ═══════════════════════════════ */

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
/* ═══════════════════════════════
   VISITOR BOOK
═══════════════════════════════ */

const visitorName = document.getElementById("visitor-name");
const visitorMessage = document.getElementById("visitor-message");
const visitorSubmit = document.getElementById("visitor-submit");
const visitorStatus = document.getElementById("visitor-status");
const visitorMessageList =
    document.getElementById("visitor-message-list");


function loadVisitorMessages() {

    const messages =
        JSON.parse(
            localStorage.getItem("visitorMessages") || "[]"
        );

    visitorMessageList.innerHTML = "";

    if (messages.length === 0) {

        visitorMessageList.innerHTML = `
            <div class="visitor-empty">
                no messages have been left yet.
                <br>
                perhaps you could be the first.
            </div>
        `;

        return;
    }


    messages
        .slice()
        .reverse()
        .forEach(message => {

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
                message.text;


            const date =
                document.createElement("div");

            date.className =
                "visitor-message-date";

            date.textContent =
                message.date;


            entry.appendChild(name);
            entry.appendChild(text);
            entry.appendChild(date);

            visitorMessageList.appendChild(entry);

        });

}


visitorSubmit.addEventListener(
    "click",
    () => {

        const name =
            visitorName.value.trim();

        const text =
            visitorMessage.value.trim();


        if (!text) {

            visitorStatus.textContent =
                "you left nothing behind.";

            return;
        }


        const messages =
            JSON.parse(
                localStorage.getItem(
                    "visitorMessages"
                ) || "[]"
            );


        messages.push({

            name:
                name || "ANONYMOUS",

            text:
                text,

            date:
                new Date().toLocaleDateString(
                    "en-GB",
                    {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }
                )

        });


        localStorage.setItem(
            "visitorMessages",
            JSON.stringify(messages)
        );


        visitorName.value = "";
        visitorMessage.value = "";


        visitorStatus.textContent =
            "your message has been recorded.";


        loadVisitorMessages();

    }
);


loadVisitorMessages();

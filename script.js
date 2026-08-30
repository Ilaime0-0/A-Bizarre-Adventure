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

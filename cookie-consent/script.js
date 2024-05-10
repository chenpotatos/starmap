window.addEventListener("CookiebotOnLoad", function () {
    // NOTE: it prevent the page to load if the user does not accept all cookies
    // window.CookieConsent.mutateEventListeners = false;
});

const loadCookieBotScript = () => {
    const element = document.getElementById("Cookiebot");
    if (element !== null) {
        return;
    }

    const script = document.createElement('script');
    script.type = "text/javascript";
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", "a687ee30-df65-45a0-9d22-90de6c1bb964");
    script.setAttribute("data-blockingmode", "auto");
    script.setAttribute("data-georegions", "{'region':'US-06,US-51,AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,GR,HU,IE,IT,LV,LT,LU,MT,NL,PL,PT,RO,SK,SL,ES,SE','cbid':'a687ee30-df65-45a0-9d22-90de6c1bb964'}");
    document.head.appendChild(script);
}

    loadCookieBotScript();

window.addEventListener("CookiebotOnDialogDisplay", function() {
    if (
        !window.Cookiebot ||
        !window.Cookiebot.consent ||
        window.Cookiebot.consent.statistics === undefined ||
        window.Cookiebot.consent.preferences === undefined ||
        window.Cookiebot.consent.marketing === undefined
    ) {
        return;
    }

    if (window.Cookiebot.consent.statistics) {
        const statisticsCheckBox = document.querySelector('#statistics.c-cookie-banner-checkbox');

        if (statisticsCheckBox !== undefined) {
            statisticsCheckBox.checked = true;
        }
    }

    if (window.Cookiebot.consent.preferences) {
        const preferencesCheckBox = document.querySelector('#preference.c-cookie-banner-checkbox');

        if (preferencesCheckBox !== undefined) {
            preferencesCheckBox.checked = true;
        }
    }

    if (window.Cookiebot.consent.marketing) {
        const marketingCheckBox = document.querySelector('#advertising.c-cookie-banner-checkbox');

        if (marketingCheckBox !== undefined) {
            marketingCheckBox.checked = true;
        }
    }
});
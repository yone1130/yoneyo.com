/**!
 *
 * Yone Website
 *
 * Copyright (C) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

class LanguageSelector {
    static LANGUAGES_MAP = {
        "ja-jp": "ja-JP",
        "en-us": "en-US",
    };

    static DEFAULT_LANGUAGE = "ja-jp";

    static AVAILABLE_LANGUAGES = Object.keys(LanguageSelector.LANGUAGES_MAP);

    static LANGUAGE_TO_FULL_NAMES = {
        ja: "ja-jp",
        en: "en-us",
    }

    static LOCAL_STORAGE_KEY = "language";

    constructor() { }

    /**
     * Initialize language selection system.
     * 
     * @returns {Promise<void>}
     */
    async initialize() {
        const initialLanguage = this.#getClientLanguage();
        this.#changePageLanguage(initialLanguage);
        this.#setupLanguageSwitchingEvents();
    }

    /**
     * Get client's preferred language.
     * 
     * @returns {string}
     */
    #getClientLanguage() {
        const savedLanguage = localStorage.getItem(LanguageSelector.LOCAL_STORAGE_KEY);

        if (typeof savedLanguage === "string") {
            return savedLanguage;
        }

        const clientLanguage = (
            navigator.language || navigator.userLanguage
        ).toLowerCase();

        return LanguageSelector.LANGUAGE_TO_FULL_NAMES[clientLanguage] || LanguageSelector.DEFAULT_LANGUAGE;
    }

    /**
     * Change the page language.
     * 
     * @param {string} language Language code.
     * @return {void}
     */
    #changePageLanguage(language) {
        const uppercaseLanguage = LanguageSelector.LANGUAGES_MAP[language];

        if (typeof uppercaseLanguage === "string") {
            document.documentElement.lang = uppercaseLanguage;
            document.title = pageTitleLangs[uppercaseLanguage];
        } else {
            document.documentElement.lang = LanguageSelector.LANGUAGES_MAP[LanguageSelector.DEFAULT_LANGUAGE];
            document.title = pageTitleLangs[LanguageSelector.LANGUAGES_MAP[LanguageSelector.DEFAULT_LANGUAGE]];
        }

        document.body.classList.remove(...LanguageSelector.AVAILABLE_LANGUAGES);
        document.body.classList.add(language);
        localStorage.setItem(LanguageSelector.LOCAL_STORAGE_KEY, language);
    }

    /**
     * Setup language switching events.
     * 
     * @return {void}
     */
    #setupLanguageSwitchingEvents() {
        LanguageSelector.AVAILABLE_LANGUAGES.forEach((language) => {
            document.querySelectorAll(`#langsLists .${language}`).forEach((element) => {
                element.addEventListener("click", async () => this.#onClickLanguageButton(language));
            });
        });
    }

    /**
     * Handle language button click event.
     * 
     * @param {string} language Language code.
     * @return {void}
     */
    #onClickLanguageButton(language) {
        this.#changePageLanguage(language);
    }
};

document.addEventListener("DOMContentLoaded", async () => {
    const languageSelector = new LanguageSelector();
    await languageSelector.initialize();
});

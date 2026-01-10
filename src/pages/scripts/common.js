/*!
 *
 * Yone Website
 *
 * Copyright (C) よね/Yone
 *
 */

import { Render } from "https://cdn.yoneyo.com/scripts/render@1.0.0/render.js";

class Page {
    /**
     * @param {{
     *     render: Render,
     * }}
     */
    constructor({ render }) {
        if (!(render instanceof Render)) {
            throw new Error("`render` argument must be an instance of Render");
        }

        this.render = render;
    }

    /**
     * @returns {Promise<void>}
     */
    async initialize() {
        this.#loadCommonElements(
            document.querySelector("header"),
            document.querySelector("footer"),
        );

        this.#headerMenuElement = document.getElementById(Page.#headerMenuElementId);
        this.#headerMenuButtonElement = document.getElementById(Page.#headerMenuButtonElementId);
    }

    /**
     * @type {string}
     */
    static #headerMenuElementId = "headerMenu";

    /**
     * @type {string}
     */
    static #headerMenuButtonElementId = "headerMenuButton";

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuElement = null;

    /**
     * @type {HTMLElement | null}
     */
    #headerMenuButtonElement = null;

    /**
     * @returns {void}
     */
    #loadCommonElements(headerTarget, footerTarget) {
        this.render.build({
            target: headerTarget,
            children: this.#header(),
        });

        this.render.build({
            target: footerTarget,
            children: this.#footer(),
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #header() {
        return [
            this.#headerWrapper(),
            this.#headerMenu(
                this.#navLinks({
                    isHeader: true,
                    id: "headerNavLinks",
                }),
            ),
        ];
    }

    /**
     * @returns {HTMLElement[]}
     */
    #footer() {
        return [
            this.#navLinks({
                isHeader: false,
                id: "footerNavLinks",
            }),
            this.#footerWrapper(),
        ];
    }

    /**
     * @returns {HTMLElement[]}
     */
    #headerWrapper() {
        const { $div } = this.render;

        return $div({
            className: "header-wrapper",
            children: [
                this.#headerLogo(),
                this.#headerMenuButton(),
            ],
        });
    }

    /**
     * @param {HTMLElement[]} navLinks
     * @returns {HTMLElement[]}
     */
    #headerMenu(navLinks) {
        const { $div } = this.render;

        return $div({
            id: Page.#headerMenuElementId,
            className: "header-menu",
            children: [
                navLinks,
            ],
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #footerWrapper() {
        const { $div, $span } = this.render;

        return $div({
            className: "footer-wrapper",
            children: [
                $span({
                    className: "footer-copyright",
                    innerHTML: "&copy; よね/Yone",
                }),
            ],
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #headerLogo() {
        const { $div, $img, $span } = this.render;

        return $div({
            id: "headerLogo",
            className: "header-logo",
            children: [
                $img({
                    className: "header-logo-image",
                    src: "https://cdn.yoneyo.com/images/yone_logos/yone_icon.png",
                    alt: "Yone's icon",
                }),
                $span({
                    className: "header-title",
                    textContent: " よね/Yone ",
                }),
            ],
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #headerMenuButton() {
        const { $button, $span } = this.render;

        return $button({
            id: Page.#headerMenuButtonElementId,
            className: "header-menu-button",
            onClick: () => this.#onClickHeaderMenuButton(),
            children: [
                $span({
                    className: "material-symbols-outlined header-menu-button-icon--open",
                    textContent: "menu",
                }),
                $span({
                    className: "material-symbols-outlined header-menu-button-icon--close",
                    textContent: "close",
                }),
            ],
        });
    }

    /**
     * @param {{
     *     isHeader: boolean,
     *     id: string,
     * }}
     * @returns {HTMLElement[]}
     */
    #navLinks({ isHeader, id }) {
        const { $nav, $ul, $li, $a } = this.render;

        return $nav({
            id: id,
            className: "navLinks",
            children: [
                $ul({
                    className: "navLinks__list",
                    children: [
                        $li({
                            className: "navLinks__item",
                            children: [
                                $a({
                                    href: "/",
                                    textContent: "ホーム",
                                    children: [this.#chevronRight()],
                                }),
                            ],
                        }),
                        $li({
                            className: "navLinks__item",
                            children: [
                                $a({
                                    href: "/#contact",
                                    textContent: "お問い合わせ",
                                    onClick: isHeader ? () => this.#onClickHeaderMenuContactLink() : () => { },
                                    children: [this.#chevronRight()],
                                }),
                            ],
                        }),
                        $li({
                            className: "navLinks__item",
                            children: [
                                $a({
                                    href: "/sitemap/",
                                    textContent: "サイトマップ",
                                    children: [this.#chevronRight()],
                                }),
                            ],
                        }),
                        $li({
                            className: "navLinks__item",
                            children: [
                                $a({
                                    href: "/hosts/",
                                    textContent: "サブドメインリスト",
                                    children: [this.#chevronRight()],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

    /**
     * @returns {HTMLElement[]}
     */
    #chevronRight() {
        const { $span } = this.render;

        return $span({
            className: "material-symbols-outlined",
            textContent: "chevron_right",
        });
    }

    /**
     * @returns {void}
     */
    #onClickHeaderMenuButton() {
        this.#headerMenuToggle();
    }

    /**
     * @returns {void}
     */
    #onClickHeaderMenuContactLink() {
        this.#headerMenuToggle();
    }

    /**
     * @returns {void}
     */
    #headerMenuToggle() {
        if (this.#headerMenuElement instanceof HTMLElement) {
            this.#headerMenuElement.classList.toggle("enabled");
        }

        if (this.#headerMenuButtonElement instanceof HTMLElement) {
            this.#headerMenuButtonElement.classList.toggle("enabled");
        }
    }
}

/**
 * @type {Render}
 */
const render = new Render();

/**
 * @type {Page}
 */
const page = new Page({ render });

await page.initialize();

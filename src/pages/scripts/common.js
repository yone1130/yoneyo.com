/*
 *
 * Yone Website
 *
 * Copyright (C) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    header.appendChild(_header());
    footer.appendChild(_footer());

    const headerMenu = document.getElementById("headerMenu");
    const headerMenuButton = document.getElementById("headerMenuButton");
    const headerMenuContactLink = document.getElementById("headerMenuContactLink");

    headerMenuButton.addEventListener("click", () => onClickHeaderMenuButton(headerMenu, headerMenuButton));
    headerMenuContactLink.addEventListener("click", () => onClickHeaderMenuContactLink(headerMenu, headerMenuButton));
});

function _header() {
    const headerLogo = _headerLogo().firstElementChild.outerHTML;
    const headerMenuButton = _headerMenuButton().firstElementChild.outerHTML;
    const headerMenu = _headerMenu().firstElementChild.outerHTML;

    return document.createRange().createContextualFragment(`
        <div class="header-wrapper">
            ${headerLogo}
            ${headerMenuButton}
        </div>

        ${headerMenu}
    `);
}

function _headerLogo() {
    return document.createRange().createContextualFragment(`
        <div id="headerLogo" class="header-logo">
            <img class="header-logo-image" src="https://cdn.yoneyo.com/images/yone_logos/yone_icon.png" alt="Yone's icon">
            <span class="header-title"> よね/Yone </span>
        </div>
    `);
}

function _headerMenuButton() {
    return document.createRange().createContextualFragment(`
        <button id="headerMenuButton" class="header-menu-button">
            <span class="material-symbols-outlined header-menu-button-icon--open">
                menu
            </span>

            <span class="material-symbols-outlined header-menu-button-icon--close">
                close
            </span>
        </button>
    `);
}

function _headerMenu() {
    return document.createRange().createContextualFragment(`
        <nav id="headerMenu" class="header-menu">
            <ul class="header-menu__list">
                <li class="header-menu__item">
                    <a href="/">ホーム</a>
                </li>

                <li class="header-menu__item">
                    <a href="/#contact" id="headerMenuContactLink">お問い合わせ</a>
                </li>
            </ul>
        </nav>
    `);
}

function _footer() {
    return document.createRange().createContextualFragment(`
        <div class="footer-wrapper">
            <span class="footer-copyright">&copy; よね/Yone</span>
        </div>
    `);
}

function onClickHeaderMenuButton(headerMenu, headerMenuButton) {
    headerMenuToggle(headerMenu, headerMenuButton);
}

function onClickHeaderMenuContactLink(headerMenu, headerMenuButton) {
    headerMenuToggle(headerMenu, headerMenuButton);
}

function headerMenuToggle(headerMenu, headerMenuButton) {
    headerMenuButton.classList.toggle("enabled");
    headerMenu.classList.toggle("enabled");
}

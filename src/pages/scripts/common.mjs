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

import { Render } from "https://cdn.yoneyo.com/scripts/render-v1.0.0.mjs";


const render = new Render();


document.addEventListener("DOMContentLoaded", () => {
    const _header = () => document.querySelector("header");
    const _footer = () => document.querySelector("footer");

    render.build({
        target: _header(),
        children: header(),
    });

    render.build({
        target: _footer(),
        children: footer(),
    });
});


function header() {
    return [
        headerWrapper(),
        headerMenu(),
    ]
}


function footer() {
    return [
        footerWrapper(),
    ];
}


function headerWrapper() {
    return render.$div({
        className: "header-wrapper",
        children: [
            headerLogo(),
            headerMenuButton(),
        ],
    });
}


function headerMenu() {
    return render.$nav({
        id: "headerMenu",
        className: "header-menu",
        children: [
            render.$ul({
                className: "header-menu__list",
                children: [
                    render.$li({
                        className: "header-menu__item",
                        children: [
                            render.$a({
                                href: "/",
                                innerText: "ホーム",
                            }),
                        ],
                    }),
                    render.$li({
                        className: "header-menu__item",
                        children: [
                            render.$a({
                                id: "headerMenuContactLink",
                                href: "/#contact",
                                onClick: onClickHeaderMenuContactLink,
                                innerText: "お問い合わせ",
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}


function footerWrapper() {
    return render.$div({
        className: "footer-wrapper",
        children: [
            render.$span({
                className: "footer-copyright",
                innerHTML: "&copy; よね/Yone",
            }),
        ],
    });
}


function headerLogo() {
    return render.$div({
        id: "headerLogo",
        className: "header-logo",
        children: [
            render.$img({
                className: "header-logo-image",
                src: "https://cdn.yoneyo.com/images/yone_logos/yone_icon.png",
                alt: "Yone's icon",
            }),
            render.$span({
                className: "header-title",
                innerText: " よね/Yone ",
            }),
        ],
    });
}


function headerMenuButton() {
    return render.$button({
        id: "headerMenuButton",
        className: "header-menu-button",
        onClick: onClickHeaderMenuButton,
        children: [
            render.$span({
                className: "material-symbols-outlined header-menu-button-icon--open",
                innerText: "menu",
            }),
            render.$span({
                className: "material-symbols-outlined header-menu-button-icon--close",
                innerText: "close",
            }),
        ],
    });
}


function onClickHeaderMenuButton() {
    const headerMenu = document.getElementById("headerMenu");
    const headerMenuButton = document.getElementById("headerMenuButton");
    headerMenuToggle(headerMenu, headerMenuButton);
}


function onClickHeaderMenuContactLink() {
    const headerMenu = document.getElementById("headerMenu");
    const headerMenuButton = document.getElementById("headerMenuButton");
    headerMenuToggle(headerMenu, headerMenuButton);
}


function headerMenuToggle(headerMenu, headerMenuButton) {
    headerMenuButton.classList.toggle("enabled");
    headerMenu.classList.toggle("enabled");
}

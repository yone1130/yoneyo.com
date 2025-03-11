/*!
 *
 * Yone Website
 *
 * Copyright (C) よね/Yone
 *
 * No modification or reproduction of any kind is permitted.
 * 改変や複製を一切禁じます。
 *
 */

import { Render } from "https://cdn.yoneyo.com/scripts/render/render-v1.0.0.mjs";


const render = new Render();


document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    render.build({
        target: headerElement,
        children: header(),
    });

    render.build({
        target: footerElement,
        children: footer(),
    });
});


function header() {
    return [
        headerWrapper(),
        headerMenu(
            navLinks({
                isHeader: true,
                id: "headerNavLinks",
            })
        ),
    ]
}


function footer() {
    return [
        navLinks({
            isHeader: false,
            id: "footerNavLinks",
        }),
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


function headerMenu(navLinks) {
    return render.$div({
        id: "headerMenu",
        className: "header-menu",
        children: [
            navLinks
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
                textContent: " よね/Yone ",
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
                textContent: "menu",
            }),
            render.$span({
                className: "material-symbols-outlined header-menu-button-icon--close",
                textContent: "close",
            }),
        ],
    });
}


function navLinks({ isHeader, id }) {
    return render.$nav({
        id: id,
        className: "navLinks",
        children: [
            render.$ul({
                className: "navLinks__list",
                children: [
                    render.$li({
                        className: "navLinks__item",
                        children: [
                            render.$a({
                                href: "/",
                                textContent: "ホーム",
                                children: [chevronRight()],
                            }),
                        ],
                    }),
                    (() => {
                        if (isHeader) {
                            return render.$li({
                                className: "navLinks__item",
                                children: [
                                    render.$a({
                                        href: "/#contact",
                                        textContent: "お問い合わせ",
                                        onClick: () => onClickHeaderMenuContactLink(),
                                        children: [chevronRight()],
                                    }),
                                ],
                            });
                        } else {
                            return render.$li({
                                className: "navLinks__item",
                                children: [
                                    render.$a({
                                        href: "/#contact",
                                        textContent: "お問い合わせ",
                                        children: [chevronRight()],
                                    }),
                                ],
                            });
                        }
                    })(),
                    render.$li({
                        className: "navLinks__item",
                        children: [
                            render.$a({
                                href: "/sitemap/",
                                textContent: "サイトマップ",
                                children: [chevronRight()],
                            }),
                        ],
                    }),
                    render.$li({
                        className: "navLinks__item",
                        children: [
                            render.$a({
                                href: "/hosts/",
                                textContent: "サブドメインリスト",
                                children: [chevronRight()],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}


function chevronRight() {
    return render.$span({
        className: "material-symbols-outlined",
        textContent: "chevron_right",
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
    headerMenu.classList.toggle("enabled");
    headerMenuButton.classList.toggle("enabled");
}

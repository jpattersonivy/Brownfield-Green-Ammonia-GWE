"use strict";

//==============================
// NAV DATA
//==============================

const NAV_ITEMS = [

    { label: "Home", href: "index.html" },
    { label: "About", href: "about.html" },
    { label: "Dashboard", href: "dashboard.html" },
    { label: "Learning", href: "learning.html" },
    { label: "Research", href: "research.html" },
    { label: "Community", href: "community.html" },
    { label: "Contact", href: "contact.html" }

];

//==============================
// UI STATE
//==============================

const NAV_UI = {

    container: null,
    nav: null,
    toggle: null,
    overlay: null

};

//==============================
// INIT
//==============================

document.addEventListener("DOMContentLoaded", initNavigation);

function initNavigation() {

    NAV_UI.container = document.getElementById("nav-container");
    NAV_UI.toggle = document.getElementById("nav-toggle");
    NAV_UI.overlay = document.getElementById("nav-overlay");

    if (!NAV_UI.container) return;

    buildNavigation();
    setupEvents();

}

//==============================
// BUILD NAV
//==============================

function buildNavigation() {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const nav = document.createElement("nav");
    nav.className = "main-nav";

    const ul = document.createElement("ul");
    ul.className = "nav-list";

    NAV_ITEMS.forEach(item => {

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = item.label;
        a.href = item.href;

        if (item.href === currentPage) {
            a.classList.add("active");
        }

        li.appendChild(a);
        ul.appendChild(li);

    });

    nav.appendChild(ul);
    NAV_UI.container.appendChild(nav);

    NAV_UI.nav = nav;

}

//==============================
// EVENTS
//==============================

function setupEvents() {

    if (!NAV_UI.toggle || !NAV_UI.overlay) return;

    NAV_UI.toggle.addEventListener("click", toggleNav);
    NAV_UI.overlay.addEventListener("click", closeNav);

    document.addEventListener("keydown", (e) => {

        if (e.key === "Escape") closeNav();

    });

}

//==============================
// TOGGLE LOGIC
//==============================

function toggleNav() {

    if (NAV_UI.nav.classList.contains("open")) {
        closeNav();
    } else {
        openNav();
    }

}

function openNav() {

    NAV_UI.nav.classList.add("open");
    NAV_UI.overlay.classList.add("active");
    document.body.style.overflow = "hidden";

}

function closeNav() {

    NAV_UI.nav.classList.remove("open");
    NAV_UI.overlay.classList.remove("active");
    document.body.style.overflow = "";

}
"use strict";

//==============================================================
// GLOBAL APP CONTROLLER
//==============================================================

const App = {

    currentPage: "",

    init() {

        this.currentPage =
            window.location.pathname.split("/").pop();

        if (!this.currentPage) {
            this.currentPage = "index.html";
        }

        this.route();

    },

    route() {

        switch (this.currentPage) {

            case "index.html":
                console.log("Home page loaded");
                break;

            case "about.html":
                console.log("About page loaded");
                break;

            case "dashboard.html":
                console.log("Dashboard loaded");
                break;

            case "research.html":
                console.log("Research loaded");
                break;

            case "learning.html":
                console.log("Learning Center loaded");
                break;

            case "community.html":
                console.log("Community loaded");
                break;

            default:
                console.log("Page not recognized");

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});
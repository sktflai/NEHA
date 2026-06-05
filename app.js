console.log("NEHA SAFE CORE LOADED");

document.addEventListener("DOMContentLoaded", () => {

    console.log("DOM READY");

    // =========================
    // SIDEBAR SAFE INIT
    // =========================

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    } else {
        console.log("SIDEBAR ELEMENTS MISSING");
    }

    // =========================
    // SAFE PAGE SWITCH
    // =========================

    window.showPage = function(page) {

        const pages = ["today", "calendar", "settings"];

        pages.forEach(p => {
            const el = document.getElementById(p + "Page");
            if (el) el.style.display = "none";
        });

        const target = document.getElementById(page + "Page");
        if (target) {
            target.style.display = "block";
        } else {
            console.log("PAGE NOT FOUND:", page);
        }
    };

    console.log("NEHA CORE READY");
});

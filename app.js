console.log("NEHA FINAL SYNC LOADED");

let data = [];

document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // MENU BUTTON (you MUST add this in HTML later if not present)
    // =========================
    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    if (menuButton && sidebar) {
        menuButton.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // =========================
    // ADD PRODUCT
    // =========================
    const addBtn = document.getElementById("addBtn");

    if (addBtn) {
        addBtn.addEventListener("click", () => {

            const name = document.getElementById("productSelect").value;
            const expiry = document.getElementById("expiryInput").value;

            if (!expiry) {
                alert("期限を入力してください");
                return;
            }

            data.push({
                name,
                expiry,
                status: "有効"
            });

            renderAll();
        });
    }

    // initial render
    renderAll();
});

// =========================
// PAGE SWITCH
// =========================

window.showPage = function(page) {

    const pages = ["today", "calendar", "settings"];

    pages.forEach(p => {
        const el = document.getElementById(p + "Page");
        if (el) el.style.display = "none";
    });

    const target = document.getElementById(page + "Page");
    if (target) target.style.display = "block";
};

// =========================
// RENDER ALL
// =========================

function renderAll() {
    renderList();
    renderToday();
    renderCalendar();
}

// =========================
// SETTINGS LIST
// =========================

function renderList() {

    const list = document.getElementById("list");
    if (!list) return;

    list.innerHTML = "";

    data.forEach((item, i) => {

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <b>${item.name}</b><br>
            期限: ${item.expiry}
        `;

        list.appendChild(div);
    });
}

// =========================
// TODAY
// =========================

function renderToday() {

    const container = document.getElementById("todayContent");
    if (!container) return;

    const today = new Date().toISOString().split("T")[0];

    const todayItems = data.filter(p => p.expiry === today);

    container.innerHTML = "";

    if (todayItems.length === 0) {
        container.innerHTML = "本日の対象なし";
        return;
    }

    todayItems.forEach(item => {

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <b>${item.name}</b><br>
            期限: ${item.expiry}
        `;

        container.appendChild(div);
    });
}

// =========================
// CALENDAR (simple version)
// =========================

function renderCalendar() {

    const container = document.getElementById("calendarContent");
    if (!container) return;

    container.innerHTML = "";

    data.forEach(item => {

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <b>${item.expiry}</b><br>
            ${item.name}
        `;

        container.appendChild(div);
    });
}
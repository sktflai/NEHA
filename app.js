console.log("NEHA FULL SYSTEM LOADED");

let data = [];

document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    // =========================
    // SIDEBAR OPEN / CLOSE
    // =========================

    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        sidebar.classList.toggle("open");
    });

    // close when clicking outside
    document.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target) && e.target !== menuButton) {
            sidebar.classList.remove("open");
        }
    });

    // =========================
    // ADD ITEM
    // =========================

    document.getElementById("addBtn").addEventListener("click", () => {

        const name = document.getElementById("productSelect").value;
        const expiry = document.getElementById("expiryInput").value;

        if (!expiry) {
            alert("期限を入力してください");
            return;
        }

        data.push({
            name,
            expiry
        });

        renderAll();
    });

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
    list.innerHTML = "";

    data.forEach(item => {

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
    container.innerHTML = "";

    const today = new Date().toISOString().split("T")[0];

    const items = data.filter(p => p.expiry === today);

    if (items.length === 0) {
        container.innerHTML = "本日の対象なし";
        return;
    }

    items.forEach(item => {

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
// CALENDAR
// =========================

function renderCalendar() {

    const container = document.getElementById("calendarContent");
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
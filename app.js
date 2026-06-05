console.log("NEHA CLEAN SYSTEM LOADED");

let data = [];

document.addEventListener("DOMContentLoaded", () => {

    // SIDEBAR
    const menu = document.getElementById("menuButton");
    const sidebar = document.getElementById("sidebar");

    menu.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    // ADD ITEM
    document.getElementById("addBtn").addEventListener("click", () => {

        const name = document.getElementById("productSelect").value;
        const expiry = document.getElementById("expiryInput").value;

        if (!expiry) return alert("期限を入力");

        data.push({ name, expiry });

        renderList();
    });

    showPage("today");
});

function showPage(page) {

    ["today", "calendar", "settings"].forEach(p => {
        document.getElementById(p + "Page").style.display = "none";
    });

    document.getElementById(page + "Page").style.display = "block";
}

function renderList() {

    const list = document.getElementById("list");
    list.innerHTML = "";

    data.forEach((item, i) => {

        const div = document.createElement("div");
        div.className = "item";

        div.innerHTML = `
            <b>${item.name}</b><br>
            ${item.expiry}
        `;

        list.appendChild(div);
    });
}

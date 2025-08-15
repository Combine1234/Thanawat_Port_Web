// Highlight active link in nav
const currentPage = location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#ff9800";
    }
});

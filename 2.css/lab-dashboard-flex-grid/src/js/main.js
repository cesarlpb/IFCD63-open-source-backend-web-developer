document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggle.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    toggle.title = sidebar.classList.contains("collapsed")
      ? "Mostrar menú"
      : "Ocultar menú";
    toggle.textContent = sidebar.classList.contains("collapsed") ? "☰" : "⇦";
    if (sidebar.classList.contains("collapsed")) {
      toggle.style.left = ".3rem";
    } else {
      toggle.style.left = "5.5rem";
    }
  });
});

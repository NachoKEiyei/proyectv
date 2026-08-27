document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("[data-toggle]");
  toggles.forEach((btn) => {
    const panel = document.getElementById(btn.getAttribute("data-toggle"));
    if (!panel) return;
    btn.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
});

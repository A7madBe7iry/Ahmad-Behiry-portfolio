document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
  links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  }));
  document.getElementById("year").textContent = new Date().getFullYear();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
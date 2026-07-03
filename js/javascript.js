document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navbar = document.querySelector(".navbar");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
      navbar.classList.toggle("open");
      navToggle.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        navToggle.classList.remove("open");
      }
    });
  });
});
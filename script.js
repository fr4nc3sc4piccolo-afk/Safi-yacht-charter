// smooth scroll
document.documentElement.style.scrollBehavior = "smooth";

// menu toggle
const toggle = document.querySelector(".menu-toggle");
const panel = document.querySelector(".menu-panel");

toggle.addEventListener("click", () => {
  panel.classList.toggle("active");
});

// scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".manifesto, .experience, .pillars, .cta-section").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

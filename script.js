// Smooth scroll base
document.documentElement.style.scrollBehavior = "smooth";

// Animazioni on scroll
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

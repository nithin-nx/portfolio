/* ===========================
   THEME TOGGLE (PERSISTENT)
=========================== */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

/* ===========================
   SCROLL REVEAL (FRAMER-LIKE)
=========================== */

const revealElements = document.querySelectorAll(
  ".hero-inner, .section-head, .project-card, .about-inner, .contact-inner"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "show");
        entry.target.style.transitionDelay = `${index * 80}ms`;
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach(el => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

/* ===========================
   NAVBAR SCROLL POLISH
=========================== */

let lastScroll = 0;
const navWrapper = document.querySelector(".nav-wrapper");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Subtle shadow after scroll
  if (currentScroll > 20) {
    navWrapper.style.boxShadow = "0 10px 30px rgba(0,0,0,0.06)";
  } else {
    navWrapper.style.boxShadow = "none";
  }

  lastScroll = currentScroll;
});

/* ===========================
   SMOOTH INTERNAL NAV SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

/* ===========================
   POLISH: REDUCE MOTION PREF
=========================== */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach(el => {
    el.style.transition = "none";
    el.classList.add("show");
  });
}

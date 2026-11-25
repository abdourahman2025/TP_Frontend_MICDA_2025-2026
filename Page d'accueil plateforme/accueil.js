//  Menu mobile 
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

//  Slider 
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
let current = 0;
let timer;

// Création des points de navigation
slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "dot" + (i === 0 ? " active" : "");
  dot.setAttribute("aria-label", "Aller à la diapositive " + (i + 1));
  dot.addEventListener("click", () => { showSlide(i); restartTimer(); });
  dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
  dots[current].classList.add("active");
}

function restartTimer() {
  clearInterval(timer);
  timer = setInterval(() => showSlide(current + 1), 5000);
}

document.getElementById("next").addEventListener("click", () => { showSlide(current + 1); restartTimer(); });
document.getElementById("prev").addEventListener("click", () => { showSlide(current - 1); restartTimer(); });
restartTimer();

// Compteurs animés (section « UN-CHK en chiffres 
const counters = document.querySelectorAll(".stat-number[data-target]");

function animateCounter(el) {
  const target = Number(el.dataset.target);
  const duration = 1500;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.floor(progress * target).toLocaleString("fr-FR");
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Le compteur démarre quand la section devient visible
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

// Les valeurs finales sont déjà dans le HTML : on ne repart de 0 que si le script fonctionne
counters.forEach(c => { c.textContent = "0"; observer.observe(c); });

//  Bouton « retour en haut 
const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  toTop.classList.toggle("visible", window.scrollY > 400);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

//  Panneau latéral (bouton MENU) 
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");

function setDrawer(open) {
  drawer.classList.toggle("open", open);
  drawerOverlay.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", !open);
}

document.getElementById("drawerOpen").addEventListener("click", () => setDrawer(true));
document.getElementById("drawerClose").addEventListener("click", () => setDrawer(false));
drawerOverlay.addEventListener("click", () => setDrawer(false));
drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setDrawer(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setDrawer(false); });
// Carrousel : navigation par flèches, points et défilement automatique.
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const nextButton = document.querySelector('.carousel-control.next');
const prevButton = document.querySelector('.carousel-control.prev');
let currentSlide = 0;
let carouselTimer;

function showSlide(index) {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
    dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
  });
}

function startCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => showSlide(currentSlide + 1), 5000);
}

nextButton?.addEventListener('click', () => { showSlide(currentSlide + 1); startCarousel(); });
prevButton?.addEventListener('click', () => { showSlide(currentSlide - 1); startCarousel(); });
dots.forEach((dot, index) => dot.addEventListener('click', () => { showSlide(index); startCarousel(); }));
if (slides.length > 1) startCarousel();

// Menu déroulant sur tablette et téléphone.
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.menu-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = mainMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  menuToggle.innerHTML = isOpen ? '<i class="bi bi-x-lg" aria-hidden="true"></i>' : '<i class="bi bi-list" aria-hidden="true"></i>';
});
mainMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainMenu.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
}));

// Affichage du champ de recherche.
const searchToggle = document.querySelector('.search-toggle');
const searchForm = document.querySelector('.search-form');
searchToggle?.addEventListener('click', () => {
  searchForm.classList.toggle('is-visible');
  if (searchForm.classList.contains('is-visible')) searchForm.querySelector('input')?.focus();
});
searchForm?.addEventListener('submit', event => event.preventDefault());


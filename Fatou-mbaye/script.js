
// =====================================
// 1. MENU RESPONSIVE
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("open");

        menuToggle.textContent =
            navbar.classList.contains("open") ? "✕" : "☰";
    });

    navbar.querySelectorAll("a").forEach(lien => {
        lien.addEventListener("click", () => {
            navbar.classList.remove("open");
            menuToggle.textContent = "☰";
        });
    });
}


// =====================================
// 2. CARROUSEL D'ACCUEIL
// =====================================

const heroBanner = document.getElementById("hero-banner");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");

let currentSlide = 0;
let carouselTimer = null;

function showSlide(index) {

    if (!heroBanner || slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    currentSlide = (index + slides.length) % slides.length;

    const activeSlide = slides[currentSlide];

    activeSlide.classList.add("active");

    const bgImage = activeSlide.getAttribute("data-bg");

    if (bgImage) {
        heroBanner.style.backgroundImage =
            `linear-gradient(rgba(0,45,90,0.72), rgba(0,45,90,0.72)), url("${bgImage}")`;
    }
}

function startCarousel() {

    clearInterval(carouselTimer);

    carouselTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6000);
}

if (slides.length > 0) {

    showSlide(0);

    startCarousel();

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            showSlide(currentSlide + 1);
            startCarousel();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            showSlide(currentSlide - 1);
            startCarousel();
        });
    }
}


// =====================================
// 3. COMPTEURS ANIMÉS
// =====================================

const compteurs = document.querySelectorAll(".nombre");
const sectionChiffres = document.getElementById("chiffres");

let animationLancee = false;

function animerCompteurs() {

    if (animationLancee) return;

    animationLancee = true;

    compteurs.forEach(compteur => {

        const cible = Number(
            compteur.getAttribute("data-target")
        ) || 0;

        const duree = 1800;
        const debut = performance.now();

        function actualiser(temps) {

            const progression = Math.min(
                (temps - debut) / duree,
                1
            );

            const valeur = Math.floor(
                cible * progression
            );

            compteur.textContent =
                valeur.toLocaleString("fr-FR");

            if (progression < 1) {
                requestAnimationFrame(actualiser);
            } else {
                compteur.textContent =
                    cible.toLocaleString("fr-FR");
            }
        }

        requestAnimationFrame(actualiser);
    });
}

if (sectionChiffres) {

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        animerCompteurs();
                        observer.disconnect();
                    }

                });

            },
            { threshold: 0.2 }
        );

        observer.observe(sectionChiffres);

    } else {
        window.addEventListener("scroll", () => {

            const position =
                sectionChiffres.getBoundingClientRect().top;

            if (position < window.innerHeight) {
                animerCompteurs();
            }

        });
    }
}


// =====================================
// 4. GALERIE PHOTOS
// =====================================

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTexte = document.getElementById("lightbox-texte");
const lightboxClose = document.getElementById("lightbox-close");

const galerieItems = document.querySelectorAll(".galerie-item");

galerieItems.forEach(item => {

    item.addEventListener("click", () => {

        const img = item.querySelector("img");
        const legende = item.querySelector(".galerie-legende");

        if (!img || !lightbox || !lightboxImg) return;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        if (lightboxTexte) {
            lightboxTexte.textContent =
                legende ? legende.textContent : "";
        }

        lightbox.classList.add("open");

    });

});


// =====================================
// 5. FERMETURE DE LA GALERIE
// =====================================

function fermerLightbox() {

    if (lightbox) {
        lightbox.classList.remove("open");
    }

}

if (lightboxClose) {
    lightboxClose.addEventListener(
        "click",
        fermerLightbox
    );
}

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {
            fermerLightbox();
        }

    });

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        fermerLightbox();
    }

});


// =====================================
// 6. MESSAGE DE VÉRIFICATION
// =====================================

console.log("Site UN-CHK chargé avec succès !");

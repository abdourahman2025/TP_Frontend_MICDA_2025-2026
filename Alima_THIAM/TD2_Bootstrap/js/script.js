/* =========================================================
   TD2 – Découverte du Sénégal
   Petits comportements de la page
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const liensMenu = document.querySelectorAll("#menu .nav-link");
  const menu = document.getElementById("menu");

  // 1) Sur téléphone : refermer le menu burger après un clic sur un lien
  liensMenu.forEach(function (lien) {
    lien.addEventListener("click", function () {
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // 2) Mettre en couleur le lien de la section affichée à l'écran
  const sections = document.querySelectorAll("header[id], section[id], footer[id]");

  function activerLien(id) {
    liensMenu.forEach(function (lien) { lien.classList.remove("active"); });
    // On prend le premier lien qui pointe vers cette section
    const lien = document.querySelector('#menu .nav-link[href="#' + id + '"]');
    if (lien) lien.classList.add("active");
  }

  function majLienActif() {
    let idCourant = "accueil";
    sections.forEach(function (section) {
      // La section est « courante » quand son haut passe sous le menu
      if (section.getBoundingClientRect().top <= 120) {
        idCourant = section.id;
      }
    });
    // Tout en bas de la page (après avoir défilé) : on active « Contact »
    if (window.scrollY > 0 &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      idCourant = "contact";
    }
    activerLien(idCourant);
  }

  window.addEventListener("scroll", majLienActif);
  majLienActif();
});

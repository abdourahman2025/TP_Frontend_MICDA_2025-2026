const navigation = document.getElementById("navigation");
const menuMobile = document.getElementById("menuMobile");

menuMobile.addEventListener("click", function () {
    navigation.classList.toggle("visible");
});

document.querySelectorAll(".menu-bouton").forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        const menu = bouton.parentElement;
        const etaitOuvert = menu.classList.contains("ouvert");

        document.querySelectorAll(".menu-deroulant").forEach(function (item) {
            item.classList.remove("ouvert");
        });

        if (!etaitOuvert) {
            menu.classList.add("ouvert");
        }
    });
});
const boutonRecherche = document.getElementById("boutonRecherche");
const zoneRecherche = document.getElementById("zoneRechercher");
const champRecherche = document.getElementById("champRecherche");
const resultatRecherche = document.getElementById("resultatRecherche");

boutonRecherche.addEventListener("click", function () {
    zoneRecherche.hidden = !zoneRecherche.hidden;

    if (!zoneRecherche.hidden) {
        document.getElementById("champRecherche").focus();
    }
});

if (zoneRecherche) {
    zoneRecherche.addEventListener("submit", function (event) {
        event.preventDefault();

        const mot = champRecherche.value.trim();

        if (!mot) {
            resultatRecherche.textContent = "Écris un mot à rechercher.";
            return;
        }

        const elements = document.querySelectorAll("main h1, main h2, main p");
        let trouve = false;

        elements.forEach(function (element) {
            if (element.textContent.toLowerCase().includes(mot.toLowerCase())) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                trouve = true;
            }
        });

        resultatRecherche.textContent = trouve
            ? "Résultat trouvé sur cette page."
            : "Aucun résultat trouvé sur cette page.";
    });
}
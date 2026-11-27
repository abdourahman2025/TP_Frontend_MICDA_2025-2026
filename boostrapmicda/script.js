<script>
    // Mise à jour dynamique du contenu de la modale selon la carte cliquée
    const infoModal = document.getElementById("infoModal");
    if (infoModal) {
      infoModal.addEventListener("show.bs.modal", function (event) {
        const button = event.relatedTarget;
        if (!button) return;
        const titre = button.getAttribute("data-titre") || "Découverte du Sénégal";
        const description = button.getAttribute("data-description") || "";
        document.getElementById("infoModalLabel").textContent = titre;
        document.getElementById("infoModalBody").textContent = description;
      })
    }
  </script>
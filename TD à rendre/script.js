document.addEventListener('DOMContentLoaded', function () {
    
    // Vérification de sécurité : Swiper est-il bien chargé ?
    if (typeof Swiper === 'undefined') {
        console.error('Erreur : Swiper.js n\'a pas été chargé. Vérifiez votre connexion ou votre CDN.');
        return;
    }

    // Initialisation du carrousel
    const swiper = new Swiper('.my-swiper', {
        loop: true, // Défilement infini
        
        autoplay: {
            delay: 5000, // Change d'image toutes les 5 secondes
            disableOnInteraction: false, // Continue après un clic ou un swipe
            pauseOnMouseEnter: true, // S'arrête quand la souris est au-dessus
        },
        
        speed: 600, // Vitesse de transition (en millisecondes)
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    console.log('✅ Carrousel UNCHK initialisé avec succès.');
});
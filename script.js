
let index = 0;
const slides = document.querySelectorAll(".slide");

function afficherSlide(numero) {
    slides[index].classList.remove("active");

    index = (numero + slides.length) % slides.length;

    slides[index].classList.add("active");
}

function changerSlide(direction) {
    afficherSlide(index + direction);
}

// Défilement automatique
setInterval(function() {
    changerSlide(1);
}, 3000);


//effect cursor
 const cursor = document.querySelector(".cursor");

    function getRandomColor() {
      const colors = [ "rgb(255, 174, 0)",  "#0a72b5", "#059800"];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    document.addEventListener("mousemove", (e) => {
      const trail = cursor.cloneNode();
      document.body.appendChild(trail);
      trail.style.left = e.pageX + "px";
      trail.style.top = e.pageY + "px";
      const color = getRandomColor();
      trail.style.background = color;
      trail.style.boxShadow = `0 0 10px ${color}, 0 0 25px ${color}`;
      
      setTimeout(() => {
        trail.remove();
      }, 300); // Timing should match animation duration
    });
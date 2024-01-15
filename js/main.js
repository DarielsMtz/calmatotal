document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll(".enlace");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (event) {
      event.preventDefault();

      const href = this.getAttribute("href");

      // Aplicar transición de opacidad al salir de la página actual
      document.querySelector(".contenido").style.opacity = 0;

      // Esperar a que termine la animación antes de redirigir
      setTimeout(function () {
        window.location.href = href;
      }, 500); // Ajusta el tiempo de espera según la duración de la transición
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var verMasLink = document.getElementById("verMasLink");

  verMasLink.addEventListener("click", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Desplaza el documento al inicio (0 en x, 0 en y) durante 800 milisegundos
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});

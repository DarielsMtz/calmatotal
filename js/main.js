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

document
  .getElementById("vermas-section")
  .addEventListener("click", function () {
    document.getElementById("hiddenContent").style.transform = "translateY(0)";
    document.getElementById("vermas-section").style.transform =
      "translateY(-100%)";
  });

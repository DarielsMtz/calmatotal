// -------------------------------------------------------------------
// Establecer un retraso de 5 segundos antes de iniciar la cuenta regresiva
setTimeout(function () {
  // Establecer el tiempo inicial en segundos
  let tiempoRestante = 5 * 60;

  // Función para actualizar el tiempo en el elemento h1
  function actualizarTiempo() {
    // Calcular minutos y segundos restantes
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    // Formatear los minutos y segundos con ceros a la izquierda si es necesario
    const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

    // Actualizar el contenido del elemento h1
    document.getElementById(
      "time"
    ).textContent = `${minutosFormateados}:${segundosFormateados} min`;

    // Disminuir el tiempo restante
    tiempoRestante--;
  }

  // Llamar a la función inicialmente para mostrar el tiempo inicial
  actualizarTiempo();

  // Establecer un intervalo para llamar a la función cada segundo
  setInterval(actualizarTiempo, 1000);
}, 3000);

// -----------------------------------------------------------------------
// Establecer un retraso de 3 segundos antes de iniciar la cuenta regresiva
// 10min de tiempo
setTimeout(function () {
  // Establecer el tiempo inicial en segundos
  let tiempoRestante = 10 * 60;

  // Función para actualizar el tiempo en el elemento h1
  function actualizarTiempo() {
    // Calcular minutos y segundos restantes
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    // Formatear los minutos y segundos con ceros a la izquierda si es necesario
    const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

    // Actualizar el contenido del elemento h1
    document.getElementById(
      "time02"
    ).textContent = `${minutosFormateados}:${segundosFormateados} min`;

    // Disminuir el tiempo restante
    tiempoRestante--;

    // Detener la cuenta regresiva cuando el tiempo llegue a cero
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
    }
  }

  // Llamar a la función inicialmente para mostrar el tiempo inicial
  actualizarTiempo();

  // Establecer un intervalo para llamar a la función cada segundo
  const intervalo = setInterval(actualizarTiempo, 1000);
}, 3000);

// -----------------------------------------------------------------------
// Establecer un retraso de 3 segundos antes de iniciar la cuenta regresiva
// 15 min de tiempo
setTimeout(function () {
  // Establecer el tiempo inicial en segundos
  let tiempoRestante = 15 * 60;

  // Función para actualizar el tiempo en el elemento h1
  function actualizarTiempo() {
    // Calcular minutos y segundos restantes
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;

    // Formatear los minutos y segundos con ceros a la izquierda si es necesario
    const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
    const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

    // Actualizar el contenido del elemento h1
    document.getElementById(
      "time03"
    ).textContent = `${minutosFormateados}:${segundosFormateados} min`;

    // Disminuir el tiempo restante
    tiempoRestante--;

    // Detener la cuenta regresiva cuando el tiempo llegue a cero
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
    }
  }

  // Llamar a la función inicialmente para mostrar el tiempo inicial
  actualizarTiempo();

  // Establecer un intervalo para llamar a la función cada segundo
  const intervalo = setInterval(actualizarTiempo, 1000);
}, 3000);

// -----------------------------------------------------------------------
// Cuenta atras de 3seg
setTimeout(function () {
  // Establecer el tiempo inicial en segundos
  let tiempoRestante = 3; // 3 segundos

  // Función para actualizar el tiempo en el elemento div
  function actualizarTiempo() {
    // Actualizar el contenido del elemento div
    document.getElementById("cuenta_atras").textContent = tiempoRestante;

    // Disminuir el tiempo restante
    tiempoRestante--;

    // Detener la cuenta regresiva cuando el tiempo llega a cero
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      document.getElementById("cuenta_atras").textContent = " ";
    }
  }
  // Llamar a la función inicialmente para mostrar el tiempo inicial
  actualizarTiempo();

  // Establecer un intervalo para llamar a la función cada segundo
  const intervalo = setInterval(actualizarTiempo, 1000);
}, 1000);

// ------------------------------------------------------------
// Evento para detener todo
document
  .getElementById("stopButton")
  .addEventListener("click", function (event) {
    // Evitar el comportamiento predeterminado del clic
    event.preventDefault();

    // Obtener todas las animaciones en la página
    const animaciones = document.getAnimations();

    // Detener cada animación
    animaciones.forEach(function (animacion) {
      animacion.pause();
    });

    window.location.href = "../inicio.html";
  });

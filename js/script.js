// Establecer un retraso de 5 segundos antes de iniciar la cuenta regresiva
setTimeout(function () {
  // Establecer el tiempo inicial en segundos
  let tiempoRestante = 5 * 60; // 5 minutos en segundos

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

    // Detener la cuenta regresiva cuando el tiempo llega a cero
    if (tiempoRestante < 0) {
      clearInterval(intervalo);
      document.getElementById("time").textContent = "Tiempo agotado";
    }
  }

  // Llamar a la función inicialmente para mostrar el tiempo inicial
  actualizarTiempo();

  // Establecer un intervalo para llamar a la función cada segundo
  const intervalo = setInterval(actualizarTiempo, 1000);
}, 5000); // 5000 milisegundos = 5 segundos

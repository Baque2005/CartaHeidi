document.addEventListener("DOMContentLoaded", () => {
  const musica = document.getElementById('musica');
  const envelope = document.getElementById('envelope');
  const nightSky = document.querySelector('.night');
  const corazonesContenedor = document.getElementById('corazones-contenedor');
  const flowersBg = document.querySelector('.flowers-bg');
  const cartaModalBg = document.getElementById('cartaModalBg');
  const cartaModal = document.getElementById('cartaModal');

  // Para rellenar la carta modal con el mismo contenido
  const tituloCarta = localStorage.getItem("tituloCarta") || "Para tí mi chiquito 🌌";
  const mensajeCarta = localStorage.getItem("mensajeCarta") || "Chiquito sé que desde pequeños hemos tenido grandes aventuras crecimos físicamente<br> pero aún desde el fondo de mi corazón seguimos siendo los niños chiquitos esos niños <br>que por cualquier cosa reíamos llorábamos pero nos amábamos.<br><br>Solo quiero que sepas que te quiero un montón y espero te recuperes pronto tal vez lo tomes como humor<br> pero es para animarte y decirte lo valioso que eres te quiero mucho";
  const firmaCarta = localStorage.getItem("firmaCarta") || "Con amor eterno,<br><strong>Tu tía Heidy </strong>";
const cerrarCartaBtn = document.getElementById('cerrarCartaBtn');
cerrarCartaBtn.addEventListener('click', () => {
  cerrarSobre();
});
  document.getElementById("tituloCarta").innerHTML = tituloCarta;
  document.getElementById("mensajeCarta").innerHTML = mensajeCarta;
  document.getElementById("firmaCarta").innerHTML = firmaCarta;
  document.getElementById("tituloCartaFront").innerHTML = tituloCarta;

  document.getElementById("tituloCartaModal").innerHTML = tituloCarta;
  document.getElementById("mensajeCartaModal").innerHTML = mensajeCarta;
  document.getElementById("firmaCartaModal").innerHTML = firmaCarta;

  let corazonesInterval;
  let musicaIniciada = false;
  let abierta = false;

  envelope.addEventListener('click', () => {
    if (!abierta) {
      abrirSobre();
    }
  });

  cartaModalBg.addEventListener('click', (e) => {
    // Solo cerrar si se hace click fuera de la carta
    if (e.target === cartaModalBg) {
      cerrarSobre();
    }
  });

  function abrirSobre() {
    envelope.classList.add('salida');
    flowersBg.style.opacity = 1;
    cartaModalBg.classList.add('activo');
    abierta = true;

    if (!musicaIniciada) {
      musica.volume = 0.5;
      musica.play();
      musicaIniciada = true;
    }

    setTimeout(() => {
      crearEstrellasFugaces();
      if (!corazonesInterval) {
        corazonesInterval = setInterval(crearCorazones, 500);
      }
    }, 1000);
  }

  function cerrarSobre() {
    envelope.classList.remove('salida');
    flowersBg.style.opacity = 0;
    cartaModalBg.classList.remove('activo');
    abierta = false;

    nightSky.innerHTML = '';
    corazonesContenedor.innerHTML = '';
    clearInterval(corazonesInterval);
    corazonesInterval = null;
  }

  function crearEstrellasFugaces() {
    nightSky.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const star = document.createElement('div');
      star.classList.add('shooting_star');
      star.style.top = Math.random() * 100 + '%';
      star.style.left = (Math.random() * 100 - 50) + '%';
      star.style.animationDelay = Math.random() * 5 + 's';
      star.style.animationDuration = Math.random() * 2 + 3 + 's';
      nightSky.appendChild(star);
    }
  }

  function crearCorazones() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.innerHTML = '❤';

    const esquina = Math.floor(Math.random() * 4);
    const offset = Math.random() * 20 + 10;

    switch (esquina) {
      case 0:
        corazon.style.top = `${offset}px`;
        corazon.style.left = `${offset}px`;
        break;
      case 1:
        corazon.style.top = `${offset}px`;
        corazon.style.right = `${offset}px`;
        break;
      case 2:
        corazon.style.bottom = `${offset}px`;
        corazon.style.left = `${offset}px`;
        break;
      case 3:
        corazon.style.bottom = `${offset}px`;
        corazon.style.right = `${offset}px`;
        break;
    }

    corazonesContenedor.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 5000);
  }
});
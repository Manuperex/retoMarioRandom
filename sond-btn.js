const cargarSonidoBtn = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
// El sonido que podemos reproducir o pausar
const sonido = cargarSonidoBtn("musica/btn.mp3");

function marioRandom() {
    console.log("entro");
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay >
        <source src="musica/mrioRandom.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);
    // document.removeEventListener('click', playSound);
};

function soundScreen() {
    console.log("ready");
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
      <audio autoplay loop >
        <source src="musica/fondo.mp3" type="audio/mpeg">
      </audio>
    `;
    document.body.appendChild(element);
    // document.removeEventListener('click', playSound);
};
const boton = document.querySelector('#boton-vela');
const ofrenda = document.querySelector('#ofrenda');
const dedicatoria = document.querySelector('#dedicatoria');

// Forzamos el estado activo desde el primer segundo
if(ofrenda) ofrenda.classList.add('encendida');
if(dedicatoria) dedicatoria.classList.add('visible');

boton.addEventListener('click', () => {
  const encendida = ofrenda.classList.toggle('encendida');
  dedicatoria.classList.toggle('visible', encendida);
  boton.setAttribute('aria-pressed', encendida);
  boton.textContent = encendida ? 'Apagar la vela' : 'Encender la vela';
});



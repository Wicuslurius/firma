const form = document.getElementById('formulario');
const card = document.getElementById('card');
const descargar = document.getElementById('descargar');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  // Coloca los textos en la card
  document.getElementById('t1').textContent = document.getElementById('texto1').value;
  document.getElementById('t2').textContent = document.getElementById('texto2').value;
  document.getElementById('t3').textContent = document.getElementById('texto3').value;
  document.getElementById('t4').textContent = document.getElementById('texto4').value;
  // Espera a que el logo se cargue
  const logo = document.getElementById("logo");
  if (!logo.complete) {
    await new Promise((resolve) => { logo.onload = resolve });
  }
  // Genera la imagen
  html2canvas(card, {
    width: 800,
    height: 300,
    useCORS: true,
    backgroundColor: null
  }).then(canvas => {
  // Muestra el canvas generado (opcional)
  document.getElementById('preview').innerHTML = '';
  document.getElementById('preview').appendChild(canvas);
  // Crea el enlace de descarga
  descargar.href = canvas.toDataURL("image/png");
  descargar.style.display = 'inline-block';
  });
});
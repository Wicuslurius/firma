document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    const img_input = document.getElementById('image');

    // Asignar los valores a la card
    const img = document.getElementById('img');
    img_input.addEventListener('change', function () {
      const file = img_input.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          img.src = e.target.result; // Asigna la URL base64 al src del <img>
          img.style.display = 'block'; // Muestra la imagen
        };

        reader.readAsDataURL(file); // Convierte el archivo en una URL base64
      }
    });
    document.getElementById('nombre-text').textContent = nombre;
    document.getElementById('mensaje-text').textContent = mensaje;

    // Mostrar la card
    document.getElementById('card').style.display = 'block';

    // Mostrar el botón para descargar la imagen
    document.getElementById('download-btn').style.display = 'inline-block';

    // Crear la imagen de la card
    document.getElementById('download-btn').addEventListener('click', function () {
    html2canvas(document.getElementById('card')).then(function (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg', 1.0);
        link.download = 'card.jpg';
        link.click();
    });
  });
});

const img_input = document.getElementById('image');
const img = document.getElementById('img');
let imgLoaded = false;

// Manejar carga de imagen al seleccionarla
img_input.addEventListener('change', function () {
    const file = img_input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            img.onload = () => {
                imgLoaded = true; // Marca como cargada
            };
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const cargo = document.getElementById('cargo').value;
    const correo = document.getElementById('correo').value;
    const url = document.getElementById('url').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;

    document.getElementById('nombre-text').textContent = nombre;
    document.getElementById('cargo-text').textContent = cargo;
    document.getElementById('correo-text').textContent = correo;
    document.getElementById('url-text').textContent = url;
    document.getElementById('telefono-text').textContent = telefono;
    document.getElementById('direccion-text').textContent = direccion;

    document.getElementById('card').style.display = 'block';
    document.getElementById('download-btn').style.display = 'inline-block';
});

document.getElementById('download-btn').addEventListener('click', function () {
    // Esperar hasta que la imagen esté completamente cargada
    if (!imgLoaded) {
        alert("La imagen aún se está cargando. Por favor espera unos segundos.");
        return;
    }

    html2canvas(document.getElementById('card'), {
        useCORS: true
    }).then(function (canvas) {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpg', 1.0);
        link.download = 'card.jpg';
        link.click();
    });
});

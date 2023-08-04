//Mostrando las propiedades al hacer click en "ver más información"
function renderPropiedad() {
  let propiedad = JSON.parse(localStorage.getItem("propiedad"));
  let contenido = `
      <div class="container mb-5">
        <div class="row">
          <div class="col-8">
            <img src="./${propiedad.imagen}" class="card-img-top" alt="propiedades disponibles" style="width: 400px; height: 400px; display: block; margin: 0 auto;">
          </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <div class="text-center costum_border">
            <h3>${propiedad.precio}</h3>
            <p>${propiedad.propiedad.toUpperCase()} EN ${propiedad.estado.toUpperCase()}</p>
            <p><i class="bi bi-rulers"> <b>${propiedad.superficie}</b> M² totales</i></p>
            <p><i class="bi bi-grid-3x2"> <b>${propiedad.ambientes}</b> ambientes</i></p>
            <p><i class="bi bi-geo-alt">Ubicada en: <b>${propiedad.ubicacion}</b></i></p>
            <p class= "my-2">
            <button class= "btn botonAgregar" onclick = "agregarPropiedad(${propiedad.codigo}); mostrarGuardado()">Agregar a favoritos</button>
            </p>
          </div>
        </div>
      </div>
    `;

  document.getElementById("propiedad").innerHTML = contenido;
}
renderPropiedad();
renderBotonFavs();

const mostrarGuardado = () => {
  Toastify({
    text: "Se ha guardado la propiedad en favoritos!",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right",
    style: {
      background: "#E55807",
    },
  }).showToast();
}
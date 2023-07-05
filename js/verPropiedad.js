//Mostrando las propiedades al hacer click en "ver más información"
function renderPropiedad(){
    let propiedad = JSON.parse(localStorage.getItem("propiedad"));
    let contenido = `<h1> ${propiedad.precio}</h1>
    <p>${propiedad.propiedad} en ${propiedad.estado}</p>
    <p><i class="bi bi-rulers"><b>${propiedad.superficie}</b>
    M² totales</i></p>
    <p> <i class="bi bi-grid-3x2"><b>${propiedad.ambientes}</b> ambientes</i></p>
    <p> <i class="bi bi-geo-alt"><b>Ubicada en: <b>${propiedad.ubicacion}</b></i></p>
    `
    document.getElementById("propiedad").innerHTML = contenido;
}
renderPropiedad();
//Guardando las propidades en el Storage
function guardarPropiedadesLS() {
    localStorage.setItem("propiedades", JSON.stringify(propiedades));
}
function cargarPropiedadesLS() {
    return JSON.parse(localStorage.getItem("propiedades"));
}
// LS donde guardo la propiedad favorita seleccionada
function guardarFavoritosLS(favorito) {
    localStorage.setItem("favoritos", JSON.stringify(favorito));
}
function cargarFavoritosLS() {
    return JSON.parse(localStorage.getItem("favoritos")) || [];
}
function estaEnFavs(codigo) {
    const favoritos = cargarFavoritosLS();
    return favoritos.some(item => item.codigo === codigo)
}
function agregarPropiedad(codigo) {
    const favoritos = cargarFavoritosLS();
    const propiedades = cargarPropiedadesLS();
    if (estaEnFavs(codigo)) {
        let pos = favoritos.findIndex(item => item.codigo === codigo);
        console.log(pos);
        favoritos[pos].cantidad === 1;
    } else {
        const propiedad = propiedades.find(item => item.codigo === codigo);
        favoritos.push(propiedad);
    }

    guardarFavoritosLS(favoritos);
    renderBotonFavs();
}
function eliminarPropiedad(codigo) {
    const favoritos = cargarFavoritosLS();
    const nuevoFavorito = favoritos.filter(item => item.codigo != codigo);
    guardarFavoritosLS(nuevoFavorito);
    renderBotonFavs();
    renderPropiedades();
}
function cantidadTotalPropiedades() {
    const favoritos = cargarFavoritosLS();
    return favoritos.length;
}
function renderBotonFavs() {
    let botonFavs = document.getElementById("favs");
    let contenido = `<button type="button" class="btn btn-primary position-relative">
        <img class="corazon_img" src="../imagenes/heart.svg" alt="corazón">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${cantidadTotalPropiedades()}  
        </span>
    </button>`;
    botonFavs.innerHTML = contenido;
}
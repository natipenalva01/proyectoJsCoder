//Guardando las propidades en el Storage
function guardarPropiedadesLS(data) {
    localStorage.setItem("propiedades", JSON.stringify(data));
}
function cargarPropiedadesLS() {
    const propiedades = JSON.parse(localStorage.getItem("propiedades")) || [];
    return propiedades;
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
function cantidadTotalPropiedades() {
    const favoritos = cargarFavoritosLS();
    return favoritos.length;
}
function renderBotonFavs() {
    let botonFavs = document.getElementById("favs");
    let contenido = `<button type="button" class="btn btn-primary position-relative">
    <img src="../imagenes/bookmark-heart.svg" class="corazon_img" alt="corazon"> 
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            ${cantidadTotalPropiedades()}  
        </span>
    </button>`;
    botonFavs.innerHTML = contenido;
}
renderBotonFavs();
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
    renderBotonFavs();
    guardarFavoritosLS(favoritos);
}
function eliminarPropiedad(codigo) {
    const favoritos = cargarFavoritosLS();
    const nuevoFavorito = favoritos.filter(item => item.codigo != codigo);
    guardarFavoritosLS(nuevoFavorito);
    renderBotonFavs();
    renderPropiedades();
}

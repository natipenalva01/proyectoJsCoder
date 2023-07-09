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
function cantidadTotalPropiedades(){
    const favoritos = cargarFavoritosLS();
    // return favoritos.reduce((acum, item)=> acum += item, 0);
    return favoritos.length;
  }
function renderBotonFavs(){
   let  botonFavs = document.getElementById("favs");
   let contenido = `<button type="button" class="btn btn-primary position-relative">
   <img class="corazon_img" src="./imagenes/heart.svg" alt="corazón">
   <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   ${cantidadTotalPropiedades()}  
    </span>
 </button>`;
 botonFavs.innerHTML= contenido;
}
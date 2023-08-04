// Creando mi render de las propiedades favoritas/guardadas
function renderPropiedades() {
    let propiedadesDisponibles = cargarFavoritosLS();
    let contenido = "";

    if (cantidadTotalPropiedades() > 0) {
        contenido += `<table class = "table">`;
        propiedadesDisponibles.forEach(propiedad => {
            contenido += ` <tr>
            <td><img src="${propiedad.imagen}" alt="propiedades disponibles" width = 90px height = 90px></td>
            <td><h5 class="card-title"><b>${propiedad.precio}</b></h5></td>
            <td><p class="card-text text-muted"> Propiedad en ${(propiedad.estado).toLowerCase()}, ubicada en ${propiedad.ubicacion}</p></td>
            <td> <img src="./imagenes/trash3.svg" class="trash"alt="Eliminar propiedad" width = "24" onclick="eliminarPropiedad(${propiedad.codigo})"></td>
            </tr>
            `;
        });
        contenido += `</table>`
    } else {
        contenido += `<div class="alert alert-danger text-center" role="alert">
        No se encontraron propiedades guardadas!
        </div>`
    }

    document.getElementById("propiedades").innerHTML = contenido;
};
renderPropiedades();
renderBotonFavs();

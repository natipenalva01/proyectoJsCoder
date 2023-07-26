fetch("./js/propiedades.json")
    .then(response => response.json())
    .then(responseData => {
        data = responseData;
        guardarPropiedadesLS(data);
        renderPropiedades(data);
        renderBotonFavs();
    })
//Creando mis cards de propiedades
function renderPropiedades(data) {
    let contenido = "";
    data.forEach(propiedad => {
        contenido +=
        `<div class = "col-md-4 mb-3">
            <div class= "card text-center" style="width: 18rem;">
                <img src="${propiedad.imagen}" class="card-img-top" alt="propiedades disponibles" width="300px" height="200px">
            <div class="card-body">
            <h5 class="card-title"><b>${propiedad.precio}</b></h5>
            <p class="card-text text-muted"> Propiedad en ${(propiedad.estado).toLowerCase()}, ubicada en ${propiedad.ubicacion}</p> 
            <p class="button_personal" onClick="verPropiedad(${propiedad.codigo}, data)">Ver más información</p>
            </div>
            </div>
        </div>`;
    });
    document.getElementById("propiedades").innerHTML = contenido;
};


//Función para encontrar la propiedad que quiero ver
function verPropiedad(codigo) {
    const propiedadesDisponibles = cargarPropiedadesLS(); 
    if (propiedadesDisponibles.length > 0) {
        let propiedad = propiedadesDisponibles.find(item => item.codigo === codigo);
        localStorage.setItem("propiedad", JSON.stringify(propiedad));
        location.href = "../ver-propiedad.html";
    } else {
        console.log("No hay propiedades disponibles.");
    }
}

//Búsqueda de propiedades
function buscarPropiedades() {
    const estado = document.getElementById("estado");
    const propiedad = document.getElementById("propiedad");
    const ubicacion = document.getElementById("ubicacion");
    const valor = document.getElementById("valor");

    fetch("./js/propiedades.json")
        .then(response => response.json())
        .then(data => {
            const operacionSeleccionada = estado.value;
            const tipoPropiedadSeleccionada = propiedad.value;
            const ubicacionSeleccionada = ubicacion.value;
            const valorSeleccionado = valor.value;
            const propidadesFiltradas = data.filter(propiedad => {
                let cumpleFiltro = true;
                if (operacionSeleccionada !== "Operación") {
                    cumpleFiltro = cumpleFiltro && propiedad.estado === operacionSeleccionada;
                }
                if (tipoPropiedadSeleccionada !== "Tipo propiedad") {
                    cumpleFiltro = cumpleFiltro && propiedad.propiedad === tipoPropiedadSeleccionada;
                }
                if (ubicacionSeleccionada !== "Ubicación") {
                    cumpleFiltro = cumpleFiltro && (propiedad.localidad.includes(ubicacionSeleccionada) || propiedad.ubicacion.includes(ubicacionSeleccionada));
                    console.log(ubicacionSeleccionada);
                }
                if (valorSeleccionado !== "Valor") {
                    cumpleFiltro = cumpleFiltro && propiedad.precio.includes(valorSeleccionado.trim());
                }
                return cumpleFiltro;
            });

            if (propidadesFiltradas.length > 0) {
                renderPropiedades(propidadesFiltradas);
            } else {
                renderPropiedades(data);
            }
        });
}
buscarPropiedades();
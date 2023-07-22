
const propiedades = [
    {ubicacion: "San Jorge", ambientes: 4, propiedad: "Casa", precio: "3.000 USD", superficie: 300, estado: "Alquiler", imagen: "./imagenes/casa2_a.jpg", codigo: 1, localidad: "Campana" },
    {ubicacion: "Campana Centro", ambientes: 3, propiedad: "Casa", precio: "700 USD", superficie: 197.6, estado: "Alquiler", imagen: "./imagenes/casa5_a.jpg", codigo: 2, localidad: "Campana" },
    {ubicacion: "Loma Verde", ambientes: 2, propiedad: "Departamento", precio: "450 USD", superficie: 46, estado: "Alquiler", imagen: "./imagenes/dep1_g.jpg", codigo:  3, localidad:"Escobar" },
    {ubicacion: "Belén de Escobar", ambientes: 6, propiedad: "Departamento", precio: "189.420.000 ARS", superficie: 257, estado: "Venta", imagen: "./imagenes/dep2_a.jpg", codigo:  4, localidad:"Escobar" },
    {ubicacion: "Cardales Village", ambientes: 5, propiedad: "Casa", precio: "55.000 USD", superficie:  156, estado: "Venta", imagen: "./imagenes/casa1_a.jpg", codigo:  5, localidad:"Campana" },
    {ubicacion: "El Bosque", ambientes:4, propiedad: "Casa", precio: "240.000 USD", superficie: 152, estado: "Venta", imagen: "./imagenes/casa3_a.jpg", codigo:  6, localidad:"Campana" },
    {ubicacion: "Alto Los Cardales", ambientes: 6, propiedad: "Casa", precio: "400.000 USD", superficie: 300, estado: "Venta", imagen: "./imagenes/casa4_a.jpg", codigo:  7, localidad:"Campana" },
    {ubicacion: "El Cardal II", ambientes: 4, propiedad: "Departamento", precio: "92.988.000 ARS", superficie: 99, estado: "Venta", imagen: "./imagenes/dep3_a.jpg", codigo:  8, localidad:"Campana" },
    {ubicacion: "Haras Santa María", ambientes: 6, propiedad: "Casa", precio: "220.000 ARS", superficie: 305, estado: "Alquiler", imagen: "./imagenes/dep4_a.jpg", codigo: 9, localidad:"Escobar" },
]
guardarPropiedadesLS();
//Creando mis cards de propiedades
function renderPropiedades() {
    let propiedadesDisponibles = cargarPropiedadesLS();
    let contenido = "";
    propiedadesDisponibles.forEach(propiedad => {
        contenido += `<div class = "col-md-4 mb-3">
          <div class= "card text-center" style="width: 18rem;">
            <img src="${propiedad.imagen}" class="card-img-top" alt="propiedades disponibles" width = 300px height = 200px>
          <div class="card-body">
            <h5 class="card-title"><b>${propiedad.precio}</b></h5>
            <p class="card-text text-muted"> Propiedad en ${(propiedad.estado).toLowerCase()}, ubicada en ${propiedad.ubicacion}</p> 
            <p class ="button_personal" onClick = "verPropiedad(${propiedad.codigo})"> Ver más información</p> 
          </div>
          </div>
          </div>`;
    });
    document.getElementById("propiedades").innerHTML = contenido;
};
renderPropiedades();
renderBotonFavs();
//Función para encontrar la propiedad que quiero ver
function verPropiedad(codigo) {
    let propiedadesDisponibles = cargarPropiedadesLS();
    let propiedad = propiedadesDisponibles.find(item => item.codigo == codigo);
    localStorage.setItem("propiedad", JSON.stringify(propiedad));
    location.href = "../ver-propiedad.html";
}

guardarPropiedadesLS();
//Búsqueda de propiedades
const estado = document.getElementById("estado");
const propiedad = document.getElementById("propiedad");
const ubicacion = document.getElementById("ubicacion");
const valor = document.getElementById("valor");

function buscarPropiedades() {
    const operacionSeleccionada = estado.value;
    const tipoPropiedadSeleccionada = propiedad.value;
    const ubicacionSeleccionada = ubicacion.value;
    const valorSeleccionado = valor.value;
    let contenido = "";
    const propidadesFiltradas = propiedades.filter(propiedad => {
        let cumpleFiltro = true;
        if (operacionSeleccionada !== "Operación") {
            cumpleFiltro = cumpleFiltro && propiedad.estado === operacionSeleccionada;
        }
        if (tipoPropiedadSeleccionada !== "Tipo propiedad") {
            cumpleFiltro = cumpleFiltro && propiedad.propiedad === tipoPropiedadSeleccionada;
        }
        if (ubicacionSeleccionada !== "Ubicación") {
            cumpleFiltro = cumpleFiltro && (propiedad.localidad.includes(ubicacionSeleccionada)|| propiedad.ubicacion.includes(ubicacionSeleccionada));
        console.log(ubicacionSeleccionada);
        }
        if (valorSeleccionado !== "Valor") {
            cumpleFiltro = cumpleFiltro && propiedad.precio.includes(valorSeleccionado.trim());
        }
        return cumpleFiltro;
    });
    if (propidadesFiltradas.length > 0) {
        propidadesFiltradas.forEach(propiedad => {
            contenido += `<div class = "col-md-4 mb-3">
              <div class= "card text-center" style="width: 18rem;">
                <img src="${propiedad.imagen}" class="card-img-top" alt="propiedades disponibles" width = 300px height = 200px>
              <div class="card-body">
                <h5 class="card-title"><b>${propiedad.precio}</b></h5>
                <p class="card-text text-muted"> Propiedad en ${(propiedad.estado).toLowerCase()}, ubicada en ${propiedad.ubicacion}</p> 
                <p class ="button_personal" onClick = "verPropiedad(${propiedad.codigo})"> Ver más información</p> 
              </div>
              </div>
              </div>`;
        });
        document.getElementById("propiedades").innerHTML = contenido;
    } else {
        renderPropiedades();
    }
}
buscarPropiedades();
//Creo una Clase Propiedad
class Propiedad {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2, estadoPropiedad, imagenPropiedad, codigoAviso, localidadDistintiva) {
        this.ubicacion = ubicacionPropiedad;
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad;
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.estado = estadoPropiedad;
        this.imagen = imagenPropiedad;
        this.codigo = codigoAviso;
        this.localidad = localidadDistintiva;
    }
}
const propiedad1 = new Propiedad("San Jorge", 4, "Casa", "3.000 USD", 300, "Alquiler", "./imagenes/casa2_a.jpg", 1, "Campana");
const propiedad2 = new Propiedad("Campana Centro", 3, "Casa", "700 USD", 197.6, "Alquiler", "./imagenes/casa5_a.jpg", 2, "Campana");
const propiedad3 = new Propiedad("Loma Verde", 2, "Departamento", "450 USD", 46, "Alquiler", "./imagenes/dep1_g.jpg", 3, "Escobar");
const propiedad4 = new Propiedad("Belén de Escobar", 6, "Departamento", "189.420.000", 257, "Venta", "./imagenes/dep2_a.jpg", 4, "Escobar");
const propiedad5 = new Propiedad("Cardales Village", 5, "Casa", "55.000 USD", 156, "Venta", "./imagenes/casa1_a.jpg", 5, "Campana");
const propiedad6 = new Propiedad("El Bosque", 4, "Casa", "240.000 USD", 152, "Venta", "./imagenes/casa3_a.jpg", 6, "Campana");
const propiedad7 = new Propiedad("Alto Los Cardales", 6, "Casa", "400.000 ARS", "305", "Venta", "./imagenes/casa4_a.jpg", 7, "Campana");
const propiedad8 = new Propiedad("El Cardal II", 4, "Departamento", "92.988.000 ARS", "88", "Venta", "./imagenes/dep3_a.jpg", 8, "Campana");
const propiedad9 = new Propiedad("Haras Santa María", 6, "Casa", "400.000 ARS", "305", "Alquiler", "./imagenes/dep4_a.jpg", 9, "Escobar");
const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6, propiedad7, propiedad8, propiedad9];

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
const operacion = document.getElementById("operacion");
const tipoPropiedad = document.getElementById("tipoPropiedad");
const ubicacion = document.getElementById("ubicacion");
const valor = document.getElementById("valor");

function buscarPropiedades() {
    const operacionSeleccionada = operacion.value;
    const tipoPropiedadSeleccionada = tipoPropiedad.value;
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
            cumpleFiltro = cumpleFiltro && propiedad.localidad.includes(ubicacionSeleccionada.trim());
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
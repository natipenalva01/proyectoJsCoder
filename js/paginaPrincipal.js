//Creo una Clase Propiedad
class Propiedad {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2, estadoPropiedad, imagenPropiedad, codigoAviso) {
        this.ubicacion = ubicacionPropiedad;
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad;
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.estado = estadoPropiedad;
        this.imagen = imagenPropiedad;
        this.codigo = codigoAviso;
    }
}
const propiedad1 = new Propiedad("El Bosque", 4, "Casa", "3.000 USD", 300, "alquiler", "./imagenes/casa2_a.jpg", 1);
const propiedad2 = new Propiedad("Campana Centro", 3, "Casa", "700 USD", 197.6, "alquiler", "./imagenes/casa5_a.jpg", 2);
const propiedad3 = new Propiedad("Escobar Centro", 2, "Departamento", "450 USD", 46, "alquiler", "./imagenes/dep1_g.jpg", 3);
const propiedad4 = new Propiedad("Belén de Escobar", 6, "Departamento", "189.420.000", 257, "venta", "./imagenes/dep2_a.jpg", 4);
const propiedad5 = new Propiedad("Cardales Village", 5, "Casa", "55.000 USD", 156, "venta", "./imagenes/casa1_a.jpg", 5);
const propiedad6 = new Propiedad("El Bosque", 4, "Casa", "240.000 USD", 152, "venta", "./imagenes/casa3_a.jpg", 6);
const propiedad7 = new Propiedad("Alto Los Cardales",6,"Casa", "400.000 ARS", "305", "venta","./imagenes/casa4_a.jpg", 7);
const propiedad8 = new Propiedad("Campana Centro",4,"Departamento", "92.988.000 ARS", "88", "venta","./imagenes/dep3_a.jpg", 8);
const propiedad9 = new Propiedad("Alto Los Cardales",6,"Casa", "400.000 ARS", "305", "alquiler","./imagenes/dep4_a.jpg", 9);
const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6, propiedad7, propiedad8, propiedad9 ];

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
            <p class="card-text text-muted"> Propiedad en ${propiedad.estado}, ubicada en ${propiedad.ubicacion}</p> 
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
    location.href = "ver-propiedad.html";
}

guardarPropiedadesLS();
//Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault();
    const operacion = document.getElementById("operacion").value;
    const tipoPropiedad = document.getElementById("tipoPropiedad").value;
    const ubicacion = document.getElementById("ubicacion").value;
    const valor = document.getElementById("valor").value;
    let mensajeErrorOperacion = document.getElementById("mensajeErrorOperacion");
    let mensajeErrorTipoPropiedad = document.getElementById("mensajeErrorTipoPropiedad");
    let mensajeErrorUbicacion = document.getElementById("mensajeErrorUbicacion");
    let mensajeErrorValor = document.getElementById("mensajeErrorValor");
    mensajeErrorOperacion.innerHTML = "";
    mensajeErrorTipoPropiedad.innerHTML = "";
    mensajeErrorUbicacion.innerHTML = "";
    mensajeErrorValor.innerHTML = "";
    //Valido cada campo de forma individual
    if (operacion === "operacion") {
        mensajeErrorOperacion.innerHTML = "Por favor, selecciona una operación";
        return false; //Detiene el programa en esta parte
    } else {
        mensajeErrorOperacion.innerHTML = "";
    }
    if (tipoPropiedad === "tipoPropiedad") {
        mensajeErrorTipoPropiedad.innerHTML = "Por favor, selecciona una propiedad";
        return false;
    } else {
        mensajeErrorTipoPropiedad.innerHTML = "";
    }
    if (ubicacion === "ubicacion") {
        mensajeErrorUbicacion.innerHTML = "Por favor, selecciona una ubicación";
        return false;
    } else {
        mensajeErrorUbicacion.innerHTML = "";
    }
    if (valor === "valor") {
        mensajeErrorValor.innerHTML = "Por favor, selecciona un valor";
        return false;
    } else {
        mensajeErrorValor.innerHTML = "";
    }
    document.getElementById("formulario").submit(); // Envío el formulario
}
//Hago referencia al formulario y al botón
const formulario = document.querySelector("form");
const botonFormulario = document.getElementById("botonForm");
//Agrego un addEventListener al botón
botonFormulario.addEventListener("click", validarFormulario); 

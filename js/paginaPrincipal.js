//Creo una Clase Propiedad
class Propiedad {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2, estadoPropiedad, imagenPropiedad, codigoAviso) {
        this.ubicacion = ubicacionPropiedad.toLowerCase();
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad.toLowerCase();
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.estado = estadoPropiedad.toLowerCase();
        this.imagen = imagenPropiedad;
        this.codigo = codigoAviso;
    }
}
const propiedad1 = new Propiedad("Zona costanera", 4, "Casa", 1400, 105.8, "venta", "./imagenes/casa2_a.jpg", 1);
const propiedad2 = new Propiedad("Zona céntrica", 3, "Casa", 700, 197.6, "alquiler", "./imagenes/casa5_a.jpg", 2);
const propiedad3 = new Propiedad("Zona céntrica", 2, "Departamento", 450, 46, "alquiler", "./imagenes/dep1_g.jpg", 3);
const propiedad4 = new Propiedad("Barrio Urquiza", 3, "Departamento", 850, 92, "venta", "./imagenes/dep2_a.jpg", 4);
const propiedad5 = new Propiedad("Zona céntrica", 5, "Casa", 55000, 156, "venta", "./imagenes/casa1_a.jpg", 5);
const propiedad6 = new Propiedad("Zona costanera", 4, "Casa", 240000, 152, "venta", "./imagenes/casa3_a.jpg", 6);

const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6];

//Guardando las propidades en el Storage
function guardarPropiedadesLS() {
    localStorage.setItem("propiedades", JSON.stringify(propiedades));
}
function cargarPropiedadesLS() {
    return JSON.parse(localStorage.getItem("propiedades"));
}
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
            <h5 class="card-title"><b>${propiedad.precio} USD</b></h5>
            <p class="card-text"> Propiedad en ${propiedad.estado}, ubicada en ${propiedad.ubicacion}</p> 
            <p class ="button" onClick = "verPropiedad(${propiedad.codigo})"> Ver más información</p> 
            <p><b> ${propiedad.superficie}</b> m² totales, <b> ${propiedad.ambientes}</b> ambientes</p>
          </div>
          </div>
          </div>`;
    });
    document.getElementById("propiedades").innerHTML = contenido;
};
renderPropiedades();
//Función para encontrar la propiedad que quiero ver
function verPropiedad(codigo) {
    let propiedadesDisponibles = cargarPropiedadesLS();
    let propiedad = propiedadesDisponibles.find(item => item.codigo == codigo);
    localStorage.setItem("propiedad", JSON.stringify(propiedad));
    location.href = "ver-propiedad.html";
}
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

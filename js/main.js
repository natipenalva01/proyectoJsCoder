//Creo una Clase Propiedad
class Propiedad {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2, estadoPropiedad,imagenPropiedad) {
        this.ubicacion = ubicacionPropiedad.toLowerCase();
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad.toLowerCase();
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.estado = estadoPropiedad.toLowerCase();
        this.imagen = imagenPropiedad;
    }
}
const propiedad1 = new Propiedad("Zona costanera", 4, "Casa", 1400, 105.8, "venta", "./imagenes/casa2_a.jpg");
const propiedad2 = new Propiedad("Zona céntrica", 3, "Casa", 700, 197.6, "alquiler", "./imagenes/casa5_a.jpg");
const propiedad3 = new Propiedad("Zona céntrica", 2, "Departamento", 450, 46, "alquiler", "./imagenes/dep1_g.jpg");
const propiedad4 = new Propiedad("Barrio Urquiza", 3, "Departamento", 850, 92, "venta", "./imagenes/dep2_a.jpg");
const propiedad5 = new Propiedad("Zona céntrica", 5, "Casa", 55000, 156, "venta","./imagenes/casa1_a.jpg");
const propiedad6 = new Propiedad("Zona costanera", 4, "Casa", 240000, 152, "venta", "./imagenes/casa3_a.jpg");

const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6];
//Guardando las propidades en el Storage
function guardarPropiedadesLS() {
    localStorage.setItem("propiedades", JSON.stringify(propiedades));
}
function cargarPropiedadesLS(){
return JSON.parse(localStorage.getItem("propiedades"));
}
//Creando mis cards de propiedades
guardarPropiedadesLS();
function renderPropiedades(){
let propiedadesDisponibles = cargarPropiedadesLS();
let contenido = "";
propiedadesDisponibles.forEach(propiedad => { 
    contenido += `<div class = "col-md-4">
    <div class= "card text-center" style="width: 18rem;">
    <img src="${propiedad.imagen}" class="card-img-top" alt="propiedades disponibles" width = 300px height = 200px>
    <div class="card-body">
      <h5 class="card-title">${propiedad.precio} USD</h5>
      <p class="card-text"> Propiedad en ${propiedad.estado}, ubicada en ${propiedad.ubicacion}</p> 
      <a href="#" class="btn boton">Ver más información</a>
      <p><b> ${propiedad.superficie}<b> m² totales, <b>${propiedad.ambientes}<b> ambientes</p>
    </div>
  </div>
  </div>`;
});
document.getElementById("propiedades").innerHTML = contenido;
}
renderPropiedades();
//Procesamiento de datos
encontrarPropiedad()
//Hago referencia al formulario y al botón
const formulario = document.querySelector("form");
const botonFormulario = document.getElementById("botonForm");
//Agrego un addEventListener al botón
botonFormulario.addEventListener("click", validarFormulario); 

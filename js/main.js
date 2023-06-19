//Creo una Clase alquiler y una clase comprar
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
const propiedad1 = new Propiedad("Zona costanera", 4, "Casa", 1400, 105.8, "comprar", "./imagenes/casa2_a.jpg");
const propiedad2 = new Propiedad("Zona céntrica", 3, "Casa", 700, 197.6, "alquilar", "./imagenes/casa5_a.jpg");
const propiedad3 = new Propiedad("Zona céntrica", 2, "Departamento", 450, 46, "alquilar", "./imagenes/dep1_g.jpg");
const propiedad4 = new Propiedad("Barrio Urquiza", 3, "Departamento", 850, 92, "comprar", "./imagenes/dep2_a.jpg");
const propiedad5 = new Propiedad("Zona céntrica", 5, "Casa", 55000, 156, "comprar","./imagenes/casa1_a.jpg");
const propiedad6 = new Propiedad("Zona costanera", 4, "Casa", 240000, 152, "comprar", "./imagenes/casa3_a.jpg");

const propiedades = [propiedad1, propiedad2, propiedad3, propiedad4, propiedad5, propiedad6];
//Procesamiento de datos
encontrarPropiedad()
//Hago referencia al formulario y al botón
const formulario = document.querySelector("form");
const botonFormulario = document.getElementById("botonForm");
//Agrego un addEventListener al botón
botonFormulario.addEventListener("click", validarFormulario); 
// Creo mis tarjetas de productos
const propiedadesDestacadas = document.querySelector(".propiedades");
for(const propiedad of propiedades){
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";
    const imagen = document.createElement("img");
    imagen.src = propiedad.imagen;
    imagen.className = "card-img-top";
    imagen.alt = "imagenes propiedades"
    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = propiedad.ubicacion;
    const text = document.createElement("p");
    text.textContent = `Casa en venta, ${propiedad.ubicacion}, ${propiedad.superficie} m2, ${propiedad.ambientes} ambientes`;
    const link = document.createElement ("a");
    link.className = "btn btn-primary";
    link.href = "#";
    link.textContent = "Ver información";
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);
    card.appendChild(imagen);
    card.appendChild(cardBody);
    propiedadesDestacadas.appendChild(card);
}
/* let servicio = obtenerServicio()
while ((servicio != "alquilar") && (servicio != "comprar")) {
    servicio = obtenerServicio()
    console.log("estoy acá!");
} */
/* if (servicio === "alquilar") {
    let ofertaAlquiler = deseaAlquilar();
    while ((ofertaAlquiler != "casa") && (ofertaAlquiler != "departamento") && (ofertaAlquiler != "no estoy interesado") && (ofertaAlquiler != "1") && (ofertaAlquiler != "2") && (ofertaAlquiler != "3")) {
        ofertaAlquiler = deseaAlquilar();
        console.log("hola, estoy dentro del while");
    }
    if ((ofertaAlquiler === "casa") || (ofertaAlquiler === "1")) {
        const propiedadesCasa = propiedades.filter(prop => (prop.propiedad === "casa" && prop.estado === "alquilar"));
        mostrarCasasDisponibles(propiedadesCasa);
    }
    if (ofertaAlquiler === "departamento" || (ofertaAlquiler === "2")) {
        const propiedadesDepartamento = propiedades.filter(prop => (prop.propiedad === "departamento" && prop.estado === "alquilar"));
        mostrarDepartamentosDisponibles(propiedadesDepartamento);
    }
    if (ofertaAlquiler === "no estoy interesado" || (ofertaAlquiler === "3")) {
        for (const propiedad of propiedades) {
            if (propiedad === "no estoy interesado") {
                break;
            }
        }
    }
}

if (servicio === "comprar") {
    let ofertaComprar = deseaComprar();
    while ((ofertaComprar != "casa") && (ofertaComprar != "departamento") && (ofertaComprar != "no estoy interesado") && (ofertaComprar != "1") && (ofertaComprar != "2") && (ofertaComprar != "3")) {
        ofertaComprar = deseaComprar();
        console.log("hola, estoy dentro del while");
    }
    if ((ofertaComprar === "casa") || (ofertaComprar === "1")) {
        const propiedadesCasa = propiedades.filter(prop => (prop.propiedad === "casa" && prop.estado === "comprar"));
        mostrarCasasDisponibles(propiedadesCasa);
    }
    if (ofertaComprar === "departamento" || (ofertaComprar === "2")) {
        const propiedadesDepartamento = propiedades.filter(prop => (prop.propiedad === "departamento" && prop.estado === "comprar"));
        mostrarDepartamentosDisponibles(propiedadesDepartamento);
    }
    if (ofertaComprar === "no estoy interesado" || (ofertaComprar === "3")) {
        for (const propiedad of propiedades) {
            if (propiedad === "no estoy interesado") {
                break;
            }
        }
    }
}

 */
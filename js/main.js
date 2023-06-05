//Procesamiento de datos
alert("Bienvenido/a a Inmobiliaria Campana ");
let servicio = obtenerServicio()
while ((servicio != "alquilar") && (servicio != "comprar")) {
    servicio = obtenerServicio()
    console.log("estoy acá!");
}
//Creo una Clase alquiler y una clase comprar
class Alquiler {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2) {
        this.ubicacion = ubicacionPropiedad.toLowerCase();
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad.toLowerCase();
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.alquilado = false;
    }
}
const alquiler1 = new Alquiler("Zona costanera", 4, "Casa", 1400, 105.8);
const alquiler2 = new Alquiler("Zona céntrica", 3, "Casa", 550, 197.6);
const alquiler3 = new Alquiler("Zona céntrica", 2, "Departamento", 450, 46);
const alquiler4 = new Alquiler("Barrio Urquiza", 3, "Departamento", 850, 92);

const propiedadesEnAlquiler = [alquiler1, alquiler2, alquiler3, alquiler4];
if (servicio === "alquilar") {
   let ofertaAlquiler = deseaAlquilar();
    while ((ofertaAlquiler != "casa") && (ofertaAlquiler != "departamento") && ofertaAlquiler != "no estoy interesado") {
        ofertaAlquiler = deseaAlquilar();
        console.log("hola, estoy dentro del while");
    }
    if (ofertaAlquiler === "casa") {
        const propiedadesCasa = propiedadesEnAlquiler.filter(prop => prop.propiedad === "casa");
        if (propiedadesCasa.length > 0) {
            let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesCasa.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
            alert(mensaje);
            console.log("estoy en propiedad casa lenght");
        } else {
            alert("No hay casas disponibles en este momento.");
        }
    }
    if (ofertaAlquiler === "departamento") {
        const propiedadesDepartamento = propiedadesEnAlquiler.filter(prop => prop.propiedad === "departamento");
        if (propiedadesDepartamento.length > 0) {
            let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesDepartamento.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
            alert(mensaje);
            console.log("estoy en propiedad departamento lenght");
        }else {
            alert("No hay departamentos disponibles en este momento");
        }
    }
    if (ofertaAlquiler === "no estoy interesado") {
        for (const propiedad of propiedadesEnAlquiler) {
            if (propiedad === "no estoy interesado") {
                break;
            }
        }
    }
}
class Comprar {
    constructor(ubicacionPropiedad, ambientesPropiedad, tipoPropiedad, precioPropiedad, metros2) {
        this.ubicacion = ubicacionPropiedad.toLowerCase();
        this.ambientes = ambientesPropiedad;
        this.propiedad = tipoPropiedad.toLowerCase();
        this.precio = precioPropiedad;
        this.superficie = metros2;
        this.comprado = false;
    }
}
const comprar2 = new Comprar("Zona céntrica", 5, "Casa", 55000, 156);
const comprar1 = new Comprar("Zona costanera", 4, "Casa", 240000, 152);
const comprar3 = new Comprar("Zona céntrica", 2, "Departamento", 450, 46);
const comprar4 = new Comprar("Barrio Urquiza", 3, "Departamento", 850, 92);

const propiedadesEnVenta = [comprar1, comprar2, comprar3, comprar4];
if (servicio === "comprar") {
    let ofertaComprar = deseaComprar();
     while ((ofertaComprar != "casa") && (ofertaComprar != "departamento") && ofertaComprar != "no estoy interesado") {
        ofertaComprar= deseaComprar();
         console.log("hola, estoy dentro del while");
     }
     if (ofertaComprar === "casa") {
         const propiedadesCasa = propiedadesEnVenta.filter(prop => prop.propiedad === "casa");
         if (propiedadesCasa.length > 0) {
             let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesCasa.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
             alert(mensaje);
             console.log("estoy en propiedad casa lenght");
         } else {
             alert("No hay casas disponibles en este momento.");
         }
     }
     if (ofertaComprar === "departamento") {
         const propiedadesDepartamento = propiedadesEnVenta.filter(prop => prop.propiedad === "departamento");
         if (propiedadesDepartamento.length > 0) {
             let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesDepartamento.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
             alert(mensaje);
             console.log("estoy en propiedad departamento lenght");
         }else {
             alert("No hay departamentos disponibles en este momento");
         }
     }
     if (ofertaComprar === "no estoy interesado") {
         for (const propiedad of propiedadesEnVenta) {
             if (propiedad === "no estoy interesado") {
                 break;
             }
         }
     }
}


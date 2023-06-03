// //Entrada de datos
alert("Bienvenido/a a Inmobiliaria Campana ");
let servicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
//Procesamiento de datos
while ((servicio != "alquilar") && (servicio != "comprar")) {
    servicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
    console.log("estoy acá!");
}
/* if (servicio === "alquilar") {
    let propiedad = prompt("Busca casa o departamento? (OPCIÓN: CASA/DEPARTAMENTO)").toLowerCase();
    while ((propiedad != "casa") && (propiedad != "departamento")) {
        alert("Error, ingrese CASA o DEPARTAMENTO.");
        propiedad = prompt("Busca casa o departamento? (OPCIÓN: CASA/DEPARTAMENTO)").toLowerCase()
    }

    if (propiedad === "casa") {
        alert("Le puedo ofrecer estas opciones: \n\n 1)Casa en alquiler en La Reserva de Cardales, 2 dormitorios, 2 baños, 3 ambientes, 1 cochera. \n\n 2) Casa en alquiler en  barrio cerrado Los Cardales, 3 dormitorios, 3 baños, 2 cocheras. \n\n 3)Casa zona céntrica Campana 3 ambientes, 3 dormitorios, 3 baños, 2 cocheras. ");
    } else if (propiedad === "departamento") {
        alert("Le puedo ofrecer los siguientes departamentos: \n\n 1)Zona céntrica Campana, departamento en alquiler con 3 ambientes, 1 baño, 1 cochera, 2 dormitorios, 1 toilette, a estrenar! \n\n 2) Barrio Urquiza, departamento en alquiler, con 4 ambientes, 3 baños, 3 dormitorios, 1 cochera. \n\n 3) Zona Costanera, departamento en alquiler, 1 baño , 1 toilette, 1 habitación,2 ambientes, balcón con vista  al  río, 1 cochera.");
    } else {
        alert("Error, ingrese CASA o DEPARTAMENTO.");
    }
} */

// /* Calculando qué casa/departamento puedo ofrecer depende del monto que me ponga el cliente */

/* let monto = 0;

while ((monto <= 0) || (monto > 10000)) {
    monto = parseInt(prompt("Cuál sería su monto máximo a pagar? (Hasta 10.000 USD)"));
}
switch (monto) {
    case 950:
        alert("Departamento en alquiler, zona Costanera, 1 baño , 1 toilette, 1 habitación,2 ambientes, balcón con vista  al  río, 1 cochera.");
        break;
    case 1500:
        alert("Casa zona céntrica Campana 3 ambientes, 3 dormitorios, 3 baños, 2 cocheras.");
        break;
    case 2500:
        alert("Zona céntrica Campana, departamento en alquiler con 3 ambientes, 1 baño, 1 cochera, 2 dormitorios, 1 toilette, a estrenar!");
        break;
    default:
        alert("En este momento no tenemos una propiedad disponible con ese precio.");
}
 */

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
    fueAlquilado() {
        this.alquilado = true;
    }
}

const alquiler1 = new Alquiler("Zona costanera", 4, "Casa", 1400, 105.8);
const alquiler2 = new Alquiler("Zona céntrica", 3, "Casa", 550, 197.6);
const alquiler3 = new Alquiler("Zona céntrica", 2, "Departamento", 450, 46);
const alquiler4 = new Alquiler("Barrio Urquiza", 3, "Departamento", 850, 92);

const propiedadesEnAlquiler = [alquiler1, alquiler2, alquiler3, alquiler4];
if (servicio === "alquilar") {
    let salida = "Las opciones disponibles en este momento son: \n\n";
    for (const propiedades of propiedadesEnAlquiler) {
        salida += `Ubicación: ${propiedades.ubicacion}\nTipo de propiedad: ${propiedades.propiedad}\nAmbientes: ${propiedades.ambientes}\nPrecio: ${propiedades.precio} USD\n\n`
    }
    alert(salida);
}
    let ofertaAlquiler = prompt("Desea alquilar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADX").toLowerCase();
    while ((ofertaAlquiler != "casa") && (ofertaAlquiler != "departamento") && ofertaAlquiler != "no estoy interesadx") {
        ofertaAlquiler = prompt("Desea alquilar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADX").toLowerCase();
    }
    if (ofertaAlquiler === "casa") {
        let mensaje = "";
        for (const prop of propiedadesEnAlquiler) {
            if (prop.propiedad === "casa") {
                mensaje += `Propiedad: ${prop.propiedad}\nUbicada en: ${prop.ubicacion}\nPrecio: ${prop.precio} USD\n\n`;
            }}
        alert(mensaje);
    }



    //Creando una función que me indique el precio del departamento más las expensas
    /* la función costoTotalAlquiler se encuentra en funciones.js */
    /* let salidaExpensas = costoTotalAlquiler(3500, monto);
    alert("El pago del alquiler incluyendo las expensas es : $" + salidaExpensas); */


    formularioDeContacto;

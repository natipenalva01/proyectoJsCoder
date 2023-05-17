// //Entrada de datos
alert("Bienvenido/a a Inmobiliaria Campana ");
let servicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
//Procesamiento de datos
while ((servicio != "alquilar") && (servicio != "comprar")) {
    servicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
    console.log("estoy acá!");
}
if (servicio === "alquilar") {
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
}
// /* Calculando qué casa/departamento puedo ofrecer depende del monto que me ponga el cliente */
let monto = 0;

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

//Creando una función que me indique el precio del departamento más las expensas

const expensasDepartamento = (expensa, alquiler) => {
    return expensa + alquiler;
}
let salidaExpensas = expensasDepartamento(3500, monto);
alert("El pago del alquiler incluyendo las expensas es : $" + salidaExpensas);

//Creando un formulario de contacto para el cliente *
const formularioDeContacto = (nombre, apellido, celular, mensaje) => {
    alert("Ingrese sus datos para contactarse con nosotros, en caso de que así quiera, sino escriba ESC");
    let contacto = prompt("Desea contactarse con nosotros? ").toUpperCase();
   if(contacto === "ESC"){
    alert("Gracias por visitarnos!");
   }else{
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    celular = parseInt(prompt("Ingrese su celular"));
    mensaje = prompt("Ingrese su mensaje");
   }
   

    let contactoInfo = `Nombre: ${nombre} \n Apellido: ${apellido} \n Celular: ${celular} \n Mensaje: ${mensaje}`;
    alert(contactoInfo);
}

formularioDeContacto();

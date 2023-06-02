const costoTotalAlquiler = (expensa, alquiler) => {
    return expensa + alquiler;
}
//Creando un formulario de contacto para el cliente
const formularioDeContacto = (nombre, apellido, celular, mensaje) => {
    alert("Ingrese sus datos para contactarse con nosotros, en caso de que así quiera, sino escriba ESC");
    let contacto = prompt("Desea contactarse con nosotros? ").toUpperCase();
    if (contacto === "ESC") {
        alert("Gracias por visitarnos!");
    } else {
        nombre = prompt("Ingrese su nombre");
        apellido = prompt("Ingrese su apellido");
        celular = parseInt(prompt("Ingrese su celular"));
        mensaje = prompt("Ingrese su mensaje");
    }


    let contactoInfo = `Nombre: ${nombre} \n Apellido: ${apellido} \n Celular: ${celular} \n Mensaje: ${mensaje}`;
    alert(contactoInfo);
}
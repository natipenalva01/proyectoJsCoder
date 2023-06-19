function encontrarPropiedad() {
    let div = document.getElementById("bienvenida");
    div.className = "mt-2 text-center";
    let h1 = document.createElement("h1");
    h1.className = "titulo-propiedad"
    h1.innerText = "ENCUENTRE SU PROPIEDAD";
    div.appendChild(h1);
};
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
/* const obtenerServicio = () => {
    let obtServicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
    return obtServicio;
};
const deseaAlquilar = () =>{
    let alquilar = prompt("Desea alquilar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADO").toLowerCase();
    return alquilar;
};

const deseaComprar = () =>{
    let comprar = prompt("Desea comprar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADO").toLowerCase();
    return comprar;
};
const mostrarCasasDisponibles = (propiedadesCasa) =>{
    if (propiedadesCasa.length > 0) {
        let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesCasa.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
        alert(mensaje);
        console.log("estoy en propiedad casa lenght");
    } else {
        alert("No hay casas disponibles en este momento.");
    }
}
const mostrarDepartamentosDisponibles = (propiedadesDepartamento) =>{
    if (propiedadesDepartamento.length > 0) {
        let mensaje = "Las opciones disponibles en este momento son: \n\n" + propiedadesDepartamento.map(prop => `Propiedad: ${prop.propiedad} \n Ubicada en: ${prop.ubicacion} \n Precio: ${prop.precio} USD \n\n`).join("");
        alert(mensaje);
        console.log("estoy en propiedad casa lenght");
    } else {
        alert("No hay departamentos disponibles en este momento.");
    }
} */

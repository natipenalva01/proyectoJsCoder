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


const obtenerServicio = () => {
    let obtServicio = prompt("Busca alquilar o comprar una propiedad? (OPCIÓN: ALQUILAR/COMPRAR)").toLowerCase();
    return obtServicio;
}
const deseaAlquilar = () =>{
    let alquilar = prompt("Desea alquilar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADO").toLowerCase();
    return alquilar;
}

const deseaComprar = () =>{
    let comprar = prompt("Desea comprar alguna casa/ departamento? \n OPCIONES \n 1- CASA \n 2- DEPARTAMENTO \n 3- NO ESTOY INTERESADO").toLowerCase();
    return comprar;
}

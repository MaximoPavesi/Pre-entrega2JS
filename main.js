class Auto {
    constructor(nombre, apeliido, marca, patente){
        this.nombre = nombre;
        this.apellido = apeliido;
        this.marca = marca;
        this.patente = patente;
    }
}

const autoMaximo = new Auto("Maximo", "Pavesi", "Ferrari", 9122018);
const autoMarisol = new Auto("Marisol", "Rodriguez", "Audi", 123568);
const autoJorge = new Auto("Jorge", "Pavesi", "Aston Martin", 1418926);
const autoValentino = new Auto("Valentino", "Pavesi", "Mercedes", 556484);
const autoLucca = new Auto("Lucca", "Pavesi", "Nissan", 1564683);

const arrayAutos = [];

arrayAutos.push(autoMaximo);
arrayAutos.push(autoMarisol);
arrayAutos.push(autoValentino);
arrayAutos.push(autoLucca);
arrayAutos.push(autoJorge);

console.log(arrayAutos);

//Función con el menú de opciones:
function menu() {
    alert("Bienvenido a Maximo's Seguros");
    let opcion = parseInt(prompt("Ingrese una opcion: \n 1)Alta de auto \n 2)Baja de auto \n 3) Modificacion de datos \n 4)Consultar cliente \n 5)Salir"));
    return opcion;
}

//Función para dar de alta un auto de un cliente:
function altaAuto() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apeliido = prompt("Ingrese el apellido del cliente: ");
    let marca = prompt("Ingrese la marca de su vehiculo: -Ferrari -Audi -Mercedes -Aston Martin -Nissan -Salir");
    let patente = prompt("Ingrese el numero de su patente");
    let autoCliente = new Auto(nombre, apeliido, marca, patente);
    arrayAutos.push(autoCliente);
    console.log(arrayAutos);
    return opcion;
}

//Funcion para dar de baja un auto de un cliente:
function bajaAuto() {
    let patente = parseInt(prompt("Ingrese el numero de la patente del vehiculo: "));
    let cliente = arrayAutos.find(cliente => cliente.patente === patente);
    let indice = arrayAutos.indexOf(cliente);
    arrayAutos.splice(indice, 1);
    console.log(arrayAutos);
}

//Funcion para modificar datos del vehiculo

function modificadionDatoAuto() {
    let patente = parseInt(prompt("Ingrese la patente del vehiculo: "));
    let cliente = arrayAutos.find(cliente => cliente.patente === patente);
    let indice = arrayAutos.indexOf(cliente);
    let nombre = prompt("Ingrese el nombre del propietario: ");
    let apellido = prompt("Ingrese el apellido del propietario: ");
    let marca = prompt("Ingrese la marca del vehiculo: ");
    let datoModificado = new Auto(nombre, apellido, marca, patente);
    arrayAutos.splice(indice, 1, datoModificado);
    console.log(arrayAutos);
}

//Funcion para consultar vehiculo:

function consultaAuto() {
    let patente = parseInt(prompt("Ingrese la patente del vehiculo: "));
    let cliente = arrayAutos.find(cliente => cliente.patente === patente);
    console.log(cliente);
}

//Funcion para salir del programa

function salir() {
    alert("Gracias por contratar Maximo's Seguros");
}

//Ejecuto el programa

let opcion = menu();
switch (opcion) {
    case 1:
        altaAuto();
        break;
    case 2:
        bajaAuto();
        break;
    case 3:
        modificadionDatoAuto();
        break;
    case 4: 
        consultaAuto();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opcion incorrecta, vuelva a intentar");
        break;
}
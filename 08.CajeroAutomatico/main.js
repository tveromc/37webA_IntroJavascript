const cuentas = [
    { nombre: "Mali", saldo: 200, password: "123" },
    { nombre: "Gera", saldo: 290, password: "456" },
    { nombre: "Maui", saldo: 67, password: "789" },
];

const selectCuentas = document.getElementById('cuentas');
const inputPassword = document.getElementById("password");
const resultado = document.getElementById("resultado");

cuentas.forEach(cuenta => {
    const option = document.createElement("option");
    option.value = cuenta.nombre;
    option.text = cuenta.nombre;
    selectCuentas.appendChild(option);
});

function iniciarTransaccion() {
    const cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre === selectCuentas.value);
    const passwordIngresado = inputPassword.value;

    if (cuentaSeleccionada.password === passwordIngresado) {
        mostrarOpciones(cuentaSeleccionada);
    } else {
        resultado.textContent = "Contraseña incorrecta. Intenta nuevamente";
    }
}

function mostrarOpciones(cuenta) {
    const opciones = ["1) Consulta saldo", "2) Ingresar monto", "3) Retirar monto"];
    const seleccion = prompt("Seleccionar una opción:\n" + opciones.join("\n")).toLowerCase();

    switch (seleccion) {
        case "1":
        case "consultar saldo":
            resultado.textContent = `Tu saldo actual es: $${cuenta.saldo}`;
            break;
        
        case "2":
        case "ingresar monto":
            const montoIngresar = parseFloat(prompt("Ingrese monto a depositar:"));
            if (montoIngresar > 0 && cuenta.saldo + montoIngresar <= 990) {
                cuenta.saldo += montoIngresar;
                resultado.textContent = `Se ingreso $${montoIngresar}. Saldo actual: $${cuenta.saldo}`;
            } else {
                resultado.textContent = "Monto inválido. Debe ser mayor a 0 y el saldo no puede superar los $990.00";
            }
            break;
        
        case "3":
        case "retirar monto":
            const montoRetirar = parseFloat(prompt("Ingrese monto a retirar:"));
            if (montoRetirar > 0 && cuenta.saldo - montoRetirar >= 10) {
                cuenta.saldo -= montoRetirar;
                resultado.textContent = `Se retiro $${montoRetirar}. Saldo actual: $${cuenta.saldo}`;
            } else {
                resultado.textContent = "Monto inválido. Debe ser mayor a 0 y el saldo no puede ser menor a $10.00";
            }
            break;
        
        default:
            resultado.textContent = "Opción inválida.";
    }
}

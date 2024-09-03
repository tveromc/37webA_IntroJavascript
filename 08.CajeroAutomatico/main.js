var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "9101" }
];

var currentAccount;

function login() {
    var accountIndex = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    
    if (password === cuentas[accountIndex].password) {
        currentAccount = cuentas[accountIndex];
        document.getElementById('user-name').textContent = currentAccount.nombre;
        document.getElementById('login').style.display = 'none';
        document.getElementById('operations').style.display = 'block';
    } else {
        document.getElementById('error').textContent = "Password incorrecto. Inténtalo de nuevo.";
    }
}

function logout() {
    currentAccount = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('operations').style.display = 'none';
    document.getElementById('password').value = '';
    document.getElementById('error').textContent = '';
    document.getElementById('message').textContent = '';
}

function checkBalance() {
    document.getElementById('message').textContent = `Saldo actual: $${currentAccount.saldo}`;
}

function deposit() {
    var amount = parseFloat(prompt("¿Cuánto dinero deseas ingresar?"));
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('message').textContent = "Monto no válido.";
        return;
    }
    
    var newBalance = currentAccount.saldo + amount;
    if (newBalance > 990) {
        document.getElementById('message').textContent = "No puedes tener más de $990 en tu cuenta.";
    } else {
        currentAccount.saldo = newBalance;
        document.getElementById('message').textContent = `Ingresaste: $${amount}. Nuevo saldo: $${currentAccount.saldo}`;
    }
}

function withdraw() {
    var amount = parseFloat(prompt("¿Cuánto dinero deseas retirar?"));
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('message').textContent = "Monto no válido.";
        return;
    }
    
    var newBalance = currentAccount.saldo - amount;
    if (newBalance < 10) {
        document.getElementById('message').textContent = "No puedes tener menos de $10 en tu cuenta.";
    } else {
        currentAccount.saldo = newBalance;
        document.getElementById('message').textContent = `Retiraste: $${amount}. Nuevo saldo: $${currentAccount.saldo}`;
    }
}

    
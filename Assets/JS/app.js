const elAceptar = document.getElementById("accept"); // Obtener el elemento con id "accept" (probablemente un botón de enviar)
const passwordError = document.getElementById("errorPassword"); // Obtener el elemento con id "errorPassword" para mostrar mensajes de error relacionados con la contraseña

// Añadir un evento de clic al botón "Aceptar"
elAceptar.addEventListener("click", () => {
    passwordError.innerHTML = ""; // Limpiar el mensaje de error anterior, si lo hubiera

    // Obtener los elementos de los campos de entrada del formulario
    let elUsername = document.getElementById("username");
    let elEmail = document.getElementById("email");
    let elCheck = document.getElementById("check");
    
    // Obtener los elementos de los campos de contraseña
    let elPassword = document.getElementById("password");
    let elPasswordConfirm = document.getElementById("confirmPassword"); 

    // Validar que las contraseñas coincidan
    if (elPassword.value != elPasswordConfirm.value) {
        // Mostrar un mensaje de error si las contraseñas no coinciden
        passwordError.innerHTML = "Las contraseñas no coinciden";
        elPassword.style.borderColor = "red";
        elPasswordConfirm.style.borderColor = "red";
    } else {
        // Si las contraseñas coinciden, limpiar cualquier indicación de error
        elPassword.style.borderColor = "";
        elPasswordConfirm.style.borderColor = "";
        
        // Mostrar los datos en la consola (probablemente para propósitos de prueba)
        console.log(elUsername.value);
        console.log(elEmail.value);
        console.log(elCheck.checked);
        console.log(elPassword.value);
        console.log(elPasswordConfirm.value);
    }
});

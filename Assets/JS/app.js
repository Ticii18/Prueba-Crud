const elAceptar = document.getElementById("accept");
const passwordError = document.getElementById("errorPassword");



elAceptar.addEventListener("click", () => {
    passwordError.innerHTML ="";
    // defino los imputs
    let elUsername = document.getElementById("username");
    let elEmail = document.getElementById("email");
    let elCheck = document.getElementById("check");
    // defino las contraseñas
    let elPassword = document.getElementById("password");
    let elPasswordConfirm = document.getElementById("confirmPassword"); 


    // valido que las contraseñas coincidan
    if (elPassword.value != confirmPassword.value) {
        // console.log("Error: Las contraseñas no coinciden");
        // // le pongo colores para indicar el error
        // elPassword.style.borderColor = "red";
        // elPasswordConfirm.style.borderColor = "red";
        passwordError.innerHTML = "las contraseñas no coinciden"
        
    }else{
        // en caso de corregir la contraseña tambien modifico el color de los bordes
        elPassword.style.borderColor = "";
        elPasswordConfirm.style.borderColor = "";
        // muestros los datos
        console.log(elUsername.value);
        console.log(elEmail.value);
        console.log(elCheck.checked);
        console.log(elPassword.value);
        console.log(elPasswordConfirm.value);
    }


});

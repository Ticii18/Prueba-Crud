//codigo para el html comentado en index.html

// const form = document.getElementById("registerUser");

// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     const formData = new FormData(e.target);
    
//     if(formData.get("password") != formData.get("confirmPassword") ){
//         console.log("las contraseñas son distintas");
//     }else{
//         console.log(formData.get("username"))
//         console.log(formData.get("password"))
//         console.log(formData.get("confirmPassword"))
//         console.log(formData.get("email"))    
    
//     }

// })



// codigo para index.html

// creamos el array
let tareas = []; // Arreglo para almacenar las tareas

let contenido = document.getElementById("contenido"); // Obtener el elemento HTML con el id "contenido"

// Función para crear una nueva tarea
const crearTarea = () => {
    const nombreTarea = document.getElementById("tarea").value; // Obtener el valor del input con id "tarea"

    if (nombreTarea == "") { // Si el nombre de la tarea está vacío, mostrar un mensaje de error
        alert("Debes ingresar un nombre para la tarea");
        return;
    }

    tareas.push(nombreTarea); // Agregar la nueva tarea al arreglo de tareas
    pintarTareas(tareas); // Llamar a la función para actualizar la visualización de las tareas
}

// Función para eliminar una tarea
const eliminarTarea = (nombreTarea) => {
    const indice = tareas.indexOf(nombreTarea); // Obtener el índice de la tarea a eliminar
    tareas.splice(indice, 1); // Eliminar la tarea del arreglo de tareas
    pintarTareas(tareas); // Actualizar la visualización de las tareas
}

// Función para editar una tarea
const editarTarea = (nombreTarea) => {
    const nuevoNombre  = prompt("Nuevo Nombre"); // Pedir al usuario el nuevo nombre de la tarea
    const indice = tareas.indexOf(nombreTarea); // Obtener el índice de la tarea a editar
    tareas.splice(indice, 1, nuevoNombre); // Reemplazar el nombre de la tarea en el arreglo de tareas
    pintarTareas(tareas); // Actualizar la visualización de las tareas
}

// Función para mostrar las tareas en el HTML
const pintarTareas = (tareas) => {
    contenido.innerHTML = ""; // Limpiar el contenido actual del elemento HTML

    // Iterar sobre todas las tareas y agregarlas al elemento HTML
    tareas.forEach (tarea => {
        contenido.innerHTML += `
            <div>${tarea} 
                <button type="button" class="button2" onclick="editarTarea('${tarea}')">Editar</button>
                <button type="button" class="button2" onclick="eliminarTarea('${tarea}')">Eliminar</button>
            </div>`;
    });
}

pintarTareas(tareas); // Llamar a la función para inicializar la visualización de las tareas

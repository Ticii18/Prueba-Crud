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

let tareas = []
let contenido = document.getElementById("contenido");


const crearTarea = () => {
    const nombreTarea = document.getElementById("tarea").value;
    tareas.push(nombreTarea);

    pintarTareas(tareas)

}
const eliminarTarea = (nombreTarea) => {
    const indice = tareas.indexOf(nombreTarea);
    tareas.splice(indice, 1);
    pintarTareas(tareas);
}
const editarTarea = (nombreTarea) => {
    const nuevoNombre  = prompt("Nuevo Nombre");
    const indice = tareas.indexOf(nombreTarea);
    tareas.splice(indice, 1, nuevoNombre);

    pintarTareas(tareas);
}


const pintarTareas = (tareas) =>{
    contenido.innerHTML = ""

    tareas.forEach (tarea =>{
        contenido.innerHTML += `
            <div>${tarea} 
                <button type="button" class="button2" onclick="editarTarea('${tarea}')">Editar</button>
                <button type="button" class="button2" onclick="eliminarTarea('${tarea}')">Eliminar</button>
            </div>`;
    })
}









pintarTareas(tareas)

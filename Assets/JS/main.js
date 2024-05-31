// Se define una función llamada capitalizarNombre que toma un nombre y una función de callback como argumentos.
// La función capitaliza el primer carácter del nombre y luego llama a la función de callback con el nombre capitalizado como argumento.
function capitalizarNombre(nombre, cb) {
    let nombreCapitalizado = nombre[0].toUpperCase() + nombre.slice(1, nombre.length);
    cb(nombreCapitalizado);
}

// Se define una función llamada mandarMensaje que toma una persona como argumento y simplemente imprime un mensaje en la consola.
function mandarMensaje(persona) {
    console.log("hola soy", persona);
}

// Se llama a la función capitalizarNombre con el nombre "ticiano" y la función de callback mandarMensaje.
// Esto capitaliza el nombre y luego imprime un mensaje en la consola utilizando el nombre capitalizado.
capitalizarNombre("ticiano", mandarMensaje);


// Punto numero 1: Multiplicar todos los números del array 'multipli' por 2.
let multipli = [10, 12, 15, 20, 23, 44, 105];
console.log(multipli.map((el) => el * 2));

// Punto numero 2: Filtrar y dejar en el array solo los números que sean divisibles por dos.
console.log(multipli.filter((el) => el % 2 === 0));

// Punto numero 3: Buscar un valor específico (44) en el array 'multipli' y obtenerlo.
console.log(multipli.find((el) => el === x));


// Se define un array de objetos llamado 'listaDeTareas', donde cada objeto representa una tarea con un nombre y un estado de completado.
let listaDeTareas = [
    {
        nombreDeLaTarea: "tomar agua",
        estaCompletada: false
    },
    {
        nombreDeLaTarea: "tomar cafe",
        estaCompletada: true
    }
];

// Se obtiene el elemento HTML con el id "lista-tarea" y se guarda en la variable 'elListaTareas'.
const elListaTareas = document.getElementById("lista-tarea");

// Se define una función llamada agregarTarea que toma un objeto de tarea como argumento y agrega una representación de esa tarea al DOM.
function agregarTarea(tarea) {
    elListaTareas.innerHTML += `
    <div class="tarea">
    <input type="checkbox" ${tarea.estaCompletada ? "checked" : ""}>
    <p>${tarea.nombreDeLaTarea}</p>
    </div>
    `;
}

// Se llama a la función agregarTarea dos veces, una para cada tarea en la listaDeTareas.
agregarTarea(listaDeTareas[0]);
agregarTarea(listaDeTareas[1]);

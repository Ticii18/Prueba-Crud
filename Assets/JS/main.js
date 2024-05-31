// function capitalizarNombre(nombre,cb){
//     let nombreCapitalizado = nombre[0].toUpperCase() + nombre.slice(1, nombre.length)
//     cb(nombreCapitalizado)
//   }

// function mandarMensaje(persona){
//   console.log("hola soy",persona)
// }
  
// capitalizarNombre("ticiano",mandarMensaje)


//Punto numero 1

// let multipli = [10,12,15,20,23,44,105];
// for (let i = 0; i < multipli.length; i++){
//     multipli[i] =(multipli[i] * 2)
// }
// console.log(multipli)


// punto numero 2

// dejar en el array solo numeros que sean divisibles por dos

// let multipli = [10,12,15,20,23,44,105];
// let b = []
// for (let i = 0; i < multipli.length; i++){

//     if (!(multipli%2)){
//         multipli.splice(i,1)
//     }
//     let op = multipli[i]
//     if (op % 2 == 0) {
//         b.push(op)
//     }   
// }
// console.log(b);
// console.log(multipli);
// Punto numero 3

// necesito saber si en un array existe un elemento especifico y obtenerlo

let multipli = [10,12,15,20,23,44,105];
let x = 44

//punto 1 (Multiplicar los numeros)
console.log(multipli.map((el) => el * 2));

//punto 2 (los numeros divisibles por dos)
console.log(multipli.filter((el) => el % 2 == 0))

//punto 3 (Buscar un valor especifico y obtenerlo)
 console.log(multipli.find((el) => el == x))


// for (let i = 0 ; i<multipli.length ; i++) {
//     if (x ==multipli[i]) {
//         console.log(multipli[i]);
//         break
//     }

// }

let listaDeTareas=[
{
    nombreDeLaTarea:"tomar agua",
    estaCompletada: false
},

{
    nombreDeLaTarea:"tomar cafe",
    estaCompletada: true
}

]

const elListaTareas = document.getElementById("lista-tarea")

function agregarTarea(tarea) {
    elListaTareas.innerHTML +=`
    <div class="tarea">
    <input type="checkbox" ${tarea.estaCompletada ? "checked" : ""}>
    <p>${tarea.nombreDeLaTarea}</p>
    </div>
    `
}

agregarTarea(listaDeTareas[0])
agregarTarea(listaDeTareas[1])


// function agregarTarea({nombreDeLaTarea,estaCompletada}) {
//     elListaTareas.innerHTML +=`
//     <div class="tarea">
//     <input type="checkbox" ${estaCompletada ? "checked" : ""}>
//     <p>${nombreDeLaTarea}</p>
//     </div>
//     `
// }

// agregarTarea(listaDeTareas[0])
// agregarTarea(listaDeTareas[1])





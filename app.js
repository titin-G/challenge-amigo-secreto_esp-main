// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema//
let amigo = []; // array amigo para guardar los amigos//

function agregarAmigo(){
    resultado.innerHTML =""; // para que al agregar un amigo se limpie el mensaje que dice el Amigo Sorteado es://
    let inputAmigo = document.getElementById("amigo"); // obtenemos el valor del imput//
    let nombreAmigo = inputAmigo.value; //se guarda el valor del imput en la variable nombreAmigo
          
 if (!nombreAmigo){
    alert("Debes ingresar un nombre") // si no existe un nombre, alerta con ese mensaje//
    return // con esto se detiene la ejecución de la función agregarAmigo y se reinicia el ciclo principal//
 } else if(amigo.includes(nombreAmigo)){
    alert("Este amigo ya existe, ingresa un nuevo nombre") // si el amigo ya existe, alerta con ese mensaje//
    return
 } else if (amigo.length >= 7){ // si la cantidad de amgigos es mayor a 7, alerta con mensaje//
    alert("El máximo son 7 amigos")
    return
 }
 amigo.push(nombreAmigo); //agregando amigos al array//
 inputAmigo.value = ""; // limpiando el imput despues de agregar un amigo
 inputAmigo.focus(); //para que el cursor se mantenga en el imput//
 mostrarAmigos();     // se llama a la función mostrarAmigos//
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos"); //obtenemos el elemento listaAmigos//
    listaAmigos.innerHTML = ""; //se limpia la lista de amigos//

    for(let i = 0; i < amigo.length; i++){ // recorremos el array amigo para mostrar a los amigos//
        let item = document.createElement("li"); // se crea un elemento li//
        item.textContent = amigo[i];  // se agrega el nombre del elemento amigo en el li//
        listaAmigos.appendChild(item); // se agrega el li a la lista de amigos//
    }
}

function sortearAmigo(){
    if(amigo.length < 3){  // si la cantidad de amigos es menor a 3, alerta con mensaje//
        alert("el mínimo son 3 amigos para sortear")
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)]; // se sortea un amigo y se guarda en la variable amigoSorteado//
    let resultado = document.getElementById("resultado"); //se obtiene el elemento resultado//
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; //se muestra el amigo sorteado en el elemento resultado usando las comillas template String//

    let limpiarLista = document.getElementById("listaAmigos"); // se obtiene el elemento lista Amigos//
        limpiarLista.innerHTML = ""; // se limpia la listaAmigos//
        amigo = [];        // se limpia el array amigo//
}
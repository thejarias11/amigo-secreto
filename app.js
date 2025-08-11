// Creamos un arreglo para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Sale de la función
    }

    amigos.push(nombre); // Agrega el nombre al arreglo
    input.value = ""; // Limpia el campo de texto
    mostrarLista(); // Actualiza la lista en pantalla
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de volver a dibujar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Crea un <li>
        item.textContent = amigos[i]; // Asigna el nombre
        lista.appendChild(item); // Lo agrega a la lista <ul>
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

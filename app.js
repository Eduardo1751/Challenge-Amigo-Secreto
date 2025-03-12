// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  // Declara el array para almacenar los nombres de los amigos

// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Usamos trim() para quitar espacios al principio y al final

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Si el valor es válido, agregarlo al array de amigos
        amigos.push(nombreAmigo);
        
        // Mostrar los amigos en la lista de amigos
        mostrarAmigos();

        // Limpiar el campo de entrada
        inputAmigo.value = "";
    }
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiar la lista antes de actualizarla

    // Agregar cada amigo al listado visible
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement('li');
        li.textContent = amigos[i];  // Establecer el nombre del amigo como texto del <li>

        // Agregar el <li> a la lista HTML
        listaAmigos.appendChild(li);
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar si hay amigos disponibles en el array
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;  // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio entre 0 y el tamaño del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></p>`;
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Vaciar el array de amigos
    amigos = [];
    
    // Limpiar la lista de amigos en la interfaz
    mostrarAmigos();

    // Limpiar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    alert("El sorteo ha sido reiniciado. Puede agregar nuevos amigos.");
}


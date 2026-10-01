const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

//* addEventListener
// La funcion lo que hace es indicarle a un parametro que debe ocurrir algo.
// En este caso, cuando le demos al boton con id "submit" se imprimira la respuesta de la busqueda
formulario.addEventListener("submit", async (evento) => {
    // Por defecto un formulario envia los datos. Lo preveemos con esta funcion para controlarlo por nuestra clase JS
    evento.preventDefault(); 
    
    // Usa el valor de la busqueda en el form de html y lo ponemos en una variable, le quitamos espacios y a minúscula
    const busqueda = inputBusqueda.value.trim().toLowerCase();

    if (!busqueda) {
        mensaje.textContent = "Introduce un nombre o número." // Si no se encuentra una búsqueda, debajo del formulario sale este mensaje 
        resultado.innerHTML = ""; // Igual que el mensaje, tarjeta del pokemon se vacía
        return;
    }

    mensaje.textContent = "Cargando..."
    resultado.innerHTML = "";

    // obtenerPokemon busca el pokemon en base al input de la busqueda (pokemon o numero)
    try {
        const pokemon = await obtenerPokemon(busqueda);
        mostrarPokemon(pokemon);
        mensaje.textContent = "";
        inputBusqueda.value = "";
        inputBusqueda.focus();
    } catch (error) {
        mensaje.textContent = error.message;
    }
});

//* obtenerPokemon
//Funcion que consulta la pokeApi
const obtenerPokemon = async (busqueda) => {
    // El ${busqueda} es el parametro que devuelve el evento consulta de la funcion anterior. Representa el pokemon o numero del pokemon
    const url = `https://pokeapi.co/api/v2/pokemon/${busqueda}`;
    const respuesta = await fetch(url); // Hace la peticion a la url con un fetch

    if(!respuesta.ok) {
        throw new Error("Pokémon no encontrado");
    }


    const datos = await respuesta.json(); // Convierte la respuesta en json de la api a objeto JS
    
    // return datos; <- Devolveria demasiada información
    return {
        id: datos.id,
        nombre: datos.name,
        imagen: datos.sprites.front_default,
        altura: datos.height,
        peso: datos.weight,
        tipos: datos.types.map(({ type }) => type.name), // Map transforma el array de la API en un array para el formato json de cada pokemon
    };
};
//* formatearId
const formatearId = (id) => {
    // String(id) transforma un numero en cadena de texto
    // padStart. El primero, dice cuantos dígitos en total deben aparecer. El segundo, dice que numero se usa de relleno
    return String(id).padStart(3, "0")
};

//* mostrarPokemon
// Transforma el resultado del return anterior a una tarjeta bajo la barra de busqueda
const mostrarPokemon = (pokemon) => {


    const tiposHTML = pokemon.tipos
        .map((tipo) => `<span class="tipo">${tipo}</span>`) // Convertimo el array a linea por tipo en html. El join los pone uno tras otro.
        .join("");

    resultado.innerHTML = `
        <article class="pokemon">
            <p class="pokemon__numero">N.º ${formatearId(pokemon.id)}</p>

            <img class="pokemon__imagen" src="${pokemon.imagen}" alt="Imagen de ${pokemon.nombre}">

            <h2 class="pokemon__nombre">${pokemon.nombre}</h2>

            <div class="pokemon__datos">
                <p><strong>Altura</strong><br>${pokemon.altura / 10} m</p>
                <p><strong>Peso</strong><br>${pokemon.peso / 10} kg</p>
            </div>

            <div class="pokemon__tipos">
                ${tiposHTML}
            </div>
        </article>
    `;
};


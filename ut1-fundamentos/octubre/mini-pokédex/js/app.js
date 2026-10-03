const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
const botonCargar = document.querySelector("#boton-cargar");
const contenedorTarjetas = document.querySelector("#tarjetas");

const TOTAL_POKEMON = 151;
let listaPokemon = [];

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
        console.log(pokemon);
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
    
    // Retorna los datos importados de la clase Pokemon.js que pilla la informacion de la API con el fetch (datos)
    return new Pokemon(datos);
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

            <img class="pokemon__imagen" src="${pokemon.spriteFrente}" alt="Imagen de ${pokemon.nombre}">

            <h2 class="pokemon__nombre">${pokemon.nombre}</h2>

            <div class="pokemon__datos">
                <p><strong>Altura</strong><br>${pokemon.altura} m</p>
                <p><strong>Peso</strong><br>${pokemon.peso} kg</p>
            </div>

            <div class="pokemon__tipos">
                ${tiposHTML}
            </div>
        </article>
    `;
};

//* cargarPokemon
// Recoge los 151 pokemons de la API a la vez y los guarda en la lista de pokemon
const cargarPokemon = async () => {
    mensaje.textContent = "Cargando Pokémon...";
    botonCargar.disabled = true; // Así no se puede pulsar el boton dos veces mientras se carga

    try {
        // Recoge los ids de todos los pokemons
        // El for recorre todos los pokemons de 1 a 151
        const ids = [];
        for (let i = 1; i <= TOTAL_POKEMON; i++) {
            ids.push(i);
        }
        // Para cada uno de los numeros, llamaos a obtenerPokemon y cada llamada devuelve una promesa (una peticion que todavia no ha terminado)
        const promesas = ids.map((id) => obtenerPokemon(id));
        // Promise.all espera a que terminen todas y nos da un array con los 151 pokémon en orden.
        listaPokemon = await Promise.all(promesas);
        mensaje.textContent = `${listaPokemon.length} Pokémon cargados.`;
        contenedorTarjetas.innerHTML = crearTarjeta(listaPokemon[0]);
    } catch (error) {
        console.error(error);
        mensaje.textContent = "No se pudo conectar con la PokéAPI";
    }
    botonCargar.disabled = false; // Cuando termina la accion podemos volver a clickear el boton.
}

// Cuando se pulse el boton se ejecutara cargarPokemon
botonCargar.addEventListener("click", cargarPokemon);

//* crearTarjeta
// Crea una tarjeta con la informacion del pokemon
const crearTarjeta = (pokemon) => {
    // Al igual que la tarjeta del codigo base, hacemos que cada tipo salga en una tarjeta
    const tiposHTML = pokemon.tipos.map((tipo) => `<span class="tipo">${tipo}</span>`).join("");
    // Hacemos que la tarjeta tenga la imagen de espaldas del pokemon
    return `
    <article class="tarjeta">
        <p class="tarjeta__numero">Nº${formatearId(pokemon.id)}</p>
        <img class="tarjeta__imagen" src="${pokemon.spriteEspalda}" alt="${pokemon.nombre} de espaldas">
        <h2 class="tarjeta__nombre">${pokemon.nombre}</h2>
        <div class="tarjeta__tipos">${tiposHTML}</div>
        <p class="tarjeta__medidas">${pokemon.altura} m · ${pokemon.peso} kg</p>
    </article>
    `
}

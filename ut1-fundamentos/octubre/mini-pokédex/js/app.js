const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const botonCargar = document.querySelector("#boton-cargar");
const contenedorTarjetas = document.querySelector("#tarjetas");
const selectorTipo = document.querySelector("#filtro-tipo");

const TOTAL_POKEMON = 151;
let listaPokemon = [];

//* addEventListener
// La funcion lo que hace es indicarle a un parametro que debe ocurrir algo.
// En este caso, cuando le demos al boton con id "submit" se imprimira la respuesta de la busqueda
formulario.addEventListener("submit",  (evento) => {
    // Por defecto un formulario envia los datos. Lo preveemos con esta funcion para controlarlo por nuestra clase JS
    evento.preventDefault(); 
    filtrarPokemon();
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
        mostrarTarjeta(listaPokemon);
        rellenarSelectorTipos();
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
    const tiposHTML = pokemon.tipos.map((tipo) => `<span class="tipo tipo--${tipo}">${tipo}</span>`).join("");
    // Hacemos que la tarjeta tenga la imagen de espaldas del pokemon
    return `
    <article class="tarjeta">
        <p class="tarjeta__numero">Nº${formatearId(pokemon.id)}</p>
        <img class="tarjeta__imagen" 
            src="${pokemon.spriteEspalda}" 
            data-espalda="${pokemon.spriteEspalda}"
            data-frente="${pokemon.spriteFrente}"
            alt="${pokemon.nombre}">
        <h2 class="tarjeta__nombre">${pokemon.nombre}</h2>
        <div class="tarjeta__tipos">${tiposHTML}</div>
        <p class="tarjeta__medidas">${pokemon.altura} m · ${pokemon.peso} kg</p>
    </article>
    `
}

//* mostrarTarjeta
// Recibe una lista de pokemon y pinta en la pagina una tarjeta con cada uno.
const mostrarTarjeta = (lista) => {
    contenedorTarjetas.innerHTML = lista.map(crearTarjeta).join("");
    activarCambioSrite();
}

//* activarCambioSrite
// Cuando se pulse el mouse sobre una tarjeta, se cambia la imagen de espaldas a la de frente
const activarCambioSrite = () => {
    const tarjetas = contenedorTarjetas.querySelectorAll(".tarjeta"); // Cogemos todas las imagenes de las tarjetas que hay en la pagina
    tarjetas.forEach((tarjeta) => {
        const imagen = tarjeta.querySelector(".tarjeta__imagen"); // por cada tarjeta seleccionamos el parametro imagen y se lo pasamos a una nueva variable imagen
        // Hacemos que la imagen se de la vuelta cuando el mouse entra en el area del sprite
        tarjeta.addEventListener("mouseenter", () => {
            imagen.src = imagen.dataset.frente;
        })
        // Cunado el mouse salga del area de la imagen vkvemos a poner la imagen de espaldas
        tarjeta.addEventListener("mouseleave", () => {
            imagen.src = imagen.dataset.espalda;
        })
    })
}

//* filtrarPokemon
// Filtra los pokemons que hay en la lista
const filtrarPokemon = () => {
    if (listaPokemon.length === 0) {
        mensaje.textContent = "Primero pulsa \"Cargar Pokémon\".";
        return;
    }

    const texto = inputBusqueda.value.toLowerCase().trim(); // Texto de la busqueda normalizado
    const tipo = selectorTipo.value;

    // Filtramos los pokemons que coinciden con el texto y el tipo
    const filtrado = listaPokemon.filter((pokemon) => {
        // Si el texto coincide con el nombre o el id del pokemon
        const coincideTexto = pokemon.nombre.includes(texto) || Number(texto) == pokemon.id;
        // Si el tipo coincide con el pokemon
        const coincideTipo = tipo === "todos" || pokemon.tipos.includes(tipo);
        return coincideTexto && coincideTipo;
    })

    mostrarTarjeta(filtrado);

    if (filtrado.length === 0) {
        mensaje.textContent = "No hay ningún Pokémon que coincida con la búsqueda.";
    } else {
        mensaje.textContent = `Mostrando ${filtrado.length} Pokémon`;
    }
}

//* rellenarSelectorTipos
// Rellena el selector de tipos con todos los tipos de todos los pokemons
const rellenarSelectorTipos = () => {
    const tipos = [];

    // Recorremos todos los tipos de todos los pokemons y los guardamos en un array
    listaPokemon.forEach((pokemon) => {
        // Recorremos todos los tipos de cada pokemon
        pokemon.tipos.forEach((tipo) => {
            // Si el tipo no esta en el array, lo añadimos
            if (!tipos.includes(tipo)) {
                tipos.push(tipo);
            }
        })
    })
    tipos.sort();
    // Creamos el hatml que se va a desplegar donde TODOS queda como la primera opcion y luego la lista de tipos.
    selectorTipo.innerHTML = `<option value="todos">Todos</option>` + tipos.map((tipo) => `<option value="${tipo}">${tipo}</option>`).join("");
}

// "input" se dispara cada vez que cambia el texto (al escribir, borrar o pegar)
inputBusqueda.addEventListener("input", filtrarPokemon);
// "change" se dispara al elegir otra opción en el selector
selectorTipo.addEventListener("change", filtrarPokemon);

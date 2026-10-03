# Práctica Pokédex usando JavaScript
- **Autor:** Alejandro Donate García 2ºDAM
- **Asignatura:** Programación multimedia y dispositivos móviles

**Tecnologías:** HTML, CSS y JavaScript. Los datos son sacados de [PokéAPI](https://pokeapi.co/)
**¿Cómo se ejecuta?  Abrimos index.html y usamos la extension live server para verla en nuestro navegador.**

**Indice**
1. [Punto de partida](#1-punto-de-partida)

---

## 1. Punto de partida
La base que teniamos de la mini pokédex basicamentes nos permitía conectarnos a la API recogiendo unos cuantos parámetros que ofrecía la pagina como nombre, numero, peso, altura y tipo. 

### Estructura inicial
    
    mini-pokedex/
        ├── index.html
        ├── css/
            ├── style.css
        ├── js/
            ├── app.js

### Funcionalidades que ya estaban implementadas

La busqueda usando la función `obtenerPokemon` accede a la API de forma correcta y obtiene el id, nombre, sprite, altura, peso y tipos del pokemon de manera correcta.
- Lo que hacemos es hacer un fetch de la url cargando los datos en una variable para luego convertirlos en formato JSON para poder leer los datos y cargarlos sobre variables con el respectivo nombre.

La creación del popup con la información del pokemon con `mostrarPokemon` funciona conrrectamente. 
- Aquí creamos una sección usando `innerHTML` para preparar donde veremos la informacion, todo esto sustituyendo la respuesta vacia por el nuevo HTML. 

Todas estas fucniones son ejecutadas al presionar el boton de buscar o presionar `Enter` con la función del formulario `addEventListener`
- Lo principal es escuchar al `event` que ocurre al pulsar el botón. Ahí usamos `await obtenerPokemon(busqueda)` para obtener los datos del pokemon y mostrarlos en el popup usando `mostrarPokemon`. 
- El `await` lo que hace es esperar a que la función `obtenerPokemon` termine de ejecutarse para luego continuar con la siguiente línea de código.

### Pruebas realizadas

| Prueba | Resultado |
| --- | --- |
|La página carga correctamente | ✅ |
|Búsqueda por nombre `pikachu` | ✅ |
|Búsqueda por número `25` | ✅ |
|Pokémon inexistentes | ✅ Muestra "Pokémon no encontrado"|
|Consola sin errores | ✅ Solo el aviso 404 del navegador al buscar un pokémon inexistentes.|

### Capturas

**Aplicación recien abierta**
![Página inicial](/assets/readme/01-inicio.png)

**Búsqueda correcta**
![Búsqueda correcta](/assets/readme/01-busqueda-correcta.png)

**Pokémon inexistente**
![Mensaje de error](/assets/readme/01-error.png)

### Commit del punto de partida
Este es el código de la practica guiada: [`6a00e51`](https://github.com/alejandroDonGar/Programacion-multimedia-y-dispositivos-moviles-2026---2027/tree/main/ut1-fundamentos/octubre/mini-pok%C3%A9dex)



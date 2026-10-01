# Práctica Pokédex usando JavaScript
- **Autor:** Alejandro Donate García 2ºDAM

**Indice**

## 1. Punto de partida

Comenzamos creando la base con la que diseñaremos el buscador pokemon final.
La base la forman tres clases.

**index.html**
- Esta es nuestra base de HTML
```
<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini-Pokédex</title>
    <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
    <main class="contenedor">
        <h1>Mini-Pokédex</h1>

        <p class="introduccion">
        Introduce el nombre o el número de un Pokémon.
        </p>

        <form id="formulario-busqueda" class="buscador">
        <label for="busqueda">Nombre o número</label>

        <div class="buscador__controles">
            <input
            id="busqueda"
            name="busqueda"
            type="text"
            placeholder="Ejemplo: pikachu o 25"
            autocomplete="off"
            >

            <button type="submit">Buscar</button>
        </div>
        </form>

        <p id="mensaje" class="mensaje" aria-live="polite"></p>

        <section id="resultado" class="resultado"></section>
    </main>

    <script src="js/app.js"></script>
    </body>
</html>
```
**app.js**
- Esta es nuestra base JavaScript
```
const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");
```

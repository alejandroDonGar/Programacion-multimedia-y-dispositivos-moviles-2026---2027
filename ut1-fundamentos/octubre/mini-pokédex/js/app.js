const formulario = document.querySelector("#formulario-busqueda");
const inputBusqueda = document.querySelector("#busqueda");
const mensaje = document.querySelector("#mensaje");
const resultado = document.querySelector("#resultado");

// La funcion lo que hace es indicarle a un parametro que debe ocurrir algo.
// En este caso, cuando le demos al boton con id "submit" se imprimira en consola un mensaje de "Formulario enviado"
formulario.addEventListener("submit", (evento) => {
    // Por defecto un formulario envia los datos. Lo preveemos con esta funcion para controlarlo por nuestra clase JS
    evento.preventDefault(); 
    
    // Usa el valor de la busqueda en el form de html y lo ponemos en una variable, le quitamos espacios y a minúscula
    const busqueda = inputBusqueda.value.trim().toLowerCase();
    if (!busqueda) {
        // Si no se encuentra una búsqueda, debajo del formulario sale este mensaje 
        mensaje.textContent = "Introduce un nombre o número."
        // Igual que el mensaje, el box del pokemon se vacía
        resultado.innerHTML = "";
    }
    console.log(busqueda);
})




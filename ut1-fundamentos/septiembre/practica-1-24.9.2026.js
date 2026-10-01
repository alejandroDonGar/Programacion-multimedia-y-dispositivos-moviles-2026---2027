{
    let secreto = "Dentro del bloque";
}
console.log(secreto); // Este no se ve porque la variable let no se puede usar fuera de su ámbito

{
    var secreto = "Dentro del bloque";
    console.log(secreto);
}

console.log("--------------------------------------------------------------------");

const especie = "Eevee";
let energia = 80;
const esCapturado = true;

console.log(typeof especie); // Muestra el tipo del objeto
console.log(typeof energia);
console.log(typeof esCapturado);

console.log("--------------------------------------------------------------------");

console.log(5+1);
console.log("5"+1);
console.log(Number("5")+1);

console.log("--------------------------------------------------------------------");

let apodo;
const entreador = null;

console.log(apodo); // Como no está definido sale como "undefined"
console.log(entreador);

console.log("--------------------------------------------------------------------");

const pokemon = "Pikachu"
console.log("Pokemon:", pokemon);

console.log("--------------------------------------------------------------------");

const nombrePokemon = "Charizard";
let energia2 = 80;

console.log("El pokemon: " + nombrePokemon + " tiene " + energia2 + " de energia"); 

console.log("--------------------------------------------------------------------");

const nombrePokemo2 = "Gengar";
let energia3 = 80;

console.log(`El pokemon ${nombrePokemo2} tiene ${energia3} de energia`);

console.log("--------------------------------------------------------------------");

const nombrePokemo3 = "Incineroar";
let energia4 = 80;

if (energia >= 50 ) {
    console.log("El pokemon puede entrar");
} else {
    console.log("No puede entrar");
}

console.log("--------------------------------------------------------------------");

function saludar() {
    console.log("¡Hola!");
}
saludar();

console.log("--------------------------------------------------------------------");

function saludar(nombrePokemon4) {
    console.log(`Hola, ${nombrePokemon4}`);
}

saludar("Pikachu"); // Definimos el valor aqui al llamar a la función
saludar("Eevee");
saludar("Incineroar");

function calcularEnergia(energiaActual, gasto) {
    return energiaActual - gasto;
}

const energiaFinal = calcularEnergia(100, 20);
console.log("Calculo de la energia final: " + energiaFinal);

function obtenerEstado(energiaActual) {

    if (energiaActual >= 50) {
        console.log("Puede entrenar");
    } else {
        console.log("No puede entrenar");
    }
}
// o
const calucularEnergia2 = (energiaActual, gasto) => {
    return energiaActual - gasto;
}
const calucularEnergia3 = (energiaActual, gasto) =>energiaActual - gasto;
// o
console.log(obtenerEstado(energiaFinal));

console.log("--------------------------------------------------------------------");

// Creación de objeto
const pokemon2 = {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    nivel: 12,
    energia: 70,
};

console.log(pokemon2.nombre);
console.log(pokemon2.tipo);
console.log(pokemon2.nivel);
console.log(pokemon2.energia);
console.log(obtenerEstado(pokemon2.energia));
console.log(calcularEnergia(pokemon2.energia, 20));

console.log("--------------------------------------------------------------------");

const pokemon3 = {
    nombre: "Eevee",
    tipo: "normal",
    nivel: 8,
    energia: 80, 
};
// Array de pokemons
const equipo = [pokemon2, pokemon3];

console.log(equipo[0].nombre);
console.log(equipo.length);

// Recorrec el array e imprime la energia 
for (const pokemon of equipo) {
    console.log(pokemon.energia);
}
// Recorre el array, llama a la funcion obtenerEstado y comprueba si puede entrenar o no
for (const pokemon of equipo) {
    const estado = obtenerEstado(pokemon.energia);
    console.log(`${pokemon.nombre}: ${estado}`)

}

const pokemon4 = {
    nombre: "Incineroar",
    tipo: "fuego",
    nivel: 8,
    energia: 80, 
};
const pokemon5 = {
    nombre: "Charizard",
    tipo: "fuego",
    nivel: 8,
    energia: 80, 
};

const equipo2 = [pokemon4, pokemon5];

console.log(equipo.length + equipo2.length);


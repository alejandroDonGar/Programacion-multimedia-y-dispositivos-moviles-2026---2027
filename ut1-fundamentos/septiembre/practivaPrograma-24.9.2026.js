//1. Mostrar una frase con los tres datos
//2. Restar 30 puntos a la energia
//3. Mostrar la energia restante
//4. Si quedan al menos 50 puntos mostrar un mensaje con condicionales

const nombre = "Incineroar";
const tipo = "Fuego";
let energia = "100";

console.log("-------------------------------------------------");
console.log("1:");
console.log("El pokemon " + nombre + " es de tipo " + tipo + " y tiene una ejercicia de " + energia);

console.log("-------------------------------------------------");
console.log("2:");
console.log(`Se le han restado 30 puntos a la energia a tu pokemon. Ahora tiene: ${energia - 30}`);

console.log("-------------------------------------------------");
console.log("3:");
if (energia < 50) {
    console.log("Necesita descanso");
} else {
    console.log("No hace falta descanso");
}
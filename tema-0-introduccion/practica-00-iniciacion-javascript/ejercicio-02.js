console.log("Esta es mi segunda práctica con JavaScript");
console.log("Vamos a realizar una serie de operaciones y decisiones básicas");
console.log("----------------------------------------");
console.log("Variables a usar:");
const nombre = "Bulbasur";
console.log(`Nombre: ${nombre}`);
const nivel = 10;
console.log(`Nivel: ${nivel}`);
const experienciaActual = 90;
console.log(`Experiencia Actual: ${experienciaActual}`);
const experienciaGanada = 30;
console.log(`Experiencia Ganada: ${experienciaGanada}`);
console.log("----------------------------------------");
console.log("Operación: Suman Experiencia");
const experienciaTotal = experienciaActual + experienciaGanada;
console.log(`${nombre} tenía ${experienciaActual} puntos de experiencia`);
console.log(`${nombre} en batalla ha ganado ${experienciaGanada} puntos de experiencia`);
console.log(`Ahora tiene ${experienciaTotal} puntos de experiencia`);
console.log("----------------------------------------");
console.log("Siguiente Operación: Comprobar una Condición");
if (experienciaTotal > 100) {
	console.log(`${nombre} puede subir de nivel`);
} else {
	console.log(`${nombre} todavia no puede subir de nivel`);
}






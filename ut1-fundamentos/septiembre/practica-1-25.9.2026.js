const pokemon1 = {
    id: 1,
    nombre: "Pikachu",
    tipo: "eléctrico",
    nivel: 20,
    energia: 80,
}
const pokemon2 = {
    id: 2,
    nombre: "Incineroar",
    tipo: "fuego",
    nivel: 14,
    energia: 95,
}
const pokemon3 = {
    id: 3,
    nombre: "Squirtle",
    tipo: "agua",
    nivel: 12,
    energia: 22,
}
const pokemon4 = {
    id: 4,
    nombre: "Charizard",
    tipo: "fuego",
    nivel: 23,
    energia: 87,
}
const pokemon5 = {
    id: 5,
    nombre: "Gengar",
    tipo: "fantasma",
    nivel: 31,
    energia: 23,
}
const equipo = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5];

console.log("================ ALMACEN POKEMON ================");
console.log("");

console.log("Estos son nuestros pokemon:");

console.log(`Primer pokemon: ${equipo[0].nombre} es de nivel ${equipo[0].nivel}`);
console.log(`Segundo pokemon: ${equipo[1].nombre} es de nivel ${equipo[1].nivel}`);
console.log(`Tercer pokemon: ${equipo[2].nombre} es de nivel ${equipo[2].nivel}`);
console.log(`Cuarto pokemon: ${equipo[3].nombre} es de nivel ${equipo[3].nivel}`);
console.log(`Quinto pokemon: ${equipo[4].nombre} es de nivel ${equipo[4].nivel}`);

console.log("");
console.log("============= ESTADO DEL LOS POKEMON ============");
console.log("");

console.log("Estos son los estados del pokemon");

for (const i of equipo) {
    if(i.energia >= 50) {
        console.log(`${i.nombre} puede entrenar porque tiene ${i.energia} -> +50`);
    } else {
        console.log(`${i.nombre} no puede entrenar porque tiene ${i.energia} -> -50`);
    }
};
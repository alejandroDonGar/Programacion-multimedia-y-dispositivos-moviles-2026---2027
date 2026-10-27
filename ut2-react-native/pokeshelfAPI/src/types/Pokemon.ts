// Estructura del JSON que devuelve https://pokeapi.co/api/v2/pokemon/{id}.
// Igual que en gameshelfAPI: el tipo copia los nombres de la API (name, base_experience...)
// y así axios nos da el objeto ya hecho, sin necesitar la clase Pokemon.js de la mini-Pokédex.
// Solo declaramos los campos que usamos; la API manda muchos más y TypeScript los ignora.
export type Pokemon = {
    id: number;
    name: string;
    height: number; 
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string;
        back_default: string;
        front_shiny: string;
    };
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
};
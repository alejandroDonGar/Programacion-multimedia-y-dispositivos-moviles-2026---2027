// Obtiene los datos de la API y los mantiene en una clase. Tiene el mismo procedimeinto que el return que teniamos en la funcion "obtenerPokemon" en la base de la app.
class Pokemon {
    constructor(datos) {
        this.id = datos.id;
        this.nombre = datos.name;
        this.spriteFrente = datos.sprites.front_default;
        this.spriteEspalda = datos.sprites.back_default;
        this.spriteShiny = datos.sprites.front_shiny;
        this.altura = datos.height / 10;
        this.peso = datos.weight / 10;
        this.tipos = datos.types.map(({ type }) => type.name);
        this.experiencia = datos.base_experience;
        this.habilidades = datos.abilities.map(({ ability }) => ability.name);
        this.stats = datos.stats.map(({ stat, base_stat }) => ({ nombre: stat.name, valor: base_stat}));
    }
}
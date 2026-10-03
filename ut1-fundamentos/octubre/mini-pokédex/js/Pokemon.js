// Obtiene los datos de la API y los mantiene en una clase. Tiene el mismo procedimeinto que el return de la funcion "obtenerPokemon"
class Pokemon {
    constructor(datos) {
        this.id = datos.id;
        this.nombre = datos.name;
        this.imagen = datos.sprites.front_default;
        this.altura = datos.height;
        this.peso = datos.weight;
        this.tipos = datos.types.map(({ type }) => type.name);
    }
}
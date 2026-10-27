import { useState } from "react";
import type { Pokemon } from "../types/Pokemon";
import TiposPokemon from "./TiposPokemon";
import { formatearId } from "../utils";

type PokemonCardProps = {
    pokemon: Pokemon;
    onDetalles: (pokemon: Pokemon, shiny: boolean) => void;
};

export default function PokemonCard({ pokemon, onDetalles }: PokemonCardProps) {
    const [deFrente, setDeFrente] = useState(false);

    return (
        <article
            className="tarjeta"
            onMouseEnter={() => setDeFrente(true)}
            onMouseLeave={() => setDeFrente(false)}
        >
            <p className="tarjeta__numero">Nº{formatearId(pokemon.id)}</p>
            <img
                className="tarjeta__imagen"
                src={deFrente ? pokemon.sprites.front_default : pokemon.sprites.back_default}
                alt={pokemon.name}
            />
            <h2 className="tarjeta__nombre">{pokemon.name}</h2>
            <TiposPokemon tipos={pokemon.types} />
            <p className="tarjeta__medidas">
                {pokemon.height / 10} m · {pokemon.weight / 10} kg
            </p>
            {/* Ya no hace falta data-id ni data-shiny: cada botón llama directamente con su Pokémon */}
            <button className="tarjeta__boton" type="button" onClick={() => onDetalles(pokemon, false)}>
                Ver detalles
            </button>
            <button className="tarjeta__boton tarjeta__boton--shiny" type="button" onClick={() => onDetalles(pokemon, true)}>
                Ver shiny
            </button>
        </article>
    );
}
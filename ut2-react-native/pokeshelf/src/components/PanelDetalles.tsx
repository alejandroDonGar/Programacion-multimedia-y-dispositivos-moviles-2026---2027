import type { Pokemon } from "../types/Pokemon";
import TiposPokemon from "./TiposPokemon";
import { formatearId, nombresStats } from "../utils";

type PanelDetallesProps = {
    pokemon: Pokemon;
    shiny: boolean;
    onCerrar: () => void;
};

export default function PanelDetalles({ pokemon, shiny, onCerrar }: PanelDetallesProps) {
    const sprite = shiny ? pokemon.sprites.front_shiny : pokemon.sprites.front_default;

    return (
        <div className="fondo" onClick={onCerrar}>
            <div
                className="panel"
                role="dialog"
                aria-modal="true"
                aria-label={`Detalles de ${pokemon.name}`}
                onClick={(evento) => evento.stopPropagation()}
            >
                <button className="panel__cerrar" type="button" aria-label="Cerrar detalles" onClick={onCerrar}>
                    X
                </button>

                <div className="detalle">
                    <img className="detalle__imagen" src={sprite} alt={`${pokemon.name} ${shiny ? "shiny" : "de frente"}`} />
                    <div className="detalle__datos">
                        <p className="detalle__numero">Nº{formatearId(pokemon.id)}</p>
                        <h2 className="detalle__nombre">{pokemon.name}</h2>
                        <TiposPokemon tipos={pokemon.types} />
                        <dl className="detalle__medidas">
                            <dt>Altura</dt>      <dd>{pokemon.height / 10} m</dd>
                            <dt>Peso</dt>        <dd>{pokemon.weight / 10} kg</dd>
                            <dt>Experiencia</dt> <dd>{pokemon.base_experience}</dd>
                        </dl>
                    </div>
                </div>

                <h3 className="detalle__titulo">Habilidades</h3>
                <ul className="detalle__habilidades">
                    {pokemon.abilities.map(({ ability }) => (
                        <li key={ability.name}>{ability.name.replaceAll("-", " ")}</li>
                    ))}
                </ul>

                <h3 className="detalle__titulo">Estadísticas base</h3>
                <ul className="detalle__stats">
                    {pokemon.stats.map(({ stat, base_stat }) => (
                        <li key={stat.name} className="stat">
                            <span>{nombresStats[stat.name]}</span>
                            <div className="stat__barra">
                                <div className="stat__relleno" style={{ width: `${Math.min((base_stat / 200) * 100, 100)}%` }} />
                            </div>
                            <b>{base_stat}</b>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
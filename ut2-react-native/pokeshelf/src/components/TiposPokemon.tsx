import type { Pokemon } from "../types/Pokemon";

type TiposPokemonProps = {
    tipos: Pokemon["types"];
};

export default function TiposPokemon({ tipos }: TiposPokemonProps) {
    return (
        <div className="tarjeta__tipos">
            {tipos.map(({ type }) => (
                <span key={type.name} className={`tipo tipo--${type.name}`}>
                    {type.name}
                </span>
            ))}
        </div>
    );
}
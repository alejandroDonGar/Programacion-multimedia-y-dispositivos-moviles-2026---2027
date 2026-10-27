import type { Game } from "../types/Game";

type GameCardProps = {
    game: Game;
};

export default function GameCard({ game }: GameCardProps) {
    return (
        <article className="card">
            <h2>{game.name}</h2>
            <p>Género: {game.genre?.join(", ") ?? "Sin género disponible"}</p>
            <p>
                Lanzamiento en Japon: {""}
                {game.releaseDates?.Japan ?? "Sin dato disponible"}
            </p>
            <p>
                Lanzamiento en America del Norte: {""}
                {game.releaseDates?.NorthAmerica ?? "Sin dato disponible"}
            </p>
            <p>
                Lanzamiento en Europa: {""}
                {game.releaseDates?.Europe ?? "Sin dato disponible"}
            </p>
            <p>
                Lanzamiento en Australia: {""}
                {game.releaseDates?.Australia ?? "Sin dato disponible"}
            </p>
        </article>
    )
}
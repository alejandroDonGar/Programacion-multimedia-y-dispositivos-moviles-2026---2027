type GameCardProps = {
    title: string;
    genre: string;
    price: number;
    available: boolean;
};

export default function GameCard({
    title,
    genre,
    price,
    available,
}: GameCardProps) {
    return (
        <article className="card">
            <h2>{title}</h2>
            <p>Género: {genre}</p>
            <p>Precio: {price}</p>
            <button className={available ? "available" : "unavailable"}>
                {available ? "Comprar" : "Agotado"}
            </button>

        </article>
    )
}
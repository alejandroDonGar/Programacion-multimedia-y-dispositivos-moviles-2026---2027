import './App.css'
import GameCard from './components/GameCard';
import { useState } from "react";

type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  available: boolean;
}

const games: Game[] = [
  {
    id: 1, title: "Hollow Knight", genre: "Aventura", price: 14.99, available: true
  },
    {
    id: 2, title: "Celeste", genre: "Plataformas", price: 19.99, available: true
  },
    {
    id: 3, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false
  },
    {
    id: 4, title: "Geomtetry Dash", genre: "Plataformas", price: 13.99, available: true
  },
    {
    id: 5, title: "Slime Ranchers", genre: "Aventura", price: 19.99, available: true
  },
    {
    id: 6, title: "Peak", genre: "Aventura", price: 10.99, available: false
  },
    {
    id: 7, title: "Astroneer", genre: "Exploración", price: 9.99, available: true
  },
    {
    id: 8, title: "Wobbly Life", genre: "Gacha", price: 12.99, available: false
  },
    {
    id: 9, title: "Farming Simulator 25", genre: "Simulación", price: 21.99, available: false
  },
    {
    id: 10, title: "Forager", genre: "Idle", price: 13.99, available: false
  },
    {
    id: 11, title: "Outbound", genre: "Aventura", price: 4.99, available: true
  },
    {
    id: 12, title: "Huntscape", genre: "Terror Analógico", price: 13.99, available: false
  },
    {
    id: 13, title: "Settlement Survival", genre: "Supervivencia", price: 19.99, available: true
  },
  
]

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyUnder15, setOnlyUnder15] = useState(false);  

  const filteredGames = games
    .filter((game) => (onlyAvailable ? game.available : true))
    .filter((game) => (onlyUnder15 ? game.price < 15 : true));

  return (
    <main className="app">
      <h1>GameShelft</h1>

      <p>Mi catálogo de videojuegos</p>

      <button onClick={() => setOnlyAvailable(!onlyAvailable)} className="boton_available">
        {onlyAvailable ? "Mostrar todos" : "Mostrar disponibles"}
      </button>

      <button onClick={() => setOnlyUnder15(!onlyUnder15)} className="boton_precio">
        {onlyUnder15 ? "Mostrar todos" : "Juegos por menos de 15.00"}
      </button>

      <div className="contador">
        {filteredGames.length}
      </div>

      <section className="catalog">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
          />
        ))}
      </section>
    </main>
  );
}

export default App;



//! Imports

// useState guarda y modifica datos sin recargar la página.
// useEffect ejecuta la tarea despues de que el componente se haya mostrado -> Funciones asincronas.
import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "./components/GameCard";
import "./App.css"
import type { Game } from "./types/Game";

//*--------------------------------------------------*//
//! Funcion 'App()'

const API_URL = "https://api.sampleapis.com/switch/games";

function App() {

  //? El useState lo usamos para no tener que recargar la pagina cada vez que hay una actualizacion en la info.
  // Estado de React es dato que la aplicacion recordará mientras la app esté abierta.
  const [games, setGames] = useState<Game[]>([]);
  // Estado que comienza como 'True'.
  const [loading, setLoading] = useState(true);
  // Estado que almacena posibles errors.
  const [error, setError] = useState<string | null>(null);

  // Tendra una promesa para controlar la conexión a la API.

  //? Promesa:
  useEffect(() => {
    async function loadGames() {
      try {
        const respuesta = await axios.get<Game[]>(API_URL);
        setGames(respuesta.data);
      } catch (error) {
        console.error(error);
        setError("No se pudo cargar el catálogo. Inténtelo de nuevo más tarde.")
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    loadGames();
  }, []);

  return (
    <main className="app">
      <h1>Gameshelf</h1>
      <p>Videojuegos recibidos desde la API</p>
      {loading && <p role="status">Cargando videojuegos...</p>}
      
      {error && <p role="alert">{error}</p>}

      {!loading && !error && games.length === 0 && (
        <p>La API no ha devuelto ningun videojuego</p>
      )}

      {!loading && !error && games.length > 0 && (
        <section className="catalog">
          {games.map((game) => (
            <GameCard key={game.id} game={game}/>
          ))}
        </section>
      )}
    </main>
  )
}

export default App;
//! Imports
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";
import PanelDetalles from "./components/PanelDetalles";
import "./App.css";
import type { Pokemon } from "./types/Pokemon";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const TOTAL_POKEMON = 151;

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("todos");
  const [seleccionado, setSeleccionado] = useState<Pokemon | null>(null);
  const [verShiny, setVerShiny] = useState(false);

  useEffect(() => {
    async function loadPokemons() {
      try {
        const ids = Array.from({ length: TOTAL_POKEMON }, (_, i) => i + 1);
        const respuestas = await Promise.all(
          ids.map((id) => axios.get<Pokemon>(`${API_URL}/${id}`))
        );
        setPokemons(respuestas.map((respuesta) => respuesta.data));
      } catch (error) {
        console.error(error);
        setError("No se pudo conectar con la PokéAPI");
      } finally {
        setLoading(false);
      }
    }
    loadPokemons();
  }, []);

  const tipos = [...new Set(pokemons.flatMap((p) => p.types.map((t) => t.type.name)))].sort();
  const texto = busqueda.toLowerCase().trim();
  const filtrados = pokemons
    .filter((p) => p.name.includes(texto) || Number(texto) === p.id)
    .filter((p) => tipo === "todos" || p.types.some((t) => t.type.name === tipo));

  function abrirDetalles(pokemon: Pokemon, shiny: boolean) {
    setSeleccionado(pokemon);
    setVerShiny(shiny);
  }

  return (
    <>
      <header className="cabecera">
        <h1 className="logo">
          <span className="pokeball"></span>
          POKESHELF
        </h1>
      </header>

      <main className="contenedor">
        <div className="buscador">
          <label htmlFor="busqueda">Nombre o número</label>
          <div className="buscador__controles">
            <input
              id="busqueda"
              type="text"
              placeholder="Ejemplo: pikachu o 25"
              autoComplete="off"
              value={busqueda}
              onChange={(evento) => setBusqueda(evento.target.value)}
            />
          </div>

          <label htmlFor="filtro-tipo">Tipo</label>
          <select
            id="filtro-tipo"
            className="buscador__tipo"
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
          >
            <option value="todos">Todos</option>
            {tipos.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {loading && <p className="mensaje" role="status">Cargando Pokémon...</p>}

        {error && <p className="mensaje" role="alert">{error}</p>}

        {!loading && !error && (
          <p className="mensaje" aria-live="polite">
            {filtrados.length === 0
              ? "No hay ningún Pokémon que coincida con la búsqueda."
              : `Mostrando ${filtrados.length} Pokémon`}
          </p>
        )}

        <section className="tarjetas">
          {filtrados.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} onDetalles={abrirDetalles} />
          ))}
        </section>
      </main>

      {seleccionado && (
        <PanelDetalles
          pokemon={seleccionado}
          shiny={verShiny}
          onCerrar={() => setSeleccionado(null)}
        />
      )}
    </>
  );
}

export default App;
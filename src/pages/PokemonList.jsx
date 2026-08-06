import { useEffect, useState } from "react";
import usePokemonAPI from "../services/PokeApiService";

const TYPE_COLORS = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
};

const getIdFromUrl = (url) => url.split("/").filter(Boolean).pop();

const getSpriteUrl = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const PokemonList = () => {
    const { pokemonsLoaded, offset, limit, status, setOffsetAndLimit } = usePokemonAPI();
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [detailsLoading, setDetailsLoading] = useState(false);

    useEffect(() => {
        const results = pokemonsLoaded?.results;
        if (!results || results.length === 0) {
            setPokemonDetails([]);
            return;
        }

        let cancelled = false;
        setDetailsLoading(true);

        Promise.all(
            results.map((p) =>
                fetch(p.url)
                    .then((res) => res.json())
                    .catch(() => null)
            )
        ).then((details) => {
            if (!cancelled) {
                setPokemonDetails(details.filter(Boolean));
                setDetailsLoading(false);
            }
        });

        return () => {
            cancelled = true;
        };
    }, [pokemonsLoaded]);

    const total = pokemonsLoaded?.count ?? 0;
    const canGoPrev = offset > 0;
    const canGoNext = offset + limit < total;

    return (
        <section className="page">
            <div className="pokedex-shell">
                <div className="pokedex-topbar">
                    <div className="pokedex-lens" />
                    <div className="pokedex-dot yellow" />
                    <div className="pokedex-dot green" />
                    <div className="pokedex-dot blue" />
                    <h2 className="pokedex-title">POKÉDEX</h2>
                </div>

                <div className="pokedex-screen">
                    {status === "loading" && (
                        <div className="pokedex-status">Cargando Pokémon...</div>
                    )}

                    {status === "error" && (
                        <div className="pokedex-status">
                            No se pudo cargar la lista de Pokémon.
                        </div>
                    )}

                    {status === "idle" && detailsLoading && (
                        <div className="pokedex-status">Cargando datos de cada Pokémon...</div>
                    )}

                    {status === "idle" && !detailsLoading && pokemonDetails.length > 0 && (
                        <div className="pokedex-grid">
                            {pokemonDetails.map((pokemon) => (
                                <div className="poke-card" key={pokemon.id}>
                                    <span className="poke-card-id">
                                        #{String(pokemon.id).padStart(3, "0")}
                                    </span>
                                    <img
                                        className="poke-card-img"
                                        src={getSpriteUrl(pokemon.id)}
                                        alt={pokemon.name}
                                        loading="lazy"
                                    />
                                    <span className="poke-card-name">{pokemon.name}</span>
                                    <div className="poke-types">
                                        {pokemon.types.map(({ type }) => (
                                            <span
                                                key={type.name}
                                                className="poke-type-badge"
                                                style={{ background: TYPE_COLORS[type.name] || "#777" }}
                                            >
                                                {type.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {status === "idle" &&
                        !detailsLoading &&
                        pokemonDetails.length === 0 &&
                        pokemonsLoaded?.results?.length === 0 && (
                            <div className="pokedex-status">No hay Pokémon para mostrar.</div>
                        )}
                </div>

                <div className="pokedex-pagination">
                    <button
                        className="pokedex-btn"
                        onClick={() => setOffsetAndLimit(Math.max(0, offset - limit), limit)}
                        disabled={!canGoPrev}
                    >
                        ← Anterior
                    </button>
                    <span className="pokedex-range">
                        {total > 0 ? `${offset + 1}–${Math.min(offset + limit, total)} de ${total}` : ""}
                    </span>
                    <button
                        className="pokedex-btn"
                        onClick={() => setOffsetAndLimit(offset + limit, limit)}
                        disabled={!canGoNext}
                    >
                        Siguiente →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PokemonList;

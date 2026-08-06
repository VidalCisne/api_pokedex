import { useEffect, useState } from "react";

const baseAPIUrl = "https://pokeapi.co/api/v2/";

const usePokemonApi = () => {
    const [pokemonsLoaded, setPokemonsLoaded] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(20);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState({});

    const setOffsetAndLimit = (offset = 0, limit = 20) => {
        setOffset(offset);
        setLimit(limit);
    };

    useEffect(() => {
        if (status === "idle") {
            setStatus("loading");
            fetch(`${baseAPIUrl}pokemon?offset=${offset}&limit=${limit}`)
                .then((rst) => rst.json())
                .then((data) => {
                    setPokemonsLoaded(data);
                    setStatus("idle");
                })
                .catch((err) => {
                    setPokemonsLoaded([]);
                    setError(err);
                    setStatus("idle");
                });
        }
        
    }, [offset, limit]);

    return { pokemonsLoaded, offset, limit, status, error, setOffsetAndLimit };
};

export default usePokemonApi;

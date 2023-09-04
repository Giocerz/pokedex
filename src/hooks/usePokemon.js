import { useState, useEffect } from "react";

const POKEAPI_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/';
const POKEAPI_ENDPOINT_SPECIES = 'https://pokeapi.co/api/v2/pokemon-species/';

const DEFAULT_POKEMON_OBJECT = {
    id: null,
    name: null,
    avatar: null,
    weight: null,
    height: null,
    types: {},
    description: null,
    stats: {
        hp: null,
        at: null,
        def: null,
        specialAt: null,
        specialDef: null,
        speed: null
    }
}

const findLastLanguageFlavorText = (flavor_text_entries, lang = 'en') => {
    const flavor_text_english = flavor_text_entries.filter((flavor) => flavor.language.name === lang);
    return flavor_text_english[flavor_text_english.length - 1].flavor_text
}

export function usePokemon(inputValue) {
    const [pokemon, setPokemon] = useState(DEFAULT_POKEMON_OBJECT);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Modo sexo')
        fetch(`${POKEAPI_ENDPOINT}${inputValue}`)
            .then((response) => response.json())
            .then((dataPoke) => {
                fetch(`${POKEAPI_ENDPOINT_SPECIES}${inputValue}`)
                    .then((responseSpecies) => responseSpecies.json())
                    .then((dataSpecies) => {
                        const pokemonData = {
                            id: dataPoke.id,
                            name: dataPoke.species.name,
                            avatar: dataPoke?.sprites.other['official-artwork'].front_default,
                            weight: dataPoke.weight / 10,
                            height: dataPoke.height / 10,
                            types: dataPoke.types,
                            description: findLastLanguageFlavorText(dataSpecies.flavor_text_entries, 'en'),
                            stats: {
                                hp: dataPoke.stats[0].base_stat,
                                at: dataPoke.stats[1].base_stat,
                                def: dataPoke.stats[2].base_stat,
                                specialAt: dataPoke.stats[3].base_stat,
                                specialDef: dataPoke.stats[4].base_stat,
                                speed: dataPoke.stats[5].base_stat
                            }
                        }
                        setPokemon(pokemonData);
                    })
            })
            .catch((error) => {
                setError(error)})
            
            return(() => console.log('Limpieza bebe'))
    }, [inputValue])

    return { pokemon, error}
}


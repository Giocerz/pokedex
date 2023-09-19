import './SearchForm.css'
import { useState, useEffect } from "react";
import { filterSuggestedData } from "../../logic/filterSuggestedData";

export const SearchForm = ({ setPokemonValue }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [timeoutFlag, setTimeoutFlag] = useState(false);
    const [suggestedPokemon, setSuggestedPokemon] = useState([])
    const [searchInputValue, setSearchInputValue] = useState('');

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1008')
            .then((response) => response.json())
            .then((data) => {
                const pokemonNames = data?.results.map((value) => value?.name).filter((value) => {
                    const re = /male/;
                    return !re.test(value);
                }).sort();
                setPokemonList(pokemonNames)
            })
    }, [])

    const handleChange = (event) => {
        let value = event.target.value;
        setSearchInputValue(value);
        clearTimeout(timeoutFlag);
        const changeTimeout = setTimeout(() => {
            value = value.toLowerCase();
            const filterPokemons = filterSuggestedData(pokemonList, value);
            setSuggestedPokemon(filterPokemons);
        }, 500)
        setTimeoutFlag(changeTimeout);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputElement = event.target.elements.numberPokemon;
        const inputValue = inputElement.value.toLowerCase();
        setPokemonValue(inputValue);
    }

    return (
        <form className='find-pokemon-form' onSubmit={handleSubmit}>
            <input name='numberPokemon' type='text' value={searchInputValue} placeholder='Search by name or id' onChange={handleChange} required />
            <input type='submit' value='Go!' />
            {suggestedPokemon.length > 0
                ?
                <section className='coincidenceSearch'>
                    {suggestedPokemon.map((value) =>
                        <button key={`btn-${value}`} onClick={() => {
                            setSearchInputValue(value);
                            setSuggestedPokemon([]);
                        }
                        }>
                            {value}
                        </button>
                    )}
                </section>
                : null}
        </form >
    )
}
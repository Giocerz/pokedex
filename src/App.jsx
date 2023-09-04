import './App.css'
import { useState } from 'react';
import { usePokemon } from './Hooks/usePokemon';
import { FrontDisplay } from './Components/FrontDisplay/FrontDisplay';
import { DisplayType } from './Components/DisplayType/DisplayType';
import { InfoDisplay } from './Components/InfoDisplay/InfoDisplay';
import { HeaderCase } from './Components/HeaderCase/HeaderCase';

function App() {
  console.log('App')
  const [pokemonValue, setPokemonValue] = useState(1);
  const [option, setOption] = useState(0);

  const { pokemon, error } = usePokemon(pokemonValue);

  const valueAdd = () => {
    if (pokemon.id < 1008) {
      setPokemonValue(pokemon.id + 1);
    }
  }

  const valueSubs = () => {
    if (pokemon.id > 1) {
      setPokemonValue(pokemon.id - 1);
    }
  }

  const handle = (event) => {
    event.preventDefault();
    const inputElement = event.target.elements.numberPokemon;
    const inputValue = inputElement.value.toLowerCase();
    setPokemonValue(inputValue);
  }

  return (
    <>
      <div className='container'>
        <div className='case left'>
          <HeaderCase />
          <div className='main-section'>
            <FrontDisplay id={pokemon.id} avatar={pokemon.avatar} name={pokemon.name} />
            <div className='down-panel-section'>
              <div className='form-visual-btn-section'>
                <button title='random' onClick={() => {
                  setPokemonValue(Math.floor(Math.random() * 1008) + 1)
                }} className='form-visual-btn-blue'><i className="fa fa-random"></i></button>
                <div className='form-visual-btn-flat green' />
                <div className='form-visual-btn-flat orange' />
              </div>
              <form className='find-pokemon-form' onSubmit={handle}>
                <input name='numberPokemon' type='text' min={1} max={1000000} placeholder='Search by name or id' required />
                <input type='submit' value='Go!' />
              </form>
              <div className='cross-buttons'>
                <button className='cross-btn up' title='up' onClick={valueAdd}>
                  <i className="fa-solid fa-caret-up"></i>
                </button>
                <button className='cross-btn left' title='left'>
                  <i className="fa-solid fa-caret-left"></i>
                </button>
                <div className='cross-center' />
                <button className='cross-btn right' title='right'>
                  <i className="fa-solid fa-caret-right"></i>
                </button>
                <button className='cross-btn down' title='down' onClick={valueSubs}>
                  <i className="fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='hinge' />
        <div className='case right'>
          <div className='lateral-container'>
            <InfoDisplay option={option} description={pokemon.description} stats={pokemon.stats}/>
            <div className='matrix-buttons'>
              <button className='matrix-btn' title='description' onClick={() => setOption(0)}><i className="fa-sharp fa-solid fa-file-lines"></i></button>
              <button className='matrix-btn' title='stats' onClick={() => setOption(1)}><i className="fa fa-bar-chart"></i></button>
              <button className='matrix-btn'>3</button>
              <button className='matrix-btn'>4</button>
              <button className='matrix-btn'>5</button>
              <button className='matrix-btn'>6</button>
              <button className='matrix-btn'>7</button>
              <button className='matrix-btn'>8</button>
              <button className='matrix-btn'><i className="fa-brands fa-linkedin"></i></button>
              <button className='matrix-btn'><i className="fa-brands fa-github"></i></button>
            </div>
            <div className='case-right-mid-section'>
              {pokemon.types[0]?.type.name ? <DisplayType>{pokemon.types[0]?.type.name}</DisplayType>
                : <DisplayType></DisplayType>}
              {pokemon.types[1]?.type.name ? <DisplayType>{pokemon.types[1]?.type.name}</DisplayType>
                : <DisplayType></DisplayType>}
            </div>
            <div className='case-right-end-section'>
              <div className='weight-height-display'>
                <span>Height: {pokemon.height}m</span>
              </div>
              <div className='weight-height-display'>
                <span>Weight: {pokemon.weight}kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

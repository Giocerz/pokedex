import './App.css'
import { useState } from 'react';
import { usePokemon } from './hooks/usePokemon';
import { FrontDisplay } from './Components/FrontDisplay/FrontDisplay';
import { DisplayType } from './Components/DisplayType/DisplayType';
import { InfoDisplay } from './Components/InfoDisplay/InfoDisplay';
import { HeaderCase } from './Components/HeaderCase/HeaderCase';
import { MatrixButtons } from './Components/MatrixButtons/MatrixButtons';
import { SearchForm } from './Components/SearchForm/SearchForm';

const MAX_ID = 1008;

function App() {
  const [pokemonValue, setPokemonValue] = useState(1);
  const [option, setOption] = useState(0);
  const { pokemon } = usePokemon(pokemonValue);

  const valueAdd = (value) => {
    if (pokemon.id < (MAX_ID - value + 1)) {
      setPokemonValue(pokemon.id + value);
    }
  }

  const valueSubs = (value) => {
    if (pokemon.id > value) {
      setPokemonValue(pokemon.id - value);
    }
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
              <SearchForm setPokemonValue={setPokemonValue} />
              <div className='cross-buttons'>
                <button className='cross-btn up' title='up' onClick={() => valueAdd(1)}>
                  <i className="fa-solid fa-caret-up"></i>
                </button>
                <button className='cross-btn left' title='left' onClick={() => valueSubs(10)}>
                  <i className="fa-solid fa-caret-left"></i>
                </button>
                <div className='cross-center' />
                <button className='cross-btn right' title='right' onClick={() => valueAdd(10)}>
                  <i className="fa-solid fa-caret-right"></i>
                </button>
                <button className='cross-btn down' title='down' onClick={() => valueSubs(1)}>
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
            <MatrixButtons handle={setOption} />
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

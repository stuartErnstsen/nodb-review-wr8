import React from 'react';
import Pokemon from './Pokemon';

//Pokedex is used to pass caughtPokemon to Pokemon.js. It does this through mapping the pokemon
//array received from props and mapping over it, passing each item into the Pokemon component.
const Pokedex = props => {
    const mappedPokemon = props.caughtPokemon.map((pokemon, i) => (
        <Pokemon 
            key={i}
            pokemon={pokemon}
            nameFn={props.nameFn}
            releaseFn={props.releaseFn}/>
    ))

    return (
        <div>
            <h1>Pokedex</h1>
            <div className='poke-flex'>
                {mappedPokemon}
            </div>
        </div>
    )
}

export default Pokedex;
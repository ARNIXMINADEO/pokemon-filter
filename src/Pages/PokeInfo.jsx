import React from 'react'
import { useParams } from 'react-router-dom'
import { PokeData } from '../Components/PokeData'
import styles from "../Css/PokeData.module.css"

export const PokeInfo = ({pokemones=[],setPokeName}) => {
    const {PokemonName} = useParams()
    setPokeName("")
  return (
    <div className={styles.pokeInfo}>
        {pokemones.map((pokemon)=>{
            return PokemonName !== pokemon.name ? null : <PokeData pokemon={pokemon}/>
        })}
    </div>
  )
}

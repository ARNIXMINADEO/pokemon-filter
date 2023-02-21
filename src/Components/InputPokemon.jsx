import { TextField } from '@mui/material'
import React from 'react'
import styles from "../Css/InputPokemon.module.css"

export const InputPokemon = ({setPokeName, pokeName}) => {
  return (
    <div className={styles.input_container}>
      <h1 className={styles.input_title}>Pokedex</h1>
      <TextField className={styles.input} onKeyDown={(e)=>setPokeName(e.target.value) } id="filled-basic" label="Search your pokemon" color='success' />
    </div>
    
  )
}

import React from 'react'
import styles from "../Css/PokeData.module.css"

export const PokeData = ({ pokemon }) => {
    const { id, name, sprites, stats, abilities, base_experience, height, weight, order } = pokemon;

    return (
        <div className={styles.pokeData}>
            <div className={styles.pokeDataImg}>
                <img src={sprites.front_default} alt={name} />
            </div>
            <div className={styles.pokeDataContainer}>
            <h1 className={styles.pokeDataTitle}>PokeData</h1>
            <div className={styles.data}>
            
                <div>
                    <h5>Basic information</h5>
                    <p>Name : {name}</p>
                    <p>ID: {id}</p>
                    <p>Order : {order}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Base Experience : {base_experience}</p>
                </div>
                <div>
                    <h5>Stats</h5>
                
                    {
                        stats.map((stat) => {
                            return stat.stat ? [stat.stat.name + " : ", stat.base_stat, <br></br>] : [];
                        })
                    }
                </div>
                <div>
                    <h5>Abilities</h5>
                    <ul>
                    {
                        abilities.map((ability) => {
                            return ability.ability.name ? <li>{ability.ability.name}</li> : <li></li>
                        })
                    }
                    </ul>
                </div>
                <div>
                    <h5>Pokemon Views</h5>
                    <ul>
                        Coming soon
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

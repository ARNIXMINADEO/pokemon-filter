import { PokeCard } from './PokeCard'

import styles from "../Css/CardList.module.css"

export const CardList = ({ pokemones = [], pokeName, setPokeName}) => {
    return (
        <ul className={styles.card_List} >
            {
                pokemones.filter((item) => {
                    return pokeName === "" ? item : item.name.toLowerCase().includes(pokeName)
                }).map((pokemon) => {
                    return <PokeCard pokemon={pokemon} setPokeName={setPokeName} />
                })
            }
        </ul>
    );
}

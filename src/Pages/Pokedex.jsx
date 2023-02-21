import { InputPokemon } from "../Components/InputPokemon"
import { CardList } from "../Components/CardList"
import { Loading } from "../Components/Loading"
import styles from "../Css/App.module.css"

export const Pokedex = ({ pokemones, setPokeName, pokeName }) => {

    return (
        <>
            <div className={styles.list_container} >
                <InputPokemon setPokeName={setPokeName} pokeName={pokeName} />
                {pokemones ? <CardList pokemones={pokemones} pokeName={pokeName} setPokeName={setPokeName} /> : <Loading />}

            </div>
        </>

    )
}

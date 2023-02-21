import { Link, Outlet, Route, Routes, useParams,useNavigate } from "react-router-dom";
import { Pokedex } from "./Pages/Pokedex";
import { PokeInfo } from "./Pages/PokeInfo";
import { useEffect, useState } from "react"
import { usePromiseAll } from "./Hook/usePromiseAll"
import { Loading } from "./Components/Loading";


function App() {
  const { promises } = usePromiseAll()
  const navigate = useNavigate()
  const [pokeName, setPokeName] = useState("");
  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    setPokemones(promises)
  }, [promises, pokeName])

  return (

    <Routes>
      <Route path="/" element={<Pokedex setPokeName={setPokeName} pokeName={pokeName} pokemones={pokemones} />}/>
      <Route path="/:PokemonName" element={<PokeInfo pokemones={pokemones} setPokeName={setPokeName} />}/>
      <Route path="*" element={<h1>404 error</h1>} />
    </Routes>
  );
}

export default App;

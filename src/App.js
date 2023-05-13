import Header from "./components/Header";
import Formulario from "./components/Formulario"
import Footer from "./components/Footer"
import { useState } from "react";

function App() {

  const [herois, setHerois] = useState([])

  const novoHeroiAdicionado = (heroi) => {
    console.log(heroi)
    setHerois([...herois, heroi])
  }

  return (
    <div>
      <Header/>
      <Formulario heroiCadastrado={heroi => novoHeroiAdicionado(heroi)}/>
      <Footer/>

    </div>
  );
}

export default App;

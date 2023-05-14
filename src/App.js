import Header from "./components/Header";
import Formulario from "./components/Formulario"
import Footer from "./components/Footer"
import { useState } from "react";
import DevHeroes from "./components/DevHeroes";
import barbaro from './components/DevHeroes/imagem/barbaro.png'
import bardo from './components/DevHeroes/imagem/bardo.png'
import elfo from './components/DevHeroes/imagem/elfo.png'
import mago from './components/DevHeroes/imagem/mago.png'
import princesa from './components/DevHeroes/imagem/princesa.png'


function App() {

       
  const classes = [
    {
      tipo: 'Bárbaro',
      corDeFundo: '#795548',
      imagem: barbaro,
      caracteristica: 'Muita força e pouco cérebro'
    },
    {
      tipo: 'Bardo',
      corDeFundo: '#F44336',
      imagem: bardo ,
      caracteristica: 'Acordes afinados e dedos ágeis'
    },
    {
      tipo: 'Elfo',
      corDeFundo: '#8BC34A',
      imagem: elfo,
      caracteristica: 'Flechas brilhantes e cabelos sedosos'
    },
    {
      tipo: 'Mago',
      corDeFundo: '#00BCD4',
      imagem: mago,
      caracteristica: 'Habilidade de sumir após dicas confusas'
    },
    {
      tipo: 'Princesa',
      corDeFundo: '#E91E63',
      imagem: princesa,
      caracteristica: 'Conquista até o inimigo'
    },
]

  const [herois, setHerois] = useState([])

  const novoHeroiAdicionado = (heroi) => {
    console.log(heroi)
    setHerois([...herois, heroi])
  }

  return (
    <div>
      <Header/>
      <Formulario 
        classes={classes.map(classe => classe.tipo)} //refatorando para a lista de herois ficar num lugar só.
        caracteristicas={classes.map(item => item.caracteristica)}//refatorando para a lista de herois ficar num lugar só.
        heroiCadastrado={heroi => novoHeroiAdicionado(heroi)}
      />
      {classes.map(classe => <DevHeroes 
      key={classe.tipo} 
      tipo ={classe.tipo}
      corDeFundo={classe.corDeFundo}
      caracteristica={classe.caracteristica}
      imagem={classe.imagem}
      herois={herois}
      nome=''
      />)}
      <Footer/>

    </div>
  );
}

export default App;

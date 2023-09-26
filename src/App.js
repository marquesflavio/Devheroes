import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import { useState } from "react";
import barbaro from './components/DevHeroes/imagem/barbaro.png'
import bardo from './components/DevHeroes/imagem/bardo.png'
import elfo from './components/DevHeroes/imagem/elfo.png'
import mago from './components/DevHeroes/imagem/mago.png'
import princesa from './components/DevHeroes/imagem/princesa.png'

export default function App() {

  const classes = [
    {
      tipo: 'Bárbaro',
      corDeFundo: '#795548',
      imagem: barbaro,
      
    },
    {
      tipo: 'Bardo',
      corDeFundo: '#F44336',
      imagem: bardo ,
      
    },
    {
      tipo: 'Elfo',
      corDeFundo: '#8BC34A',
      imagem: elfo,
      
    },
    {
      tipo: 'Mago',
      corDeFundo: '#2196F3',
      imagem: mago,
      
    },
    {
      tipo: 'Princesa',
      corDeFundo: '#E91E63',
      imagem: princesa,
      
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
      <Footer/>

    </div>
  );
}


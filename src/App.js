import Header from "./components/Header";
import Formulario from "./components/Formulario"
import Footer from "./components/Footer"
import { useState } from "react";
import DevHeroes from "./components/DevHeroes";


function App() {

       
  const classes = [
    {
      nome: 'Bárbaro',
      corDeFundo: '#795548',
      imagem: 'barbaro.png',
      caracteristica: 'Muita força e pouco cérebro'
    },
    {
      nome: 'Bardo',
      corDeFundo: '#F44336',
      imagem: './images/bardo.png',
      caracteristica: 'Acordes afinados e dedos ágeis'
    },
    {
      nome: 'Elfo',
      corDeFundo: '#8BC34A',
      imagem: './images/elfo.png',
      caracteristica: 'Flechas brilhantes e cabelos sedosos'
    },
    {
      nome: 'Mago',
      corDeFundo: '#00BCD4',
      imagem: './images/mago.png',
      caracteristica: 'Habilidade de sumir após dicas confusas'
    },
    {
      nome: 'Princesa',
      corDeFundo: '#E91E63',
      imagem: './images/princesa.png',
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
        classes={classes.map(classe => classe.nome)} //refatorando para a lista de herois ficar num lugar só.
        caracteristicas={classes.map(item => item.caracteristica)}//refatorando para a lista de herois ficar num lugar só.
        heroiCadastrado={heroi => novoHeroiAdicionado(heroi)}
      />
      {classes.map(classe => <DevHeroes key={classe.nome} nome ={classe.nome}
      corDeFundo={classe.corDeFundo}
      caracteristica={classe.caracteristica}
      imagem={classe.imagem}
      />)}
      <Footer/>

    </div>
  );
}

export default App;

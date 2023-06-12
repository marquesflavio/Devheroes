import DevHeroes from "../DevHeroes/index";
import barbaro from '../DevHeroes/imagem/barbaro.png'
import bardo from '../DevHeroes/imagem/bardo.png'
import elfo from '../DevHeroes/imagem/elfo.png'
import mago from '../DevHeroes/imagem/mago.png'
import princesa from '../DevHeroes/imagem/princesa.png'


function CardHeroiPronto() {

       
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
      corDeFundo: '#2196F3',
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


  return (
    <div>
      {classes.map(classe => <DevHeroes 
      key={classe.tipo} 
      corDeFundo={classe.corDeFundo}
      imagem={classe.imagem}
      nome= "{nome}" //Usuário escolhe
      tipo ={classe.tipo} //Usuário escolhe
      caracteristica={classe.caracteristica} //Usuário escolhe
      />)}
      

    </div>
  );
}

export default CardHeroiPronto;

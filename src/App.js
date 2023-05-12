// import Botao from "./components/Botao/Botao";
import Carousel from "./components/Carousel";
import DevHeroes from "./components/DevHeroes";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header";



function App() {

  const times =[
    
    {
      classe: 'Bárbaro',
      corDeFundo: '#8F694F',
      imagem: '',
      caracteristica: ''
    },
    {
      classe: 'Bardo',
      corDeFundo: '#DE4D26',
      imagem: '',
      caracteristica: ''
    },
    {
      classe: 'Elfo',
      corDeFundo: '#8BC34A',
      imagem: '',
      caracteristica: ''
    },
    {
      classe: 'Mago',
      corDeFundo: '#0C95EB',
      imagem: '',
      caracteristica: ''
    },
    {
      classe: 'Princesa',
      corDeFundo: '#E91E63',
      imagem: '',
      caracteristica: ''
    }
    
  ]


  return (
    <div>
      <Header/>

      <Formulario/>

      {/* Montando o time de forma dinâmica */}
      {times.map(time =><DevHeroes key={time.classe} classe={time.classe} corDeFundo={time.corDeFundo}/>)}
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;

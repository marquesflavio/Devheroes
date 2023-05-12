import './Carousel.css'
import imagem1 from '../DevHeroes/images/barbaro.png'
import imagem2 from '../DevHeroes/images/bardo.png'
import imagem3 from '../DevHeroes/images/elfo.png'
import imagem4 from '../DevHeroes/images/princesa.png'
import imagem5 from '../DevHeroes/images/mago.png'

const Carousel = () =>{

   
    return(
        <div className='imagens'>
          <img src={imagem1} alt='DevHeroe'></img>
          <img src={imagem2} alt='DevHeroe'></img>
          <img src={imagem3} alt='DevHeroe'></img>
          <img src={imagem4} alt='DevHeroe'></img>
          <img src={imagem5} alt='DevHeroe'></img>
        </div>
    )
}

export default Carousel
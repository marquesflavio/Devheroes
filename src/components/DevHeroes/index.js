import './DevHeroes.css'


const DevHeroes = (props) => {
    return(
        <section className='devheroes' style={{backgroundColor: props.corDeFundo}}>       
                <h1>{props.valor}</h1>
                <h2>{props.tipo}</h2>
                <img alt='DevHeroe' src={props.imagem} /> 
            <h3>{props.caracteristica}</h3>
        </section>
    )
}
export default DevHeroes
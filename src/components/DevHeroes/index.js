import './DevHeroes.css'

const DevHeroes = (props) => {
    return(
        <section className='devheroes' style={{backgroundColor: props.corDeFundo}}>
                <h2>{props.nome}</h2>
                <h3>{props.caracteristica}</h3>
                <img src={props.imagem} alt='DevHeroe' />
        </section>
    )
}

export default DevHeroes
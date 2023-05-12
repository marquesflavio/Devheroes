import './DevHeroes.css'

const DevHeroes = (props) => {
    return(
        <section className='devheroes' style={{backgroundColor: props.corDeFundo}}>
            <h2>Seus DevHeroes</h2>
            <h3>Nome</h3>
            <h3>{props.classe}</h3>
            <img src="/images/bardo.png" alt="Imagem do DevHeroe" ></img>
            <p>Frase</p>

        </section>

    )
}

export default DevHeroes
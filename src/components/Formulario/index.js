import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = () =>{

    const classes = [
        'Bábaro',
        'Bardo',
        'Elfo',
        'Mago',
        'Princesa'
    ]

    const caracteristicas = [
        'Muita força e pouco cérebro',
        'Acordes afinados e dedos ágeis',
        'Flechas brilhantes e cabelos sedosos',
        'Habilidade de sumir após dicas confusas',
        'Conquista até o inimigo'
    ]

    return(
        <div className='container-formulario'>
            <form>
                <CampoTexto
                    label="Nome: "
                    placeholder="Digite o nome do seu herói..."
        
                />
                <ListaSuspensa
                    label="Classe:"
                    itens={classes}
                />
                <ListaSuspensa
                    label="Característica:"
                    itens={caracteristicas}
                
                />

                <Botao>
                    Criar Herói
                </Botao>



            </form>

        </div>

    )
}

export default Formulario
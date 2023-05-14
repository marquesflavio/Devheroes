import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) =>{

    function criaHeroi(e){
        e.preventDefault()
        props.heroiCadastrado({
            nome, 
            classe, 
            caract
        })


    }

    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [caract, setCaract] = useState('')

    // const classes = [
    //     'Bábaro',
    //     'Bardo',
    //     'Elfo',
    //     'Mago',
    //     'Princesa'
    // ]

    // const caracteristicas = [
    //     'Muita força e pouco cérebro',
    //     'Acordes afinados e dedos ágeis',
    //     'Flechas brilhantes e cabelos sedosos',
    //     'Habilidade de sumir após dicas confusas',
    //     'Conquista até o inimigo'
    // ]

    return(
        <div className='container-formulario'>
            <form onSubmit={criaHeroi} >
                <CampoTexto
                    label="Nome: "
                    placeholder="Digite o nome do seu herói..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
        
                />
                <ListaSuspensa
                    label="Classe:"
                    itens={props.classes}
                    valor={classe}
                    aoAlterado={valor => setClasse(valor)}

                />
                <ListaSuspensa
                    label="Característica:"
                    itens={props.caracteristicas}
                    valor={caract}
                    aoAlterado={valor => setCaract(valor)}
                
                />

                <Botao>
                    Criar Herói
                </Botao>



            </form>

        </div>

    )
}

export default Formulario
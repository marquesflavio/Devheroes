import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Formulario = (props) =>{
    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [caract, setCaract] = useState('')

    function criaHeroi(e){
        e.preventDefault()
        props.heroiCadastrado({
            nome, 
            classe, 
            caract
        })
        setNome('')
        setClasse('')
        setCaract('')
    }
    
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

            {/* <Link to="/heroicriado"> */}
                <Botao>
                    Criar Card
                </Botao>

            {/* </Link> */}

            </form>

        </div>

    )
}

export default Formulario
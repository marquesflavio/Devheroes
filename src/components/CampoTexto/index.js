
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

//    hook serve para manter um estado dentro de uma função

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)

    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            value={props.valor} 
            type='text' 
            placeholder={props.placeholder}
            onChange={aoDigitado}
            />
           
        </div>
    )
}

export default CampoTexto
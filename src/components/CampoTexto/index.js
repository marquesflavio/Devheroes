
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

//    hook serve para manter um estado dentro de uma função

    const [valor, setValor] = useState('')

    const aoDigitado = (evento) =>{
        setValor(evento.target.value)

    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
            onChange={aoDigitado}
            value={valor} 
            type='text' 
            placeholder={props.placeholder}
            />
        </div>
    )
}

export default CampoTexto
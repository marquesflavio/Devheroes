import { useState } from 'react'
import './CampoTexto.css'

export default function CampoTexto ({ placeholder, label }) {
    //    hook serve para manter um estado dentro de uma função
    const [valor, setValor] = useState('')
    const aoDigitado = (evento) => {
        setValor(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input
                onChange={aoDigitado}
                value={valor}
                type='text'
                placeholder={placeholder}
            />
        </div>
    )
}


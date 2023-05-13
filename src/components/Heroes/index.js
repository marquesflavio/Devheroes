import { useState } from 'react'
import './Heroes.css'

const Heroes = (props) => {



    const [nomeHeroi, setNomeHeroi]= useState('')

    const aoPreenchido = (e) => { /*função para pegar cada valor digitado. O React é orientado a eventos*/
    setNomeHeroi(e.target.value)
    console.log(nomeHeroi)
    }
    return(
        <div className="heroes">
            <label htmlFor='heroes'>{props.label} </label>
            <input onChange={aoPreenchido} id='heroes' value={props.valor} placeholder={props.placeholder} ></input>  
        </div>
    )
}

export default Heroes
// import {useState} from 'react'
import './Heroes.css'

const Heroes = (props) => {
    return(
        <div className="heroes">

            <label for='heroes'>{props.label} </label>
            <input id='heroes' value={props.valor} placeholder={props.placeholder} ></input>  
        </div>
    )
}

export default Heroes
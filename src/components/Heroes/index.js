// import {useState} from 'react'

const Heroes = (props) => {
    return(
        <div className="container-heroes">

            <label>{props.label} </label>
            <input value={props.valor} placeholder={props.placeholder} ></input>  
        </div>
    )
}

export default Heroes
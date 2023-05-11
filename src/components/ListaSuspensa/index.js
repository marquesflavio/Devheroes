import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select className='lista-suspensa-selecao'>
                {props.itens.map(item => <option key={item}>{item}</option>)}                
            </select>
        </div>
    )
}

export default ListaSuspensa
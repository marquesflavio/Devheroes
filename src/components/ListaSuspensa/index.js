import './ListaSuspensa.css'

function ListaSuspensa(props){
    return(
        <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select className='lista-suspensa-selecao'>
            <option value=''>Selecione</option>
            <option>Bárbaro</option>
            <option>Bardo</option>
            <option>Elfo</option>
            <option>Mago</option>
            <option>Princesa</option>
        </select>
        </div>
    )
}

export default ListaSuspensa
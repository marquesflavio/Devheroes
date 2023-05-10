function ListaSuspensa(){
    return(
        <>
        <select value={props.select}></select>
            <option>{props.option}</option>
        </>
    )
}
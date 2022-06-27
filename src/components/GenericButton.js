const GenericButton = ({ type, clases, label, funcion }) =>{
    return (
        <button type={type} className={clases} onClick={funcion}>{label}</button>
    )
}

export default GenericButton
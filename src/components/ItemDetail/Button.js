const Button = ({funcion, label}) =>{
    return (
        <button type="button" className="btn btn-secondary" onClick={funcion}>{label}</button>
    )
}

export default Button
import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import GenericButton from "../../GenericButton"

const ItemCart = ( { marca, modelo,  precio}) => {

    const { removeItem, getCartQuantity } = useContext(CartContext)

       const quantity = getCartQuantity() 
       return (

        <div className="card  mb-3">
            <div className="hstack gap-2">
                
                <div className=" fw-bold mx-auto">{marca}</div>
                <div className=" fw-bold mx-auto">{modelo}</div>
                <div className=" fw-bold mx-auto">${precio}</div>
                <div className=" fw-bold mx-auto ">Cantidad: {quantity}</div>
                <div className="vr ms-auto"></div>
                <div className=" border fw-bold ">Total: ${(precio*quantity)} </div>
                <GenericButton funcion={removeItem} clases="btn btn-danger m-3" type="button" label="Eliminar" />
            </div> 
                
                
        </div>       
        
    )



}

export default ItemCart
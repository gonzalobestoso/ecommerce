import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import Button from "../../ItemDetail/Button"

const ItemCart = ( { marca, modelo, descripcion, precio}) => {

    const { removeItem, getCartQuantity } = useContext(CartContext)

       const quantity = getCartQuantity() 
       return (

        <div className="card  mb-3">
            <div className="hstack gap-2">
                <div className=" border">{marca}</div>
                <div className=" border">{modelo}</div>
                <div className=" border">${precio}</div>
                <div className=" border ">Cantidad: {quantity}</div>
                <div className="vr ms-auto"></div>
                <div className=" border fw-bold ">Total: ${(precio*quantity)} </div>
                <Button funcion={removeItem} label="Eliminar" />
            </div> 
                
                
        </div>       
        
    )



}

export default ItemCart
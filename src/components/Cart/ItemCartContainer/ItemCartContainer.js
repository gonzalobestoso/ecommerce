import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart" 
import Button from "../../ItemDetail/Button"

const ItemCartContainer = () =>{
    const { cart, getCartQuantity, removeItem  } = useContext(CartContext)
    
    const quantity = getCartQuantity()

    if(quantity === 0 ){
        
        return <h1> No hay productos en el carrito </h1>
    }

    return (
        <>
            <h1>Carrito</h1>
            <div>

                 {cart.map(producto => <ItemCart key={producto.id} {... producto} />  )}
                
            </div>

            <Button funcion={removeItem} label="Vaciar Carrito" />
            <Button funcion={(console.log("Orden generada"))} label="Generar Orden" />
        
        </>
    )
}

export default ItemCartContainer
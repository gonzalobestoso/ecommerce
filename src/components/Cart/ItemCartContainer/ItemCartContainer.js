import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart" 
import GenericButton from "../../GenericButton"

const ItemCartContainer = () =>{
    const { cart, getCartQuantity, clearCart  } = useContext(CartContext)
    
    const quantity = getCartQuantity()

    if(quantity === 0 ){
        
        return <h1> No hay productos en el carrito </h1>
    }

    return (
        <>
            <h1>Carrito</h1>         

            {cart.map(producto => <ItemCart key={producto.id} {... producto}  />  )}
           
            <GenericButton funcion={clearCart} clases="btn btn-danger m-3" type="button" label="Vaciar Carrito" />
            <GenericButton funcion={()=>{console.log("orden generada")}} clases="btn btn-success" type="button" label="Generar Orden" />

        </>
    )
}

export default ItemCartContainer
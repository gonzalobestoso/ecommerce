import { useContext } from "react"
import CartContext from "../../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart" 
import GenericButton from "../../GenericButton"
import { Link } from "react-router-dom"
import swal from "sweetalert"


const ItemCartContainer = () =>{
    const { cart, getCartQuantity, clearCart, getTotal  } = useContext(CartContext)
    
    const quantity = getCartQuantity()
    const total = getTotal()

    const showVaciarCarrito = () =>{
        swal({
            title: "Su carrito fue vaciado",
            icon: "success",
            timer: 2000
        })
    }

    

    if(quantity === 0 ){
        
        return <h1> No hay productos en el carrito </h1>
    }

    return (
        <>
            <h1>Carrito</h1>         

            {cart.map(producto => <ItemCart key={producto.id} {... producto}  />  )}
            <p className="fw-bold fs-1"> Total: ${total} </p>
            <GenericButton funcion={()=>{clearCart(); showVaciarCarrito()}} clases="btn btn-danger m-3" type="button" label="Vaciar Carrito" />
            <Link to='/checkout' className='btn btn-success' style={{margin: 5}}> Terminar compra </Link>

        </>
    )
}

export default ItemCartContainer
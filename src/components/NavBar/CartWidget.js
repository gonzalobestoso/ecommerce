import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartWidget = () =>{

    const { cartQuantity } = useContext(CartContext)

    const totalQuantity = cartQuantity()

    return (
        <>
        <img className="ImgCarrito" src="/img/bxs-cart.svg" alt="imagen carrito"/>
        <span className=" top-0 start-100 translate-middle badge rounded-pill  bg-danger"> {totalQuantity} </span>
        </>
        
    )
    
}
 export default CartWidget
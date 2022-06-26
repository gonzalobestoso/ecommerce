import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartWidget = () =>{

    const { getCartQuantity } = useContext(CartContext)

    const totalQuantity = getCartQuantity()

    return (
        <>
        <Link to= '/cart' >
        <img className="ImgCarrito" src="/img/bxs-cart.svg" alt="imagen carrito"/>
        <span className=" top-0 start-100 translate-middle badge rounded-pill  bg-danger"> {totalQuantity} </span>
        </Link>
        </>
        
    )
    
}
 export default CartWidget
import { useState, createContext } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) =>{
        if (!cart.some(producto => producto.id === productToAdd.id))
        setCart([...cart, productToAdd])
    }

    const removeItem = (id) =>{
        const cartSinProducto = cart.filter(producto => producto.id !== id)
            setCart(cartSinProducto)
        }

    const cartQuantity = () =>{
        let totalQuantity = 0

        cart.forEach(producto => {
            totalQuantity += producto.quantity
        })

        return totalQuantity
        
    }

    
    

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, cartQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
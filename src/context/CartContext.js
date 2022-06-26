import { useState, createContext } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])

    const addItem = (productToAdd) =>{
        if (!isInCart(productToAdd.id))
        setCart([...cart, productToAdd])
    }

    const removeItem = (id) =>{
        const cartSinProducto = cart.filter(producto => producto.id !== id)
            setCart(cartSinProducto)
        }

    const isInCart = (id) =>{
        return  cart.some(producto => producto.id === id)
    }

    const getCartQuantity = () =>{
        let totalQuantity = 0

        cart.forEach(producto => {
            totalQuantity += producto.quantity
        })

        return totalQuantity
        
    }

    const clearCart = () =>{
        setCart([])
    }


    

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getCartQuantity, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
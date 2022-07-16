import { useState, createContext, useEffect, useRef} from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{

    const [cart, setCart] = useState([])
    const renderRef = useRef(0)

    useEffect(() =>{
        const cartSaved = localStorage.getItem('cart')
        const cartParsed = JSON.parse(cartSaved)

        setCart(cartParsed)
    }, [])

    useEffect(() =>{
        if (renderRef.current > 0){
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        renderRef.current += 1
    }, [cart])


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

    const getTotal = () =>{
        let total = 0
        cart.forEach(producto =>{
            total += producto.quantity * producto.precio
        })

        return total
    }


    

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, getCartQuantity, clearCart, getTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext
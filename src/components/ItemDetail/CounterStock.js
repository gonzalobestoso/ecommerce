import { useState } from "react";
import Button from "./Button";
import swal from "sweetalert";



const CounterStock = ( { onAdd, initial=1, stock }) => {    

    const showProductoAgregado = () =>{
        swal({
            title: "Producto agregado correctamente",
            icon: "success",
            timer: 2000
        })
    }

    const [count, setCount] = useState(initial)

    const decrement = () =>{
        count > initial && setCount(count -1)
        }
    

    const increment = () =>{
        count < stock && setCount(count + 1)
        }
    

    return(
        <>
        <div>
            <Button funcion={decrement} label='-'/> 
            <span className="fw-bold"> {count}  </span> 
            <Button funcion={increment} label='+'/> 
                    
        </div> 
        <div style={{margin: 10}}>
            <Button funcion={() => {onAdd(count); showProductoAgregado()}} label='Agregar al Carrito' />  
        </div>
        </>       

    )
    }

export default CounterStock


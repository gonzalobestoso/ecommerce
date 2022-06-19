import { useState } from "react";
import Button from "./Button";


const CounterStock = ( { onAdd, initial=1, stock }) => {    

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
            <Button funcion={() => onAdd(count)} label='Agregar al Carrito' />  
        </div>
        </>       

    )
    }

export default CounterStock


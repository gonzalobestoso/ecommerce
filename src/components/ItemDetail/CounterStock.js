import { useState } from "react";
import Button from "./Button";


const CounterStock = ( {initial, stock }) => {    

    const [count, setCount] = useState(initial)

    const decrement = () =>{
        count > initial && setCount(count -1)
        }
    

    const increment = () =>{
        count < stock && setCount(count + 1)
        }
    

    return(
        <div>
        <Button funcion={decrement} label='-'/> 
        <span className="fw-bold"> {count} </span> 
        <Button funcion={increment} label='+'/>
        </div>
  
    )
    }

export default CounterStock


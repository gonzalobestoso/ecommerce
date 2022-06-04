import { useState, useEffect } from "react"
import { getProductos }  from "../../asyncmock"
import ItemList from "./ItemList"

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])

    useEffect(() =>{
        getProductos().then(response =>{
            setProductos(response)
        })
    }, [])

    

    return(
        <div className="container">
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
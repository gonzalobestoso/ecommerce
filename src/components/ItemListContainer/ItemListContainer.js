import { useState, useEffect } from "react"
import { getProductos, getProductosByCategoria }  from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    const { IdCategoria } = useParams() 
    

    useEffect(() =>{
        if(!IdCategoria){
        getProductos().then(response =>{
            setProductos(response)
        })}
        else {
            getProductosByCategoria(IdCategoria).then(response =>{
                setProductos(response)
            })}        
    }, [IdCategoria])

    

    return(
        <div className="container">
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
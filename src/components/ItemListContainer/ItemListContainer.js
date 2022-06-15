import { useState, useEffect } from "react"
import { getProductos, getProductosByCategoria }  from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    const { IdCategoria } = useParams() 
    const [loading, setLoading] =useState(true)
    

    useEffect(() =>{
        setLoading(true)

        if(!IdCategoria){
        getProductos().then(response =>{
            setProductos(response)
        }).finally(() =>{
            setLoading(false)
        })}
        else {
            getProductosByCategoria(IdCategoria).then(response =>{
                setProductos(response)
            }).finally(() =>{
                setLoading(false)
            })}        
    }, [IdCategoria])

    if(loading){
        return (
            <div className="spinner-border mt-3" role="status">
             <span className="visually-hidden">Cargando...</span>
            </div>
        )
    }
    

    return(
        <div className="container">
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
import { useEffect, useState } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const { IdProducto }  = useParams()
    
       

    useEffect(() =>{
        getProductosById(IdProducto).then(response => {
            setProducto(response)
        })
    }, [])

    

    return(      
            
            <ItemDetail {...producto} />
       
    )
}

export default ItemDetailContainer
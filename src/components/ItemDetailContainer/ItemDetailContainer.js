import { useEffect, useState } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const { IdProducto }  = useParams()
    const [loading, setLoading] = useState(true)
    
       

    useEffect(() =>{        
        getProductosById(IdProducto).then(response => {
            setProducto(response)
        }).finally(() =>{
            setLoading(false)
        })
    }, [])

    if(loading){
        return (
            <div className="spinner-border mt-3" role="status">
             <span className="visually-hidden">Cargando...</span>
            </div>
        )
    }

    

    return(      
            
            <ItemDetail {...producto} />
       
    )
}

export default ItemDetailContainer
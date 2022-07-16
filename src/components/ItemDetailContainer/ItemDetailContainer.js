import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase"
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState()
    const { IdProducto }  = useParams()
    const [loading, setLoading] = useState(true)
    
       

    useEffect(() =>{        
        const docRef = doc(db, 'products', IdProducto)

        getDoc(docRef).then(doc =>{
            const productFormatted = { id: doc.id, ...doc.data()}
            setProducto(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(() => { 
            setLoading(false)
        })
    }, [IdProducto])
    

    if(loading){
        return (
            <div className="spinner-border mt-3" role="status">
             <span className="visually-hidden">Cargando...</span>
            </div>
        )
    }    

    return(      
            <div className="col-6 mx-auto">
            <ItemDetail {...producto} />
            </div>
    )
}

export default ItemDetailContainer
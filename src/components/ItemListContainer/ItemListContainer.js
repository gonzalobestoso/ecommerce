import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../services/firebase"

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    const { IdCategoria } = useParams() 
    const [loading, setLoading] =useState(false)
    

    useEffect(() =>{
        setLoading(true)

        const collectionRef = IdCategoria ? ( query(collection(db, 'products'), where('categoria', '==', IdCategoria))) 
                                          : (collection(db, 'products'))

        getDocs(collectionRef).then(resp => {
           const productsFormatted = resp.docs.map(doc => {
            return {id: doc.id, ...doc.data() }
           })
           setProductos(productsFormatted)
        }).catch(error =>{
            console.log(error)
        }).finally(() =>{
            setLoading(false)
        })
          
    }, [IdCategoria])

    if(loading){
        return (
            <div className="spinner-border mt-3" role="status">
             <span className="visually-hidden">Cargando...</span>
            </div>
        )
    }
    

    return(
        <div className="col-lg-6  mx-auto">
        <h1>{props.greeting}</h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer
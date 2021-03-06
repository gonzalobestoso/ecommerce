import './Item.css'
import { Link } from 'react-router-dom'
 
const Item = ({ id, img, marca, modelo, precio }) =>{
    return(
        <div className='col-4 mx-auto'>
            <div className="card Card shadow-lg p-3 mb-5  rounded my-auto ">
                <img src={img} className="card-img-top" alt='imagen producto'/>
                <div className="card-body">
                    <h5 className="card-title">{marca}</h5>
                    <p className="card-text">{modelo}</p>
                    <p className="card-text">${precio}</p>
                    <Link to={`/detail/${id}`} className="btn btn-outline-dark">  Ver Detalle </Link>                
                </div>
            </div>
        </div>

    )
}

export default Item
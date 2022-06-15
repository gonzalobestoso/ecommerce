import { Link } from 'react-router-dom'
import CounterStock from './CounterStock'


const ItemDetail = ( {img, marca, modelo, descripcion, stock}) =>{
    return (
        
        <div className='col-6 mt-3 mx-auto'>
            <div className="card shadow-lg p-3 mb-3 bg-body rounded h-100">
                <div className="card-body">
                    <img src={img} className="card-img-top img-fluid " alt='imagen producto'/>
                    <h3 className="card-title">{marca}</h3>
                    <h5 className="card-title">{modelo}</h5>
                    <p className="card-text">{descripcion}</p>
                    
                    <CounterStock initial={1} stock={stock}/>
                </div>
            </div>
            <Link to='/' className="btn btn-outline-dark mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
                    </svg>  Volver
            </Link>
        </div>
        
        )
}

export default ItemDetail
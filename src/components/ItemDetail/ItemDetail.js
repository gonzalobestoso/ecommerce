import { Link } from 'react-router-dom'


const ItemDetail = ( {img, marca, modelo, descripcion}) =>{
    return (
        <>
        <div className='col-6 mt-3 mx-auto'>
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
                <div className="card-body">
                    <img src={img} className="card-img-top " alt='imagen producto'/>
                    <h3 className="card-title">{marca}</h3>
                    <h5 className="card-title">{modelo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <Link to='/' className="btn btn-dark">Volver</Link>
                </div>
            </div>
        </div>
        </>
        )
}

export default ItemDetail
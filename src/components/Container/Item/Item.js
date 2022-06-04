import './Item.css'

const Item = ({ img, marca, modelo, precio }) =>{
    return(
        
        <div className="card Card">
            <img src={img} className="card-img-top "/>
            <div className="card-body">
                <h5 className="card-title">{marca}</h5>
                <p className="card-text">{modelo}</p>
                <p className="card-text">${precio}</p>                
            </div>
        </div>

    )
}

export default Item
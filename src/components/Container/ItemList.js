import Item from "./Item/Item"

const ItemList = ( { productos }) => {

    return <div className="row mx-auto m-3">             

            {productos.map(producto => <Item key={producto.cod} {... producto} />  )}       

        </div>

}

export default ItemList
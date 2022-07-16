import Logo from "../NavBar/Logo"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebase/index"
import { useContext, useState } from "react"
import CartContext from "../../context/CartContext" 
import swal from "sweetalert"
import { Link } from "react-router-dom"


const Checkout = () =>{

    const { cart, getTotal, clearCart } = useContext(CartContext)

    const total = getTotal()

    const [nombre, setNombre] = useState()
    const [apelllido, setApellido] = useState()
    const [direccion, setDireccion] = useState()
    const [telefono, setTelefono] = useState()
    const [email, setEmail] = useState()

    const showCompraExitosa = () =>{
        swal({
            title: "Su compra finalizó con éxito",
            text: "Lo recibirá en los próximos 5 días hábiles",
            icon: "success",
            timer: 5000
        })
    }


    const handleCreateOrder = () =>{
        const objOrder = {
            buyer: { 
                name: nombre,
                lastName: apelllido,
                email: email,
                phone: telefono,
                address: direccion

            },
            items: cart,
            total: total
        }

        console.log(objOrder)
        const collectionRef = collection(db, 'orders')
        addDoc(collectionRef, objOrder ).then(({ id }) =>{
            console.log(id)
        })



    }

    return (
    <>
    <div className="py-5 text-center">
      <Logo />
      <h2>Finalizar tu compra</h2>    
           
    </div>

    <div className="col-6 mx-auto">
        <h4 className="mb-3">Tus datos</h4>
        <form className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label fw-bold">Nombre</label>
              <input type="text" className="form-control border-dark" id="firstName" onChange={e=>{setNombre(e.target.value) }} placeholder=""  required=""/>
              <div className="invalid-feedback">
                Se requiere un nombre válido.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label fw-bold">Apellido</label>
              <input type="text" className="form-control border-dark" id="lastName" onChange={e=>{setApellido(e.target.value) }} placeholder=""  required=""/>
              <div className="invalid-feedback">
              Se requiere un apellido válido.
              </div>
            </div>

            
            <div className="col-12">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" className="form-control border-dark" id="email"  onChange={e=>{setEmail(e.target.value) }} placeholder="you@example.com"/>
              <div className="invalid-feedback">
               Ingresar un email válido.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="telefono" className="form-label fw-bold">Telefono</label>
              <input type="text" className="form-control border-dark" id="telefono" onChange={e=>{setTelefono(e.target.value) }}  required=""/>
              <div className="invalid-feedback">
                Ingresar un número de teléfono.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label fw-bold">Direccion</label>
              <input type="text" className="form-control border-dark" id="address" onChange={e=>{setDireccion(e.target.value) }} required=""/>
              <div className="invalid-feedback">
                Ingresar direccion de facturación.
              </div>
            </div>
           
          </div>
          
          <hr className="my-4"/>

          <Link to="/" className="btn btn-primary btn-lg" type="submit" onClick={() =>{handleCreateOrder(); showCompraExitosa(); clearCart()}}>Comprar</Link>
        </form>
      </div>
    
    </>
    )

}

export default Checkout
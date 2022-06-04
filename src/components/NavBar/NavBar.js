import Logo from './Logo';
import  './NavBar.css';
import CartWidget from './CartWidget';



const NavBar = () =>{
    return (

    <nav  className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">
            <Logo/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul  className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item fw-bold">
                    <a className="nav-link" aria-current="page" href="#">Motherboards</a>
                    </li>
                    <li className="nav-item fw-bold">
                    <a className="nav-link" href="#">Procesadores</a>
                    </li>
                    <li className="nav-item fw-bold">
                    <a className="nav-link" href="#">Discos</a>
                    </li>
                    <li className="nav-item fw-bold">
                    <a className="nav-link" href="#">Memorias</a>
                    </li>
                    <li className="nav-item fw-bold">
                    <a className="nav-link" href="#">Fuentes</a>
                    </li>
                    <li className="nav-item fw-bold">
                    <a className="nav-link" href="#">Gabinetes</a>
                    </li>
                            
                </ul>            
                <CartWidget/>
            </div>
        </div>
    </nav>
    )
   
}

export default NavBar
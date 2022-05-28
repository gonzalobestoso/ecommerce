import Logo from './Logo';
import CartWidget from './CartWidget';



const NavBar = () =>{
    return (

    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Logo/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#">Motherboards</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Procesadores</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Discos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Memorias</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Fuentes</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Accesorios</a>
                    </li>
                            
                </ul>            
                <CartWidget/>
            </div>
        </div>
    </nav>
    )
   
}

export default NavBar
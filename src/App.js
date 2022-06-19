import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider} from './context/CartContext'
import CartItem from './components/CartItem/CartItem';

function App() {

  return (
    <div className="App">
      <CartProvider>       
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer  greeting='E-commerce'/>} />
              <Route path='/category/:IdCategoria' element={<ItemListContainer />} /> 
              <Route path='/detail/:IdProducto' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartItem />} />      
            </Routes>
          </BrowserRouter>
        </CartProvider> 
    </div>
  );
}

export default App;

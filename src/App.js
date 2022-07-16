import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider} from './context/CartContext'
import ItemCartContainer from './components/Cart/ItemCartContainer/ItemCartContainer';

function App() {

  return (
    <div className="App">
      <CartProvider>       
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer  greeting='GB-Commerce'/>} />
              <Route path='/category/:IdCategoria' element={<ItemListContainer />} /> 
              <Route path='/detail/:IdProducto' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<ItemCartContainer />} /> 
              <Route path='/checkout' element={<Checkout />} />     
            </Routes>
          </BrowserRouter>
        </CartProvider> 
    </div>
  );
}

export default App;

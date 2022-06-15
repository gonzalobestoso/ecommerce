import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">   

      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting='E-commerce'/>} />
          <Route path='/category/:IdCategoria' element={<ItemListContainer />} /> 
          <Route path='/detail/:IdProducto' element={<ItemDetailContainer />} />      
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/Container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer  greeting='E-commerce'/>
    </div>
  );
}

export default App;

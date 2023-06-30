import './App.css';
import NavBar from '../src/componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import CartWidget from './componets/CartWidget/CartWidget';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemListContainer greeting={<CartWidget/>}/>
    </div>
  );
}

export default App;

import Navbar from './Componentes/Navbar.js';
import './App.css';
import logo from './Componentes/img/logo.png';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js';



function App () {

   

  return (
    <div className="App">
 <a href='index.html'><img src={logo} className="logo" alt=""/></a>
<Navbar/>

<ItemListContainer greeting={'Bienvenidos'} mensaje ={ 'amantes del cafe'}/>




    </div>
  );
}

export default App;

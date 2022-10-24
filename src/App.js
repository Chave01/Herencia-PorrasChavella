/*
import React from 'react';
import Navbar from './Componentes/Navbar.js';
import './App.css';

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js';

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import {Cart} from "./Componentes/Cart/Cart";




function App () {

   

  return (
    <div className="App">
 <a href='index.html'></a>
 <BrowserRouter>
<Navbar/>
<Routes>

<Route path ="/" elemente = {<ItemListContainer greeting={'Bienvenidos'} mensaje ={ 'amantes del cafe'}/>}/>
<Route path ="/categoria/:id" element = {<ItemListContainer greeting={'Bienvenidos'} mensaje ={ 'amantes del cafe'}/>}/>
<Route path ="/producto/:id" element= {<ItemDetailContainer/>}/>

<Route path ="/Shop" element= {<Cart/>}/>

</Routes>




</BrowserRouter>



    </div>
  );
}

export default App;
*/


import Navbar from './Componentes/Navbar.js';
import './App.css';
import {Cart} from "./Componentes/Cart/Cart";
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App () {

   

  return (
    <div className="App">

 <BrowserRouter>
 <Navbar/>


<Routes>
<Route path = "/"/>
<Route path ="/categoria/:id" element = {<ItemListContainer greeting={'Bienvenidos'} mensaje ={ 'amantes del cafe'}/>}/>
<Route path ="/producto/:id" element= {<ItemDetailContainer/>}/>
<Route path ="/shop" element= {<Cart/>}/>


</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
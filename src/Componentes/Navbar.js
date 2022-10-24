

import React from 'react';
import './Navbar.css';
import CartWidge from './CartWidge/CartWidge';
import logo from '../Componentes/img/logoNew.png';
import { Link, NavLink } from 'react-router-dom';






const Navbar = () => {

  const catergorias = [

 
    {name:"jewelery" , id:0, ruta :"/categoria/jewelery"},
    {name:"women's clothing" , id:1, ruta :"/categoria/women's clothing"}


  ];




  return (

< header className='navbar'>
  <Link to ="/">

     <img clasname = "logo" src = {logo} alt="" />
     </Link>
     

     <nav>
     
     {catergorias.map ((categoria) => {

       return <NavLink key = {categoria.id} to= {categoria.ruta} > {categoria.name} </NavLink>
     })




     }
            
            </nav>
            <Link to ="/shop">
            <CartWidge/>
            </Link>
</header>
);
    }

export default Navbar


/*
import React from 'react';
import './Navbar.css';
import logo from '../Componentes/img/logo.png';

import CartWidge from './CartWidge/CartWidge';
import {Link, NavLink } from "react-router-dom";



const Navbar = () => {



  const catergorias = [

    {name:"Home" , ruta :"#"},
    {name:"iced" , id:0, ruta :"/categoria/iced"},
    {name:"hot" , id:1, ruta :"/categoria/hot"}


  ];




  return (
  < header className='navbar'>
     <Link to = "/">
     <img clasname = "logo" src = {logo} alt="" />
     </Link>
     <h1>Bienvenidos amantes del Cafe</h1>

     <nav>

     {catergorias.map ((categoria) => {

       return <NavLink key = {categoria.id} to= {categoria.id} > {categoria.name} </NavLink>
     })




     }


  </nav>
  <Link to = "/Shop" >
  <CartWidge/>
  </Link>
  
  
  
  </header>

);
};

export default Navbar




*/












/*
function Navbar() {
  return (

<header className='navbar'>
  
    <nav className='wrapnavbar'>
 
             
             <a href=''>PRODUCTOS</a>
             <a href=''>CATEGORIA</a>
        
            
             <a className="linkbar" href="Registrate.html">INICIAR SESIÓN</a>
              
            
           
             
            
            </nav>

</header>
  );
}

export default Navbar;

*/
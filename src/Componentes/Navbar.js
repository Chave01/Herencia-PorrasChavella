import './Navbar.css';

import CartWidge from './CartWidge/CartWidge';








function Navbar() {
  return (

<header className='navbar'>
  
    <nav className='wrapnavbar'>
 
             <a href='' >HOME</a>
             <a href=''>PRODUCTOS</a>
             <a href=''>CATEGORIA</a>
        
            
             <a className="linkbar" href="Registrate.html">INICIAR SESIÓN</a>
              <CartWidge/>
            
           
             
            
            </nav>

</header>
  );
}

export default Navbar;
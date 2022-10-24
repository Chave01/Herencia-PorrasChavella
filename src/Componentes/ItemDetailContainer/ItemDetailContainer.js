import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { useState,useEffect } from 'react';



const ItemDetailContainer = () => {
 
   

    const [productos, setCoffeeFetch] = useState ([])
    const [loading, setLoading] = useState (true)
     
  
     
     useEffect (() => {
     
       const getItem = async () => {
     
    try {
     
     const res = await fetch ('https://fakestoreapi.com/products/1');
     const data = await res.json ();
     console.log(data);
     
     
    setCoffeeFetch (data);
       }
       catch {
         console.log("error");
     
       }finally {
         setLoading("false");
       }
     };
     getItem ();
    },[]);
     

return (

    <div className='Bodydetailcontainer'> 



      <ItemDetail productos = {productos}/> 
      
    </div>
)






}

export default ItemDetailContainer;



















import './ItemListContainer.css';
import React , { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';






export const ItemListContainer =() => {

  const [productos, setCoffeeFetch] = useState ([])
  const [loading, setLoading] = useState (true)
   
const {id} = useParams ();

const URL_BASE = 'https://fakestoreapi.com/products'
const URL_CATEGORIA =` https://fakestoreapi.com/products/category/${id}`
   
   useEffect (() => {
   
     const getItem = async () => {
   
  try {
   
   const res = await fetch (URL_CATEGORIA);
   const data = await res.json ();

   
   
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
   
  

    return(
     <div style = {styles.container}>
     {productos.map((e) =>
      <ItemList title = {e.title} id = {e.id} image = {e.image}
      /> )

     }
     
        



  

   </div>


   )

}
const styles = {
  container:{
    marginTop:"400px",
    width:"100%",
    height: "2000px",
    display:"flex",
flexDirection: "row",
justifyContent: "space-around",
alignItems: "center",
flexWrap: "wrap",
border: "1px solid yellow",
  }
}

      export default ItemListContainer;











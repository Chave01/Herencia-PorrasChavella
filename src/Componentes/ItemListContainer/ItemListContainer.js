
import './ItemListContainer.css';
import React , { useEffect,useState} from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';






export const ItemListContainer =() => {


  const [productos, setCoffeeFetch] = useState ([])
 const [loading, setLoading] = useState (true)


  useEffect (() => {

    const baseURL = 'https://api.sampleapis.com/coffee/hot';
fetch(baseURL)
  .then(resp => resp.json())
  .then(data => setCoffeeFetch(data))
  
    .catch ((error) => {
      console.log(error);
   

    })

  
    .finally(setLoading (false));

  }, []);


  

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

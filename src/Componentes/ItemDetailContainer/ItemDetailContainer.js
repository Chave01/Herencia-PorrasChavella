import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {
 
   


    const [productos, setCoffeeFetch] = useState ({})

  
  
    useEffect (() => {
  
    const getItem = async () => {

 try{

    const respuesta = await fetch ('https://api.sampleapis.com/coffee/hot/2')
    const data = await respuesta.json()
    setCoffeeFetch(data)
 }
catch 
console.log('hubo un error');
       }
   }
   getItem()

},[])

return (

    <ItemDetail producto = {productos}/>
    
)






}

export default ItemDetailContainer;
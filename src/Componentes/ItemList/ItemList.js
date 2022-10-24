
import React from 'react'
import './ItemList.css'
import { ItemCount } from '../ItemCount/ItemCount'


const onAdd = (count) =>{
    console.log(`Agregaste ${count} al carrito`)
  }
  
export const ItemList = (productos) =>{

  return (

    <div className='coffeeCard'>
      
       <div> {productos.title} </div>
        <div> {productos.id} </div>
        <img src= {productos.image} />
        <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
      
    </div>


  )
}

export default ItemList;



/*
import React from 'react';
import Item from '../Item/Item.js';



const ItemList = ({productos}) => {

return(

    <div>
        {productos.map((productos) => <Item key = {productos.id} productos ={productos}/>)}



    </div>



)




}

export default ItemList










import React from 'react'
import './ItemList.css'
import { ItemCount } from '../ItemCount/ItemCount'









const onAdd = (count) =>{
    console.log(`Agregaste ${count} al carrito`)
  }
  
export const ItemList = (props) =>{

  return (

    <div className='coffeeCard'>
      
       <div> {props.title} </div>
        <div> {props.id} </div>
        <img src= {props.image} />
        <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
      
    </div>


  )
}

export default ItemList;
*/
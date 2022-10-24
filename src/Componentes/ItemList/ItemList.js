
import React from 'react'
import './ItemList.css'
import { ItemCount } from '../ItemCount/ItemCount'


const onAdd = (count) =>{
    console.log(`Agregaste ${count} al carrito`)
  }
  
export const ItemList = (productos) =>{

  return (

    <div className='coffeeCard'>
      
       <div className='title'> {productos.title} </div>
       <div> ${productos.price} </div>
        <div> {productos.id} </div>
        <img src= {productos.image} />
        <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
      
    </div>


  )
}

export default ItemList;




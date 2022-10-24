import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'


const onAdd = (count) =>{
    console.log(`Agregaste ${count} al carrito`)
  }
  
export const ItemDetail = ({productos}) =>{

  return (

    <div className='containerdetalle'>
          <h1>Detalle del producto</h1>
       <div className='titledetalle'> {productos.title} </div>
        <div> {productos.id} </div>
        <div>$ {productos.price}</div>
        <div> {productos.description}</div>
        <img clasname = "imgproducto" src= {productos.image} />
        <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
      
    </div>


  )
}

export default ItemDetail;
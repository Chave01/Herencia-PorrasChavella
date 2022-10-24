import React from "react";




const Item = ({productos}) => {


return (

<div className='coffeeCard'>
        <div> {productos.title} </div>
        <div> {productos.id} </div>
        <img src={productos.image} />
        </div>

)


}

export default Item;

/*
import './Item.css';
import { ItemCount } from '../ItemCount/ItemCount';




    
    
    const onAdd = (count) =>{
        console.log(`Agregaste ${count} al carrito`)
      }
      
    export const Item = ({props}) =>{
    
      return (
    
        <div className='coffeeCard'>
          
           <div> {props.title} </div>
            <div> {props.id} </div>
            <img src= {props.image} />
            <ItemCount stock={8} initial={1} onAdd= {onAdd}></ItemCount>
          
        </div>
    
    
      )
    }
    
    export default Item;
    */
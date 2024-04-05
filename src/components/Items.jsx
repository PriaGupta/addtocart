import React from 'react'
import {useCart} from "../context/Cart";

const Items = (props) => {
    const cart=useCart();

  return (
    
    <div className='item-card'>
      <h2> {props.name}</h2>

      <p>Price: ${props.price}</p>
      <button 
       onClick={()=>
       cart.setItems([...cart.items,//existing items
        {
        name:props.name, price:props.price //new items
       },
    ])    
    }
      >Add to Cart</button>
    </div>
   
  )
}

export default Items

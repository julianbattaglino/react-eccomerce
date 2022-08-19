import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

import { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({stock = 0, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   // UseEffect para la cantidad actual del contador
    useEffect(() => { 
        setQuantity(initial)
    } , [initial])


   const incrementCount = () => {
       if(quantity < stock) {
           setQuantity(quantity +1)
       }
   }

   const decrementCount = () => {
       if(quantity > 1) {
           setQuantity(quantity - 1)
       }     
   }



    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' className="counter-container">
            <Button className="item-btn" onClick={incrementCount}>+</Button>
            <span className="item-count">{quantity}</span>
            <Button className="item-btn" onClick={decrementCount}>-</Button>
            <Button className='item-add' size='md' onClick={() => onAdd(quantity)}>Agregar al carrito</Button>
        </Box>

    );
}


export default ItemCount;
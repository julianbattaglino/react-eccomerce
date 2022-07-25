import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react';

import './Counter.css';


const Counter = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1);

    //increment the count
    const incrementCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    //decrement the count
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }



    return (
        <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' className="counter-container">
            {/*Counter + buttons*/}
            <h2 className='counter-title'>Item count | Max stock 15</h2>
            <span className="item-count">{count}</span>
            <Button className="item-btn" onClick={incrementCount}>+</Button>
            <Button className="item-btn" onClick={decrementCount}>-</Button>
            <Button className='item-add' size='md' onClick={() => onAdd(count)}>Agregar al carrito</Button>
        </Box>

    );
}


export default Counter;

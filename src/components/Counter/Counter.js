import { Button } from '@chakra-ui/react'
import { useState } from 'react';


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
        <div className="counter">
            {/*Counter + buttons*/}
            <span className="item-count">{count}</span>
            <Button className="item-btn" onClick={incrementCount}>+</Button>
            <Button className="item-btn" onClick={decrementCount}>-</Button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>

    );
}


export default Counter;

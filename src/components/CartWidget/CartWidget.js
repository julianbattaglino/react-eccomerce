import { Image } from '@chakra-ui/react'

import "./CartWidget.css";

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()


    return (
        <Link to='/cart'>
        <div className="cart-widget">
            <span className="cart-count"><Image className='cart-icon'
                src="/img/cart-50.png"/>{quantity}</span>
             
        </div>
        </Link>
    );
}

export default CartWidget;
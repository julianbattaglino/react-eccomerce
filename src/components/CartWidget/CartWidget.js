import { Image } from '@chakra-ui/react'
import "./CartWidget.css";

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <span className="cart-count"><Image className='cart-icon'
                src="img/cart-50.png"/>0</span>
             
        </div>
    );
}

export default CartWidget;
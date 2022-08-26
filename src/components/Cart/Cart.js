import "./Cart.css";
import { TbTrashOff } from "react-icons/tb";

import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const { cart, clearCart, removeItem } = useContext(CartContext);
    console.log("Viendo el cart en Cart component", cart);

    return cart.length ? (
        <div className="containerCart">
            <div className="containerTotalCart">
                <div className="totalCart">
                    <p>Precio total: U$D {cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
                </div>
                <div className="buttonCart">
                    <NavLink to="/checkout">
                        <button className="buttonCartCheckout">Finalizar compra</button>
                    </NavLink>
                </div>
                <div className="empty-cart-btn">
                    <TbTrashOff /><button onClick={() => clearCart()} className="textTrash buttonTrash">Vaciar carrito</button>
                </div>
            </div>
            <div className="containerProductsCart">
                {cart.map((product) => (
                    <div className="productCart" key={product.id}>
                        <img className="cart-img" src={product.img} alt={product.name} />
                        <h2 className="cart-name cart-list">Nombre: {product.name}</h2>
                        <h2 className="cart-category cart-list">Categoria: {product.category}</h2>
                        <p className="cart-price cart-list">Precio: U$D {product.price}</p>
                        <p className="cart-quantity cart-list">Cantidad: {product.quantity}</p>
                        <button className="cart-btn delete-product" onClick={() => removeItem(product.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </div>

    ) : (
        <div className="containerEmptyCart">
            <h2 className="textEmptyCart ">SU CARRITO ESTA VACIO </h2>
            <NavLink
                activeclassname="currentCategory"
                className="text-white"
                to={"/"}
            >
                <button className="buttonEmptyCart">Ir a la tienda</button>
            </NavLink>
        </div>
    );
}

export default Cart;
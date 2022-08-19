import { useState, createContext} from 'react'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log("Carrito", cart)

    //Funcion para add to cart
    const addItem = (item) => {
        if(!isInCart(item.id)) {
            setCart([...cart, item])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === item.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: item.quantity
                    }
                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    //Funcion para vaciar la array del carrito y eliminar all productos
    const clearCart = () => {
        setCart([])
    }

    //Funcion para eliminar un producto del carrito segun el id
    const removeItem = (id) => {
        const removeItemId = cart.filter(prod => prod.id !== id)
        setCart(removeItemId)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
        accu += prod.quantity
        })

        return accu
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, isInCart, removeItem, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
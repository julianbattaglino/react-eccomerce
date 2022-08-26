import { useState, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])


    const addItem = (item) => {
        if (!inCart(item.id)) {
            setCart([...cart, item])
        } else {
            const cartUpdated = cart.map(prod => {
                if (prod.id === item.id) {
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

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(newCartWithoutProduct)
    }

    const inCart = (id) => {
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
        <CartContext.Provider value={{ cart, addItem, getQuantity, inCart, removeItem, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {
        
        const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
        setTotalQuantity(newTotalQuantity);
    }, [cart]);


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const calculateTotal = () => {
        // Sumar los precios de los productos en el carrito
        const total = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);

        return total;
    };

    const total = parseInt(calculateTotal());
    console.log(totalQuantity)
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}


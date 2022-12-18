import { createContext, useContext, useState } from 'react'
import { CartDefaultValues } from '../src/types/cart'

const Context = createContext(CartDefaultValues)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState(CartDefaultValues.cart)
  const addToCart = (id: number, quantity: number) => {
    const currentCart = structuredClone(cart)
    const findIndex = cart.findIndex((e) => e.id === id)
    const item = structuredClone(currentCart[findIndex])

    if (findIndex !== -1) {
      item.quantity += quantity
      currentCart[findIndex] = item
    } else {
      currentCart.push({ id, quantity })
    }
    return setCart(currentCart)
  }
  return <Context.Provider value={{ cart, setCart, addToCart }}>{children}</Context.Provider>
}

export function useCartContext() {
  return useContext(Context)
}

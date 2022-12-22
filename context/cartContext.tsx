import { createContext, useContext, useState } from 'react'
import { useFetchItemsQuery } from '../src/hooks/useFetchItemsQuery'
import { CartDefaultValues } from '../src/types/cartTypes'

const Context = createContext(CartDefaultValues)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState(CartDefaultValues.cart)
  const { data } = useFetchItemsQuery()

  const addToCart = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])

    if (index === -1) {
      currentCart.push({ id, quantity })
      return setCart(currentCart)
    }

    item.quantity += quantity
    currentCart[index] = item
    return setCart(currentCart)
  }

  const removeFromCart = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])

    if (index === -1) return currentCart

    item.quantity -= quantity
    currentCart[index] = item

    const filteredCart = currentCart.filter((e) => e.id === 0 || e.quantity > 0)

    return setCart(filteredCart)
  }

  const setItemQuantity = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])

    if (index === -1) return setCart(currentCart)

    item.quantity = quantity
    currentCart[index] = item

    return setCart(currentCart)
  }

  const calculateSubTotal = () => {
    let subTotal = 0

    if (!data) return 0

    cart.map((item) => {
      if (item.id === 0) return
      subTotal += data[item.id - 1].price * item.quantity
    })

    return subTotal
  }

  return (
    <Context.Provider
      value={{ cart, setCart, addToCart, calculateSubTotal, removeFromCart, setItemQuantity }}
    >
      {children}
    </Context.Provider>
  )
}

export function useCartContext() {
  return useContext(Context)
}

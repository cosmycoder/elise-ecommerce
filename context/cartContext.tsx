import { createContext, useContext, useEffect, useState } from 'react'
import { useFetchItemsQuery } from '../src/hooks/useFetchItemsQuery'
import { CartDefaultValues } from '../src/types/cartTypes'

const Context = createContext(CartDefaultValues)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState(CartDefaultValues.cart)
  const { data } = useFetchItemsQuery()

  //set cart from local storage if it exists
  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart')!)
    if (cart) setCart(cart)
  }, [])

  const addToCart = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])
    document.getElementById('navbar')!.style.visibility = 'visible'
    setTimeout(() => {
      document.getElementById('navbar')!.style.opacity = '1'
    }) //make navbar visible with fading in animation.

    //if item is not in cart, add it to cart
    if (index === -1) {
      currentCart.push({ id, quantity })
      setCart(currentCart)
      localStorage.setItem('cart', JSON.stringify(currentCart))
      return
    }

    //if item is in cart, add quantity to it
    item.quantity += quantity
    currentCart[index] = item
    setCart(currentCart)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    return
  }

  const removeFromCart = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])

    if (index === -1) return currentCart

    item.quantity -= quantity
    currentCart[index] = item

    const filteredCart = currentCart.filter((e) => e.id === 0 || e.quantity > 0)
    setCart(filteredCart)
    localStorage.setItem('cart', JSON.stringify(filteredCart))

    return
  }

  const setItemQuantity = (id: number, quantity: number) => {
    let currentCart = structuredClone(cart)
    const index = cart.findIndex((e) => e.id === id)
    let item = structuredClone(currentCart[index])

    if (index === -1) return setCart(currentCart)

    item.quantity = quantity
    currentCart[index] = item
    setCart(currentCart)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    return
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
    <Context.Provider value={{ cart, setCart, addToCart, calculateSubTotal, removeFromCart, setItemQuantity }}>
      {children}
    </Context.Provider>
  )
}

export function useCartContext() {
  return useContext(Context)
}

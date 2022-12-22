export type CartItem = {
  id: number
  quantity: number
}

export const CartDefaultValues = {
  cart: [{ id: 0, quantity: 0 }],
  setCart: (cart: CartItem[]) => {},
  addToCart: (id: number, quantity: number) => {},
  removeFromCart: (id: number, quantity: number) => {},
  setItemQuantity: (id: number, quantity: number) => {},
  calculateSubTotal: () => 0,
}

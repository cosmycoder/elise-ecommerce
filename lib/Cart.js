import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
  cartItems: { type: Array },
  username: { type: String },
})

export default mongoose.models.UserCart || mongoose.model('UserCart', CartSchema, 'userCarts')

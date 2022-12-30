import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect'
import Cart from '../../lib/Cart'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const cart = await Cart.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: cart })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const cart = await Cart.create(req.body) /* create a new entry in the database */
        res.status(201).json({ success: true, data: cart })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../src/data/products'
import { Product } from '../../src/types/fakeApiTypes'

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).send(products)
}

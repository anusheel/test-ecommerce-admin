import type { NextApiRequest, NextApiResponse } from 'next'
import { Order } from '../../types'

let orders: Order[] = [
  {
    id: '1',
    title: 'Order 1',
    description: 'This is order 1',
    dateOfPurchase: '2022-01-01',
    price: 100,
    status: 'completed',
  },
  {
    id: '2',
    title: 'Order 2',
    description: 'This is order 2',
    dateOfPurchase: '2022-01-02',
    price: 200,
    status: 'completed',
  },
  {
    id: '3',
    title: 'Order 3',
    description: 'This is order 3',
    dateOfPurchase: '2022-01-03',
    price: 300,
    status: 'pending',
  },
  {
    id: '4',
    title: 'Order 4',
    description: 'This is order 4',
    dateOfPurchase: '2022-01-04',
    price: 400,
    status: 'completed',
  },
  {
    id: '5',
    title: 'Order 5',
    description: 'This is order 5',
    dateOfPurchase: '2022-01-05',
    price: 500,
    status: 'pending',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[] | Order>
) {
  if (req.method === 'GET') {
    res.status(200).json(orders)
  } else if (req.method === 'POST') {
    const newOrder: Order = req.body
    orders.push(newOrder)
    res.status(201).json(newOrder)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
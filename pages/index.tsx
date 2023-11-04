import Image from 'next/image'
import { Inter } from 'next/font/google'
import AdminDashboard from '../components/AdminDashboard'
import { Order } from '../types'

const inter = Inter({ subsets: ['latin'] })

const orders: Order[] = [
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

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <AdminDashboard orders={orders} />
    </main>
  )
}
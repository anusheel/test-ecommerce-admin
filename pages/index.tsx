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
  // Add more orders as needed
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
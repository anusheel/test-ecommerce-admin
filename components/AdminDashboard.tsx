import React, { useState } from 'react';
import { Order } from '../types';

type AdminDashboardProps = {
  orders: Order[];
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders }) => {
  const [newOrder, setNewOrder] = useState<Order | null>(null);

  const handleAddOrder = () => {
    setNewOrder({
      id: Date.now().toString(),
      title: '',
      description: '',
      dateOfPurchase: new Date().toISOString(),
      price: 0,
      status: 'pending',
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: keyof Order) => {
    if (newOrder) {
      setNewOrder({ ...newOrder, [field]: event.target.value });
    }
  };

  const handleSaveOrder = () => {
    if (newOrder) {
      orders.push(newOrder);
      setNewOrder(null);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 font-semibold">
        Admin Dashboard
      </h3>
      <button onClick={handleAddOrder} className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        +
      </button>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Date of Purchase</th>
            <th className="py-3 px-6 text-center">Price</th>
            <th className="py-3 px-6 text-center">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">{order.title}</td>
              <td className="py-3 px-6 text-left">{order.description}</td>
              <td className="py-3 px-6 text-center">{new Date(order.dateOfPurchase).toLocaleDateString()}</td>
              <td className="py-3 px-6 text-center">{order.price}</td>
              <td className="py-3 px-6 text-center">
                <span className={order.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
          {newOrder && (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <input type="text" value={newOrder.title} onChange={(e) => handleInputChange(e, 'title')} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </td>
              <td className="py-3 px-6 text-left">
                <input type="text" value={newOrder.description} onChange={(e) => handleInputChange(e, 'description')} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </td>
              <td className="py-3 px-6 text-center">{new Date(newOrder.dateOfPurchase).toLocaleDateString()}</td>
              <td className="py-3 px-6 text-center">
                <input type="number" value={newOrder.price} onChange={(e) => handleInputChange(e, 'price')} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </td>
              <td className="py-3 px-6 text-center">
                <button onClick={handleSaveOrder} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
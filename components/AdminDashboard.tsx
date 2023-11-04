import React from 'react';
import { Order } from '../types';

type AdminDashboardProps = {
  orders: Order[];
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="mb-4 font-semibold">
        Admin Dashboard
      </h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date of Purchase</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.title}</td>
              <td>{order.description}</td>
              <td>{new Date(order.dateOfPurchase).toLocaleDateString()}</td>
              <td>{order.price}</td>
              <td>
                <span className={order.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
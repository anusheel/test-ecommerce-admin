export type Order = {
  id: string;
  title: string;
  description: string;
  dateOfPurchase: string;
  price: number;
  status: 'completed' | 'pending';
};
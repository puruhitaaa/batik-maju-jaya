import { ICart, IShippingAddress } from './cart';

type User = {
  _id: string;
  name: string;
  email: string;
};

export interface IOrder {
  _id?: string;
  orderItems: ICart[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  shippingPrice: number;
  createdAt?: string;
  updatedAt?: string;
  isPaid?: boolean;
  isDelivered?: boolean;
  user?: User;
}

export type OrderContextType = {
  orders: IOrder[];
  orderItem: IOrder;
  loading: boolean;
  success: boolean;
  isPaymentSuccess: boolean;
  error: string;
  createOrder: (order: IOrder) => void;
  fetchOrders: () => void;
  fetchOrderById: (orderId: string) => void;
  payOrder: (orderId: string, paymentResult: any) => void;
};

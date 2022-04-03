import axios from 'axios';
import { FC, createContext, useState, useContext, useEffect } from 'react';
import {
  MY_ORDERS_PATH,
  ORDERS_PATH,
  ORDER_DETAILS_PATH,
  ORDER_PAY_PATH,
} from '../../constants/url';
import { IOrder, OrderContextType } from '../../types/order';
import { AuthContext } from '../auth';

const defaultValue = {
  orders: [],
  orderItem: {
    _id: '',
    orderItems: [],
    shippingAddress: {
      address: '',
      country: '',
      city: '',
      postalCode: '',
    },
    paymentMethod: '',
    itemsPrice: 0,
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 0,
    user: {
      _id: '',
      name: '',
      email: '',
    },
  },
  loading: true,
  success: false,
  isPaymentSuccess: false,
  error: '',
  createOrder: () => null,
  fetchOrders: () => null,
  fetchOrderById: () => null,
  payOrder: () => null,
};

export const OrderContext = createContext<OrderContextType>(defaultValue);

export const OrderProvider: FC = ({ children }) => {
  const [orders, setOrders] = useState<IOrder[]>(defaultValue.orders);
  const [orderItem, setOrderItem] = useState<IOrder>(defaultValue.orderItem);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  const [error, setError] = useState('');

  const { auth } = useContext(AuthContext);

  const authConfig = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.token}`,
    },
  };

  const createOrder = async (order: IOrder) => {
    try {
      const { data } = await axios.post(ORDERS_PATH, order, authConfig);

      setOrderItem(data);
      setSuccess(true);
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(MY_ORDERS_PATH, authConfig);

      setOrders(data);
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const fetchOrderById = async (orderId: string) => {
    try {
      const { data } = await axios.get(ORDER_DETAILS_PATH(orderId), authConfig);

      setOrderItem(data);
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const payOrder = async (orderId: string, paymentResult: any) => {
    await axios.put(ORDER_PAY_PATH(orderId), paymentResult, authConfig);
    setIsPaymentSuccess(true);
  };

  useEffect(() => {
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OrderContext.Provider
      value={{
        isPaymentSuccess,
        orders,
        success,
        fetchOrders,
        fetchOrderById,
        createOrder,
        payOrder,
        orderItem,
        loading,
        error,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

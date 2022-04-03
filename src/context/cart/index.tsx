import { FC, createContext, useState } from 'react';
import { ICart, CartContextType, IShippingAddress } from '../../types/cart';

const defaultValue = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  error: '',
  paymentMethod: localStorage.getItem('paymentMethod') || '',
  shippingAddress: JSON.parse(localStorage.getItem('shippingAddress') || '[]'),
  calculateTotal: () => null,
  addToCart: () => null,
  removeFromCart: () => null,
  updateCartItem: () => null,
  saveShippingAddress: () => null,
  savePaymentMethod: () => null,
};

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider: FC = ({ children }) => {
  const [cart, setCart] = useState<ICart[]>(defaultValue.cart);
  const [shippingAddress, setShippingAddress] = useState(
    defaultValue.shippingAddress
  );
  const [paymentMethod, setPaymentMethod] = useState(
    defaultValue.paymentMethod
  );
  const [error, setError] = useState('');

  const calculateTotal = (items: ICart[]) =>
    items
      .reduce((acc: number, item) => acc + item.qty * item.price, 0)
      .toFixed(2);

  const addToCart = async (ci: ICart) => {
    try {
      if (ci.qty === 0) return;

      setCart((prev) => {
        const isItemInCart = prev.find((item) => item.product === ci.product);

        if (isItemInCart) {
          localStorage.setItem(
            'cart',
            JSON.stringify(
              prev.map((item) =>
                item.product === ci.product
                  ? { ...item, qty: item.qty + ci.qty }
                  : item
              )
            )
          );

          return prev.map((item) =>
            item.product === ci.product
              ? { ...item, qty: item.qty + ci.qty }
              : item
          );
        }

        localStorage.setItem('cart', JSON.stringify([...prev, { ...ci }]));

        return [...prev, { ...ci }];
      });
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      setCart((prev) => {
        const findIndex = prev.findIndex((a) => a.product === id);
        let cart = JSON.parse(localStorage.getItem('cart') || '');

        cart.splice(findIndex, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        return cart.splice(findIndex, 1);
      });
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const updateCartItem = async (id: string, qty: number) => {
    try {
      setCart((prev) => {
        const findIndex = prev.findIndex((a) => a.product === id);
        let cart: ICart[] = JSON.parse(localStorage.getItem('cart') || '');

        cart[findIndex].qty = qty;

        localStorage.setItem('cart', JSON.stringify(cart));

        return cart;
      });
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const saveShippingAddress = async (shAddress: IShippingAddress) => {
    setShippingAddress((prev: IShippingAddress[]) => {
      const isExisting = prev.find(
        (item) => item.postalCode === shAddress.postalCode
      );

      if (isExisting) {
        localStorage.setItem(
          'shippingAddress',
          JSON.stringify(
            prev.map((item) =>
              item.postalCode === shAddress.postalCode
                ? { ...item, ...shAddress }
                : item
            )
          )
        );

        return prev.map((item) =>
          item.postalCode === shAddress.postalCode
            ? { ...item, ...shAddress }
            : item
        );
      }

      localStorage.setItem(
        'shippingAddress',
        JSON.stringify([...prev, { ...shAddress }])
      );

      return [...prev, { ...shAddress }];
    });

    localStorage.setItem('preferredAddress', JSON.stringify(shAddress));
  };

  const savePaymentMethod = async (paymentMethod: string) => {
    setPaymentMethod(() => {
      localStorage.setItem('paymentMethod', paymentMethod);

      return paymentMethod;
    });
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        paymentMethod,
        calculateTotal,
        removeFromCart,
        updateCartItem,
        shippingAddress,
        saveShippingAddress,
        savePaymentMethod,
        cart,
        error,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

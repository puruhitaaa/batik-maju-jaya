import _ from 'lodash';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import { CartContext } from '../../context/cart';
import { OrderContext } from '../../context/order';

const Payment = () => {
  const { shippingAddress, paymentMethod, savePaymentMethod, cart } =
    useContext(CartContext);
  const { createOrder, orderItem, success } = useContext(OrderContext);
  const [pay, setPay] = useState(paymentMethod);
  const [postalCode, setPostalCode] = useState('');
  const [addressItem, setAddressItem] = useState(
    JSON.parse(localStorage.getItem('preferredAddress') || '{}')
  );

  const navigate = useNavigate();

  const shippingPrice = 20;
  const taxPrice = 5;

  const calculateItemsPrice = Number(
    cart
      .reduce((acc: number, item) => acc + item.qty * item.price, 0)
      .toFixed(2)
  );

  const calculateTotal = Number(
    (
      (taxPrice / 100) * (calculateItemsPrice + shippingPrice) +
      (calculateItemsPrice + shippingPrice)
    ).toFixed(2)
  );

  const options = [
    {
      provider: 'PayPal',
    },
    {
      provider: 'Card',
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPostalCode(e.target.value);
    setAddressItem(
      shippingAddress.find((el) => el.postalCode === e.target.value)!
    );
  };

  useEffect(() => {
    if (_.isEmpty(shippingAddress)) {
      navigate('/challenge/case-3/shipping');
    }

    if (_.isEmpty(cart)) {
      navigate('/challenge/case-3');
    }

    if (success) {
      navigate(`/challenge/case-3/order/${orderItem._id}`);
    }
  }, [shippingAddress, navigate, cart, success, orderItem]);

  return (
    <>
      <Header title="case-3" />

      <main>
        <div className="max-w-6xl w-full mx-auto space-y-10 py-10">
          <h1 className="text-3xl trackging-wide text-center">Payment</h1>

          <form className="flex flex-col w-full items-center space-y-7">
            <label className="flex flex-col" htmlFor="payment">
              Select payment method
              <select
                className="mt-5 border border-slate-500"
                name="payment"
                id="payment"
                onChange={(e) => {
                  savePaymentMethod(e.target.value.toLowerCase());
                  setPay(e.target.value);
                }}
                value={pay}
              >
                {options.map((el) => (
                  <option key={el.provider} value={el.provider}>
                    {el.provider}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col" htmlFor="address">
              Select address
              <select
                className="mt-5 border border-slate-500"
                name="address"
                id="address"
                onChange={(e) => handleChange(e)}
                value={postalCode}
              >
                {shippingAddress.map((el) => (
                  <option key={el.postalCode} value={el.postalCode}>
                    {el.address}
                  </option>
                ))}
              </select>
            </label>

            <button
              disabled={_.isEmpty(addressItem)}
              className="bg-amber-300 mx-auto block px-5 py-1.5 disabled:text-slate-500 disabled:bg-amber-100 disabled:cursor-not-allowed rounded-full transition-colors hover:bg-slate-400"
              type="button"
              onClick={() =>
                createOrder({
                  itemsPrice: calculateItemsPrice,
                  paymentMethod: paymentMethod,
                  shippingPrice: shippingPrice,
                  shippingAddress: addressItem,
                  taxPrice: taxPrice,
                  totalPrice: calculateTotal,
                  orderItems: cart,
                })
              }
            >
              Place order
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Payment;

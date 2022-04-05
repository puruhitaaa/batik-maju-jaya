import _ from 'lodash';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Header } from '../../components';
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createOrder({
      itemsPrice: calculateItemsPrice,
      paymentMethod: paymentMethod,
      shippingPrice: shippingPrice,
      shippingAddress: addressItem,
      taxPrice: taxPrice,
      totalPrice: calculateTotal,
      orderItems: cart,
    });
  };

  useEffect(() => {
    if (_.isEmpty(shippingAddress)) {
      navigate('/shipping');
    }

    if (_.isEmpty(cart)) {
      navigate('/');
    }

    if (success) {
      navigate(`/order/${orderItem._id}`);
    }
  }, [shippingAddress, navigate, cart, success, orderItem]);

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main>
        <div className="max-w-6xl w-full mx-auto space-y-10 py-10">
          <h1 className="text-3xl trackging-wide text-center">Payment</h1>

          {success && (
            <Alert variant="success" text="Order successfully made" />
          )}
          <form
            className="flex flex-col w-64 mx-auto space-y-5"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="paymentMethod"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Payment Method
            </label>
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="paymentMethod"
              id="paymentMethod"
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

            <label
              htmlFor="postalCode"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Address
            </label>
            <select
              className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="postalCode"
              id="postalCode"
              onChange={(e) => handleChange(e)}
              value={postalCode}
            >
              {shippingAddress.map((el) => (
                <option key={el.postalCode} value={el.postalCode}>
                  {el.address}
                </option>
              ))}
            </select>

            <Button type="submit" variant="warning" text="Place order" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Payment;

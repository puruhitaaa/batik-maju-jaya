import _ from 'lodash';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header } from '../../components';
import { CartContext } from '../../context/cart';

const Shipping = () => {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');

  const navigate = useNavigate();

  const isInvalid =
    address.trim() === '' ||
    city.trim() === '' ||
    postalCode.trim() === '' ||
    country.trim() === '';

  const { cart, saveShippingAddress, shippingAddress } =
    useContext(CartContext);

  const handleContinue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    saveShippingAddress({ address, city, postalCode, country });
    navigate('/payment');
  };

  useEffect(() => {
    if (_.isEmpty(cart)) {
      navigate('/');
    }
  }, [cart, navigate]);

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main>
        <div className="max-w-6xl w-full mx-auto space-y-10 py-10">
          <h1 className="text-3xl tracking-wide text-center">Shipping</h1>

          <form
            className="flex flex-col w-64 mx-auto space-y-5"
            onSubmit={handleContinue}
          >
            <label className="form-label inline-block mb-2 text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter address"
              value={address}
            />

            <label className="form-label inline-block mb-2 text-gray-700">
              City
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city"
              value={city}
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Postal Code
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="Enter post code"
              value={postalCode}
            />

            <label
              htmlFor="exampleFormControlInput1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter country"
              value={country}
            />

            <Button
              isDisabled={isInvalid}
              text="Continue"
              variant="warning"
              type="submit"
            />
            {!_.isEmpty(shippingAddress) && (
              <Button
                onClick={() => navigate('/payment')}
                text="Use existing address/es"
                variant="light"
                type="button"
              />
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Shipping;

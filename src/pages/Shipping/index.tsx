import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';
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

  const handleContinue = () => {
    saveShippingAddress({ address, city, postalCode, country });
    navigate('/challenge/case-3/payment');
  };

  useEffect(() => {
    if (_.isEmpty(cart)) {
      navigate('/challenge/case-3');
    }
  }, [cart, navigate]);

  return (
    <>
      <Header title="case-3" />

      <main>
        <div className="max-w-6xl w-full mx-auto space-y-10 py-10">
          <h1 className="text-3xl tracking-wide text-center">Shipping</h1>

          <form className="flex flex-col w-full items-center space-y-7">
            <label className="flex flex-col" htmlFor="address">
              ADDRESS
              <input
                className="outline-none border border-slate-500 px-3.5 py-1.5 mt-2"
                onChange={(e) => setAddress(e.target.value)}
                placeholder="input address"
                value={address}
                type="text"
              />
            </label>
            <label className="flex flex-col" htmlFor="city">
              CITY
              <input
                className="outline-none border border-slate-500 px-3.5 py-1.5 mt-2"
                onChange={(e) => setCity(e.target.value)}
                placeholder="input city"
                value={city}
                type="text"
              />
            </label>
            <label className="flex flex-col" htmlFor="postalCode">
              POSTAL CODE
              <input
                className="outline-none border border-slate-500 px-3.5 py-1.5 mt-2"
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="input postal code"
                value={postalCode}
                type="text"
              />
            </label>
            <label className="flex flex-col" htmlFor="country">
              COUNTRY
              <input
                className="outline-none border border-slate-500 px-3.5 py-1.5 mt-2"
                onChange={(e) => setCountry(e.target.value)}
                placeholder="input country"
                value={country}
                type="text"
              />
            </label>

            <button
              disabled={isInvalid}
              type="button"
              className="bg-amber-300 mx-auto block px-5 py-1.5 disabled:text-slate-500 disabled:bg-amber-100 disabled:cursor-not-allowed rounded-full transition-colors hover:bg-slate-400"
              onClick={() => handleContinue()}
            >
              Continue
            </button>
            {!_.isEmpty(shippingAddress) && (
              <button
                type="button"
                className="bg-slate-300 mx-auto block px-5 py-1.5 rounded-full transition-colors hover:bg-slate-400"
                onClick={() => navigate('/challenge/case-3/payment')}
              >
                Use existing address/es
              </button>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Shipping;

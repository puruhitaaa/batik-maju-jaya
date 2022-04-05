import _ from 'lodash';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { CartContext } from '../../context/cart';
import { OrderContext } from '../../context/order';
import Button from '../Button';

const Header = () => {
  const navigate = useNavigate();
  const { auth, logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const { orders } = useContext(OrderContext);

  return (
    <div className="h-20 w-full bg-stone-700">
      <header className=" flex items-center w-full h-full max-w-6xl mx-auto px-2.5">
        <h1
          className="text-amber-500 capitalize font-bold text-2xl cursor-pointer"
          onClick={() => navigate('/')}
        >
          Batik Maju Jaya
        </h1>

        <div className="ml-auto items-center flex space-x-5">
          {!_.isEmpty(cart) && (
            <svg
              onClick={() => navigate('/cart')}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-amber-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          )}

          {_.isEmpty(auth) ? (
            <>
              <Button
                type="button"
                onClick={() => navigate('/login')}
                variant="light"
                text="Login"
              />
              <Button
                type="button"
                onClick={() => navigate('/register')}
                variant="light"
                text="Register"
              />
            </>
          ) : (
            <>
              {!_.isEmpty(orders) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-lime-500 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  onClick={() => navigate('/my-orders')}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              )}

              <button
                className="ml-auto bg-red-600 text-slate-50 px-5 py-1.5 rounded-full transition-colors hover:bg-slate-400"
                onClick={logout}
              >
                Logout
              </button>

              {auth.isAdmin && (
                <button className="ml-auto bg-slate-300 px-5 py-1.5 rounded-full transition-colors hover:bg-slate-400">
                  Manage User
                </button>
              )}
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

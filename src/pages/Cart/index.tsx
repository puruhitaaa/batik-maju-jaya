import _ from 'lodash';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem, Header } from '../../components';
import { AuthContext } from '../../context/auth';
import { CartContext } from '../../context/cart';

const Cart = () => {
  const { auth } = useContext(AuthContext);
  const { cart, calculateTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <Header title="case-3" />

      {!_.isEmpty(cart) ? (
        <main className="flex flex-col">
          <div className="max-w-6xl my-10 mx-auto">
            <h1 className="text-3xl trackging-wide">Cart Page</h1>
          </div>

          <div className="max-w-6xl flex flex-col md:flex-row space-x-5 items-center mx-auto h-full w-full">
            <div className="space-y-2.5 w-3/4 h-96 divide-y divide-slate-500 py-2 overflow-y-scroll scrollbar-hide">
              {cart.map((element) => (
                <CartItem
                  key={element.product}
                  product={element.product}
                  countInStock={element.countInStock}
                  image={element.image}
                  name={element.name}
                  price={element.price}
                  qty={element.qty}
                />
              ))}
            </div>

            <div className="max-w-6xl mx-auto space-y-5 divide-y-2 divide-slate-500 p-12">
              <div className="flex space-x-5 items-center pb-2.5">
                <h5>
                  <span className="font-semibold">
                    Subtotal ({cart.length} items):
                  </span>{' '}
                  ${calculateTotal(cart)}
                </h5>
              </div>

              <div className="pt-2.5">
                <button
                  type="button"
                  className="bg-amber-500 mx-auto block px-5 py-1.5 rounded-full transition-colors hover:bg-amber-700"
                  onClick={() => navigate('/challenge/case-3/shipping')}
                >
                  Proceed
                </button>
              </div>

              {_.isEmpty(auth) && (
                <p className="text-center text-slate-400">
                  You have to be logged in to proceed
                </p>
              )}
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-col space-y-5 justify-center">
          <h1 className="text-3xl mt-12 text-center tracking-wide">
            No cart items added yet.
          </h1>

          <button
            className="bg-slate-300 mx-auto px-10 py-1.5 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </main>
      )}
    </>
  );
};

export default Cart;

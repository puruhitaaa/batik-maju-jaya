import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components';
import Review from '../../components/Review';
import { CartContext } from '../../context/cart';
import { ProductContext } from '../../context/product';

const Product = () => {
  const { productId = '' } = useParams();
  const { fetchProductById, product } = useContext(ProductContext);
  const { cart } = useContext(CartContext);
  const [options] = useState([...Array(product.countInStock).keys()]);
  const [qty, setQty] = useState(0);

  const isAvailable =
    cart.filter((el) => el.product === product._id)[0]?.qty >
    product.countInStock
      ? false
      : true;

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(productId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <>
      <Header title="case-3" />

      {!_.isEmpty(product) ? (
        <main>
          <div className="flex flex-col md:flex-row space-y-10 max-w-6xl mx-auto justify-center space-x-10 py-5 md:py-10 items-center">
            <div className="w-96 h-96">
              <img
                className="w-full h-full"
                src={product.image}
                alt={product.price?.toString()}
              />
            </div>

            <div className="flex flex-col justify-center space-y-5 divide-y-2">
              <div>
                <h1 className="text-3xl tracking-wide">{product.name}</h1>
              </div>

              <div>
                <p className="tracking-wide">Brand: {product.brand}</p>
              </div>

              <div>
                <p className="tracking-wide">{product.numReviews} reviews</p>
              </div>

              <div>
                <p className="tracking-wide">Price: ${product.price}</p>
              </div>

              <div className="max-w-md">
                <p className="tracking-wide">{product.description}</p>
              </div>
            </div>

            <div className="border rounded-lg border-slate-500 divide-y space-y-5 px-12 py-12">
              <div className="flex space-x-5 items-center py-2.5">
                <h5>Price:</h5>
                <p>${product.price}</p>
              </div>

              <div className="flex space-x-5 items-center py-2.5">
                <div>
                  <p>Qty</p>
                </div>

                {product.countInStock > 0 && (
                  <select
                    className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    onChange={(e) => setQty(Number(e.target.value))}
                    value={qty}
                  >
                    {!_.isEmpty(options)
                      ? options.map((el) => <option key={el}>{el}</option>)
                      : null}
                  </select>
                )}
              </div>

              <button
                disabled={!isAvailable || product.countInStock <= 0}
                type="button"
                className="bg-slate-300 mx-auto block px-5 py-1.5 disabled:text-slate-500 disabled:bg-slate-100 disabled:cursor-not-allowed rounded-full transition-colors hover:bg-slate-400"
                onClick={() =>
                  addToCart({
                    product: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    countInStock: product.countInStock,
                    qty,
                  })
                }
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {_.size(product.reviews) > 0 &&
              product.reviews.map((element) => (
                <>
                  <h1 className="text-2xl mb-5 font-bold tracking-wide">
                    Reviews
                  </h1>

                  <Review
                    key={element._id}
                    _id={element._id}
                    createdAt={element.createdAt}
                    name={element.name}
                    comment={element.comment}
                    rating={element.rating}
                  />
                </>
              ))}
          </div>
        </main>
      ) : (
        <h1 className="animate-pulse mt-12 text-4xl text-center">Loading...</h1>
      )}
    </>
  );
};

export default Product;

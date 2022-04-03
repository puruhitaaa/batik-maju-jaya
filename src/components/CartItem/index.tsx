import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart';
import { ICart } from '../../types/cart';

const CartItem = ({
  product,
  countInStock,
  image,
  name,
  price,
  qty: quantity,
}: ICart) => {
  const { removeFromCart, updateCartItem } = useContext(CartContext);
  const [options] = useState(
    [...Array(countInStock).keys()] || [1, 2, 3, 4, 5]
  );
  const [qty, setQty] = useState(quantity);

  return (
    <div className="flex items-center w-full p-3">
      <div className="w-32 mx-5">
        <img className="w-full h-full" src={image} alt={price.toString()} />
      </div>

      <div className="mx-5">
        <h5 className="text-2xl tracking-wide">{name}</h5>
        <p className="tracking-wide">${price} per unit</p>
      </div>

      <select
        className="form-select appearance-none flex justify-center items-center px-5 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        onChange={(e) => {
          setQty(Number(e.target.value));
          updateCartItem(product, Number(e.target.value));
        }}
        value={qty}
      >
        {options.map((el) => (
          <option key={el}>{el}</option>
        ))}
      </select>

      <div className="ml-auto flex h-full items-center space-x-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          onClick={() => removeFromCart(product)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;

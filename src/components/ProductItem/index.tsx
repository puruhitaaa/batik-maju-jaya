import { useNavigate } from 'react-router-dom';
import Rating from '../Rating';

interface Props {
  _id: string;
  price: number;
  name: string;
  rating: number;
  image: string;
}

const ProductItem = ({ _id, price, name, image }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex justify-center cursor-pointer"
      onClick={() => navigate(`/product/${_id}`)}
    >
      <div className="rounded-lg shadow-md bg-white max-w-sm">
        <img className="rounded-t-lg object-cover" src={image} alt={name} />

        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <Rating />
          <p className="text-gray-700 text-base mb-4">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

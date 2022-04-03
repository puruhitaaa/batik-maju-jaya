import { useNavigate } from 'react-router-dom';

interface Props {
  _id: string;
  price: number;
  name: string;
  rating: number;
  numReviews: number;
  image: string;
}

const ProductItem = ({
  _id,
  price,
  name,
  rating,
  numReviews,
  image,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-52 h-96 flex flex-col items-center border border-slate-500 shadow-md cursor-pointer group"
      onClick={() => navigate(`product/${_id}`)}
    >
      <div className="w-52 h-52 p-2.5">
        <img
          className="w-full h-full group-hover:animate-pulse"
          alt={price?.toString()}
          src={image}
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-2.5">
        <div>
          <p className="tracking-wide text-center">{name}</p>
        </div>

        <div>
          <p className="tracking-wide text-sm">{numReviews} reviews</p>
        </div>

        <div>
          <h5 className="text-xl tracking-wider">${price}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import { Review as ReviewProps } from '../../types/product';

const Review = ({ _id, name, comment, rating, createdAt }: ReviewProps) => {
  return (
    <div className="w-full p-5 space-y-5 shadow-md">
      <div className="w-full">
        <h5 className="font-semibold">{name}</h5>
        <h5 className="font-light">{createdAt}</h5>
      </div>

      <div className="w-full">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Review;

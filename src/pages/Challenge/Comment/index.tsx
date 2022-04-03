import { Header } from '../../../components';
import { useComment } from '../../../hooks/commentHook';

const Comment = () => {
  const { totalComments } = useComment();

  return (
    <div>
      <Header title="case-2" />

      <main className="h-screen md:h-[80vh] flex flex-col items-center">
        <div className="w-full mx-auto max-w-6xl space-y-5 flex flex-col items-center my-auto">
          <img
            className="w-[500px]"
            src="https://i.ibb.co/7kx9Bvd/carbon-1.png"
            alt=""
          />

          <h1 className="tracking-wider text-2xl">Hasil :</h1>
          <p className="tracking-wider">{totalComments} buah komentar</p>
        </div>
      </main>
    </div>
  );
};

export default Comment;

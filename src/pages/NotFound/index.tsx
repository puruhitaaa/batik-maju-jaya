import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <main className="max-w-6xl h-full w-full mx-auto flex flex-col justify-center items-center space-y-10">
        <h1 className="text-3xl text-red-600 font-bold">404 Not found</h1>
        <button
          type="button"
          className="bg-slate-300 px-5 py-2.5 rounded-full transition-colors hover:bg-slate-400"
          onClick={() => navigate('/')}
        >
          Go back to challenges' main page
        </button>
      </main>
    </div>
  );
};

export default NotFound;

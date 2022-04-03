import { useNavigate } from 'react-router-dom';
import { Header } from '../../components';

const Challenge = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header title="challenge" />

      <main className="h-screen md:h-[80vh]">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl space-y-10 md:space-y-0 md:space-x-20">
          <div
            className="h-72 w-72 cursor-pointer shadow-md"
            onClick={() => navigate('challenge/case-1')}
          >
            <div className="w-full h-full hover:shadow-inner transition-all delay-100 text-slate-50 ease-in-out flex flex-col items-center justify-center relative group">
              <img
                className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0 brightness-50"
                src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
                alt="fruit"
              />
              <h1 className="font-bold text-3xl tracking-widest group-hover:scale-150 z-50">
                Kasus 1
              </h1>
              <p className="group-hover:block hidden text-xl z-50">Buah andi</p>
            </div>
          </div>

          <div
            className="h-72 w-72 cursor-pointer shadow-md"
            onClick={() => navigate('challenge/case-2')}
          >
            <div className="w-full h-full hover:shadow-inner transition-all delay-100  text-slate-50 ease-in-out flex flex-col items-center justify-center relative group">
              <img
                className="absolute w-full h-full object-cover top-0 left-0 right-0 bottom-0 brightness-50"
                src="https://preview.redd.it/vbg1bd56kgj11.jpg?auto=webp&s=18e8965df8922d964f5867cf5ae0aae972890c71"
                alt="fruit"
              />
              <h1 className="font-bold text-3xl tracking-widest group-hover:scale-150 z-50">
                Kasus 2
              </h1>
              <p className="group-hover:block hidden text-xl z-50">Komentar</p>
            </div>
          </div>

          <div
            className="h-72 w-72 bg-slate-500 hover:bg-slate-200 transition-all delay-100  ease-in-out cursor-pointer"
            onClick={() => navigate('challenge/case-3')}
          >
            <div className="w-full h-full flex flex-col items-center justify-center group">
              <h1 className="font-bold text-3xl tracking-widest group-hover:scale-150">
                Kasus 3
              </h1>
              <p className="group-hover:block hidden text-xl">E-Commerce</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Challenge;

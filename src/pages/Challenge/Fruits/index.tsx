import { Header, Modal } from '../../../components';
import { useFruit } from '../../../hooks/fruitHook';

const Fruits = () => {
  const { categorizedFruits, fruits, importStocks, localStocks } = useFruit();

  return (
    <>
      <Header title="case-1" />

      <main className="w-full h-screen md:h-[85vh] max-w-6xl mx-auto my-5 md:my-0 flex flex-col md:flex-row items-center space-y-5 px-1.5 md:px-2.5">
        <div>
          <h1 className="font-semibold text-lg mb-5">Case 1 Answer</h1>
          <p className="tracking-wide">
            <span className="font-bold">Nama-nama</span> buah :
          </p>
          <p className="mb-5">(dengan duplikat fruitName)</p>
          <ul className="mb-5">
            {fruits.map((element) => (
              <li className="tracking-wider" key={element.fruitId}>
                - {element.fruitName}
              </li>
            ))}
          </ul>

          <div className="space-y-5 pb-10">
            <p className="tracking-wide">
              <span className="font-bold">
                {Object.keys(categorizedFruits).length} wadah
              </span>{' '}
              untuk menampung buah, yaitu :
            </p>

            <div className="flex items-center">
              <p className="tracking-wide mr-2">
                - {Object.keys(categorizedFruits)[0]}
              </p>
              <p className="font-semibold">[{importStocks}] stock</p>
              <Modal type="import" />
            </div>

            <div className="flex items-center">
              <p className="tracking-wide mr-2">
                - {Object.keys(categorizedFruits)[1]}
              </p>
              <p className="font-semibold">[{localStocks}] stock</p>
              <Modal type="local" />
            </div>
          </div>
        </div>

        <Modal type="comment" />
      </main>
    </>
  );
};

export default Fruits;

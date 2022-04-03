import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useFruit } from '../../hooks/fruitHook';
import { useModal } from '../../hooks/modalHook';

interface Props {
  type:
    | 'local'
    | 'import'
    | 'comment'
    | 'case-1'
    | 'case-2'
    | 'case-3'
    | 'challenge';
}

const Modal = ({ type }: Props) => {
  const { show, setShow } = useModal();
  const { importFruits, localFruits } = useFruit();

  switch (type) {
    case 'import':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="ml-auto bg-slate-300 px-2.5 py-1 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat buah
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Daftar buah import
                    </Dialog.Title>
                    <div className="mt-2">
                      {importFruits.map((el) => (
                        <div
                          className="flex items-center space-x-2.5"
                          key={el.fruitId}
                        >
                          <p className="text-sm text-gray-500">
                            {el.fruitName}
                          </p>
                          <p>{el.stock} buah</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    case 'local':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="ml-auto bg-slate-300 px-2.5 py-1 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat buah
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Daftar buah lokal
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col justify-center">
                      {localFruits.map((el) => (
                        <div
                          className="flex items-center space-x-2.5"
                          key={el.fruitId}
                        >
                          <p className="text-sm text-gray-500">
                            {el.fruitName}
                          </p>
                          <p>{el.stock} buah</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    case 'comment':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="bg-slate-300 md:ml-auto px-5 py-3 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat komentar
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Komentar saya tentang{' '}
                      <span className="font-bold">kasus 1</span> adalah :
                    </Dialog.Title>
                    <div className="flex flex-col items-center px-2.5">
                      <ul>
                        <li>
                          Saya notice bahwa terdapat item dengan nama duplikat,
                          namun dengan ID yang berbeda.
                          <ul className="space-y-5">
                            <li className="font-thin">
                              Berikut cara saya apabila ingin menghilangkan
                              duplikat property{' '}
                              <span className="font-semibold">fruitName</span> :
                            </li>
                            <li>
                              <code>const uniqueValuesSet = new Set();</code>
                            </li>
                            <li className="max-w-lg">
                              <code>{`const uniqueFruitNames = fruits.filter((el) => {
const isPresentInSet = uniqueValuesSet.has(el.fruitName);

uniqueValuesSet.add(el.fruitName);

return !isPresentInSet;
});`}</code>
                            </li>
                            <li className="font-thin">
                              dimana fruits adalah array buah yang terdapat
                              duplikat.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    case 'challenge':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="ml-auto bg-slate-300 px-5 py-2.5 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat kasus
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Daftar kasus
                    </Dialog.Title>
                    <div className="mt-2">
                      <p>
                        <span className="font-semibold">1.</span> Buah apa saja
                        yang dimiliki Andi? (fruitName)
                      </p>
                      <p>
                        <span className="font-semibold">2.</span> Andi
                        memisahkan buahnya menjadi beberapa wadah berdasarkan
                        tipe buah (fruitType). Berapa jumlah wadah yang
                        dibutuhkan? Dan ada buah apa saja di masing-masing
                        wadah?
                      </p>
                      <p>
                        <span className="font-semibold">3.</span> Berapa total
                        stock buah yang ada di masing-masing wadah?
                      </p>
                      <p>
                        <span className="font-semibold">4.</span> Apakah ada
                        komentar terkait kasus di atas?
                      </p>
                      <p>
                        <span className="font-semibold">5.</span> Buatlah fungsi
                        untuk menghitung total komentar yang ada, termasuk semua
                        balasan komentar. Berdasarkan data di atas, total
                        komentar adalah 7 komentar.
                      </p>
                      <p>
                        <span className="font-semibold">6.</span> Buatlah
                        minimal 1 halaman untuk memperkenalkan sebuah UMKM.
                        Desain bebas. Buatlah semenarik mungkin. Boleh dibuat
                        sebagai website ataupun mobile app (bebas pilih). Jika
                        diperlukan, diperbolehkan untuk membuat backend
                        sederhana.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    case 'case-1':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="ml-auto bg-slate-300 px-5 py-2.5 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat soal
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Kasus 1
                    </Dialog.Title>
                    <div className="mt-2">
                      <p>
                        <span className="font-semibold">1.</span> Buah apa saja
                        yang dimiliki Andi? (fruitName)
                      </p>
                      <p>
                        <span className="font-semibold">2.</span> Andi
                        memisahkan buahnya menjadi beberapa wadah berdasarkan
                        tipe buah (fruitType). Berapa jumlah wadah yang
                        dibutuhkan? Dan ada buah apa saja di masing-masing
                        wadah?
                      </p>
                      <p>
                        <span className="font-semibold">3.</span> Berapa total
                        stock buah yang ada di masing-masing wadah?
                      </p>
                      <p>
                        <span className="font-semibold">4.</span> Apakah ada
                        komentar terkait kasus di atas?
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    case 'case-2':
      return (
        <>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="ml-auto bg-slate-300 px-5 py-2.5 rounded-full transition-colors hover:bg-slate-400"
            onClick={() => setShow(!show)}
          >
            Lihat soal
          </button>

          <Transition appear show={show} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={() => setShow(false)}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                </Transition.Child>

                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Kasus 2
                    </Dialog.Title>
                    <div className="mt-2">
                      <p>
                        5. Buatlah fungsi untuk menghitung total komentar yang
                        ada, termasuk semua balasan komentar. Berdasarkan data
                        di atas, total komentar adalah 7 komentar.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={() => setShow(false)}
                      >
                        Uwaw, oke!
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      );
    default:
      return <></>;
  }
};

export default Modal;

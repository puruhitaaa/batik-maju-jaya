import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Header } from '../../components';
import { OrderContext } from '../../context/order';

const MyOrders = () => {
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate();

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main>
        <h1 className="text-3xl py-10 tracking-wide text-center">My Orders</h1>

        <div className="max-w-6xl overflow-x-scroll w-full mx-auto py-10">
          <table className="table-auto shadow-md w-full">
            <thead className="text-left">
              <tr>
                <th className="bg-amber-100 border px-8 py-4">ID</th>
                <th className="bg-amber-100 border px-8 py-4">Date</th>
                <th className="bg-amber-100 border px-8 py-4">Total</th>
                <th className="bg-amber-100 border px-8 py-4">Paid</th>
                <th className="bg-amber-100 border px-8 py-4">Delivered</th>
                <th className="bg-amber-100 border px-8 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((el) => (
                <tr key={el._id}>
                  <td className="border px-8 py-4">{el._id}</td>
                  <td className="border px-8 py-4">{el.createdAt}</td>
                  <td className="border px-8 py-4">${el.totalPrice}</td>
                  <td className="border px-8 py-4">
                    {el.isPaid ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </td>
                  <td className="border px-8 py-4">
                    {el.isDelivered ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </td>
                  <td className="border px-8 py-4">
                    <Button
                      type="button"
                      text="Details"
                      variant="light"
                      onClick={() => navigate(`/order/${el._id}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyOrders;

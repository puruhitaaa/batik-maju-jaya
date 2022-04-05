import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { Alert, Header } from '../../components';
import { OrderContext } from '../../context/order';
import axios from 'axios';
import { PAYPAL_CONFIG_AUTH } from '../../constants/url';

const Order = () => {
  const { orderId = '' } = useParams();
  const { fetchOrderById, orderItem, payOrder, isPaymentSuccess } =
    useContext(OrderContext);
  const [sdkReady, setSdkReady] = useState(false);

  const successPaymentHandler = (paymentResult: any) => {
    payOrder(orderId, paymentResult);
  };

  useEffect(() => {
    fetchOrderById(orderId);

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get(PAYPAL_CONFIG_AUTH);
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!orderItem.isPaid) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main>
        <div className="w-full flex-col space-y-1.5 mx-auto max-w-6xl">
          <div className="w-full py-10">
            <h1 className="text-3xl text-left tracking-wide">
              Order <span className="font-semibold">{orderItem._id}</span>
            </h1>
          </div>

          {isPaymentSuccess && (
            <Alert text="Order has been paid" variant="success" />
          )}

          <div className="flex justify-between items-center">
            <div className="divide-y space-y-5 divide-slate-500 w-3/4">
              <div className="space-y-5 p-2">
                <h1 className="text-2xl tracking-wide font-semibold">
                  Shipping
                </h1>
                <p>Name: {orderItem.user?.name}</p>
                <p>Email: {orderItem.user?.email}</p>
                <p>Address: {orderItem.shippingAddress.address}</p>
                {!orderItem.isDelivered ? (
                  <div className="w-full py-3.5 px-5 bg-red-300">
                    <h5>Has not been delivered yet.</h5>
                  </div>
                ) : null}
              </div>

              <div className="space-y-5 p-2">
                <h1 className="text-2xl tracking-wide font-semibold">
                  Payment Method
                </h1>
                <p>Method: {orderItem.paymentMethod.toUpperCase()}</p>
                {!orderItem.isPaid ? (
                  <div className="w-full py-3.5 px-5 bg-red-300">
                    <h5>Has not been paid yet.</h5>
                  </div>
                ) : (
                  <div className="w-full py-3.5 px-5 bg-green-300">
                    <h5>Item has been paid.</h5>
                  </div>
                )}
              </div>

              <div className="space-y-5 p-2 w-full">
                <h1 className="text-2xl tracking-wide font-semibold">
                  Order Items
                </h1>

                {orderItem.orderItems.map((el) => (
                  <div key={el.product} className="space-x-10 flex w-full">
                    <img className="w-10" src={el.image} alt={el.name} />
                    <p className="tracking-wide flex-1">{el.name}</p>
                    <p>
                      {el.qty} x ${el.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="divide-y px-10 border border-slate-500 py-5 space-y-10 divide-slate-500">
              <h1 className="font-semibold tracking-wider">Order Summary</h1>
              <div className="space-x-5 w-full flex h-full items-center pt-5">
                <p className="flex-1 font-semibold">Items</p>
                <p className="">${orderItem.itemsPrice}</p>
              </div>
              <div className="space-x-5 w-full flex h-full items-center pt-5">
                <p className="flex-1 font-semibold">Shipping</p>
                <p className="">${orderItem.shippingPrice}</p>
              </div>
              <div className="space-x-5 w-full flex h-full items-center pt-5">
                <p className="flex-1 font-semibold">Tax</p>
                <p className="">${orderItem.taxPrice}</p>
              </div>
              <div className="space-x-5 w-full flex h-full items-center pt-5">
                <p className="flex-1 font-semibold">Total</p>
                <p className="">${orderItem.totalPrice}</p>
              </div>
              {!orderItem.isPaid && (
                <div>
                  {sdkReady ? (
                    <PayPalButton
                      amount={orderItem.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Order;

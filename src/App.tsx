import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/product';
import Compose from './helpers/CombineProviders';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import { PublicRoute } from './helpers/PublicRoute';
import {
  HomePage,
  NotFoundPage,
  LoginPage,
  RegisterPage,
  ProductPage,
  CartPage,
  ShippingPage,
  PaymentPage,
  OrderPage,
  MyOrdersPage,
} from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Compose
        components={[
          AuthProvider,
          CartProvider,
          ProductProvider,
          OrderProvider,
        ]}
      >
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route
            path="shipping"
            element={
              <ProtectedRoute redirectTo="/login">
                <ShippingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="payment"
            element={
              <ProtectedRoute redirectTo="/login">
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="order/:orderId"
            element={
              <ProtectedRoute redirectTo="/login">
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-orders"
            element={
              <ProtectedRoute redirectTo="/login">
                <MyOrdersPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Compose>
    </BrowserRouter>
  );
};

export default App;

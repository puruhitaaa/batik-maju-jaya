import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/product';
import Compose from './helpers/CombineProviders';
import { ProtectedRoute } from './helpers/ProtectedRoute';
import { PublicRoute } from './helpers/PublicRoute';
import {
  ChallengePage,
  FruitsPage,
  CommentPage,
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
          <Route index element={<ChallengePage />} />
          <Route path="challenge/case-1" element={<FruitsPage />} />
          <Route path="challenge/case-2" element={<CommentPage />} />
          <Route path="challenge/case-3" element={<HomePage />} />
          <Route
            path="challenge/case-3/login"
            element={
              <PublicRoute redirectTo="/challenge/case-3">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="challenge/case-3/register"
            element={
              <PublicRoute redirectTo="/challenge/case-3">
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="challenge/case-3/product/:productId"
            element={<ProductPage />}
          />
          <Route path="challenge/case-3/cart" element={<CartPage />} />
          <Route
            path="challenge/case-3/shipping"
            element={
              <ProtectedRoute redirectTo="/challenge/case-3/login">
                <ShippingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="challenge/case-3/payment"
            element={
              <ProtectedRoute redirectTo="/challenge/case-3/login">
                <PaymentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="challenge/case-3/order/:orderId"
            element={
              <ProtectedRoute redirectTo="/challenge/case-3/login">
                <OrderPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="challenge/case-3/my-orders"
            element={
              <ProtectedRoute redirectTo="/challenge/case-3/login">
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

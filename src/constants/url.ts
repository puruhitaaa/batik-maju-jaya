export const BASE_URL = process.env.REACT_APP_API_URI;

export const USER_LOGIN_PATH = `${BASE_URL}/api/users/login`;
export const USERS_PATH = `${BASE_URL}/api/users`;

export const PRODUCTS_PATH = `${BASE_URL}/api/products`;

export const ORDERS_PATH = `${BASE_URL}/api/orders`;
export const ORDER_PAY_PATH = (orderId: string) =>
  `${BASE_URL}/api/orders/${orderId}/pay`;
export const ORDER_DETAILS_PATH = (orderId: string) =>
  `${BASE_URL}/api/orders/${orderId}`;
export const MY_ORDERS_PATH = `${BASE_URL}/api/orders/myorders`;

export const PAYPAL_CONFIG_AUTH = `${BASE_URL}/api/config/paypal`;

export interface ICart {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

export interface IShippingAddress {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export type CartContextType = {
  cart: ICart[];
  error: string;
  shippingAddress: IShippingAddress[];
  paymentMethod: string;
  calculateTotal: (items: ICart[]) => void;
  addToCart: (product: ICart) => void;
  removeFromCart: (id: string) => void;
  updateCartItem: (id: string, qty: number) => void;
  saveShippingAddress: (shAddress: IShippingAddress) => void;
  savePaymentMethod: (paymentMethod: string) => void;
};

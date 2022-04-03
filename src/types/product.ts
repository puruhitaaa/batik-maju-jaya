export type Review = {
  _id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export interface IProduct {
  _id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  reviews: Review[];
  rating: number;
  numReviews: number;
  price: number;
  countInStock: number;
  createdAt: string;
}

export type ProductContextType = {
  products: IProduct[];
  product: IProduct;
  loading: boolean;
  error: string;
  success: boolean;
  fetchProducts: () => void;
  fetchProductById: (id: string) => void;
};

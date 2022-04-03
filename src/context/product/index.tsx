import axios from 'axios';
import { FC, createContext, useState } from 'react';
import { PRODUCTS_PATH } from '../../constants/url';
import { IProduct, ProductContextType } from '../../types/product';

const defaultValue = {
  products: [],
  product: {
    _id: '',
    name: '',
    image: '',
    brand: '',
    category: '',
    description: '',
    reviews: [],
    rating: 0,
    numReviews: 0,
    price: 0,
    countInStock: 0,
    createdAt: '',
  },
  loading: true,
  error: '',
  success: false,
  fetchProducts: () => null,
  fetchProductById: () => null,
};

export const ProductContext = createContext<ProductContextType>(defaultValue);

export const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>(defaultValue.products);
  const [product, setProduct] = useState<IProduct>(defaultValue.product);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(PRODUCTS_PATH);

      setProducts(data);
      setSuccess(true);
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  const fetchProductById = async (id: string) => {
    try {
      const { data } = await axios.get(PRODUCTS_PATH + `/${id}`);

      setProduct(data);
      setSuccess(true);
      setLoading(false);
    } catch (error: any) {
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  return (
    <ProductContext.Provider
      value={{
        fetchProducts,
        fetchProductById,
        loading,
        success,
        error,
        product,
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

import { useContext, useEffect } from 'react';
import {
  FormContainer,
  Header,
  Jumbotron,
  ProductItem,
  Testimonials,
} from '../../components';
import { ProductContext } from '../../context/product';

const Home = () => {
  const { products, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-stone-100 pb-2 min-h-screen">
      <Header />

      <main className="max-w-6xl space-y-10 mx-auto py-5 px-2.5">
        <Jumbotron />

        <h1 className="text-2xl mb-5 font-bold tracking-wide">LATEST BATIK</h1>

        <FormContainer>
          {products.map((element) => (
            <ProductItem
              key={element._id}
              _id={element._id}
              name={element.name}
              rating={element.rating}
              price={element.price}
              image={element.image}
            />
          ))}
        </FormContainer>

        <Testimonials />
      </main>
    </div>
  );
};

export default Home;

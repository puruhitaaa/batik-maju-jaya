import { useContext, useEffect } from 'react';
import { FormContainer, Header, ProductItem } from '../../components';
import { ProductContext } from '../../context/product';

const Home = () => {
  const { products, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header title="case-3" />

      <main className="max-w-6xl my-5 mx-auto py-5">
        <h1 className="text-2xl mb-5 font-bold tracking-wide">LATEST BATIK</h1>

        <FormContainer>
          {products.map((element) => (
            <ProductItem
              key={element._id}
              _id={element._id}
              name={element.name}
              rating={element.rating}
              numReviews={element.numReviews}
              price={element.price}
              image={element.image}
            />
          ))}
        </FormContainer>
      </main>
    </>
  );
};

export default Home;

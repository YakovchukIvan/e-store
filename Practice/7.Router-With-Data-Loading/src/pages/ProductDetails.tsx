import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../types/types';

const ProductDetails: FC = () => {
  const product = useLoaderData() as Product;

  return (
    <div className="flex justify-center p-10 m-auto drop-shadow-2xl">
      {product ? (
        <div className="flex flex-col items-center p-10 border-2 rounded-xl border-sky-300 max-w-96 ">
          <h1 className="mb-6 text-4xl">Product Details</h1>
          <h2 className="mb-4 text-2xl">{product.name}</h2>
          <p className="mb-2 text-xl font-bold text-red-500">Price: {product.price}$</p>
          <img className="mt-4 rounded-xl max-w-80" src={product.img} alt={product.name} />
        </div>
      ) : (
        <p>Not found product</p>
      )}
    </div>
  );
};

export default ProductDetails;

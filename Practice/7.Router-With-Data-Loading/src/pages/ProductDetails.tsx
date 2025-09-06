import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/data';
import { Product } from '../types/types';

const ProductDetails: FC = () => {
  // useParams типізуємо як об’єкт з рядковими значеннями
  const { productId } = useParams<{ productId: string }>();

  // знаходимо продукт, перетворюючи productId у число
  const product: Product | undefined = products.find((p) => p.id === parseInt(productId || '', 10));

  console.log(product);

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

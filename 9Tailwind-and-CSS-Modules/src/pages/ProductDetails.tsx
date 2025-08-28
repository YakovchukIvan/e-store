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
    <div>
      {product ? (
        <>
          <h1>Product Details</h1>
          <h2>{product.name}</h2>
          <p>Price: {product.price}$</p>
          <img src={product.img} alt={product.name} style={{ width: '150px' }} />
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default ProductDetails;

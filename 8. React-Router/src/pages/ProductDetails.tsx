import { useParams } from 'react-router-dom';
import { products } from '../data/data';

export default function ProductDetails() {
  const { productId } = useParams<{ productId: string }>();

  const currentProduct = products.find((product) => product.id === Number(productId));

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <hr />
      <div className="product-item">
        <h3>{currentProduct.name}</h3>
        <img src={currentProduct.img} alt={currentProduct.name} />
        <h4>Price {currentProduct.price} $</h4>
      </div>
    </div>
  );
}

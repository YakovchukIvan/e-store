import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { productName } = useParams();

  return (
    <div>
      <p>Product Details Page</p>

      <p>Product param: {productName}</p>
    </div>
  );
}

export default ProductDetails;

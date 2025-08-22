type Product = {
  name: string;
  description: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

const productData: Product[] = [
  {
    name: 'Laptop Pro',
    description: 'High-performance laptop for professionals.',
    price: 1200,
    photoName: '/laptop.png',
    soldOut: false,
  },
  {
    name: 'Smartphone X',
    description: 'Latest model with stunning display.',
    price: 800,
    photoName: '/smartphone.png',
    soldOut: false,
  },
  {
    name: 'Wireless Headphones',
    description: 'Noise-cancelling headphones with great sound quality.',
    price: 200,
    photoName: '/headphones.png',
    soldOut: false,
  },
  {
    name: 'Smartwatch Z',
    description: 'Stylish smartwatch with fitness tracking features.',
    price: 150,
    photoName: '/smartwatch.png',
    soldOut: false,
  },
  {
    name: 'Gaming Console',
    description: 'Powerful gaming console for endless fun.',
    price: 400,
    photoName: '/console.png',
    soldOut: true,
  },
  {
    name: '4K TV',
    description: 'Ultra HD television with vibrant colors.',
    price: 1000,
    photoName: '/tv.png',
    soldOut: false,
  },
];

const App = () => {
  return (
    <>
      <h1>E-Store </h1>
      {productData.map((item) => (
        <div key={item.name}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>💵 {item.price}$</p>
          <img src={item.photoName} alt={item.name} width="100" />
          {item.soldOut && <p style={{ color: 'red' }}>SOLD OUT</p>}
          <hr />
        </div>
      ))}
    </>
  );
};

export default App;

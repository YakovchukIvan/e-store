import { FC, FormEvent } from 'react';

const Cart: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="py-10 m-auto prose lg:prose-xl">
      <h1>Shopping Cart</h1>

      {/* Список товарів */}
      <div>
        <h2 className="text-blue-400">Your Items:</h2>
        <ol>
          <li>
            <span>Product 1 </span>
            <span>$25</span>
          </li>
          <li>
            <span>Product 2 </span>
            <span>$45</span>
          </li>
        </ol>
        <p className="font-bold text-red-500">Total: $70</p>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-80">
        <h2>Enter Your Details:</h2>

        {/* Поле Name */}
        <div className="flex flex-col-reverse gap-2">
          <input
            className="p-2 rounded-lg peer"
            id="name"
            type="text"
            placeholder="Enter your full name"
            required
          />
          <label className="peer-hover:text-blue-600" htmlFor="name">
            Name
          </label>
        </div>

        {/* Поле Email */}
        <div className="flex flex-col-reverse gap-2">
          <input
            className="p-2 rounded-lg peer"
            id="email"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <label className="peer-hover:text-blue-600" htmlFor="email">
            Email
          </label>
        </div>

        {/* Поле Address */}
        <div className="flex flex-col-reverse gap-2">
          <textarea
            className="p-2 rounded-lg peer"
            id="address"
            placeholder="Enter your delivery address"
            rows={3}
            required
          ></textarea>
          <label className="peer-hover:text-blue-600" htmlFor="address">
            Address
          </label>
        </div>

        {/* Поле Payment */}
        <div className="flex flex-col-reverse gap-2">
          <select className="py-2 rounded-lg peer" id="payment" required>
            <option value="" disabled>
              Select payment method
            </option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <label className="peer-hover:text-blue-600" htmlFor="payment">
            Payment Method
          </label>
        </div>

        {/* Кнопка Submit */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Cart;

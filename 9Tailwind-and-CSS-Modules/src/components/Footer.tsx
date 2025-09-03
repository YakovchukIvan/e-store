import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-200 ">
      <div className="flex justify-between max-w-screen-xl px-5 py-10 mx-auto ">
        {/* Customer Support */}
        <div className="space-y-2">
          <h3 className="mb-3 text-sm font-bold">
            Customer <br /> Support
          </h3>
          <ul className="space-y-1">
            <li className="hover:text-blue-500">
              <Link to="#">FAQs</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">Shipping & Returns</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">Order Tracking</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-2">
          <h3 className="mb-3 text-sm font-bold">Follow Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-500">
              <Link to="#">Facebook</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">Instagram</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">Twitter</Link>
            </li>
            <li className="hover:text-blue-500">
              <Link to="#">LinkedIn</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-3 text-sm font-bold">Contact Us</h3>
          <p>Email: support@yourstore.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Market Street, City, Country</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-7">
        <p>&copy; 2025 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

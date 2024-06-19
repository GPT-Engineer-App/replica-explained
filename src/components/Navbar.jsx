import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="text-white text-xl font-bold">Acme Inc.</div>
        <Link to="/" className="text-gray-300 hover:text-white">Overview</Link>
        <Link to="/customers" className="text-gray-300 hover:text-white">Customers</Link>
        <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
        <Link to="/settings" className="text-gray-300 hover:text-white">Settings</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="p-2 rounded-md" />
        <FaUserCircle className="text-white text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;
import { NavLink } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import useTheme from "../hooks/usethme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className=" shadow-md  w-full">
      <div className="container mx-auto flex items-center justify-around p-4">

        <NavLink to="/" className="text-2xl font-bold text-gray-800 hidden lg:flex btn btn-primary  items-center active">
          C
        </NavLink>

        <div className="flex items-center space-x-6">
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </NavLink>
          <NavLink to="/products" className="text-gray-700 hover:text-gray-900">
            Products
          </NavLink>
          <NavLink to="/cart" className="text-gray-700 hover:text-gray-900">
            Cart
          </NavLink>
        </div>


        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-700 hover:text-gray-900" />
          </NavLink>
          <button className="btn btn-ghost" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>

          <NavLink to="/profile">
            <User size={24} className="text-gray-700 hover:text-gray-900" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md px-6 sm:px-10 py-2 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold cursor-pointer"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img
            src="/logo-chndrama-1.png"
            alt="chandrama logo"
            className="w-18 h-16"
          />
        </Link>
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6">
        {navLinks.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`cursor-pointer font-medium transition-colors duration-300 ${
              location.pathname === link.path
                ? "text-yellow-400"
                : "text-gray-300 hover:text-yellow-400"
            }`}
          >
            <Link to={link.path}>{link.name}</Link>
          </motion.li>
        ))}

        {!user ? (
          <>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/login">
                <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  Login
                </button>
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/signup">
                <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                  Signup
                </button>
              </Link>
            </motion.li>
          </>
        ) : (
          <motion.li whileHover={{ scale: 1.05 }} onClick={() => logout()}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300">
              Logout
            </button>
          </motion.li>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <HiX className="w-8 h-8 text-yellow-500" />
          ) : (
            <HiMenu className="w-8 h-8 text-yellow-500" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {!user ? (
              <>
                <li>
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                      Login
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                    <button className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                      Signup
                    </button>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

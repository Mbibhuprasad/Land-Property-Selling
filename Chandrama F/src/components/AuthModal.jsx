// src/components/AuthModal.jsx
import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";

const AuthModal = ({ onClose }) => {
  const { register, login } = useContext(AuthContext);
  const [isRegister, setIsRegister] = useState(true);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUser = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    register(newUser);
    onClose();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const success = login(formData.get("email"), formData.get("password"));
    if (success) {
      onClose();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-black border border-[rgb(245,220,115)] p-6 rounded-2xl shadow-xl w-96"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-center">
          {isRegister ? "Sign Up" : "Login"}
        </h3>

        {isRegister ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full p-2 border rounded-lg"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        )}

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-3 text-gray-600 underline w-full text-center"
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </button>

        <button
          onClick={onClose}
          className="mt-3 text-gray-500 underline w-full text-center"
        >
          Cancel
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;

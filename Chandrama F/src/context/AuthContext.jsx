// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { BackenUrl } from "../utils/constant.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const register = async (newUser) => {
    try {
      const response = await fetch(`${BackenUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await fetch(`${BackenUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      return { success: true, user: data.user };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
  };

  const loginAdmin = async (credentials) => {
    try {
      const response = await fetch(`${BackenUrl}/admin/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token); // Store the token
      return { success: true, user: data.user };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // Remove token on logout
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loginAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

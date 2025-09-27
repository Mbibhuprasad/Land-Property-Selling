import React, { createContext, useState, useContext, useEffect } from "react";
import { BackenUrl } from "../utils/constant.js";
import { AuthContext } from "./AuthContext.jsx";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem('token') || (user && user.token);

  useEffect(()=>{
    allUsers();
  },[]);

  // Fetch all properties from backend
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BackenUrl}/plots`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch properties: ${response.status}`);
      }
      
      const data = await response.json();
      setProperties(data.plots || []);
      setFilteredProperties(data.plots || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError(err.message);
      setProperties([]);
      setFilteredProperties([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch property details (requires authentication)
  const fetchPropertyDetails = async (id) => {
    try {
      const response = await fetch(`${BackenUrl}/plots/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch property details: ${response.status}`);
      }
      
      const data = await response.json();
      return data.plot;
    } catch (err) {
      console.error("Error fetching property details:", err);
      throw err;
    }
  };

  const deleteProperty = async (id) => {
    try {
      const response = await fetch(`${BackenUrl}/admin/plots/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    
      if (!response.ok) {
        throw new Error(`Failed to delete property: ${response.status}`);
      }
    } catch (err) {
      console.error('Error deleting property:', err);
      throw err;
    }
  };

  const updateProperty = async (id, updatedData) => {
    try {
      const response = await fetch(`${BackenUrl}/admin/plots/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error(`Failed to update property: ${response.status}`);
      }
    } catch (err) {
      console.error('Error updating property:', err);
      throw err;
    }
  };

  // Filter properties based on criteria
  const filterProperties = (filters = {}) => {
    let filtered = [...properties];

    // Apply search query filter
    if (filters.query) {
      const query = filters.query.toLowerCase();
      filtered = filtered.filter(
        (property) =>
          property.name?.toLowerCase().includes(query) ||
          property.location?.toLowerCase().includes(query) ||
          property.address?.toLowerCase().includes(query)
      );
    }

    setFilteredProperties(filtered);
    return filtered;
  };

  // Reset filters to show all properties
  const resetFilters = () => {
    setFilteredProperties(properties);
  };

  const allUsers = async () => {
    try {
      const response = await fetch(`${BackenUrl}/admin/auth/users`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUsers(data);
    }catch (err) {
      console.error("Error fetching users:", err);
      throw err;
    }
  }

  // Load properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        loading,
        error,
        fetchProperties,
        fetchPropertyDetails,
        updateProperty,
        deleteProperty,
        filterProperties,
        resetFilters,
        users,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

// Custom hook to use the PropertyContext
export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
};
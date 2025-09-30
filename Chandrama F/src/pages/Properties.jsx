// PropertyComponent.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import ContactFormModal from "./homeContent/interestmodal";
import { BackenUrl } from "../utils/constant";
import PropertyDetailsModal from "../pages/propertiesmodal"; // NEW modal import

export default function PropertyComponent() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactModalProperty, setContactModalProperty] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all properties on mount
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${BackenUrl}/plots`);
        setProperties(res.data.plots || []);
        // console.log(res.data.plots);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
    fetchProperties();
  }, []);

  const navigate = useNavigate();

  // Fetch details when clicking "View Details"
  const handleViewDetails = async (id) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BackenUrl}/plots/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });

      setSelectedProperty(res.data.plot);
      console.log(res.data.plot);
    } catch (err) {
      console.error("Error fetching details:", err);
      alert("Login required to view details!");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, boxShadow: "0 0 25px rgba(245,220,115,0.7)" },
  };

  return (
    <div className="p-7 bg-black min-h-screen text-[rgb(245,220,115)]">
      <h1 className="text-3xl font-bold mb-20 text-center drop-shadow-md">
        Available Properties
      </h1>

      {/* Property List */}
      <AnimatePresence>
        {!selectedProperty && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 m-2"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {properties.map((p) => (
              <motion.div
                key={p.id}
                className="border rounded-lg shadow-lg overflow-hidden bg-black border-[rgb(245,220,115)]"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img
                  src={p.image || "https://via.placeholder.com/200"}
                  
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-[0.9rem] sm:text-[1rem]">
                  <h2 className="text-[1rem] sm:text-[1.4rem] font-semibold mb-1">
                    {p.name}
                  </h2>
                  <h2 className=" text-gray-300">Location : {p.location}</h2>
                  <p className="text-gray-300">Land Mark : {p.address}</p>
                  <p className="text-gray-300">Area : {p.squareFeet} sqft</p>

                  <motion.button
                    onClick={() => handleViewDetails(p.id)}
                    className="mt-3 w-full px-4 py-2 bg-[rgb(245,220,55)] text-black font-semibold rounded hover:brightness-110"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>

                  {/* Interested Button */}
                  <motion.button
                    onClick={() => setContactModalProperty(p)}
                    className="mt-2 w-full px-4 py-2 bg-yellow-500 text-black font-semibold rounded hover:brightness-110"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Interested
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Property Details Modal */}
      <PropertyDetailsModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />

      {/* Contact Form Modal */}
      {contactModalProperty && (
        <ContactFormModal
          property={contactModalProperty}
          onClose={() => setContactModalProperty(null)}
        />
      )}

      {loading && <p className="mt-4 text-gray-400">Loading...</p>}
    </div>
  );
}

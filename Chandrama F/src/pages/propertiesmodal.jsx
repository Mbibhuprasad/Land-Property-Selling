// PropertyDetailsModal.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PropertyDetailsModal({ property, onClose }) {
  if (!property) return null;

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 p-6 rounded-xl text-white w-[90%] md:w-[60%] max-h-[90vh] overflow-y-auto shadow-2xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 px-3 py-1 bg-red-500 rounded text-white hover:bg-red-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">{property.name}</h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {property.images?.slice(0, 6).map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img || "https://via.placeholder.com/400"}
                  alt={`${property.name}-${idx}`}
                  className="w-full h-40 object-cover rounded-lg border border-yellow-500 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>

            <p>
              <strong>Location:</strong> {property.location}
            </p>
            <p>
              <strong>Address:</strong> {property.address}
            </p>
            <p>
              <strong>Square Feet:</strong> {property.squareFeet}
            </p>
            {/* <p>
              <strong>Price:</strong> ₹ {property.price} Lakhs
            </p> */}
            <p>
              <strong>Facing:</strong> {property.facing}
            </p>
            <p>
              <strong>Boundary:</strong> {property.boundary}
            </p>
            <p className="mt-2">
              <strong>Description:</strong> {property.description}
            </p>

            {property.amenities?.length > 0 && (
              <div className="mt-2">
                <strong>Amenities:</strong>
                <ul className="list-disc ml-6">
                  {property.amenities.map((a, idx) => (
                    <li key={idx}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

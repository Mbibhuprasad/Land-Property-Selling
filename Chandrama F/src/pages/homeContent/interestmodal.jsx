// ContactFormModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackenUrl } from "../../utils/constant";
export default function ContactFormModal({ property, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interestedPlot: property?.name || "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${BackenUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send form");

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        interestedPlot: property?.name || "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 text-white rounded-xl shadow-lg p-6 w-full max-w-md border border-yellow-500"
          initial={{ scale: 0.8, y: 40, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 40, opacity: 0 }}
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Interested in {property?.name}
          </h2>

          {success ? (
            <p className="text-green-400 font-semibold">
              ✅ Thank you! We’ll contact you soon.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 border border-yellow-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 border border-yellow-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-800 border border-yellow-500 focus:outline-none"
              />
              <input
                type="text"
                name="location"
                placeholder="Your Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-yellow-500 focus:outline-none"
              />
              <input
                type="text"
                name="interestedPlot"
                placeholder="Interested Plot"
                value={formData.interestedPlot}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 border border-yellow-500 focus:outline-none"
                readOnly
              />

              {error && <p className="text-red-400">{error}</p>}

              <motion.button
                type="submit"
                className="w-full bg-yellow-500 text-black py-2 rounded font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </motion.button>
            </form>
          )}

          <motion.button
            onClick={() => onClose() }
            className="mt-4 w-full px-4 py-2 bg-gray-700 text-[rgb(245,220,115)] rounded hover:bg-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

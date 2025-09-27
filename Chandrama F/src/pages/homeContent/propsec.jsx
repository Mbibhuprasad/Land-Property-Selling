// src/components/PropertiesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const properties = [
  { name: "Residential Land", count: 3 },
  { name: "Flat/Apartment", count: 2 },
  { name: "Agricultural Land", count: 0 },
  { name: "Farm House", count: 0 },
  { name: "Warehouse/Godown", count: 0 },
  { name: "Commercial Land", count: 0 },
  { name: "Villa", count: 0 },
  { name: "Residential Duplex", count: 0 },
  { name: "Commercial Shop", count: 0 },
  { name: "Studio Apartment", count: 0 },
];

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = ["all", "residential", "commercial", "land"];

  return (
    <div className="py-12 sm:py-16 bg-black text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[rgb(245,220,40)]">
            Explore Our Properties
          </h2>
          <p className="text-gray-300 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Assetlive gracefully facilitates real estate business owners by
            making property management easier & affordable. Discover your dream
            property from our extensive collection.
          </p>

          {/* Stats */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            <div className="bg-black border border-[rgb(245,220,115)] p-4 rounded-xl shadow-md w-full sm:w-auto">
              <p className="text-xl sm:text-2xl font-bold text-[rgb(245,220,115)]">50+</p>
              <p className="text-gray-300 text-sm sm:text-base">Properties Listed</p>
            </div>
            <div className="bg-black border border-[rgb(245,220,115)] p-4 rounded-xl shadow-md w-full sm:w-auto">
              <p className="text-xl sm:text-2xl font-bold text-[rgb(245,220,115)]">100%</p>
              <p className="text-gray-300 text-sm sm:text-base">Verified Listings</p>
            </div>
            <div className="bg-black border border-[rgb(245,220,115)] p-4 rounded-xl shadow-md w-full sm:w-auto">
              <p className="text-xl sm:text-2xl font-bold text-[rgb(245,220,115)]">24/7</p>
              <p className="text-gray-300 text-sm sm:text-base">Customer Support</p>
            </div>
          </div>
        </motion.div>

     

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-6 sm:p-8 text-black shadow-lg"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Join thousands of satisfied clients who found their dream property
            through our personalized service.
          </p>
          <button className="bg-black text-yellow-500 border border-black px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-600 hover:text-black transition-colors shadow-md text-sm sm:text-base">
            Contact Our Agents
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertiesSection;

// src/components/SearchBar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: "",
    status: "",
    propertyType: "land",
  });

  const handleChange = (field, value) => {
    const newFilters = { ...filters, [field]: value };
    setFilters(newFilters);
  };

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      query: "",
      status: "",
      propertyType: "land",
    };
    setFilters(resetFilters);
    onSearch(resetFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black border border-[rgb(245,220,115)] rounded-2xl shadow-xl max-w-8xl mx-auto mt-8 p-6"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[rgb(245,220,115)]">
          Find Your Dream Property
        </h2>
        <p className="text-[rgb(245,220,115)] mt-2">
          Search from thousands of verified properties
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[rgb(245,220,115)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Enter City, Locality, Project"
            value={filters.query}
            onChange={(e) => handleChange("query", e.target.value)}
            className="pl-10 w-full px-4 py-3 border border-[rgb(245,220,115)] rounded-xl focus:outline-none focus:ring-2 focus:[rgb(245,220,115)] focus:border-transparent bg-black text-[rgb(245,220,115)] placeholder-[rgb(245,220,115)]"
          />
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <select
            value={filters.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="pl-10 w-full px-4 py-3 border border-[rgb(245,220,115)] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-black text-yellow-200 appearance-none"
          >
            <option value="">All Status</option>
            <option value="sale">For Sale</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="relative">
          <select
            value={filters.propertyType}
            onChange={(e) => handleChange("propertyType", e.target.value)}
            className="pl-10 w-full px-4 py-3 border border-[rgb(245,220,115)] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-black text-yellow-200 appearance-none"
          >
            <option value="">All Property Types</option>
            <option value="land">Land</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Search Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSearch}
          className="bg-gradient-to-r from-yellow-500 to-[rgb(245,220,115)] text-black px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </motion.button>
      </div>

      {/* Reset Filters Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleReset}
          className="text-yellow-400 hover:text-yellow-200 text-sm font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Reset All Filters
        </button>
      </div>
    </motion.div>
  );
};

export default SearchBar;

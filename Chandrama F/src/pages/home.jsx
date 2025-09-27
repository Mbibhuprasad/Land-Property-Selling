import React, { useState } from "react";
import Hero from "./homeContent/hero";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "./homeContent/search";
import PropertiesSection from "./homeContent/propsec";
import ServicesSection from "./homeContent/ServicesSection";
import TestimonialsSection from "./homeContent/TestimonialsSection";
import { useProperty } from "../context/PropertyContext";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { filteredProperties, filterProperties } = useProperty();

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    filterProperties(filters);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    if (filter === "all") {
      filterProperties({});
    } else {
      filterProperties({ status: filter });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />

      {/* Search */}
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Property Listings Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[rgb(245,220,115)]">
            Featured Properties
          </h2>
          <p className="text-gray-300 mt-2">
            Discover our handpicked selection of premium properties
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center mt-6 space-x-4">
            {["all", "buy", "rent"].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-black border border-[rgb(245,220,115)] text-[rgb(245,220,115)] hover:bg-yellow-500 hover:text-black"
                }`}
              >
                {filter === "all"
                  ? "All Properties"
                  : filter === "buy"
                  ? "For Sale"
                  : "For Rent"}
              </button>
            ))}
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-yellow-400 mt-4">
              No properties found
            </h3>
            <p className="text-gray-400">Try adjusting your search filters</p>
          </div>
        )}
      </section>

      <PropertiesSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* Call to Action Section */}
      <section className="py-16 bg-black text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect home
            through our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors shadow-md">
              Browse Properties
            </button>
            <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors">
              Contact Agent
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
    </div>
  );
};

export default Home;

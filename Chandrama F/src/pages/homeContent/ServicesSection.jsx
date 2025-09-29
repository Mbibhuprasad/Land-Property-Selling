// src/components/ServicesSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    name: "Plot Buying Assistance",
    icon: "📑",
    description:
      "Get expert guidance in selecting and buying plots across prime locations in Bhubaneswar",
  },
  {
    name: "Legal Document Support",
    icon: "📜",
    description:
      "Complete assistance in verifying land records, registration papers, and legal compliance",
  },
  {
    name: "Site Visits",
    icon: "📍",
    description:
      "Organized plot visits to help you explore and choose the right property with ease",
  },
  {
    name: "Vastu Guidance",
    icon: "🧭",
    description:
      "Consultation for Vastu-compliant plots to ensure harmony and positive energy",
  },
  {
    name: "Loan & EMI Assistance",
    icon: "🏦",
    description:
      "Help in arranging bank loans and easy EMI options for purchasing your dream plot",
  },
  {
    name: "Property Management",
    icon: "🏡",
    description:
      "End-to-end property management services including maintenance and resale support",
  },
];


const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div className="py-16 bg-black text-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[rgb(245,220,115)]">
            Our Premium Services
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Assetlive offers comprehensive real estate services to make property
            management easier & affordable. From documentation to moving in,
            we've got you covered at every step.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="bg-black border border-[rgb(245,220,65)] p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-[rgb(245,220,65)]">500+</p>
              <p className="text-gray-300">Happy Clients</p>
            </div>
            <div className="bg-black border border-[rgb(245,220,65)] p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-[rgb(245,220,65)]">98%</p>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="bg-black border border-[rgb(245,220,65)] p-4 rounded-xl shadow-md">
              <p className="text-2xl font-bold text-[rgb(245,220,65)]">15+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black border border-yellow-500 rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveService(index)}
              onHoverEnd={() => setActiveService(null)}
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-900 rounded-xl flex items-center justify-center group-hover:bg-yellow-700 transition-colors">
                <span className="text-3xl">{service.icon}</span>
              </div>

              <h3 className="text-[rgb(245,220,115)] font-semibold text-lg group-hover:text-yellow-500 transition-colors">
                {service.name}
              </h3>

              <motion.p
                className="text-gray-300 text-sm mt-3 h-12 overflow-hidden"
                animate={{ height: activeService === index ? "auto" : "3rem" }}
                transition={{ duration: 0.3 }}
              >
                {service.description}
              </motion.p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>

              {/* Learn more button */}
              <motion.button
                className="mt-4 text-yellow-400 font-medium text-sm flex items-center justify-center gap-1 mx-auto opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[rgb(245,220,55)] via-[rgba(255, 214, 52, 1)] to-yellow-800 rounded-2xl p-8 text-white shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4">Need Custom Services?</h3>
          <p className="mb-6 max-w-2xl mx-auto text-yellow-100">
            Our experts are ready to provide tailored solutions for your
            specific real estate needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-md">
              Book a Consultation
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full font-semibold hover:bg-yellow-600/20 transition-colors">
              Call Us Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;

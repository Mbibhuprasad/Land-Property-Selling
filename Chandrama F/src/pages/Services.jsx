import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MapPinIcon,
  CurrencyRupeeIcon,
  HomeIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const ServicePage = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Plot data - large dataset
  const plotData = {
    residential: [
      {
        id: 1,
        name: "Luxury Villas Phase 1",
        size: "2400 sq.ft",
        price: "₹75,00,000",
        location: "Sector 45, Gurugram",
        features: [
          "Swimming Pool",
          "Club House",
          "24/7 Security",
          "Park",
          "Shopping Complex",
        ],
        description:
          "Premium residential plots with modern amenities and excellent connectivity.",
        availability: "Limited",
      },
      {
        id: 2,
        name: "Garden City Plots",
        size: "1800 sq.ft",
        price: "₹45,00,000",
        location: "Noida Extension",
        features: [
          "Green Belt",
          "Children's Park",
          "Jogging Track",
          "Security",
        ],
        description:
          "Eco-friendly residential plots in developing area with great potential.",
        availability: "Available",
      },
      // Add more plots as needed
    ],
    commercial: [
      {
        id: 1,
        name: "Business Park Plaza",
        size: "5000 sq.ft",
        price: "₹2,50,00,000",
        location: "Commercial Belt, Delhi",
        features: ["High-Rise Building", "Parking", "Elevator", "Security"],
        description: "Prime commercial plots for business establishments.",
        availability: "Available",
      },
    ],
  };

  const services = [
    {
      title: "Plot Selection",
      description:
        "Expert guidance in selecting the perfect plot based on your requirements and budget.",
      icon: HomeIcon,
    },
    {
      title: "Legal Verification",
      description:
        "Complete legal verification and documentation support for hassle-free ownership.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Financial Assistance",
      description:
        "Partnership with leading banks for easy loan processing and financial solutions.",
      icon: CurrencyRupeeIcon,
    },
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black text-[rgb(245,220,85)] py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl text-yellow-400 font-bold mb-4">
          Chandrama Realcon
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          Premium Plot Land Services
        </p>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-16 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Dream Plot Awaits
          </h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed">
            Discover premium residential and commercial plots in prime locations
            across India. With over 20 years of experience, Chandrama Realcon
            offers the best investment opportunities in the real estate market.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-950 p-6 rounded-lg shadow-lg border border-[rgb(245,220,115)]"
            >
              <service.icon className="h-12 w-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="opacity-90">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Plot Categories */}
      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Plots
        </h2>

        {/* Residential Plots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-8"
        >
          <motion.button
            onClick={() => toggleSection("residential")}
            className="w-full bg-gray-950 p-6 rounded-lg flex justify-between items-center text-left border border-[rgb(245,220,115)]"
            whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
          >
            <h3 className="text-2xl font-semibold">Residential Plots</h3>
            {activeSection === "residential" ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </motion.button>

          <AnimatePresence>
            {activeSection === "residential" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 grid md:grid-cols-2  gap-6"
              >
                {plotData.residential.map((plot) => (
                  <motion.div
                    key={plot.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-950 p-6 rounded-lg border border-[rgb(245,220,115)]  "
                  >
                    <h4 className="text-xl font-semibold mb-2">{plot.name}</h4>
                    <div className="flex items-center mb-2">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{plot.location}</span>
                    </div>
                    <p className="text-lg font-bold mb-3">{plot.price}</p>
                    <p className="mb-4 opacity-90">{plot.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plot.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        plot.availability === "Limited"
                          ? "bg-red-600"
                          : "bg-green-600"
                      }`}
                    >
                      {plot.availability}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Commercial Plots */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <motion.button
            onClick={() => toggleSection("commercial")}
            className="w-full bg-gray-950 p-6 border border-[rgb(245,220,115)] rounded-lg flex justify-between items-center text-left"
            whileHover={{ backgroundColor: "rgb(55, 65, 81)" }}
          >
            <h3 className="text-2xl font-semibold">Commercial Plots</h3>
            {activeSection === "commercial" ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </motion.button>

          <AnimatePresence>
            {activeSection === "commercial" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 grid md:grid-cols-2 gap-6"
              >
                {plotData.commercial.map((plot) => (
                  <motion.div
                    key={plot.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-950 p-6 border border-[rgb(245,220,115)] rounded-lg"
                  >
                    <h4 className="text-xl font-semibold mb-2">{plot.name}</h4>
                    <div className="flex items-center mb-2">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>{plot.location}</span>
                    </div>
                    <p className="text-lg font-bold mb-3">{plot.price}</p>
                    <p className="mb-4 opacity-90">{plot.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {plot.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block bg-green-600 px-3 py-1 rounded-full text-sm">
                      {plot.availability}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Statistics */}

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <div className="bg-gray-950 p-6 rounded-lg border border-[rgb(245,220,115)]">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <PhoneIcon className="h-5 w-5 mr-3" />
                <span>+91 7978982412</span>
              </div>
              <div className="flex items-center justify-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                <span>chandramarealcon@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-950 p-6 rounded-lg border border-[rgb(245,220,115)]">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <p>
              Bhubaneswar
              <br />
              Odisha, India
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicePage;

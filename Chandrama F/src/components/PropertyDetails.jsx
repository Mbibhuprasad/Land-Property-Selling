import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoClose,
  IoLocationOutline,
  IoResizeOutline,
  IoNavigateOutline,
  IoCubeOutline,
  IoListOutline,
} from "react-icons/io5";

const PropertyDetails = ({ property, onClose, loading }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="bg-black rounded-2xl p-8 max-w-md w-full mx-4"
            variants={modalVariants}
          >
            <div className="flex justify-center items-center py-8">
              <motion.div
                className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <p className="text-center text-yellow-500 text-lg">
              Loading property details...
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Use the property data from backend or fallback to basic property data
  const plotData = property || {};

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
      >
        <motion.div
          className="bg-black rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          {/* Header Image */}
          <div className="relative">
            <img
              src={
                plotData.images && plotData.images.length > 0
                  ? plotData.images[0]
                  : plotData.image
              }
              alt={plotData.name || plotData.title}
              className="w-full h-52 object-cover rounded-t-2xl" // reduced size
            />
            <motion.button
              onClick={onClose}
              className="absolute top-3 right-3 bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose size={22} />
            </motion.button>
          </div>

          {/* Gallery Section */}
          {plotData.images && plotData.images.length > 1 && (
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {plotData.images.slice(1, 4).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${plotData.name} ${index + 2}`}
                    className="w-full h-20 object-cover rounded-lg hover:scale-105 transition" // smaller thumbnails
                  />
                ))}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h2 className="text-3xl font-bold text-[rgb(245,220,115)] mb-2">
              {plotData.name || plotData.title}
            </h2>

            <div className="flex items-center text-gray-300 mb-4">
              <IoLocationOutline className="mr-2 text-lg text-[rgb(245,220,65)]" />
              <p className="text-lg">{plotData.location}</p>
            </div>

            {/* Property Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <IoResizeOutline className="mr-2 text-yellow-500" />
                <span>{plotData.squareFeet || plotData.area} Sqft</span>
              </div>
              <div className="flex items-center text-gray-300">
                <IoNavigateOutline className="mr-2 text-yellow-500" />
                <span>Facing: {plotData.facing || "North"}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <IoCubeOutline className="mr-2 text-yellow-500" />
                <span>Boundary: {plotData.boundary || "Wall"}</span>
                
              </div>
              {/* <div className="flex items-center text-gray-300">
                <span className="font-semibold text-yellow-500">
                  ₹{plotData.price} Lakhs
                </span>
              </div> */}
            </div>

            {/* Address */}
            {plotData.address && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                  Address
                </h3>
                <p className="text-gray-300">{plotData.address}</p>
              </div>
            )}

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Description
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {plotData.description ||
                  "This beautiful plot offers great potential for construction. Perfect for building your dream home with all necessary amenities nearby."}
              </p>
            </div>

          

            {/* Price Details */}
            <div className="border-t border-gray-700 pt-4">
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Price Details
              </h3>
              <div className="text-gray-300 space-y-2">
                <p className="text-2xl font-bold text-yellow-500">
                  ₹{plotData.price} Lakhs
                </p>
                {plotData.squareFeet && (
                  <p>
                    Price per Sqft: ₹
                    {Math.round(
                      (plotData.price * 100000) / plotData.squareFeet
                    )}
                  </p>
                )}
                <p className="text-green-400">Status: Available</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PropertyDetails;

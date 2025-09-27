import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
        style={{ color: "rgb(245,220,115)" }}
      >
        Get in Touch With Us
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg text-center max-w-2xl mb-12"
        style={{ color: "rgb(245,220,115)" }}
      >
        Have questions about our plots or services? We’re here to help. Reach
        out via phone, email, or fill out the form below and our team will
        connect with you shortly.
      </motion.p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-6xl ">
        {[
          {
            icon: <Phone size={28} />,
            title: "Call Us",
            info: "+91 98765 43210",
          },
          {
            icon: <Mail size={28} />,
            title: "Email Us",
            info: "info@plotselling.com",
          },
          {
            icon: <MapPin size={28} />,
            title: "Visit Us",
            info: "123 Green Avenue, Bhubaneswar, Odisha",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
            className="flex flex-col border border-[rgb(245,220,115)] items-center p-6 bg-gray-950  rounded-2xl shadow-lg"
          >
            <div style={{ color: "rgb(245,220,115)" }}>{item.icon}</div>
            <h2
              className="text-xl font-semibold mt-3"
              style={{ color: "rgb(245,220,115)" }}
            >
              {item.title}
            </h2>
            <p
              className="mt-1 text-center"
              style={{ color: "rgb(245,220,115)" }}
            >
              {item.info}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-3xl  p-8  border border-[rgb(245,220,115)] rounded-2xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            style={{ color: "rgb(245,220,115)" }}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none"
            style={{ color: "rgb(245,220,115)" }}
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none mb-6"
          style={{ color: "rgb(245,220,115)" }}
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-xl font-semibold shadow-lg"
          style={{
            backgroundColor: "rgb(245,220,5 5)",
            color: "rgb(30,30,30)",
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}

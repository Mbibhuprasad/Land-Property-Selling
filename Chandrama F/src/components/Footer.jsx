// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-100 py-10 border-t-2 border-yellow-500">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-[rgb(245,220,65)]">
            🏡 Chandrama Realcon
          </h2>
          <p className="mt-3 text-sm text-[rgb(245,220,115)]">
            Making property management easier & affordable. Buy, sell, and
            explore real estate with confidence.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-[rgb(245,220,65)] mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500">
                About
              </a>
            </li>
            <li>
              <a href="/properties" className="hover:text-yellow-500">
                Properties
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-500">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-[rgb(245,220,65)] mb-3">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Property Verification</li>
            <li>Home Construction</li>
            <li>Tenant Verification</li>
            <li>Bank Loan Services</li>
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-[rgb(245,220,65)] mb-3">
            Contact
          </h3>
          <p className="text-sm">📍 Bhubaneswar, Odisha, India</p>
          <p className="text-sm">📞 +91 5354542897</p>
          <p className="text-sm">✉️ chandramarealcon@gmail.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-yellow-500 pt-4 text-center text-sm text-yellow-300">
        © {new Date().getFullYear()} Chandrama Realcon. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

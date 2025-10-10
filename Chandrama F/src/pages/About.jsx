import React from "react";
// Assuming framer-motion is available in the environment
import { motion } from "framer-motion";

// Define the custom primary color for text and accents
const PRIMARY_COLOR = "rgb(245, 220, 75)";

// --- Utility Components and Data ---

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Simplified SectionTitle (fixed to dark mode styling)
const SectionTitle = ({ children }) => (
  <motion.h2
    className={`text-4xl sm:text-5xl font-extrabold mb-8 text-center`}
    style={{ color: PRIMARY_COLOR }}
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

// Simplified FeatureCard (fixed to dark mode styling)
const FeatureCard = ({ icon, title, description }) => (
  // Enhanced card styling and hover effect with animated border
  <motion.div
    className={`p-6 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-[1.05] hover:shadow-2xl
      bg-neutral-800 text-white border-b-4 border-transparent hover:border-b-4 hover:border-yellow-600`}
    variants={itemVariants}
  >
    <div className="flex items-center mb-3">
      <div
        className="text-4xl mr-3 transition-colors duration-300"
        style={{ color: PRIMARY_COLOR }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-extrabold" style={{ color: PRIMARY_COLOR }}>
        {title}
      </h3>
    </div>
    <p className={`text-neutral-300 text-sm leading-relaxed`}>{description}</p>
  </motion.div>
);

// --- Content Data (Large Amount of Details) ---

const coreValues = [
  {
    icon: "🏛️",
    title: "Unwavering Legality",
    description:
      "Every plot is meticulously vetted, 100% clear title, RERA approved, and compliant with all local governmental regulations. Complete transparency in documentation is our guarantee.",
  },
  {
    icon: "📈",
    title: "Future-Proof Investment",
    description:
      "Strategically located in areas marked for rapid infrastructural development (upcoming highways, metro links, and industrial corridors). Your investment is poised for exponential growth.",
  },
  {
    icon: "🌳",
    title: "Sustainable Community",
    description:
      "Our projects integrate eco-friendly practices, including rainwater harvesting, dedicated green spaces, and planned community parks, ensuring a healthy environment for future residents.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Process",
    description:
      "From initial site visit to final registration, our dedicated relationship managers provide personalized, end-to-end support, simplifying the entire buying journey for you.",
  },
];

const investmentBenefits = [
  {
    title: "Guaranteed 3x Return Potential",
    detail:
      "Based on current market trends and planned civic improvements in the next 5-7 years, plots in the Chandrama Realcon portfolio demonstrate a high-probability for tripling in value.",
  },
  {
    title: "Proximity to Economic Hubs",
    detail:
      "Situated less than 30 minutes from major IT parks and industrial zones, ensuring high rental demand and future residential occupancy.",
  },
  {
    title: "Flexible Payment Plans",
    detail:
      "Avail exclusive partnership financing options with leading banks, offering low interest rates and customizable EMI structures to ease your capital outlay.",
  },
  {
    title: "Immediate Possession & Development",
    detail:
      "Unlike speculative projects, our plots are ready for immediate possession, allowing you to commence construction or resale activities without delay.",
  },
];

const About = () => {
  // Theme fixed to Dark Mode (removed useState)
  const accentColor = PRIMARY_COLOR;
  return (
    <div
      className={`min-h-screen transition-colors duration-500 bg-black text-white`}
    >
      <main>
        {/* --- Hero Section: The Vision --- */}
        <section className="relative pt-24 pb-16 overflow-hidden bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6  tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}  
            >
              Our Happy Investors
            </motion.h2>
            <motion.p
              className="text-neutral-400 text-xl max-w-5xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how our clients have transformed their investments into
              thriving homes and future-ready opportunities. Here’s what they
              have to say.
            </motion.p>

            {/* --- Review Cards --- */}
            <div className="space-y-10">
              {/* Row 1 (2 cards) */}
              <motion.div
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                    name: "Neha Sharma",
                    review:
                      "Absolutely loved the transparency! The plots are in prime locations with excellent growth potential.",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
                    name: "Aarav Patel",
                    review:
                      "Chandrama Realcon made my first investment journey effortless. The legal clarity and support were top-notch!",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-neutral-800 rounded-2xl shadow-lg overflow-hidden w-80 group hover:shadow-2xl transition-all duration-500"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-5 text-left">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        {card.name}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed italic">
                        “{card.review}”
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Row 2 (3 cards) */}
              <motion.div
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {[
                  {
                    img: "https://images.unsplash.com/photo-1603415526960-f7e0328d7d2a",
                    name: "Rohan Mehta",
                    review:
                      "I got possession immediately and even started construction. Their support team guided me through every step.",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
                    name: "Priya Das",
                    review:
                      "Incredible service! Within two years, my investment value has doubled. Truly a future-proof property.",
                  },
                  {
                    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
                    name: "Vikram Singh",
                    review:
                      "A trustworthy team with deep knowledge of real estate. Highly recommended for serious investors!",
                  },
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-neutral-800 rounded-2xl shadow-lg overflow-hidden w-80 group hover:shadow-2xl transition-all duration-500"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={card.img}
                      alt={card.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-5 text-left">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: PRIMARY_COLOR }}
                      >
                        {card.name}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed italic">
                        “{card.review}”
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Core Values Section (Large Content Block 1) --- */}
        <section id="our-vision" className={`py-5 sm:py-10 bg-black`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>
              Our Foundation: Principles that Drive Us
            </SectionTitle>
            <motion.p
              className={`text-lg text-center mb-16 max-w-4xl mx-auto text-neutral-400`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Chandrama Realcon operates on pillars of trust, strategic
              foresight, and dedication to our clientele. We believe that real
              estate transactions should be transparent, lucrative, and deeply
              fulfilling. Our plots are not just pieces of land; they are
              futures we help you build.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {coreValues.map((value, index) => (
                // Removed isDarkMode prop
                <FeatureCard key={index} {...value} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- Location Advantage Section (Large Content Block 2) --- */}
        <section id="location-advantage" className={`py-5 sm:py-20 bg-black`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>
              Strategic Location: The Apex of Connectivity
            </SectionTitle>
            <div className="lg:flex lg:space-x-12 items-start">
              <motion.div
                className="lg:w-1/2 mb-10 lg:mb-0 p-6 rounded-xl transition-shadow duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <h3
                  className={`text-3xl font-bold mb-4`}
                  style={{ color: accentColor }}
                >
                  The Infrastructure Goldmine
                </h3>
                <p className={`text-neutral-300 mb-6 leading-relaxed`}>
                  Our development is strategically positioned at the nexus of
                  three major state highways, providing unparalleled access to
                  the city center and peripheral industrial zones. This
                  placement is critical, as historical data shows land values
                  surge disproportionately in infrastructure-dense areas. The
                  upcoming 8-lane ring road, scheduled for completion in $Q4\
                  2026$, directly intersects with our primary access road,
                  making Chandrama plots the most sought-after address for both
                  residential and commercial development.
                </p>
                <ul className="space-y-3 font-semibold">
                  <li className={`text-neutral-300`}>
                    <span
                      className="font-bold text-lg mr-2"
                      style={{ color: accentColor }}
                    >
                      &bull; Proximity:
                    </span>{" "}
                    5 km from the nearest elevated metro station, 20 minutes to
                    the international airport.
                  </li>
                  <li className={`text-neutral-300`}>
                    <span
                      className="font-bold text-lg mr-2"
                      style={{ color: accentColor }}
                    >
                      &bull; Education:
                    </span>{" "}
                    Surrounded by three top-tier universities and several
                    renowned K-12 schools, making it ideal for family living.
                  </li>
                  <li className={`text-neutral-300`}>
                    <span
                      className="font-bold text-lg mr-2"
                      style={{ color: accentColor }}
                    >
                      &bull; Commercial Zone:
                    </span>{" "}
                    Direct link to the new Financial District, minimizing
                    commute times for professionals.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className={`p-8 rounded-xl shadow-2xl bg-neutral-900`}>
                  <h4
                    className={`text-2xl font-bold mb-4`}
                    style={{ color: accentColor }}
                  >
                    Detailed Zoning & Regulations
                  </h4>
                  <p className={`text-neutral-400 mb-4 italic`}>
                    All Chandrama Realcon plots fall under clear residential
                    (R-1) zoning, with permissible floor space indices (FSI)
                    significantly higher than in comparable, older city zones.
                    This allows for greater potential in construction size and
                    future project viability.
                  </p>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr
                        className={`border-b border-neutral-700 border-opacity-70`}
                      >
                        <th
                          className="py-3 text-sm font-extrabold"
                          style={{ color: accentColor }}
                        >
                          Parameter
                        </th>
                        <th
                          className="py-3 text-sm font-extrabold"
                          style={{ color: accentColor }}
                        >
                          Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Fixed table rows to dark mode hover colors */}
                      <tr
                        className={`border-b border-neutral-700 hover:bg-opacity-10 transition-colors duration-300 hover:bg-yellow-900`}
                      >
                        <td className="py-3">Minimum Plot Size</td>
                        <td className="py-3 font-semibold">1200 Sq. Ft.</td>
                      </tr>
                      <tr
                        className={`border-b border-neutral-700 hover:bg-opacity-10 transition-colors duration-300 hover:bg-yellow-900`}
                      >
                        <td className="py-3">Road Access</td>
                        <td className="py-3 font-semibold">
                          30ft Blacktop Roads
                        </td>
                      </tr>
                      <tr
                        className={`border-b border-neutral-700 hover:bg-opacity-10 transition-colors duration-300 hover:bg-yellow-900`}
                      >
                        <td className="py-3">Water Supply</td>
                        <td className="py-3 font-semibold">
                          Integrated Municipal Line
                        </td>
                      </tr>
                      <tr
                        className={`hover:bg-opacity-10 transition-colors duration-300 hover:bg-yellow-900`}
                      >
                        <td className="py-3">Sewage System</td>
                        <td className="py-3 font-semibold">
                          Underground STP-Enabled
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Investment Section (Large Content Block 3) --- */}
        <section id="investment" className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>
              Investment Portfolio: Analyzing Your Potential
            </SectionTitle>
            <motion.p
              className={`text-lg text-center mb-16 max-w-4xl mx-auto text-neutral-400`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Real estate is the most reliable hedge against inflation. Our
              plots offer superior capital appreciation potential compared to
              generic market indices. We provide detailed financial models
              demonstrating potential ROI based on historical appreciation rates
              in similar regional growth areas.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {investmentBenefits.map((benefit, index) => (
                // Enhanced Investment Card styling and hover (shadow shift) - fixed dark mode colors
                <motion.div
                  key={index}
                  className={`p-8 rounded-xl shadow-2xl border-t-4 transition-all duration-500 hover:scale-[1.03]
                    bg-neutral-800 border-yellow-600 hover:shadow-yellow-900/50`}
                  variants={itemVariants}
                >
                  <h4
                    className={`text-2xl font-extrabold mb-2`}
                    style={{ color: accentColor }}
                  >
                    {benefit.title}
                  </h4>
                  <p className={`text-neutral-300 leading-relaxed`}>
                    {benefit.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-3">
                Ready to Secure Your Future?
              </h3>
              <p className={`text-neutral-400 mb-6 text-lg`}>
                Contact our expert team for a personalized appreciation
                projection report and a complimentary site visit.
              </p>
              {/* Enhanced Consultation Button styling with internal color fill on hover - fixed dark mode opacity */}
              <button
                className="px-10 py-4 text-xl font-extrabold rounded-full transition-all duration-500 transform bg-transparent border-2 hover:bg-opacity-100 hover:shadow-3xl relative overflow-hidden group"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                <span
                  className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: accentColor, opacity: 0.1 }}
                ></span>
                <span className="relative z-10 group-hover:text-gray-200 transition-colors duration-500">
                  Request Consultation &rarr;
                </span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* --- Testimonial Section --- */}
        <section className={`py-10 sm:py-20 bg-black`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Voices of Trust</SectionTitle>
            <motion.blockquote
              className={`p-10 rounded-2xl shadow-2xl relative bg-neutral-800`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
            >
              <div
                className="absolute top-0 left-0 -mt-6 -ml-6 text-8xl font-serif opacity-30"
                style={{ color: accentColor }}
              >
                “
              </div>
              <p className="text-xl italic leading-relaxed z-10 relative">
                "The transparency and detailed legal vetting provided by the
                Chandrama team were exceptional. We felt confident at every
                step. In just two years, the valuation of our plot has exceeded
                our initial projections by $25\%$. This was a truly profitable
                and secure investment."
              </p>
              <footer
                className="mt-8 pt-4 border-t"
                style={{ borderColor: "rgba(245, 220, 75, 0.3)" }}
              >
                <p
                  className="font-extrabold text-lg"
                  style={{ color: accentColor }}
                >
                  — Rakesh & Priya S.,
                </p>
                <p className={`text-neutral-400 text-sm`}>
                  IT Professionals & Investors
                </p>
              </footer>
            </motion.blockquote>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

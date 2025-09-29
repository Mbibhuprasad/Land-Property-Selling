import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const properties = [
  {
    id: 1,
    name: "Property Near IIT Bhubaneswar...",
    description:
      "A luxury high-rise offering panoramic city views, smart-home integrations, and premium amenities. Designed for those seeking elegance and convenience in the heart of the metropolis. Experience urban sophistication redefined.",
    image:
      "https://images.shiksha.com/mediadata/images/1692684932phpi5X4au.jpeg",
    category: "Innovative Plots For (Sale)",
  },
  {
    id: 2,
    name: "Property Near Templecity Institute of Technology and Engineering...",
    description:
      "Waterfront properties blending contemporary architecture with natural serenity. Private docks, infinity pools, and sustainable design make these homes a sanctuary for discerning buyers seeking tranquility and exclusivity.",
    image:
      "https://www.sikshapedia.com/public/data/colleges/temple-city-institute-of-technology-and-engineering-khorda-orissa/fkMQYqbJ_D.webp",
    category: "Perfect Area Plots (Sale)",
  },
];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-full   bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gold Gradient Orbs */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-3xl animate-pulse-slow animate-drift-1"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-gradient-to-r from-yellow-400/25 via-yellow-500/20 to-yellow-600/25 rounded-full blur-3xl animate-bounce-slow animate-drift-2"></div>

        {/* Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500/40 via-yellow-300/30 to-yellow-600/40 animate-rainbow-wave"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-yellow-400/30 via-yellow-600/30 to-yellow-300/30 animate-rainbow-wave-reverse"></div>

        {/* Gold Neon Glow */}
        <div className="absolute top-20 left-40 w-4 h-4 bg-yellow-400 rounded-full animate-neon-glow shadow-lg shadow-yellow-400/50"></div>
        <div
          className="absolute top-60 right-32 w-3 h-3 bg-yellow-500 rounded-full animate-neon-glow shadow-lg shadow-yellow-500/50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-5 h-5 bg-yellow-600 rounded-full animate-neon-glow shadow-lg shadow-yellow-600/50"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-gray-500/50 !w-3 !h-3",
          bulletActiveClass:
            "swiper-pagination-bullet-active !bg-yellow-500 !w-8",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full  relative z-10 "
      >
        {properties.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-[90vh] flex flex-col lg:flex-row items-center justify-between px-4  sm:px-8  lg:px-16 pt-2">
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10"></div>

              {/* Text */}
              <div className="relative z-20 flex-1 max-w-2xl text-white text-center lg:text-left px-2 sm:px-0 mt-20 sm:mt-0">
                {/* Category */}
                <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-yellow-900 to-yellow-700 border border-yellow-500/40 mb-6 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-neon-glow"></div>
                  <span className="text-sm text-[rgb(245,220,115)] font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
                  <span className="bg-gradient-to-r from-yellow-300 via-[rgb(245,220,115)] to-yellow-700 bg-clip-text text-transparent animate-gradient-text">
                    {item.name}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  {item.description}
                </p>

                {/* Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <button
                    onClick={() => navigate("/properties")}
                    className="group px-8 py-4 bg-gradient-to-r from-yellow-600 to-[rgb(245,220,115)] hover:[rgba(255, 235, 154, 1)] rounded-lg font-semibold text-black transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:scale-105"
                  >
                    <span>View Property</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>

                  <button className="group px-8 py-4 border-2 border-gradient-[rgb(245,220,115)] hover:border-[rgb(245,220,115)] rounded-lg font-semibold text-yellow-400 transition-all duration-300 flex items-center justify-center backdrop-blur-sm hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-700 transform hover:scale-105">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Virtual Tour</span>
                  </button>
                </div>
              </div>

              {/* Image - hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex relative z-20 flex-1 max-w-2xl mt-8 ml-8 animate-slide-in">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-yellow-900/30 to-yellow-600/30 rounded-2xl transform rotate-3 animate-color-float"></div>
                  <div className="relative bg-black/70 backdrop-blur-lg rounded-2xl p-3 border border-yellow-700 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[90rem] h-90 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-8 right-8 bg-yellow-500 w-3 h-3 rounded-full animate-neon-glow shadow-lg shadow-yellow-400/50"></div>
                    <div className="absolute bottom-8 left-8">
                      <div className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-2">
                        <div className="text-yellow-400 text-sm font-mono animate-neon-glow p-1">
                          ● Premium Listing
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 2rem !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #facc15 !important;
          background: rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(10px) !important;
          width: 3rem !important;
          height: 3rem !important;
          border-radius: 50% !important;
          border: 1px solid rgba(250, 204, 21, 0.5) !important;
          transition: all 0.3s ease !important;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: linear-gradient(
            45deg,
            rgba(250, 204, 21, 0.2),
            rgba(180, 140, 10, 0.2)
          ) !important;
          transform: scale(1.1) !important;
          box-shadow: 0 0 20px rgba(250, 204, 21, 0.3) !important;
        }

        /* Animations */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
        .animate-drift-1 {
          animation: drift-1 15s ease-in-out infinite;
        }
        .animate-drift-2 {
          animation: drift-2 12s ease-in-out infinite;
        }
        .animate-neon-glow {
          animation: neon-glow 2s ease-in-out infinite;
        }
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 3s ease infinite;
        }
        .animate-color-float {
          animation: color-float 4s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(40px, -20px) rotate(180deg);
          }
        }
        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-40px, 30px) rotate(180deg);
          }
        }
        @keyframes rainbow-wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes rainbow-wave-reverse {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        @keyframes neon-glow {
          0%,
          100% {
            box-shadow: 0 0 5px gold, 0 0 10px gold, 0 0 15px gold;
          }
          50% {
            box-shadow: 0 0 15px gold, 0 0 25px gold, 0 0 35px gold;
          }
        }
        @keyframes gradient-text {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes color-float {
          0%,
          100% {
            transform: rotate(3deg) translateY(0px);
            background: linear-gradient(
              45deg,
              rgba(250, 204, 21, 0.3),
              rgba(180, 140, 10, 0.3)
            );
          }
          50% {
            transform: rotate(3deg) translateY(-15px);
            background: linear-gradient(
              45deg,
              rgba(180, 140, 10, 0.3),
              rgba(250, 204, 21, 0.3)
            );
          }
        }
        .border-gradient-deep-gold {
          border: 2px solid;
          border-image: linear-gradient(45deg, #facc15, #b8860b, #fbbf24) 1;
        }
      `}</style>
    </div>
  );
}

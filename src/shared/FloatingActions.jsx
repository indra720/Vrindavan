import { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Fixed Social Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-0.5">
        {/* Facebook */}
        <a href="#" className="group flex items-center justify-end">
          <div className="bg-blue-600 text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-40 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              Facebook
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <FaFacebookF size={20} />
            </div>
          </div>
        </a>

        {/* WhatsApp/Mobile */}
        <a
          href="https://wa.me/917014289408"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-end"
        >
          <div className="bg-green-500 text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-40 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              WhatsApp
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <FaWhatsapp size={24} />
            </div>
          </div>
        </a>

        {/* Call Now */}
        <a
          href="tel:+917014289408"
          className="group flex items-center justify-end"
        >
          <div className="bg-[#246BFD] text-white flex items-center justify-end overflow-hidden transition-all duration-300 w-12 group-hover:w-48 h-12 rounded-l-md shadow-lg">
            <span className="px-4 font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-1 text-center">
              +91 7014289408
            </span>
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <IoCall size={22} />
            </div>
          </div>
        </a>
      </div>

      {/* Scroll Navigation */}
      <div className="fixed bottom-8 right-4 sm:right-16 z-[100] flex flex-col gap-2">
        <button
          onClick={scrollToTop}
          className={`bg-[#072f4a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-[#072f4a]/90 hover:-translate-y-1 ${showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"}`}
          aria-label="Scroll to top"
        >
          <FaChevronUp size={24} />
        </button>
        <button
          onClick={scrollToBottom}
          className="bg-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-dark/90 hover:translate-y-1"
          aria-label="Scroll to bottom"
        >
          <FaChevronDown size={24} />
        </button>
      </div>
    </>
  );
}

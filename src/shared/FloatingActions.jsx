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

  return (
    <>
      {/* Fixed Social Sidebar (Circular icons matching reference image) */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2.5">
        {/* Facebook */}
        <a 
          href="https://www.facebook.com/vrindavanrealestatejaipur/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          title="Facebook"
        >
          <FaFacebookF size={18} />
        </a>

        {/* Call Now */}
        <a 
          href="tel:+917014289408"
          className="w-11 h-11 bg-[#00A3E0] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          title="Call (+91) 7014289408"
        >
          <IoCall size={19} />
        </a>

        {/* WhatsApp */}
        <a
          href="//api.whatsapp.com/send?phone=+917014289408&text=Hello!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          title="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* Scroll Navigation (Blue circular button with white arrow matching reference screenshot) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={scrollToTop}
          className={`w-12 h-12 bg-[#0078D4] text-white rounded-full shadow-2xl border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-[#005A9E] hover:scale-110 ${
            showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </button>
      </div>
    </>
  );
}


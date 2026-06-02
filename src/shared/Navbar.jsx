import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import { IoMail, IoCall, IoMenu, IoClose } from "react-icons/io5";

import vrindalogo from "../assets/Vrinda-logo.png";

const navItems = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT US" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/blog", label: "BLOG" },
  { to: "/events", label: "EVENT" },
  { to: "/contact", label: "CONTACT" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-white z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"}`}>
      {/* ================= DESKTOP NAVBAR (Hidden on Mobile) ================= */}
      <div className="hidden lg:block w-full">
        {/* Full Width Wrapper */}
        <div className={`relative flex w-full overflow-hidden transition-all duration-300 ${isScrolled ? "h-20" : "min-h26.25"}`}>

          {/* 1. Logo Container */}
          <div 
            className={`transition-all duration-300 z-20 flex items-center justify-center px-8 relative ${
              isScrolled 
                ? "w-[20%] bg-white py-2" 
                : "w-[28%] bg-[#f4f4f4] py-2"
            }`}
            style={!isScrolled ? {
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
            } : {}}
          >
            <img
              src={vrindalogo}
              alt="Vrindavan Real Estate"
              className={`transition-all duration-300 object-contain ${isScrolled ? "h-15" : "h-20"}`}
            />
          </div>

          {/* 2. Right Side Content */}
          <div className={`flex-1 flex flex-col transition-all duration-300 ${isScrolled ? "ml-0" : "ml-[-4%]"}`}>

            {/* Top Bar (Black) - Hidden on scroll */}
            {!isScrolled && (
              <div 
                className="bg-[#2d2d2d] h-9 flex items-center justify-between pl-20 pr-10 text-white"
                style={{
                  clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%)"
                }}
              >
                <div className="flex items-center gap-4">
                  <IoMail size={16} className="text-[#c89b3c]" />
                  <a href="mailto:info@vrindavanrealestate.in" className="text-[13px] font-medium hover:text-[#c89b3c] transition-colors">
                    info@vrindavanrealestate.in
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  <a href="#" className="hover:text-[#c89b3c] transition-colors"><FaFacebookF size={13} /></a>
                  <a href="#" className="hover:text-[#c89b3c] transition-colors"><FaTwitter size={13} /></a>
                  <a href="#" className="hover:text-[#c89b3c] transition-colors"><FaInstagram size={13} /></a>
                  <a href="#" className="hover:text-[#c89b3c] transition-colors"><FaLinkedinIn size={13} /></a>
                </div>
              </div>
            )}

            {/* Main Nav Bar (White) */}
            <div className={`bg-white flex-1 flex items-center justify-between pr-10 transition-all duration-300 ${isScrolled ? "pl-10" : "pl-16"}`}>
              <nav className="flex items-center gap-7 xl:gap-10">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `font-bold text-[13px] xl:text-[14px] tracking-widest transition-all duration-300 ${
                        isActive ? "text-[#c89b3c]" : "text-black hover:text-[#c89b3c]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? "bg-gray-100" : "bg-[#246BFD]/10"}`}>
                  <IoCall size={24} className={isScrolled ? "text-gray-600" : "text-[#246BFD]"} />
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-[9px] font-bold text-black uppercase leading-none mb-1">CALL US NOW</p>
                  <a href="tel:+917014289408" className="text-[16px] xl:text-[18px] font-extrabold text-gray-500 hover:text-[#c89b3c] transition-colors">
                    +91 7014289408
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className={`lg:hidden flex items-center justify-between px-6 py-4 border-b bg-white ${isScrolled ? "fixed top-0 left-0 w-full shadow-sm" : "relative"}`}>
        <img src={vrindalogo} alt="Logo" className="h-14 object-contain" />
        <button onClick={() => setOpen(!open)} className="text-[#2d2d2d]">
          {open ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b fixed top-22.25 left-0 w-full z-50 shadow-lg animate-in slide-in-from-top duration-300">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block font-bold text-sm tracking-widest text-[#2d2d2d] hover:text-[#c89b3c]"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t flex items-center gap-3">
              <IoCall className="text-gray-600" />
              <span className="font-bold text-gray-500">+91 7014289408</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

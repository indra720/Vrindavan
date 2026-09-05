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
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full bg-white z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 shadow-lg border-b border-slate-200/80 backdrop-blur-md bg-white/95" : "relative"}`}>
      {/* ================= DESKTOP NAVBAR (Hidden on Mobile) ================= */}
      <div className="hidden lg:block w-full">
        {/* Full Width Wrapper */}
        <div className={`relative flex w-full overflow-hidden transition-all duration-300 ${isScrolled ? "h-20" : "min-h-24"}`}>

          {/* 1. Logo Container */}
          <div 
            className={`transition-all duration-300 z-20 flex items-center justify-center px-8 relative ${
              isScrolled 
                ? "w-[20%] bg-white py-2" 
                : "w-[25%] bg-[#F4F6FA] py-2"
            }`}
            style={!isScrolled ? {
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)",
            } : {}}
          >
            <NavLink to="/">
              <img
                src={vrindalogo}
                alt="Vrindavan Real Estate"
                className={`transition-all duration-300 object-contain hover:scale-105 ${isScrolled ? "h-14" : "h-20"}`}
              />
            </NavLink>
          </div>

          {/* 2. Right Side Content */}
          <div className={`flex-1 flex flex-col transition-all duration-300 ${isScrolled ? "ml-0" : "ml-[-4%]"}`}>

            {/* Top Bar (Dark Charcoal #000000 Polygon Cut) - Hidden on scroll */}
            {!isScrolled && (
              <div 
                className="bg-[#000000] h-10 flex items-center justify-between pl-20 pr-10 text-white"
                style={{
                  clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%)"
                }}
              >
                <div className="flex items-center gap-3">
                  <IoMail size={15} className="text-[#C89B3C]" />
                  <a href="mailto:info@vrindavanrealestate.in" className="text-[13px] font-semibold text-slate-200 hover:text-[#C89B3C] transition-colors">
                    info@vrindavanrealestate.in
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/vrindavanrealestatejaipur/" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:bg-[#C89B3C] hover:text-white transition-all"><FaFacebookF size={12} /></a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:bg-[#C89B3C] hover:text-white transition-all"><FaTwitter size={12} /></a>
                  <a href="https://www.instagram.com/vrindavan_real_estatejaipur/" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:bg-[#C89B3C] hover:text-white transition-all"><FaInstagram size={12} /></a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-slate-200 hover:bg-[#C89B3C] hover:text-white transition-all"><FaLinkedinIn size={12} /></a>
                </div>
              </div>
            )}

            {/* Main Nav Bar (Pure White) */}
            <div className={`bg-white flex-1 flex items-center justify-between pr-10 transition-all duration-300 ${isScrolled ? "pl-10" : "pl-16"}`}>
              <nav className="flex items-center gap-6 xl:gap-9">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `relative font-extrabold text-[13px] xl:text-[14px] tracking-wider transition-all duration-300 py-1 group ${
                        isActive 
                          ? "text-[#000000] after:w-full" 
                          : "text-slate-700 hover:text-[#000000]"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-[#000000] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Call CTA Button Pill */}
              <a 
                href="tel:+917014289408"
                className="flex items-center gap-3 bg-[#000000] hover:bg-black text-white px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C89B3C] group-hover:bg-[#C89B3C] group-hover:text-white transition-colors">
                  <IoCall size={16} />
                </div>
                <div className="whitespace-nowrap text-left">
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 leading-none mb-0.5">Call Us Now</p>
                  <p className="text-[13px] font-black text-white tracking-tight leading-none">
                    (+91) 7014289408
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAVBAR ================= */}
      <div className={`lg:hidden flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white ${isScrolled ? "fixed top-0 left-0 w-full shadow-md z-50" : "relative"}`}>
        <NavLink to="/">
          <img src={vrindalogo} alt="Logo" className="h-12 object-contain" />
        </NavLink>
        <button onClick={() => setOpen(!open)} className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#000000]">
          {open ? <IoClose size={26} /> : <IoMenu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-b border-slate-200 fixed top-20 left-0 w-full z-50 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="p-6 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-xl font-extrabold text-sm tracking-wider transition-all ${
                    isActive 
                      ? "bg-[#000000] text-white" 
                      : "text-slate-800 hover:bg-slate-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <a 
                href="tel:+917014289408"
                className="flex items-center justify-center gap-3 bg-[#000000] text-white py-3 rounded-xl font-extrabold text-sm shadow-md"
              >
                <IoCall size={18} className="text-[#C89B3C]" />
                <span>Call Us: (+91) 7014289408</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



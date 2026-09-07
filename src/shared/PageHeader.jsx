import { Link } from "react-router-dom";
import { FaShieldAlt, FaAward, FaBuilding } from "react-icons/fa";

export default function PageHeader({
  badge = "VRINDAVAN REAL ESTATE",
  title = "Discover",
  goldTitle = "Properties",
  subtitle = null,
  breadcrumbs = [{ label: "Home", link: "/" }, { label: "Page" }],
}) {
  return (
    <div className="bg-[#000000] text-white py-10 border-b border-[#C89B3C]/20 shadow-2xl relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
          {badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          {title} <span className="text-[#C89B3C]">{goldTitle}</span>
        </h1>
        <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-300 font-medium mt-3">
          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {crumb.link ? (
                <Link to={crumb.link} className="hover:text-[#C89B3C] transition-colors text-slate-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <span className="text-[#C89B3C]">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

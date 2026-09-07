import { Link } from "react-router-dom";
import PageHeader from "../shared/PageHeader";
import { FaShieldAlt, FaCheckCircle, FaChartLine, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import himanshu from "../assets/himanshu.jpg";
import sandeep from "../assets/sandeep.jpg";
import avinash from "../assets/avinash.jpg";
import vrindalogo from "../assets/Vrinda-logo.png";

export default function AboutPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen text-slate-800 font-sans">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="WHO WE ARE"
        title="About"
        goldTitle="Vrindavan Real Estate"
        subtitle="Pioneering Excellence in Jaipur's Premier Real Estate & Land Development Sector"
        breadcrumbs={[{ label: "Home", link: "/" }, { label: "About Us" }]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Unique Luxury Introduction Section with Vrinda Logo Display */}
        <section className="bg-white border border-slate-200/80 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#C89B3C]" />
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Original User Content (Wider: 8 Cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-1">
                  OUR VISION & MISSION
                </span>
                <div className="h-0.5 w-16 bg-[#C89B3C] mt-2 rounded-full" />
              </div>

              <p className="text-slate-600 leading-relaxed text-base font-normal">
                Vrindavan Real Estate in Jaipur is a rapidly developing sector, offering prime residential and commercial properties in one of the city's most sought-after areas. Known for its serene environment and strategic location, Vrindavan is a favorite among investors and homebuyers looking for a blend of modern living with a touch of traditional charm.
              </p>

              <p className="text-slate-600 leading-relaxed text-base font-normal">
                With excellent connectivity to key areas of Jaipur, including educational institutions, healthcare centers, and commercial hubs, Vrindavan Real Estate presents lucrative opportunities for both long-term investments and immediate housing needs. The area is also seeing a rise in luxury projects, making it ideal for those seeking premium lifestyle options.
              </p>
            </div>

            {/* Right Column: Sleek Compact Luxury Logo Pedestal (4 Cols) */}
            <div className="lg:col-span-4 relative">
              <div className="bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#000000] border border-[#C89B3C]/40 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[290px] group">
                {/* Background Ambient Gold Aura */}
                <div className="absolute inset-0 bg-radial from-[#C89B3C]/15 via-transparent to-transparent pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-36 h-36 bg-[#C89B3C]/10 rounded-full blur-2xl" />
                
                {/* Floating Logo Badge */}
                <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-white/95 p-5 shadow-xl border-2 border-[#C89B3C]/60 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-[#C89B3C]">
                  <img
                    src={vrindalogo}
                    alt="Vrindavan Real Estate Logo"
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>

                {/* Luxury Verification Tag */}
                <div className="mt-5 relative z-10 px-3.5 py-1.5 rounded-full bg-[#000000]/80 border border-[#C89B3C]/50 text-[#C89B3C] font-semibold text-[10px] tracking-widest uppercase shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C] animate-pulse" />
                  PREMIER LAND DEVELOPER IN JAIPUR
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Leadership Section */}
        <section className="text-center">
          <div className="mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
              PILLARS OF STEWARDSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight">
              Executive Leadership
            </h2>
            <p className="text-slate-500 text-sm md:text-base mt-2 max-w-2xl mx-auto font-normal">
              Guided by decades of cumulative institutional acumen, fiscal discipline, and an uncompromising commitment to client wealth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-6">
            {/* Director 1: Himanshu Singh */}
            <div className="bg-white border-t-4 border-[#C89B3C] border-x border-b border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative pt-16 pb-8">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#000000] shadow-md bg-slate-900">
                  <img
                    src={himanshu}
                    alt="Himanshu Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified Gold Checkmark Badge */}
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C89B3C] text-black flex items-center justify-center border-2 border-white shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current stroke-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#000000]">Himanshu Singh</h3>
                <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mt-1">
                  CHIEF EXECUTIVE OFFICER
                </p>
              </div>
            </div>

            {/* Director 2: Sandeep Singh */}
            <div className="bg-white border-t-4 border-[#C89B3C] border-x border-b border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative pt-16 pb-8">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#000000] shadow-md bg-slate-900">
                  <img
                    src={sandeep}
                    alt="Sandeep Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified Gold Checkmark Badge */}
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C89B3C] text-black flex items-center justify-center border-2 border-white shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current stroke-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#000000]">Sandeep Singh</h3>
                <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mt-1">
                  EXECUTIVE DIRECTOR - INFRASTRUCTURE
                </p>
              </div>
            </div>

            {/* Director 3: Avinash Singh */}
            <div className="bg-white border-t-4 border-[#C89B3C] border-x border-b border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative pt-16 pb-8">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#000000] shadow-md bg-slate-900">
                  <img
                    src={avinash}
                    alt="Avinash Singh"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Verified Gold Checkmark Badge */}
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#C89B3C] text-black flex items-center justify-center border-2 border-white shadow-sm">
                  <svg className="w-3.5 h-3.5 fill-current stroke-current" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#000000]">Avinash Singh</h3>
                <p className="text-xs font-semibold text-[#C89B3C] uppercase tracking-wider mt-1">
                  EXECUTIVE DIRECTOR - INVESTOR RELATIONS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Human Capital Table */}
        <section>
          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
              TEAM STRENGTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight">
              Human <span className="text-[#C89B3C]">Capital</span>
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200/80 rounded-3xl bg-white shadow-sm">
            <table className="w-full min-w-[650px] text-sm">
              <thead className="bg-[#000000] text-[#C89B3C]">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">S.No.</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Qualification</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    Total No. of Professionals
                  </th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">
                    Average Work Experience
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">1</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">CA</td>
                  <td className="py-4 px-6 whitespace-nowrap">3</td>
                  <td className="py-4 px-6 text-[#C89B3C] font-semibold whitespace-nowrap">7 years</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">2</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">MBA</td>
                  <td className="py-4 px-6 whitespace-nowrap">19</td>
                  <td className="py-4 px-6 text-[#C89B3C] font-semibold whitespace-nowrap">6 years</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">3</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">Graduates</td>
                  <td className="py-4 px-6 whitespace-nowrap">25</td>
                  <td className="py-4 px-6 text-[#C89B3C] font-semibold whitespace-nowrap">8 years</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">4</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">Technical Professional</td>
                  <td className="py-4 px-6 whitespace-nowrap">21</td>
                  <td className="py-4 px-6 text-[#C89B3C] font-semibold whitespace-nowrap">12 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Running Projects Table */}
        <section>
          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs tracking-widest uppercase border border-[#C89B3C]/30 inline-block mb-3">
              PORTFOLIO TRACKER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#000000] tracking-tight">
              Project Management <span className="text-[#C89B3C]">Running Projects</span>
            </h2>
          </div>

          <div className="overflow-x-auto border border-slate-200/80 rounded-3xl bg-white shadow-sm">
            <table className="w-full min-w-[750px] text-sm">
              <thead className="bg-[#000000] text-[#C89B3C]">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">S.No.</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Project Name</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Project Address</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Project Type</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">No. of Units</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Built Of Area (Lac sq.ft)</th>
                  <th className="py-4 px-6 text-left font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-normal">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">1</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">Vasundhara Nagar-II</td>
                  <td className="py-4 px-6 whitespace-nowrap">Jaipur Rajasthan</td>
                  <td className="py-4 px-6 whitespace-nowrap">Plot</td>
                  <td className="py-4 px-6 whitespace-nowrap">245 Units</td>
                  <td className="py-4 px-6 font-semibold text-[#C89B3C] whitespace-nowrap">18.11</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-semibold text-xs uppercase inline-block">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">2</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">Sridhar Nagar</td>
                  <td className="py-4 px-6 whitespace-nowrap">Jaipur Rajasthan</td>
                  <td className="py-4 px-6 whitespace-nowrap">Plot</td>
                  <td className="py-4 px-6 whitespace-nowrap">120 Units</td>
                  <td className="py-4 px-6 font-semibold text-[#C89B3C] whitespace-nowrap">2.00</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-semibold text-xs uppercase inline-block">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-medium whitespace-nowrap">3</td>
                  <td className="py-4 px-6 font-semibold text-[#000000] whitespace-nowrap">Urmila Enclave</td>
                  <td className="py-4 px-6 whitespace-nowrap">Jaipur Rajasthan</td>
                  <td className="py-4 px-6 whitespace-nowrap">Plot</td>
                  <td className="py-4 px-6 whitespace-nowrap">502 Units</td>
                  <td className="py-4 px-6 font-semibold text-[#C89B3C] whitespace-nowrap">2.75</td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-semibold text-xs uppercase inline-block">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}



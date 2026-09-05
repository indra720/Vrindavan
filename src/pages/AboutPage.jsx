import { Link } from "react-router-dom";
import himanshu from "../assets/himanshu.jpg";
import sandeep from "../assets/sandeep.jpg";
import avinash from "../assets/avinash.jpg";
export default function AboutPage() {
  return (
    <div className="bg-[#ededed]">
      {/* Header Banner */}
      <div className="bg-[#000000] text-white py-14 border-b border-[#C89B3C]/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase border border-[#C89B3C]/30 shadow-md">
            WHO WE ARE
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-[#C89B3C]">Vrindavan Real Estate</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-semibold mt-3">
            <Link to="/" className="hover:text-[#C89B3C] transition-colors">Home</Link>
            <span className="text-[#C89B3C]">•</span>
            <span className="text-white font-extrabold">About Us</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* OUR VISION Section */}
        <section className="mb-20 bg-white border-2 border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C89B3C]" />
          <div className="text-center mb-6">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              OUR VISION & MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 tracking-tight">
              Company <span className="text-[#C89B3C]">Overview</span>
            </h2>
            <div className="h-1 w-20 bg-[#C89B3C] mx-auto mt-4 rounded-full" />
          </div>

          <p className="text-slate-700 leading-relaxed text-sm md:text-base text-center max-w-3xl mx-auto font-medium">
            Vrindavan Real Estate in Jaipur is a rapidly developing sector,
            offering prime residential and commercial properties in one of the
            city's most sought-after areas. Known for its serene environment
            and strategic location, Vrindavan is a favorite among investors
            and homebuyers looking for a blend of modern living with a touch
            of traditional charm. With excellent connectivity to key areas of
            Jaipur, including educational institutions, healthcare centers,
            and commercial hubs, Vrindavan Real Estate presents lucrative
            opportunities for both long-term investments and immediate housing
            needs. The area is also seeing a rise in luxury projects, making
            it ideal for those seeking premium lifestyle options.
          </p>
        </section>

        {/* Directors Section */}
        <section className="mb-20 max-w-5xl mx-auto text-center">
          <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
            LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 mb-12 tracking-tight">
            BOARD OF <span className="text-[#C89B3C]">DIRECTORS</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {/* Himanshu Singh */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-white border-2 border-slate-200 p-6 rounded-3xl shadow-lg hover:border-[#C89B3C] transition-all w-full">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#C89B3C] shadow-md shrink-0 bg-slate-900">
                <img
                  src={himanshu}
                  alt="Himanshu Singh"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#000000]">Himanshu Singh</h3>
                <p className="text-xs font-extrabold text-[#C89B3C] uppercase tracking-wider mt-1">CEO & Founder</p>
              </div>
            </div>

            {/* Sandeep Singh */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-white border-2 border-slate-200 p-6 rounded-3xl shadow-lg hover:border-[#C89B3C] transition-all w-full">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#C89B3C] shadow-md shrink-0 bg-slate-900">
                <img
                  src={sandeep}
                  alt="Sandeep Singh"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#000000]">Sandeep Singh</h3>
                <p className="text-xs font-extrabold text-[#C89B3C] uppercase tracking-wider mt-1">Director</p>
              </div>
            </div>

            {/* Avinash Singh */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left bg-white border-2 border-slate-200 p-6 rounded-3xl shadow-lg hover:border-[#C89B3C] transition-all w-full">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#C89B3C] shadow-md shrink-0 bg-slate-900">
                <img
                  src={avinash}
                  alt="Avinash Singh"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#000000]">Avinash Singh</h3>
                <p className="text-xs font-extrabold text-[#C89B3C] uppercase tracking-wider mt-1">Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Human Capital Table */}
        <section className="mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              TEAM STRENGTH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 tracking-tight">
              Human <span className="text-[#C89B3C]">Capital</span>
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-[#000000] rounded-3xl bg-white shadow-xl">
            <table className="w-full text-sm">
              <thead className="bg-[#000000] text-[#C89B3C]">
                <tr>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">S.No.</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Qualification</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">
                    Total No. of Professionals
                  </th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">
                    Average Work Experience
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 font-semibold">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">1</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">CA</td>
                  <td className="py-3.5 px-5">3</td>
                  <td className="py-3.5 px-5 text-[#C89B3C] font-black">7 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">2</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">MBA</td>
                  <td className="py-3.5 px-5">19</td>
                  <td className="py-3.5 px-5 text-[#C89B3C] font-black">6 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">3</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">Graduates</td>
                  <td className="py-3.5 px-5">25</td>
                  <td className="py-3.5 px-5 text-[#C89B3C] font-black">8 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">4</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">Technical Professional</td>
                  <td className="py-3.5 px-5">21</td>
                  <td className="py-3.5 px-5 text-[#C89B3C] font-black">12 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Running Projects Table */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="px-4 py-1.5 rounded-full bg-[#000000] text-[#C89B3C] font-extrabold text-xs tracking-widest uppercase shadow-md">
              PORTFOLIO TRACKER
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 tracking-tight">
              Project Management <span className="text-[#C89B3C]">Running Projects</span>
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-[#000000] rounded-3xl bg-white shadow-xl">
            <table className="w-full text-sm">
              <thead className="bg-[#000000] text-[#C89B3C]">
                <tr>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">S.No.</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Project Name</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Project Address</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Project Type</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">No. of Units</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Built Of Area (Lac sq.ft)</th>
                  <th className="py-4 px-5 text-left font-black text-xs uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800 font-semibold">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">1</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">Vasundhara Nagar-II</td>
                  <td className="py-3.5 px-5">Jaipur Rajasthan</td>
                  <td className="py-3.5 px-5">Plot</td>
                  <td className="py-3.5 px-5">245 Units</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#C89B3C]">18.11</td>
                  <td className="py-3.5 px-5">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-black text-xs uppercase">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">2</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">Sridhar Nagar</td>
                  <td className="py-3.5 px-5">Jaipur Rajasthan</td>
                  <td className="py-3.5 px-5">Plot</td>
                  <td className="py-3.5 px-5">120 Units</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#C89B3C]">2.00</td>
                  <td className="py-3.5 px-5">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-black text-xs uppercase">
                      Active
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-5 font-bold">3</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#000000]">Urmila Enclave</td>
                  <td className="py-3.5 px-5">Jaipur Rajasthan</td>
                  <td className="py-3.5 px-5">Plot</td>
                  <td className="py-3.5 px-5">502 Units</td>
                  <td className="py-3.5 px-5 font-extrabold text-[#C89B3C]">2.75</td>
                  <td className="py-3.5 px-5">
                    <span className="px-3 py-1 rounded-full bg-[#000000] text-[#C89B3C] font-black text-xs uppercase">
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


import { Link } from "react-router-dom";
import himanshu from "../assets/himanshu.jpg";
import sandeep from "../assets/sandeep.jpg";
import avinash from "../assets/avinash.jpg";
export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-gray-900 text-white border-b border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Home <span className="text-gray-500">::</span> About Us
          </div>
          <h1 className="mt-2 text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* OUR VISION Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-2">OUR VISION</h2>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center text-blue-600 mb-6">
              Introduction
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm text-center">
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
          </div>
        </section>

        {/* Directors Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-medium">Vrindavan Real Estate</p>
            <h2 className="text-3xl font-bold mt-1">DIRECTORS</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Himanshu Singh */}
            <div className=" flex flex-col md:flex-row items-center">
              <div className="mx-auto w-34 h-34 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={himanshu}
                  alt="Himanshu Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:ml-4">
                <h3 className="text-xl font-bold">Himanshu Singh</h3>

                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>

            {/* Sandeep Singh */}
            <div className="text-center flex flex-col md:flex-row items-center ">
              <div className="mx-auto w-34 h-34 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={sandeep}
                  alt="Sandeep Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="mt-6 text-xl font-bold">Sandeep Singh</h3>
                <p className="text-gray-600">Director</p>
              </div>
            </div>

            {/* Avinash Singh */}
            <div className="text-center flex flex-col md:flex-row items-center ">
              <div className="mx-auto w-34 h-34 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={avinash}
                  alt="Avinash Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="mt-6 text-xl font-bold">Avinash Singh</h3>
                <p className="text-gray-600">Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Human Capital */}
        <section className="mb-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-2">Human Capital</h2>

          <div className="overflow-x-auto   border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left">S.No.</th>
                  <th className="px-6 py-4 text-left">Qualification</th>
                  <th className="px-6 py-4 text-left">
                    Total No. of Professionals
                  </th>
                  <th className="px-6 py-4 text-left">
                    Average Work Experience
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="bg-white">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 font-medium">CA</td>
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">7 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4 font-medium">MBA</td>
                  <td className="px-6 py-4">19</td>
                  <td className="px-6 py-4">6 years</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4 font-medium">Graduates</td>
                  <td className="px-6 py-4">25</td>
                  <td className="px-6 py-4">8 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4 font-medium">
                    Technical Professional
                  </td>
                  <td className="px-6 py-4">21</td>
                  <td className="px-6 py-4">12 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Running Projects */}
        <section className="mb-10 max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">
            Project Management Running Project
          </h2>

          <div className="overflow-x-auto   border border-gray-200">
            <table className="w-full min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-4 text-left">S.No.</th>
                  <th className="px-4 py-4 text-left">Project Name</th>
                  <th className="px-4 py-4 text-left">Project Address</th>
                  <th className="px-4 py-4 text-left">Project Type</th>
                  <th className="px-4 py-4 text-left">No. of Units</th>
                  <th className="px-4 py-4 text-left">
                    Built Of Address (Lac sq.ft.Approx)
                  </th>
                  <th className="px-4 py-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-5">1</td>
                  <td className="px-4 py-5 font-medium">Vasundhara Nagar</td>
                  <td className="px-4 py-5">Jaipur Rajasthan</td>
                  <td className="px-4 py-5">Plot</td>
                  <td className="px-4 py-5">245 Flats</td>
                  <td className="px-4 py-5">18.11</td>
                  <td className="px-4 py-5 text-green-600 font-medium">
                    Running
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-5">2</td>
                  <td className="px-4 py-5 font-medium">Sridhar Nagar</td>
                  <td className="px-4 py-5">Jaipur Rajasthan</td>
                  <td className="px-4 py-5">Plot</td>
                  <td className="px-4 py-5">120 Units</td>
                  <td className="px-4 py-5">2.0</td>
                  <td className="px-4 py-5 text-green-600 font-medium">
                    Running
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-5">3</td>
                  <td className="px-4 py-5 font-medium">Urmila Enclave</td>
                  <td className="px-4 py-5">Jaipur Rajasthan</td>
                  <td className="px-4 py-5">Plot</td>
                  <td className="px-4 py-5">502 Flats</td>
                  <td className="px-4 py-5">2.75</td>
                  <td className="px-4 py-5 text-green-600 font-medium">
                    Running
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

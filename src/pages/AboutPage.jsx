import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / About Us</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <section className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-bold">Our Vision</h2>
          <p className="mt-4 text-light leading-relaxed">
            Shree Vrindavan Real Estate Pvt. Ltd. is committed to offering trustworthy property solutions with
            transparency, quality guidance and customer-first service. Our goal is to help clients invest in
            promising locations and grow with confidence.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">Directors</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { name: 'Himanshu Singh', role: 'CEO & Founder' },
              { name: 'Sandeep Singh', role: 'Director' },
              { name: 'Avinash Singh', role: 'Director' },
            ].map((d) => (
              <div key={d.name} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <div className="h-24 w-24 rounded-3xl bg-secondary/70 border border-border flex items-center justify-center font-bold text-primary">
                  {d.name.split(' ').map((x) => x[0]).join('')}
                </div>
                <div className="mt-4 font-bold text-lg">{d.name}</div>
                <div className="mt-1 text-sm text-light">{d.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Human Capital</h2>
          <div className="mt-6 rounded-3xl border border-border bg-white overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-4 bg-secondary/60 text-sm font-bold px-4 py-3 border-b border-border">
              <div className="sm:col-span-2">Role</div>
              <div className="hidden sm:block">Avg Years</div>
              <div className="hidden sm:block">Count</div>
            </div>
            <div className="divide-y divide-border">
              {[
                ['CA', '3 - 7 Years', ' '],
                ['MBA', '6 - 19 Years', ' '],
                ['Graduates', '8 - 25 Years', ' '],
                ['Technical Professionals', '12 - 21 Years', ' '],
              ].map(([role, yrs]) => (
                <div key={role} className="grid grid-cols-2 sm:grid-cols-4 px-4 py-4 text-sm">
                  <div className="font-semibold">{role}</div>
                  <div className="text-light sm:col-span-1">{yrs}</div>
                  <div className="text-light hidden sm:block">—</div>
                  <div className="text-light hidden sm:block">—</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold">Running Projects</h2>
          <div className="mt-6 rounded-3xl border border-border bg-white overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-3 bg-secondary/60 px-4 py-3 text-sm font-bold border-b border-border">
              <div>Project</div>
              <div className="sm:col-span-2">Details</div>
            </div>
            <div className="divide-y divide-border">
              {[
                ['Vasundhara Nagar', 'Residential plots in prime Jaipur location.'],
                ['Shridhar Nagar', 'Residential and commercial mix with connectivity focus.'],
                ['Urmila Enclave', 'Large plots for residential and future mixed-use development.'],
              ].map(([name, desc]) => (
                <div key={name} className="grid grid-cols-1 sm:grid-cols-3 px-4 py-4">
                  <div className="font-semibold">{name}</div>
                  <div className="sm:col-span-2 text-light">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md transition"
          >
            Explore Projects
          </Link>
        </div>
      </div>
    </div>
  )
}


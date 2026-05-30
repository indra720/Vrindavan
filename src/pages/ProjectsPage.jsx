import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const projects = [
  {
    title: 'Vasundhara Nagar-II',
    location: 'Jaipur, Rajasthan',
    desc: 'Prime residential plots with strong connectivity and future growth.',
  },
  {
    title: 'Shridhar Nagar',
    location: 'Jaipur, Rajasthan',
    desc: 'Residential and commercial plots with excellent road connectivity.',
  },
  {
    title: 'Urmila Enclave',
    location: 'Jaipur, Rajasthan',
    desc: 'Spacious plots for residential and mixed-use development.',
  },
]

export default function ProjectsPage() {
  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Projects</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Our Properties</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80)',
                }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold">{p.title}</h2>
                    <div className="mt-2 text-sm text-light flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {p.location}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-light leading-relaxed">{p.desc}</p>
                <div className="mt-5">
                  <Link
                    to={`/property/${encodeURIComponent(p.title)}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold border border-border hover:bg-secondary/90 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


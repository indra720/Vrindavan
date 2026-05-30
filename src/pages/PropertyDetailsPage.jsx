import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react'

const cards = [
  { title: 'Prime Location', desc: 'Strong demand zones in Jaipur for long-term appreciation.' },
  { title: 'Residential Appeal', desc: 'Ideal for living, rental income and lifestyle convenience.' },
  { title: 'Modern Amenities', desc: 'Planned infrastructure and easy access to daily essentials.' },
  { title: 'Connectivity', desc: 'Excellent road connectivity and convenient commute routes.' },
  { title: 'Growing Infrastructure', desc: 'Ongoing development supports future value growth.' },
]

export default function PropertyDetailsPage() {
  const { slug } = useParams()
  const title = useMemo(() => decodeURIComponent(slug || ''), [slug])

  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Property Details</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">{title || 'Property'}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
          <div
            className="h-52 sm:h-64 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1602524810641-e3d8f5e3c2b0?auto=format&fit=crop&w=1400&q=80)',
            }}
          />
          <div className="p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-semibold">
                  <MapPin className="h-4 w-4 text-primary" />
                  Jaipur, Rajasthan
                </div>
                <p className="mt-4 text-light leading-relaxed">
                  Explore detailed information about this listing including location advantage, development potential,
                  and key investment highlights.
                </p>

                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold">About This Listing</div>
                      <div className="text-sm text-light">Modern features • Trusted guidance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-secondary/40 p-5 sm:p-6 w-full lg:max-w-md">
                <div className="font-bold text-lg">Quick Inquiry</div>
                <p className="mt-2 text-sm text-light">Submit your details. We’ll contact you shortly.</p>

                <form className="mt-5 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                  <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Name" />
                  <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Email" />
                  <input className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Phone" />
                  <textarea className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Message" />
                  <button className="rounded-xl bg-primary text-white px-4 py-3 text-sm font-semibold hover:shadow-md transition">
                    Submit Inquiry
                  </button>
                </form>

                <div className="mt-5 flex items-center justify-between text-sm text-light">
                  <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7014289408</span>
                  <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> info@vrindavanrealestate.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
              <div className="font-bold">{c.title}</div>
              <p className="mt-2 text-sm text-light leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/projects" className="rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-secondary/60 transition">Back to Projects</Link>
          <Link to="/contact" className="rounded-xl bg-primary text-white px-5 py-3 text-sm font-semibold hover:shadow-md transition">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}


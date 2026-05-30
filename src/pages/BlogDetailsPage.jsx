import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'

const popular = [
  'Tips for First Time Plot Buyers',
  'Luxury Plot in Jaipur',
  'Benefits of Buying Property in Jaipur',
]

export default function BlogDetailsPage() {
  const { slug } = useParams()
  const title = useMemo(() => decodeURIComponent(slug || ''), [slug])

  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Blog / Details</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">{title || 'Blog Details'}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
              <div
                className="h-52 sm:h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80)',
                }}
              />
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold">The Future of Real Estate Investment in Jaipur</h2>
                <p className="mt-3 text-sm sm:text-base text-light leading-relaxed">
                  Growth of suburban areas, increased demand for residential plots and promising commercial opportunities
                  are shaping Jaipur’s investment landscape.
                </p>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-light leading-relaxed">
                  <section>
                    <h3 className="font-bold text-dark">Growth of Suburban Areas</h3>
                    <p>New developments and improving connectivity make suburban growth more accessible and attractive.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-dark">Increased Demand for Residential Plots</h3>
                    <p>Buying interest continues to rise due to lifestyle preferences and investment-backed planning.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-dark">Commercial Real Estate Opportunities</h3>
                    <p>Retail and office demand grows alongside infrastructure upgrades and economic expansion.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-dark">Rise in Eco-Friendly Projects</h3>
                    <p>Environment-focused planning supports long-term community value and sustainable development.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-dark">Infrastructure Development</h3>
                    <p>Road networks and civic improvements reduce commute time and strengthen investment confidence.</p>
                  </section>
                  <section>
                    <h3 className="font-bold text-dark">Conclusion</h3>
                    <p>
                      Jaipur’s real estate trajectory looks promising. A well-informed purchase with trustworthy guidance can
                      help investors build long-term returns.
                    </p>
                  </section>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/blog" className="rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold hover:bg-secondary/60 transition">
                    Back to Blog
                  </Link>
                  <Link to="/contact" className="rounded-xl bg-primary text-white px-5 py-3 text-sm font-semibold hover:shadow-md transition">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-3xl border border-border bg-white shadow-sm p-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-3xl bg-secondary/70 border border-border flex items-center justify-center font-bold text-primary">
                  HS
                </div>
                <div>
                  <div className="font-bold">Himanshu Singh</div>
                  <div className="text-sm text-light">CEO & Founder</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-light">+91 7014289408</div>

              <div className="mt-5 rounded-2xl bg-secondary/50 border border-border p-4 text-sm text-light">
                For queries about plots, projects and investment guidance, feel free to reach out.
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-border bg-white shadow-sm p-6">
              <div className="font-bold">Popular Blogs</div>
              <div className="mt-4 space-y-3">
                {popular.map((p) => (
                  <Link
                    key={p}
                    to={`/blog/${encodeURIComponent(p)}`}
                    className="block text-sm text-light hover:text-primary transition font-semibold"
                  >
                    {p}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}


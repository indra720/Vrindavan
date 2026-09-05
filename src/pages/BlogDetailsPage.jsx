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
    <div className="bg-[#F4F6FA]">
      <div className="bg-[#111827] text-white py-12 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            BLOG ARTICLE
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{title || 'Blog Details'}</h1>
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-500">•</span>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="text-slate-500">•</span>
            <span className="text-white font-semibold">Details</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <article className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-indigo-950/5 overflow-hidden">
              <div
                className="h-64 sm:h-80 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80)',
                }}
              />
              <div className="p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0C102A]">The Future of Real Estate Investment in Jaipur</h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">
                  Growth of suburban areas, increased demand for residential plots and promising commercial opportunities
                  are shaping Jaipur’s investment landscape.
                </p>

                <div className="mt-8 space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Growth of Suburban Areas</h3>
                    <p>New developments and improving connectivity make suburban growth more accessible and attractive.</p>
                  </section>
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Increased Demand for Residential Plots</h3>
                    <p>Buying interest continues to rise due to lifestyle preferences and investment-backed planning.</p>
                  </section>
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Commercial Real Estate Opportunities</h3>
                    <p>Retail and office demand grows alongside infrastructure upgrades and economic expansion.</p>
                  </section>
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Rise in Eco-Friendly Projects</h3>
                    <p>Environment-focused planning supports long-term community value and sustainable development.</p>
                  </section>
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Infrastructure Development</h3>
                    <p>Road networks and civic improvements reduce commute time and strengthen investment confidence.</p>
                  </section>
                  <section className="bg-[#F4F6FA] border border-slate-200/80 rounded-2xl p-5">
                    <h3 className="font-extrabold text-[#0C102A] text-lg mb-2">Conclusion</h3>
                    <p>
                      Jaipur’s real estate trajectory looks promising. A well-informed purchase with trustworthy guidance can
                      help investors build long-term returns.
                    </p>
                  </section>
                </div>

                <div className="mt-10 flex flex-wrap gap-4 pt-6 border-t border-slate-100">
                  <Link to="/blog" className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase text-slate-800 hover:bg-slate-50 transition">
                    Back to Blog
                  </Link>
                  <Link to="/contact" className="rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-6 py-3.5 text-xs font-extrabold tracking-wider uppercase shadow-lg shadow-indigo-600/30 hover:scale-105 transition">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-indigo-950/5 p-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-[#4F46E5] to-[#6366F1] text-white flex items-center justify-center font-black text-lg shadow-md shadow-indigo-500/20">
                  HS
                </div>
                <div>
                  <div className="font-extrabold text-[#0C102A] text-lg">Himanshu Singh</div>
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">CEO & Founder</div>
                </div>
              </div>
              <div className="mt-4 font-extrabold text-[#0C102A] text-sm bg-indigo-50 border border-indigo-100 rounded-xl py-2 px-3 inline-block">
                📞 +91 7014289408
              </div>

              <div className="mt-6 rounded-2xl bg-[#F4F6FA] border border-slate-200/80 p-4 text-xs text-slate-600 leading-relaxed">
                For queries about plots, projects and investment guidance, feel free to reach out.
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-indigo-950/5 p-8">
              <h3 className="font-extrabold text-[#0C102A] text-lg mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
                Popular Blogs
              </h3>
              <div className="space-y-4">
                {popular.map((p) => (
                  <Link
                    key={p}
                    to={`/blog/${encodeURIComponent(p)}`}
                    className="block text-sm text-slate-700 hover:text-[#4F46E5] transition font-bold p-3 rounded-xl hover:bg-indigo-50/50"
                  >
                    • {p}
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



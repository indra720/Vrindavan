import { Link } from 'react-router-dom'

const blogs = [
  {
    title: 'Tips for First Time Plot Buyers',
    excerpt: 'Know what to check before you invest in Jaipur residential plots.',
  },
  {
    title: 'Luxury Plot in Jaipur',
    excerpt: 'Premium locations, thoughtful planning and long-term value benefits.',
  },
  {
    title: 'Benefits of Buying Property in Jaipur',
    excerpt: 'Why Jaipur remains a strong choice for future investment growth.',
  },
]

export default function BlogPage() {
  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Blog</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Latest News & Stories</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {blogs.map((b) => (
            <div key={b.title} className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
              <div
                className="h-44 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80)',
                }}
              />
              <div className="p-6">
                <h2 className="text-lg font-bold">{b.title}</h2>
                <p className="mt-3 text-sm text-light">{b.excerpt}</p>
                <Link
                  to={`/blog/${encodeURIComponent(b.title)}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold border border-border hover:bg-secondary/90 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


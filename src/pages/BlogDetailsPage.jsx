import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from "../shared/PageHeader";
import { blogsData } from "../data/blogData";
import himanshu from "../assets/himanshu.jpg";

const blogTitles = Object.keys(blogsData);

export default function BlogDetailsPage() {
  const { slug } = useParams()
  const decodedSlug = useMemo(() => decodeURIComponent(slug || ''), [slug])
  
  // Find matching blog or fallback to the first blog
  const blog = blogsData[decodedSlug] || blogsData[blogTitles[0]];

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Ultra-Luxury Page Header */}
      <PageHeader 
        badge="BLOG ARTICLE"
        title={blog.title}
        goldTitle=""
        subtitle="In-Depth Real Estate Market Analysis & Land Investment Guidance for Jaipur & Vrindavan"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Blog", link: "/blog" },
          { label: "Article Details" }
        ]}
      />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[2fr_0.9fr]">
          <article>
            {/* Top Navigation Back Link */}
            <div className="mb-6">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-[#C89B3C] bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-sm transition-all"
              >
                <span>←</span> Back to All Blogs
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-sm overflow-hidden p-4 sm:p-8 lg:p-10">
              {/* Blog Original Main Image */}
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 p-2 sm:p-3 mb-6 sm:mb-8 flex items-center justify-center max-h-[500px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="max-h-[460px] w-auto max-w-full object-contain rounded-xl mx-auto shadow-md"
                />
              </div>

              <span className="px-3.5 py-1 rounded-full bg-[#C89B3C]/10 text-[#C89B3C] font-semibold text-xs uppercase tracking-wider border border-[#C89B3C]/30 inline-block mb-3">
                📅 {blog.date}
              </span>

              <h1 className="text-xl sm:text-3xl font-bold text-[#000000] mb-4 leading-tight">
                {blog.title}
              </h1>

              <div className="bg-[#F8F9FA] border border-slate-200/80 rounded-2xl p-4 sm:p-6 mb-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {blog.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-4 sm:space-y-6">
                {blog.sections.map((sec, idx) => (
                  <section key={idx} className="bg-[#F8F9FA] border border-slate-200/80 rounded-2xl p-4 sm:p-6">
                    <h3 className="font-bold text-[#000000] text-base sm:text-xl mb-2.5 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-[#C89B3C] shrink-0 mt-2" />
                      <span>{sec.title}</span>
                    </h3>
                    <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
                      {sec.content}
                    </p>
                  </section>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 pt-6 border-t border-slate-100">
                <Link to="/blog" className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold tracking-wider uppercase text-slate-800 hover:border-[#C89B3C] transition">
                  ← Back to All Blogs
                </Link>
                <Link to="/contact" className="rounded-2xl bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-black px-5 py-3 text-xs font-bold tracking-wider uppercase shadow-md transition">
                  Contact Us
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Himanshu Singh CEO Card (Exact Match to Reference Screenshot) */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl shadow-xl overflow-hidden relative">
              <div className="h-44 bg-[#000000] rounded-b-[100px] flex items-start justify-center pt-8 border-b border-[#C89B3C]/30">
                <h3 className="text-[#C89B3C] text-2xl font-black tracking-wider uppercase">
                  VRINDA REAL ESTATE
                </h3>
              </div>

              <div className="flex justify-center -mt-20 relative z-10">
                <img
                  src={himanshu}
                  alt="Himanshu Singh"
                  className="w-36 h-36 rounded-full border-4 border-[#000000] shadow-xl object-contain bg-slate-100"
                />
              </div>

              <div className="px-8 pb-8 text-center mt-4">
                <h3 className="text-2xl font-black text-[#000000]">
                  Himanshu Singh
                </h3>
                <p className="text-xs font-extrabold text-[#C89B3C] uppercase tracking-widest mt-1">CEO & Founder</p>
                <a
                  href="tel:+917014289408"
                  className="mt-4 text-[#000000] font-black text-sm bg-[#ededed] border border-slate-300 rounded-xl py-2.5 px-5 inline-block hover:border-[#C89B3C] transition-colors"
                >
                  📞 +91 7014289408
                </a>
                <p className="mt-5 text-slate-600 leading-relaxed text-xs font-medium">
                  Explore prime real estate opportunities in Jaipur, offering luxurious villas and modern plots.
                </p>
                <Link 
                  to="/contact" 
                  className="mt-6 inline-block w-full bg-[#000000] hover:bg-[#C89B3C] text-white hover:text-[#000000] py-3.5 rounded-2xl text-xs font-black tracking-wider uppercase shadow-md transition-all text-center"
                >
                  CONTACT US NOW
                </Link>
              </div>
            </div>

            {/* Other Popular Articles */}
            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-sm p-8">
              <h3 className="font-bold text-[#000000] text-lg mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C89B3C]"></span>
                Other Articles
              </h3>
              <div className="space-y-4">
                {blogTitles.map((t) => (
                  <Link
                    key={t}
                    to={`/blog/${encodeURIComponent(t)}`}
                    className="block text-xs sm:text-sm text-slate-700 hover:text-[#C89B3C] transition font-semibold p-3 rounded-xl hover:bg-[#F8F9FA] border border-transparent hover:border-slate-200"
                  >
                    • {t}
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



import { Link } from 'react-router-dom'
import { Building2, ChevronRight, Handshake, LineChart, MapPin, ShieldCheck, Users, TrendingUp, CheckCircle2, Play, Calendar } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const featured = [
  {
    title: 'Vasundhara Nagar-II',
    location: 'Jaipur, Rajasthan',
    desc: 'Premium residential plots with modern infrastructure and excellent connectivity to the city.',
    price: 'Starting from ₹12 Lac',
    image: 'https://images.unsplash.com/photo-1564013796385-7c3f3f3d4f18?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Shridhar Nagar',
    location: 'Jaipur, Rajasthan',
    desc: 'Strategically located residential and commercial plots ideal for long-term investment.',
    price: 'Starting from ₹8 Lac',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Urmila Enclave',
    location: 'Jaipur, Rajasthan',
    desc: 'Spacious plots in a peaceful environment, perfect for your dream home construction.',
    price: 'Starting from ₹15 Lac',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80'
  },
]

const areas = [
  { name: 'Vasundhara Nagar', count: '12 Plots', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80' },
  { name: 'Shridhar Nagar', count: '8 Plots', img: 'https://images.unsplash.com/photo-1564013796385-7c3f3f3d4f18?auto=format&fit=crop&w=400&q=80' },
  { name: 'Urmila Enclave', count: '5 Plots', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ajmer Road', count: '15 Plots', img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=400&q=80' },
]

const blogs = [
  {
    title: 'Why Jaipur is the best for Plot Investment in 2026',
    date: 'May 20, 2026',
    excerpt: 'Explore the rapid infrastructure growth and rising property values in Jaipur.',
    img: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Understanding RERA: A Guide for Plot Buyers',
    date: 'May 15, 2026',
    excerpt: 'Learn how RERA protects your investment and ensures transparency.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80'
  }
]

const testimonials = [
  { name: 'Rajesh Sharma', role: 'Business Owner', quote: 'Vrindavan Real Estate provided exceptional guidance. Their transparency in documentation made the buying process very smooth.' },
  { name: 'Priya Verma', role: 'Home Buyer', quote: 'I found the perfect plot for my home. The location is excellent and the team is very professional and helpful.' },
  { name: 'Anil Gupta', role: 'Investor', quote: 'A reliable name in Jaipur real estate. Their project growth potential is impressive. Highly recommended for investors.' },
]

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-building-exterior-4418-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl text-left text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold mb-6 backdrop-blur-md uppercase tracking-[0.3em]">
              Shree Vrindavan Real Estate
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Build Your Future with <br/>
              <span className="text-accent italic underline decoration-accent/30">Premium</span> Plots in Jaipur
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
              Discover prime residential and commercial plots. Transparent, reliable, and expertly guided.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-accent text-white px-10 py-4 font-bold text-lg hover:shadow-lg transition-all border-2 border-accent"
              >
                View Properties
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/5 text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip - Pure White and Clear */}
      <div className="bg-white py-12 border-b border-secondary">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          {['RERA Approved', '100% Transparency', 'Prime Locations', 'Expert Guidance'].map((text) => (
            <div key={text} className="flex items-center gap-2 text-dark font-bold text-sm uppercase tracking-wider">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Areas Section - Soft Stone Background */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase">Explore Areas</h2>
            <div className="h-1.5 w-20 bg-primary rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden h-72 cursor-pointer shadow-md">
                <img src={area.img} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">{area.name}</h3>
                  <p className="text-accent font-bold text-sm uppercase tracking-tighter">{area.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Pure White */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-dark">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 leading-tight uppercase">
                Our <span className="text-primary underline decoration-primary/20">Clear</span> Process
              </h2>
              <div className="space-y-8">
                {[
                  { title: 'Site Visit', desc: 'Personalized tour of prime plot locations in Jaipur.', icon: MapPin },
                  { title: 'Verification', desc: 'Complete legal and document verification for your safety.', icon: ShieldCheck },
                  { title: 'Secure Booking', desc: 'Transparent property booking with flexible options.', icon: Handshake },
                  { title: 'Support', desc: 'Continuous guidance throughout your investment journey.', icon: LineChart },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group text-dark">
                    <div className="shrink-0 h-14 w-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 tracking-tight">{step.title}</h3>
                      <p className="text-light">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="Consultation" className="rounded-[3rem] shadow-xl border border-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Pure White Cards on Soft Stone Bg */}
      <section className="py-24 bg-secondary border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase tracking-tight">Premium Projects</h2>
              <div className="h-1.5 w-20 bg-primary rounded-full" />
            </div>
            <Link to="/projects" className="text-primary font-bold text-lg hover:underline flex items-center gap-2">
              Browse All <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {featured.map((p, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-3xl overflow-hidden group h-full border border-border shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="h-64 overflow-hidden relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-5 left-5 bg-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                      New
                    </div>
                  </div>
                  <div className="p-8 text-dark">
                    <div className="flex items-center text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                      <MapPin className="h-3.5 w-3.5 mr-1" /> {p.location}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-light text-sm mb-8 line-clamp-2">{p.desc}</p>
                    <div className="flex justify-between items-center pt-5 border-t border-secondary">
                      <span className="text-xl font-bold text-primary">{p.price}</span>
                      <Link to="/projects" className="h-11 w-11 bg-accent/10 rounded-xl flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm">
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Stats Section - Pure White */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Completed Projects', value: '15+', icon: Building2 },
              { label: 'Happy Clients', value: '6500+', icon: Users },
              { label: 'Total Sales', value: '7500+', icon: TrendingUp },
              { label: 'Years Experience', value: '10+', icon: Calendar },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary text-primary mb-4 border border-border group-hover:bg-primary group-hover:text-white transition-all">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold text-dark mb-1">{stat.value}</div>
                <div className="text-light text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section - Soft Stone Bg */}
      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase">Latest Stories</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-sm border border-border group hover:shadow-md transition-all">
                <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="sm:w-3/5 p-8 flex flex-col justify-center text-dark">
                  <div className="text-primary text-sm font-bold mb-3 flex items-center gap-2 uppercase tracking-tighter">
                    <Calendar className="h-4 w-4" /> {blog.date}
                  </div>
                  <h3 className="text-xl font-bold mb-4 leading-snug">{blog.title}</h3>
                  <Link to="/blog" className="text-primary font-bold flex items-center gap-2 hover:underline uppercase text-xs tracking-widest">
                    Read More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Pure White */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-dark">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4 uppercase">Client Reviews</h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-secondary border border-border p-10 rounded-3xl relative">
                  <p className="text-dark/80 text-lg italic mb-10 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center font-bold text-white text-xl shadow-md">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-dark">{t.name}</div>
                      <div className="text-primary text-xs font-bold uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Final CTA - Premium Look */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-primary rounded-[3rem] overflow-hidden p-10 sm:p-20 text-center text-white shadow-2xl">
             {/* Gradient accent */}
            <div className="absolute inset-0 bg-linear-to-r from-primary via-primary-dark to-primary opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-6xl font-bold mb-8 uppercase tracking-tighter">Ready to Invest?</h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
                Join thousands of successful investors. Find your perfect plot in Jaipur today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-accent text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-[0_10px_30px_rgba(197,160,89,0.4)] hover:-translate-y-1 transition-all border-2 border-accent">
                  Site Visit
                </Link>
                <a href="tel:+917014289408" className="border-2 border-white/20 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
                  Call Experts
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

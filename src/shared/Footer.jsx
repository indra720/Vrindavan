import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary/70 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-bold text-dark">Shree Vrindavan Real Estate Pvt. Ltd.</div>
            <p className="text-sm leading-relaxed text-light">
              Shree Vrindavan Real Estate Pvt. Ltd. stands as a beacon of excellence in the real estate industry,
              driven by innovation, quality and customer satisfaction.
            </p>
          </div>

          <div>
            <div className="text-sm font-bold text-dark mb-3">Quick Links</div>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-light hover:text-primary transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-dark mb-3">Top News</div>
            <div className="space-y-2 text-sm text-light">
              <div className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                Vrindavan Real Estate Prices Surge
              </div>
              <div className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                Gated Societies See Rising Demand
              </div>
            </div>

            <div className="mt-5">
              <div className="text-sm font-bold text-dark mb-2">Contact</div>
              <div className="text-sm text-light space-y-2">
                <div>A4 Panchsheel Colony, Ajmer Road, Jaipur</div>
                <a className="block hover:text-primary transition" href="tel:+917014289408">
                  +91 7014289408
                </a>
                <a
                  className="block hover:text-primary transition"
                  href="mailto:info@vrindavanrealestate.in"
                >
                  info@vrindavanrealestate.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-xs text-light">
            Privacy Policy &nbsp; • &nbsp; Terms & Conditions
          </div>
          <div className="text-xs text-light">2026 © All Rights Reserved By Vrindavan Real Estate</div>
        </div>
      </div>
    </footer>
  )
}


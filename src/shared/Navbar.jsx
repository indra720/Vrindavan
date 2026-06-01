import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X } from 'lucide-react'
import vrindalogo from "../assets/Vrinda-logo.png"

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === '/'}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 ${isActive ? 'text-primary bg-white border border-primary/20 shadow-sm' : 'text-dark hover:text-primary'}`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
           
            <div className="leading-tight hidden lg:block text-dark">
              {/* <div className="text-lg font-bold tracking-tight">Vrindavan Real Estate</div>
              <div className="text-[10px] text-primary font-bold uppercase tracking-widest">Heritage • Trust • Growth</div> */}
              <img src={vrindalogo} alt="vrinda logo" className="h-18 w-30" />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1.5 shadow-inner">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
            </div>
          </nav>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+917014289408" className="text-sm font-bold text-dark hover:text-primary transition-colors">
              +91 7014289408
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-6 py-2.5 text-sm font-bold shadow-md hover:bg-primary transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              Site Visit
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-between w-full  lg:hidden">

             <div className="">
             
              <img src={vrindalogo} alt="vrinda logo" className="h-12 w-20 sm:h-18 sm:w-30" />
            </div>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-border bg-white p-2"
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"  
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>  
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <div className="rounded-2xl border border-border bg-white shadow-xl p-4 mt-2">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${isActive ? 'text-dark bg-primary' : 'text-dark bg-secondary/50 hover:bg-secondary'}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+917014289408" className="text-center font-bold text-dark py-2">
                  +91 7014289408
                </a>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-dark text-primary py-4 text-center font-bold shadow-lg border border-primary/20"
                >
                  Book Site Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

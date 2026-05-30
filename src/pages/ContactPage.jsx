import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Contact</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Contact Information</h2>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <div className="h-11 w-11 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-light">Address</div>
                  <div className="font-semibold text-sm sm:text-base">
                    A4, Panchsheel Colony, Opp Diamond Tower, Purani Chungi, Ajmer Road, Jaipur - 302019
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-11 w-11 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-light">Phone</div>
                  <a href="tel:+917014289408" className="font-semibold hover:text-primary transition">
                    +91 7014289408
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-11 w-11 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-light">Email</div>
                  <a href="mailto:info@vrindavanrealestate.in" className="font-semibold hover:text-primary transition">
                    info@vrindavanrealestate.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-secondary/50 border border-border p-5">
              <div className="font-bold">Business Hours</div>
              <div className="mt-2 text-sm text-light">Mon - Sat: 10:00 AM - 6:00 PM</div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Send Message</h2>
            <p className="mt-2 text-light">We’ll get back to you with property options and next steps.</p>

            <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Name" />
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Email" />
              <input className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" placeholder="Phone" />
              <textarea className="rounded-xl border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" rows={5} placeholder="Message" />
              <button className="rounded-xl bg-primary text-white px-4 py-3 text-sm font-semibold hover:shadow-md transition">
                Send Message
              </button>
            </form>

            <div className="mt-5 text-xs text-light">
              By submitting, you agree to our terms. This is a frontend-only demo; no message is sent.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageIcon } from 'lucide-react'

const events = [
  {
    name: 'Shridhar Nagar',
    date: 'Aug 25, 2024',
  },
  {
    name: 'Vasundhara Nagar-II',
    date: 'Sep 12, 2024',
  },
  {
    name: 'Urmila Enclave',
    date: 'Oct 05, 2024',
  },
]

export default function EventsPage() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(events[0])

  return (
    <div>
      <div className="bg-secondary/60 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-sm text-light">Home / Events</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold">Latest Events</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.name} className="rounded-3xl border border-border bg-white shadow-sm overflow-hidden">
              <div
                className="h-44 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80)',
                }}
              />
              <div className="p-6">
                <div className="font-bold text-lg">{e.name}</div>
                <div className="mt-2 text-sm text-light font-semibold">{e.date}</div>
                <button
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2 text-sm font-semibold border border-border hover:bg-secondary/90 transition w-full"
                  onClick={() => {
                    setActive(e)
                    setOpen(true)
                  }}
                >
                  <ImageIcon className="h-4 w-4" />
                  View Gallery
                </button>
              </div>
            </div>
          ))}
        </div>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="w-full max-w-3xl rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
              <div className="p-5 flex items-center justify-between border-b border-border">
                <div>
                  <div className="font-bold text-lg">{active.name}</div>
                  <div className="text-sm text-light">{active.date}</div>
                </div>
                <button className="rounded-xl border border-border px-3 py-2 text-sm font-semibold hover:bg-secondary/60" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
              <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="rounded-2xl border border-border overflow-hidden">
                    <div
                      className="h-28 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          'url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


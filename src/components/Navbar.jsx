import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-white/40 shadow-lg shadow-blue-900/5">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
              <span className="text-lg font-semibold tracking-tight text-slate-900">LiftWorks</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">
                <Phone size={16} />
                Get a Quote
              </a>
            </nav>

            <button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <a href="#" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500" />
                <span className="text-lg font-semibold tracking-tight text-slate-900">LiftWorks</span>
              </a>
              <button aria-label="Close menu" className="p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="space-y-2 py-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-slate-800 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mx-4 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium shadow hover:shadow-md">
                <Phone size={16} />
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

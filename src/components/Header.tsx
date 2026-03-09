'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Windows', href: '#products' },
    { label: 'Doors', href: '#products' },
    { label: 'Why HTR', href: '#why-us' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Financing', href: '#financing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-2xl font-black text-blue-800 tracking-tight">HTR</span>
            <span className="hidden sm:block text-sm font-semibold text-slate-500 leading-tight">
              Windows & Doors
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colours"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + phone */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="text-sm font-semibold text-blue-800 hover:text-blue-600 transition-colours"
            >
              {siteConfig.phone}
            </a>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colours shadow-sm"
            >
              Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-600 hover:text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
            <div className="w-6 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm font-medium text-slate-700 hover:text-blue-700 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
            className="block text-sm font-bold text-blue-800 py-1"
          >
            📞 {siteConfig.phone}
          </a>
          <a
            href="#contact"
            className="block bg-orange-500 text-white text-sm font-bold px-5 py-3 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  )
}

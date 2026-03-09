import { siteConfig } from '@/data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-2xl font-black text-white mb-1">HTR</p>
            <p className="text-sm text-slate-500 font-medium mb-4">Windows & Doors</p>
            <p className="text-sm leading-relaxed">
              Alberta&apos;s trusted window and door replacement specialists. Serving Calgary and
              surrounding communities with award-winning service since 2004.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://htrwindows.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colours"
              >
                Main Website ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Our Products', href: '#products' },
                { label: 'Why Choose HTR', href: '#why-us' },
                { label: 'Service Areas', href: '#service-areas' },
                { label: 'Financing', href: '#financing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Get a Free Quote', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-orange-400 transition-colours"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Products</h4>
            <ul className="space-y-2.5">
              {[
                'Casement Windows',
                'Double Hung Windows',
                'Awning Windows',
                'Bay & Bow Windows',
                'Fiberglass Doors',
                'Steel Doors',
                'Patio Doors',
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-sm hover:text-orange-400 transition-colours">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colours"
                >
                  <span>📞</span> {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colours"
                >
                  <span>✉️</span> {siteConfig.email}
                </a>
              </li>
              <li className="text-sm">
                <span>🕐</span> Mon–Fri: 9 AM – 6 PM MST
              </li>
              <li className="text-sm">
                <span>📍</span> Calgary, Alberta
              </li>
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colours"
            >
              Free Quote →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} HTR Windows & Doors (Hi Tech Reno Services INC). All rights reserved.
          </p>
          <div className="flex gap-5">
            <a
              href="https://htrwindows.ca/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-slate-300 transition-colours"
            >
              Privacy Policy
            </a>
            <a
              href="https://htrwindows.ca/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-slate-300 transition-colours"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

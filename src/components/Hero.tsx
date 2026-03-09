import { siteConfig } from '@/data/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-16 md:pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span>🏅</span>
            <span>Alberta's #1 Rated Window & Door Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Calgary&apos;s Trusted{' '}
            <span className="text-orange-400">Window & Door</span>{' '}
            Replacement Experts
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-4 leading-relaxed">
            Serving Calgary, Airdrie, Okotoks, Cochrane & surrounding Alberta communities.
            Triple-pane, Energy Star certified windows built for Prairie winters.
          </p>

          {/* Trust line */}
          <p className="text-sm text-slate-400 mb-10">
            ⭐ 4.9/5 from 945 reviews · 25-Year Warranty · 0% Interest Financing Available
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colours shadow-lg shadow-orange-500/30 text-center"
            >
              Get My Free Quote →
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colours text-center backdrop-blur-sm"
            >
              📞 Call Now
            </a>
          </div>

          {/* Discount badge */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="text-white font-bold text-sm">Claim Your Discount Today</p>
              <p className="text-slate-300 text-xs">Limited-time offer for Calgary-area homeowners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

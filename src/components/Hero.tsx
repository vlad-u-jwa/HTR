import { siteConfig } from '@/data/content'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden pt-16 md:pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/More Images/HTR Windows Video Session 3 Stills (44 of 86).jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">

          {/* 40% OFF ribbon */}
          <div className="inline-flex items-center gap-2.5 bg-orange-500 text-white text-sm font-black px-4 py-2 rounded-full mb-5 shadow-lg shadow-orange-500/40">
            <span className="text-base">🔥</span>
            <span>LIMITED TIME — 40% OFF Your Window Replacement</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 ml-2">
            <span>🏅</span>
            <span>Alberta's #1 Rated Window & Door Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Alberta&apos;s Trusted{' '}
            <span className="text-orange-400">Window & Door</span>{' '}
            Replacement Experts
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 mb-4 leading-relaxed">
            Serving Calgary, Airdrie, Okotoks, Cochrane & communities across Alberta.
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
              Claim 40% OFF — Free Quote →
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colours text-center backdrop-blur-sm"
            >
              📞 Call Now
            </a>
          </div>

          {/* Discount callout box */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-orange-400/40 rounded-xl px-5 py-3">
            <span className="text-2xl">🎁</span>
            <div>
              <p className="text-white font-bold text-sm">
                Save 40% — Alberta Exclusive Offer
              </p>
              <p className="text-slate-300 text-xs">
                Fill out the form below to lock in your discount before it expires
              </p>
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

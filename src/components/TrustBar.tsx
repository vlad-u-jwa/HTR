import { stats } from '@/data/content'

export default function TrustBar() {
  return (
    <section className="bg-blue-900 py-10">
      {/* 40% OFF announcement bar */}
      <div className="bg-orange-500 py-3 px-4 text-center mb-10">
        <p className="text-white font-black text-sm sm:text-base tracking-wide">
          🔥 LIMITED TIME: <span className="underline underline-offset-2">40% OFF</span> Window Replacement for Calgary &amp; Alberta Homeowners —{' '}
          <a href="#contact" className="underline hover:no-underline font-black">
            Claim Your Discount →
          </a>
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-orange-400">{stat.value}</p>
              <p className="text-sm text-blue-200 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Awards row */}
        <div className="border-t border-blue-700/50 pt-8">
          <p className="text-center text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
            Award-Winning Service
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {/* Award placeholders – replace with real images when available */}
            {[
              'Best of TrustedPros 2023',
              'HomeStars Winner 2024',
              "Reader's Choice Diamond 2023",
              'Best of Houzz 2023',
            ].map((award) => (
              <div
                key={award}
                className="flex items-center justify-center bg-blue-800/60 border border-blue-600/40 rounded-xl px-5 py-3 min-w-[140px]"
              >
                <p className="text-white text-xs font-semibold text-center leading-snug">{award}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Energy Star badge */}
        <div className="flex justify-center mt-8 gap-6 flex-wrap">
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <span className="text-lg">🌟</span>
            <span>Energy Star Certified</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <span className="text-lg">🍁</span>
            <span>Canadian Company</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <span className="text-lg">🔒</span>
            <span>Fully Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <span className="text-lg">📋</span>
            <span>Free In-Home Assessment</span>
          </div>
        </div>
      </div>
    </section>
  )
}

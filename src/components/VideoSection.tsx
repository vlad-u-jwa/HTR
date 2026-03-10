export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            See Us In Action
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Watch a Real HTR Window Replacement
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            From old drafty windows to brand-new Energy Star certified triple-pane units — see
            exactly what our certified Alberta crews do in your home, start to finish.
          </p>
        </div>

        {/* Video embed */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 aspect-video">
          <iframe
            src="https://www.youtube.com/embed/FpJLaHtT7z4?rel=0&modestbranding=1&color=white"
            title="HTR Windows & Doors – Window Replacement Process"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Below-video CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <p className="text-slate-500 text-sm text-center">
            Ready to experience this level of service at your Calgary home?
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl transition-colours shadow-lg shadow-orange-500/20 text-sm"
          >
            Book My Free Quote →
          </a>
        </div>
      </div>
    </section>
  )
}

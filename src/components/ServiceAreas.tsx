import { serviceAreas } from '@/data/content'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-5">
              Serving Alberta — Calgary & Surrounding Communities
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              Our certified installation teams are based in Alberta and ready to serve your community.
              Whether you&apos;re in the heart of Calgary or in a nearby town, HTR has you covered with
              the same award-winning service.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Don&apos;t see your city listed? Give us a call — we&apos;re always expanding our
              Alberta service network.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-bold px-7 py-3.5 rounded-xl transition-colours shadow-sm"
            >
              Check My Area →
            </a>
          </div>

          {/* Right – area tags */}
          <div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                    area === 'Calgary'
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  📍 {area}
                </span>
              ))}
              <span className="px-4 py-2 rounded-full text-sm font-semibold border border-dashed border-slate-300 text-slate-400">
                + More Coming
              </span>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white h-56 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm font-medium">Alberta Service Map</p>
                <p className="text-xs text-slate-300 mt-1">Calgary & Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

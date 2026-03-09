import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-orange-400 text-xl">{'★'.repeat(5)}</div>
            <p className="text-slate-500 text-sm font-medium">4.9 / 5 · 945 Verified Reviews</p>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-all ${
                i === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex text-orange-400 text-sm">
                {'★'.repeat(t.rating)}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">
            Join hundreds of satisfied Canadian homeowners
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colours shadow-lg shadow-orange-500/20"
          >
            Get Your Free Quote Today →
          </a>
        </div>
      </div>
    </section>
  )
}

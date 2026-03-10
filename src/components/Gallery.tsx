import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/More Images/HTR Windows Video Session 3 Stills (44 of 86).jpg',
    alt: 'Newly installed black-frame windows on suburban Alberta homes',
    caption: 'Calgary Suburb — Full Street Replacement',
  },
  {
    src: '/images/More Images/HTR Windows Video Session 3 Stills (75 of 86).jpg',
    alt: 'Modern stone house with new black windows and door in Alberta',
    caption: 'Modern Stone Home — Windows & Door',
  },
  {
    src: '/images/More Images/DSCF4026.JPG',
    alt: 'Arched windows installed on brick and stone Alberta home',
    caption: 'Brick & Stone Home — Arched Windows',
  },
  {
    src: '/images/More Images/DSCF4024.JPG',
    alt: 'Close-up of arched window installation on brick home',
    caption: 'Casement Windows — Arched Opening',
  },
  {
    src: '/images/More Images/HTR Windows Video Session 3 Stills (84 of 86).jpg',
    alt: 'Aerial view of Alberta home with multiple new windows installed',
    caption: 'Multi-Window Replacement — Aerial View',
  },
  {
    src: '/images/More Images/DSCF3799.jpg',
    alt: 'New patio door installed on beige brick Alberta home',
    caption: 'Patio Door — Beige Brick Home',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Real Alberta Homes, Real Results
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Every project is completed by our certified Alberta installation team.
            See the quality for yourself — these are real homes, real customers, real transformations.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-300 ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-64 sm:h-72 bg-slate-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-semibold">{img.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-4">
            Want results like these at your Alberta home?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colours shadow-lg shadow-orange-500/20"
          >
            Get My Free Quote — 40% OFF →
          </a>
        </div>
      </div>
    </section>
  )
}

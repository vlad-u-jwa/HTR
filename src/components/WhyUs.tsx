import { whyUsPoints } from '@/data/content'
import Image from 'next/image'

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Why Choose HTR
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Calgary Homeowners Trust HTR
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            We&apos;ve been transforming Canadian homes for over 20 years. Here&apos;s what makes us
            different from every other window company in Alberta.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="text-3xl flex-shrink-0 mt-0.5">{point.icon}</div>
              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Real installation photo */}
        <div className="mt-14 rounded-2xl overflow-hidden relative h-64 sm:h-80 shadow-xl">
          <Image
            src="/images/DSC06325.png"
            alt="HTR Windows professional installation in Alberta"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent flex items-center px-8 md:px-12">
            <div>
              <p className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-1">Real Installation</p>
              <p className="text-white font-black text-xl sm:text-2xl max-w-xs leading-snug">
                This is what we do in your Calgary home
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-colours"
              >
                Claim 40% OFF →
              </a>
            </div>
          </div>
        </div>

        {/* Process strip */}
        <div className="mt-10 bg-blue-900 rounded-2xl p-8 md:p-10">
          <h3 className="text-white font-black text-xl md:text-2xl text-center mb-8">
            How It Works — 3 Simple Steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: '01',
                title: 'Free In-Home Quote',
                desc: 'A local HTR specialist visits your Calgary home, assesses your windows and doors, and provides a detailed, no-obligation quote.',
              },
              {
                step: '02',
                title: 'Custom Manufacturing',
                desc: 'Your new windows and doors are custom-built to your exact measurements using premium, Energy Star certified materials.',
              },
              {
                step: '03',
                title: 'Professional Installation',
                desc: 'Our certified crew installs everything in a single day, cleans up completely, and gives you a full demonstration before leaving.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="text-4xl font-black text-orange-400/30 flex-shrink-0 leading-none">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1.5">{item.title}</h4>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

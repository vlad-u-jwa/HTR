'use client'

import { useState } from 'react'
import { products, type Product } from '@/data/content'
import Image from 'next/image'

export default function Products() {
  const [activeTab, setActiveTab] = useState<'window' | 'door'>('window')

  const filtered = products.filter((p) => p.category === activeTab)

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Premium Windows & Doors for Alberta Homes
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Every product is Energy Star certified and engineered to withstand Calgary&apos;s extreme temperature
            swings — from -40°C winters to blazing summer heat.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-xl border border-slate-200 p-1 shadow-sm">
            {(['window', 'door'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all ${
                  activeTab === tab
                    ? 'bg-blue-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-blue-800'
                }`}
              >
                {tab === 'window' ? '🪟 Windows' : '🚪 Doors'}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colours shadow-lg shadow-orange-500/20"
          >
            Get a Free Quote on Any Product →
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all group">
      {/* Image */}
      <div className="relative h-44 bg-slate-100 overflow-hidden flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-base mb-2">{product.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{product.description}</p>
        <a
          href="#contact"
          className="mt-4 inline-block text-blue-700 text-sm font-semibold hover:text-orange-500 transition-colours"
        >
          Get a Quote →
        </a>
      </div>
    </div>
  )
}

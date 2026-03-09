'use client'

import { useState } from 'react'
import { faqs } from '@/data/content'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base">
            Have questions about window and door replacement in Calgary? We&apos;ve got answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === i
                  ? 'border-blue-200 shadow-sm'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-sm sm:text-base ${openIndex === i ? 'text-blue-800' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-all ${
                    openIndex === i
                      ? 'bg-blue-800 text-white rotate-180'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  ↓
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-slate-500 text-sm mb-4">Still have questions? We&apos;re happy to help.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white font-bold px-7 py-3 rounded-xl transition-all"
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  )
}

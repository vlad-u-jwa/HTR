'use client'

import { useState } from 'react'
import { siteConfig } from '@/data/content'

const PROVINCES = ['Alberta', 'Ontario', 'British Columbia', 'New Brunswick', 'Nova Scotia']
const WINDOW_COUNTS = ['1–3', '4–6', '7–10', '10+', 'Doors only']

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    province: 'Alberta',
    windows: '',
    message: '',
    consent: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // TODO: connect to your form handler / CRM / email service
    await new Promise((res) => setTimeout(res, 1000)) // simulate submit
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left – value props */}
          <div className="text-white">
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">
              Free Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mt-2 mb-6 leading-tight">
              Get Your Free Quote &amp; Claim Your{' '}
              <span className="text-orange-400">Calgary Discount</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Fill out the form and a local HTR specialist will contact you within 24 hours to schedule
              your no-obligation, in-home assessment. No pressure, no spam — just honest pricing.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-10">
              {[
                'Free in-home measurement & assessment',
                'Detailed quote with no hidden fees',
                'Energy Star certified products guaranteed',
                'Flexible financing up to $40,000',
                '25-year full product warranty',
                'Same-day installation available',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colours"
              >
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Call Us Directly</p>
                  <p className="font-bold">{siteConfig.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-white hover:text-orange-400 transition-colours"
              >
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email Us</p>
                  <p className="font-bold">{siteConfig.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-500 text-base">
                  We received your request. An HTR specialist will contact you within 24 hours to
                  schedule your free in-home consultation.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-black text-xl text-slate-900 mb-6">
                  Get a Free Quote &amp; Claim the Discount
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(403) 555-0000"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                  </div>

                  {/* City + Province */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Calgary"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                        Province *
                      </label>
                      <select
                        name="province"
                        value={formData.province}
                        onChange={handleChange}
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white"
                      >
                        {PROVINCES.map((p) => (
                          <option key={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Number of windows */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Number of Windows / Doors *
                    </label>
                    <select
                      name="windows"
                      required
                      value={formData.windows}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-white"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {WINDOW_COUNTS.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">
                      Additional Notes
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, specific windows, timeline, etc."
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-0.5 flex-shrink-0 accent-blue-700"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed">
                      I agree to the{' '}
                      <a
                        href="https://htrwindows.ca/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        privacy policy
                      </a>
                      . By submitting, I consent to receive messages from HTR Windows & Doors about
                      replacement services. Text STOP to opt out.
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-xl transition-colours shadow-lg shadow-orange-500/20 text-base"
                  >
                    {loading ? 'Sending…' : 'Get My Free Quote & Discount →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Financing() {
  const plans = [
    {
      title: 'Deferred Payment',
      highlight: "Don't pay until 2025",
      description: 'Get your new windows and doors installed today and make no payments for months (OAC).',
      tag: 'Most Popular',
      tagColour: 'orange',
    },
    {
      title: '60-Month Plan',
      highlight: '60 equal monthly payments',
      description: 'Spread your investment over five years with affordable equal monthly instalments.',
      tag: 'Budget Friendly',
      tagColour: 'blue',
    },
    {
      title: '0% Interest',
      highlight: 'Up to $40,000 at 0%',
      description: 'Approved financing up to $40,000 with zero interest — get the best windows without the financial stress.',
      tag: 'Best Value',
      tagColour: 'green',
    },
  ]

  const tagStyles: Record<string, string> = {
    orange: 'bg-orange-100 text-orange-700',
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
  }

  return (
    <section id="financing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 text-sm font-black px-4 py-2 rounded-full mb-4">
            🔥 LIMITED TIME — 40% OFF + Flexible Financing
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 mb-4">
            Save 40% &amp; Pay Over Time — No Financial Stress
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Stack your savings: claim <strong className="text-slate-700">40% off</strong> the installation price and combine it with
            our 0% interest financing — get premium Alberta windows today, pay at your own pace.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-md hover:border-blue-200 transition-all flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-lg">{plan.title}</h3>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0 ${tagStyles[plan.tagColour]}`}>
                  {plan.tag}
                </span>
              </div>
              <p className="text-2xl font-black text-blue-800">{plan.highlight}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="bg-blue-900 rounded-2xl px-8 py-10 text-center">
          <p className="text-blue-200 text-sm uppercase tracking-widest font-semibold mb-2">
            Limited Time Offer
          </p>
          <h3 className="text-white text-2xl sm:text-3xl font-black mb-4">
            Claim Your <span className="text-orange-400">40% OFF</span> + Free Financing Consultation
          </h3>
          <p className="text-blue-200 text-base mb-8 max-w-xl mx-auto">
            Fill out the form below and our Alberta specialist will contact you within 24 hours to
            lock in your discount and find the best payment plan for your budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colours shadow-lg"
          >
            Claim 40% OFF & Get Financed →
          </a>
          <p className="text-blue-400 text-xs mt-4">OAC. Fees and interest rates may apply on some plans.</p>
        </div>
      </div>
    </section>
  )
}

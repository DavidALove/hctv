const reasons = [
  {
    num: '01',
    title: 'Texas-Only Focus',
    desc: "We don't spread thin across 50 states. Our market knowledge, publisher relationships, and data are built around Texas — giving our clients a meaningful edge in local markets.",
  },
  {
    num: '02',
    title: 'Integrated Multi-Channel Platform',
    desc: 'Search, social, display, and streaming — all managed under one roof, one strategy, one invoice. True integration means consistent messaging and no wasted spend between channels.',
  },
  {
    num: '03',
    title: 'Enterprise Tech, Local Service',
    desc: "We deploy the same DSPs, bidding algorithms, and audience data that Fortune 500 brands use — but you get a dedicated local team, not an 800 number and a ticket system.",
  },
  {
    num: '04',
    title: 'Transparent, No-Contract Options',
    desc: "We earn your business every month. Flexible engagements, clear reporting, and straightforward pricing — because confident work doesn't need to hide behind long-term lock-ins.",
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="bg-black overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[600px]">

        {/* Left panel */}
        <div
          className="why-left-panel relative flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-16 lg:py-[100px] overflow-hidden lg:border-r"
          style={{
            background: 'linear-gradient(135deg, #020B1E 0%, #071530 100%)',
            borderColor: 'rgba(0,153,221,0.15)',
          }}
        >
          <h2
            className="font-cormorant font-light text-white leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
          >
            Why Hill Country
            <strong className="font-bold block">Media Group?</strong>
          </h2>
          <p className="text-[0.95rem] text-cream-dim leading-[1.8] max-w-[380px]">
            We&apos;re not a national agency with a Texas office. We&apos;re a Texas company, built
            here, focused here — with the technology and expertise to compete anywhere.
          </p>
        </div>

        {/* Right panel */}
        <div
          className="flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-16 lg:py-[100px]"
          style={{ background: 'var(--surface)' }}
        >
          <ul className="flex flex-col gap-8 list-none">
            {reasons.map((r, i) => (
              <li
                key={r.num}
                className={`flex items-start gap-5 ${i < reasons.length - 1 ? 'pb-8 border-b border-border' : ''}`}
              >
                <div className="font-bebas text-[1.25rem] text-blue flex-shrink-0 pt-0.5">
                  {r.num}
                </div>
                <div>
                  <div className="text-[0.9rem] font-semibold text-white mb-1">{r.title}</div>
                  <div className="text-[0.82rem] text-cream-dim leading-[1.65]">{r.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

import SectionEyebrow from './SectionEyebrow'

const metrics = [
  { val: 'DSP', label: 'Premium Demand-Side Platform Access' },
  { val: 'RTB', label: 'Real-Time Bidding Technology' },
  { val: 'CTV', label: 'Connected TV Inventory' },
  { val: '1st', label: 'First-Party Data Targeting' },
]

export default function LoneStarNetwork() {
  return (
    <section
      id="lonestar"
      className="lonestar-section relative py-[120px] px-12 border-t border-b border-border overflow-hidden"
      style={{ background: 'var(--surface)' }}
    >
      <div className="max-w-[1400px] mx-auto grid gap-24 items-center"
        style={{ gridTemplateColumns: '1.1fr 1fr' }}
      >

        {/* Left */}
        <div>
          <SectionEyebrow label="Operating Brand" />
          <h2
            className="font-cormorant font-light text-white leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 4rem)' }}
          >
            The <em className="italic text-blue">LoneStar</em> Network
          </h2>
          <div className="w-12 h-0.5 bg-blue mb-6" />

          <div className="space-y-4">
            <p className="text-[0.95rem] text-cream-dim leading-[1.85]">
              <strong className="text-cream font-medium">thelonestarnetwork.com</strong> is Hill Country
              Media Group&apos;s flagship advertising brand — a full-service digital media network
              purpose-built for Texas advertisers who want to reach audiences at scale across display,
              social, and streaming channels.
            </p>
            <p className="text-[0.95rem] text-cream-dim leading-[1.85]">
              We combine programmatic technology with human strategy to run campaigns that perform.
              Whether you&apos;re a local business looking to expand your reach or a regional brand with
              serious growth ambitions, LoneStar Network is your unfair advantage.
            </p>
            <p className="text-[0.95rem] text-cream-dim leading-[1.85]">
              Our platform integrates with every major DSP, social network, and streaming service —
              giving your brand a unified presence across the entire Texas digital landscape.
            </p>
          </div>

          <a
            href="/#contact"
            className="btn-primary inline-flex items-center gap-2 mt-6 bg-blue text-black px-8 py-3.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200"
          >
            Advertise on LoneStar Network →
          </a>
        </div>

        {/* Right — visual */}
        <div>
          {/* Animated star */}
          <div className="relative w-full aspect-square max-w-[420px] mx-auto flex items-center justify-center">
            <div className="star-ring-1 absolute w-full h-full rounded-full"
              style={{ border: '1px solid rgba(0,153,221,0.12)' }} />
            <div className="star-ring-2 absolute rounded-full"
              style={{ width: '75%', height: '75%', border: '1px solid rgba(0,153,221,0.12)' }} />
            <div className="star-ring-3 absolute rounded-full"
              style={{ width: '50%', height: '50%', border: '1px solid rgba(0,153,221,0.12)' }} />
            <div className="relative z-10">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <polygon
                  points="60,8 70.5,42 106,42 78.5,62 89,96 60,76 31,96 41.5,62 14,42 49.5,42"
                  fill="none"
                  stroke="#0099DD"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <polygon
                  points="60,24 67,46 90,46 72,59 79,81 60,68 41,81 48,59 30,46 53,46"
                  fill="rgba(0,153,221,0.08)"
                  stroke="rgba(0,153,221,0.25)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Metrics grid */}
          <div
            className="grid grid-cols-2 gap-px border border-border mt-8"
            style={{ background: 'var(--border)' }}
          >
            {metrics.map(({ val, label }) => (
              <div key={val} className="p-6" style={{ background: 'var(--deep)' }}>
                <div className="font-cormorant text-[2rem] font-light text-blue leading-none mb-1">
                  {val}
                </div>
                <div className="text-[0.62rem] font-medium tracking-[0.15em] uppercase text-cream-dim">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

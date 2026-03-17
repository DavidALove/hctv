const items = [
  'Display & Programmatic Advertising',
  'Local SEO & Search Marketing',
  'Streaming & OTT/CTV Advertising',
  'Social Media Advertising',
  'LoneStar Network',
  'Local-SEO.co',
  'Texas-Rooted. Digitally Dominant.',
]

// Doubled for seamless loop
const allItems = [...items, ...items]

export default function Ticker() {
  return (
    <div className="overflow-hidden h-9 flex items-center" style={{ background: '#080C18' }}>
      <div className="ticker-track flex whitespace-nowrap">
        {allItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-blue"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-blue opacity-40 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

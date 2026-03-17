interface SectionEyebrowProps {
  label: string
  center?: boolean
  bothSides?: boolean
}

export default function SectionEyebrow({ label, center, bothSides }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${center ? 'justify-center' : ''}`}>
      <div className="w-7 h-px bg-blue flex-shrink-0" />
      <span className="text-[0.62rem] font-medium tracking-widest2 uppercase text-blue">{label}</span>
      {bothSides && <div className="w-7 h-px bg-blue flex-shrink-0" />}
    </div>
  )
}

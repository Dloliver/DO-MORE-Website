export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[.19em] text-violet-300 sm:text-sm sm:tracking-[.22em]">{eyebrow}</p>}
      <h2 className="mt-2 text-balance text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-[15px] leading-7 text-white/58 sm:text-base">{text}</p>}
    </div>
  )
}

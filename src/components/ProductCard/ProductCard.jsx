import Reveal from '@/components/Reveal'

export default function ProductCard({
    brand,
    name,
    specs,
    tags,
    image,
    imagePlaceholder,
    delay = 0
}) {
    return (
        <Reveal
            delay={delay}
            className="group bg-white border border-border-cream rounded-[2px] overflow-hidden transition-all duration-250 cursor-pointer hover:border-gold hover:-translate-y-[3px] hover:shadow-[0_8px_32px_rgba(26,42,74,0.08)]"
        >
            {/* Image Block */}
            <div className="h-[200px] bg-[#fdfaf5] flex items-center justify-center relative overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="text-[11px] text-[#9a8f7a] tracking-[0.08em]">{imagePlaceholder}</span>
                )}

                {/* Animated bottom gold bar */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                />
            </div>

            {/* Content Body */}
            <div className="p-5">
                <div className="text-[9px] tracking-[0.16em] uppercase text-gold mb-1.5">
                    {brand}
                </div>

                <h3 className="font-serif text-[17px] font-semibold text-ink mb-2">
                    {name}
                </h3>

                <p className="text-[11px] text-[#8a7a60] leading-[1.7] mb-3.5">
                    {specs}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[9px] tracking-[0.1em] uppercase px-2 py-[3px] border border-border-cream rounded-[1px] text-[#8a7a60]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] uppercase text-navy transition-all duration-200 group-hover:gap-2.5 group-hover:text-gold after:content-['→']">
                    Enquire Now
                </div>
            </div>
        </Reveal>
    )
}

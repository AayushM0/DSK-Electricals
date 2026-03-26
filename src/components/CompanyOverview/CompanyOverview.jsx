import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import wareImg from '@/assets/ware.png'

export default function CompanyOverview() {
    return (
        <section className="py-[88px] px-12 flex gap-[72px] items-center border-b border-border-cream">

            {/* Image container */}
            <Reveal
                delay={100}
                className="flex-1 min-h-[360px] rounded-[2px] relative overflow-hidden"
            >
                {/* Actual Image */}
                <img
                    src={wareImg}
                    alt="Warehouse Facility"
                    className="w-full h-full object-cover"
                />

                {/* Bottom gold accent bar */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gold"
                    aria-hidden="true"
                />
            </Reveal>

            {/* Text content */}
            <div className="flex-[1.2]">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Who we are
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-semibold text-ink leading-[1.2] mb-[18px]">
                        Built on reliability,<br />grown through trust
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <p className="font-sans text-[14px] text-muted leading-[1.9] mb-[14px]">
                        DSK Electricals began as a focused electrical wire distributor serving local contractors in the region. Over the decades, we expanded our product range, strengthened our brand partnerships and built a reputation that speaks for itself.
                    </p>
                </Reveal>

                <Reveal delay={200}>
                    <p className="font-sans text-[14px] text-muted leading-[1.9] mb-[14px]">
                        Today we are one of the region's trusted electrical distributors — stocking wires, cables, switchgear and accessories from the country's leading manufacturers, supplying to contractors, retailers, industries and bulk buyers.
                    </p>
                </Reveal>

                <Reveal delay={300}>
                    <Link
                        to="/products"
                        className="mt-6 inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-navy no-underline transition-all duration-200 after:content-['→'] hover:gap-[14px] hover:text-gold"
                    >
                        Explore Our Products
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
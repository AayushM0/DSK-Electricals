import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'

export default function PartnerCTA() {
    return (
        <section className="bg-gold px-4 md:px-8 lg:px-12 py-12 md:py-[72px] flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-center">
            <div className="flex-1">
                <Reveal>
                    <h2 className="font-serif text-[clamp(26px,3.5vw,38px)] font-semibold text-navy-deep leading-[1.2]">
                        Looking for a specific brand<br className="hidden md:block" />or product?
                    </h2>
                </Reveal>
                <Reveal delay={100}>
                    <p className="font-sans text-[14px] text-navy-deep/65 mt-2.5">
                        If you don't see what you need, speak to us — we may be able to source it.
                    </p>
                </Reveal>
            </div>

            <Reveal delay={100}>
                <Link
                    to="/contact"
                    className="bg-navy text-on-dark font-sans text-[11px] font-medium tracking-[0.12em] uppercase px-8 py-3.5 flex justify-center w-full md:w-auto rounded-[2px] whitespace-nowrap no-underline transition-colors duration-200 hover:bg-navy-deep"
                >
                    Contact Us →
                </Link>
            </Reveal>
        </section>
    )
}

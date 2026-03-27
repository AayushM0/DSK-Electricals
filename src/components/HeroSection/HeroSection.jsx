import { Link } from 'react-router-dom'
import wireBg from '@/assets/wire.png'

export default function HeroSection() {
    return (
        <section className="relative flex min-h-[560px] h-[92vh] items-center overflow-hidden bg-navy">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src={wireBg} alt="" className="w-full h-full object-cover opacity-[0.55]" aria-hidden="true" />
            </div>

            {/* Directional gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" aria-hidden="true" />

            {/* Ghost oversized word */}
            <p
                className="absolute font-serif text-[clamp(80px,22vw,260px)] font-bold right-[-20px] md:right-[-40px] bottom-[-20px] md:bottom-[-40px] leading-none pointer-events-none tracking-[-4px] z-10 ghost-text-white animate-ghost-drift"
                aria-hidden="true"
            >
                WIRE
            </p>

            {/* Main content */}
            <div className="relative z-20 px-4 md:px-8 lg:px-12 max-w-[580px]">
                <p className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-gold mb-5 before:content-[''] before:w-8 before:h-[0.5px] before:bg-gold animate-fade-up anim-delay-1">
                    Trusted · Pan-India Distribution
                </p>

                <h1 className="font-serif text-[clamp(44px,7vw,70px)] font-semibold leading-[1.12] text-on-dark mb-5 animate-fade-up anim-delay-2">
                    Wires &amp; Cables<br />
                    Built to <em className="not-italic text-gold">Last Decades</em>
                </h1>

                <p className="text-[15.5px] text-white/80 leading-[1.8] mb-9 max-w-[380px] animate-fade-up anim-delay-3">
                    Supplying quality electrical products to contractors, dealers and industries across the region.
                </p>

                <div className="flex flex-wrap gap-[14px] animate-fade-up anim-delay-4">
                    <Link
                        to="/products"
                        className="bg-gold text-navy-deep text-[11px] font-semibold tracking-[0.1em] uppercase px-7 py-[13px] rounded-[2px] transition-all duration-200 hover:bg-gold-light hover:-translate-y-px"
                    >
                        View Products
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-white/20 text-[#d0d8e4] text-[11px] tracking-[0.1em] uppercase px-7 py-[13px] rounded-[2px] transition-colors duration-200 hover:border-gold hover:text-gold"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>

            {/* Scroll indicator */}
            <p className="absolute bottom-7 left-4 md:left-12 z-20 flex items-center gap-[10px] text-[11px] tracking-[0.14em] uppercase text-on-dark animate-fade-up anim-delay-5">
                <span className="w-10 h-[0.5px] bg-on-dark" aria-hidden="true" />
                Scroll
            </p>
        </section>
    )
}

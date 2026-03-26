import Reveal from '@/components/Reveal'
import { BRANDS_LIST } from '@/constants/brands'

// Import brand logos
import finolex from '@/assets/finolex.webp'
import havells from '@/assets/havells.webp'
import polycab from '@/assets/polycab.webp'
import anchor from '@/assets/anchor.webp'
import rrKabel from '@/assets/rr-kabel.webp'
import kei from '@/assets/kei.webp'
import supreme from '@/assets/astral.jpg'
import dowells from '@/assets/dowell.png'

// Map brand names to images
const BRAND_LOGOS = {
    'Finolex': finolex,
    'Havells': havells,
    'Polycab': polycab,
    'Anchor': anchor,
    'RR Kabel': rrKabel,
    'KEI Industries': kei,
    'Astral': supreme,
    'Dowells': dowells,
}

export default function BrandsGrid() {
    return (
        <section className="py-20 px-12">
            <div className="mb-12">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Our brand partners
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-semibold text-ink leading-[1.15]">
                        Brands we stock &amp; supply
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-4 gap-px bg-border-cream mb-12">
                {BRANDS_LIST.map(({ id, name, category }, i) => (
                    <Reveal
                        key={id}
                        delay={(i % 4) * 100}
                        className="group bg-cream p-8 pb-10 flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden transition-colors duration-200 hover:bg-white"
                    >
                        {/* Bottom gold bar */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                            aria-hidden="true"
                        />

                        {/* Logo */}
                        <div className="w-[120px] h-[52px] mb-3.5 flex items-center justify-center transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100">
                            <img
                                src={BRAND_LOGOS[name]}
                                alt={name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        {/* Brand Name */}
                        <div className="font-sans text-[12px] text-[#8a7a60] tracking-[0.06em] transition-colors duration-200 group-hover:text-navy">
                            {name}
                        </div>

                        {/* Category */}
                        <div className="font-sans text-[10px] text-[#aaa090] mt-1">
                            {category}
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
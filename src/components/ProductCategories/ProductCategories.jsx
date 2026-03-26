import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { PRODUCT_CATEGORIES } from '@/constants/home'

function ProductTile({ label, name, desc, bgImage, delay }) {
    return (
        <Reveal
            delay={delay}
            as="article"
            className="group relative h-[280px] overflow-hidden bg-[#1e2a3c] border-r border-white/[0.04] last:border-r-0 cursor-pointer"
        >
            {/* Background Image */}
            <img
                src={bgImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-500 ease-in-out group-hover:scale-105"
                aria-hidden="true"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 tile-overlay" aria-hidden="true" />

            {/* Ghost number */}
            <p className="absolute top-[18px] left-5 font-serif text-[64px] font-bold leading-none tile-ghost-num pointer-events-none" aria-hidden="true">
                {label}
            </p>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-[6px] transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="font-serif text-[20px] font-semibold text-on-dark mb-[5px]">{name}</h3>
                <p className="text-[11px] text-[#6a7a8a] mb-[14px]">{desc}</p>
                <span className="flex items-center gap-[6px] text-[10px] tracking-[0.14em] uppercase text-gold opacity-0 translate-y-[6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 after:content-['↗'] after:text-xs">
                    View Range
                </span>
            </div>
        </Reveal>
    )
}

export default function ProductCategories() {
    return (
        <section className="bg-cream">
            <div className="px-12 pt-16 pb-8 flex justify-between items-end">
                <div>
                    <Reveal>
                        <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                            What we supply
                        </p>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-semibold text-ink leading-[1.15]">
                            Our Product Range
                        </h2>
                    </Reveal>
                </div>
                <Reveal delay={100}>
                    <Link
                        to="/products"
                        className="flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-navy no-underline transition-all duration-200 after:content-['→'] hover:gap-[14px] hover:text-gold"
                    >
                        View All Products
                    </Link>
                </Reveal>
            </div>

            <div className="grid grid-cols-4">
                {PRODUCT_CATEGORIES.map(({ id, label, name, desc, bgImage }, i) => (
                    <ProductTile key={id} label={label} name={name} desc={desc} bgImage={bgImage} delay={i * 100} />
                ))}
            </div>
        </section>
    )
}

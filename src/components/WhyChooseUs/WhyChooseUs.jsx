import Reveal from '@/components/Reveal'
import { WHY_TILES } from '@/constants/home'

function WhyTile({ icon, title, desc, delay }) {
    return (
        <Reveal
            delay={delay}
            className="bg-[#1c2d4c] p-7 rounded-[3px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] border-t border-white/5 border-b-2 border-b-transparent transition-all duration-300 hover:border-b-gold hover:bg-[#20345a] hover:-translate-y-1.5 relative z-0 hover:z-10"
        >
            <span className="block text-[22px] mb-3.5" aria-hidden="true">{icon}</span>
            <h3 className="font-serif text-[19px] font-semibold text-[#d4cfc4] mb-2">{title}</h3>
            <p className="text-[12px] text-[#5a6a7a] leading-[1.8]">{desc}</p>
        </Reveal>
    )
}

export default function WhyChooseUs() {
    return (
        <section className="bg-navy py-20 px-12 relative overflow-hidden">
            {/* Background subtle vertical rule */}
            <div className="absolute right-20 inset-y-0 w-[0.5px] bg-white/5" aria-hidden="true" />

            <div className="mb-12 relative z-10">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        What sets us apart
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="text-[clamp(28px,4vw,42px)] font-semibold text-on-dark leading-[1.15]">
                        Why contractors &amp; dealers<br />choose us, every time
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-3 gap-6 relative z-10">
                {WHY_TILES.map(({ id, icon, title, desc }, i) => (
                    <WhyTile key={id} icon={icon} title={title} desc={desc} delay={(i % 3) * 100} />
                ))}
            </div>
        </section>
    )
}

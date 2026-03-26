import Reveal from '@/components/Reveal'

export default function QuickEnquiry() {
    return (
        <section className="bg-cream-dark py-20 px-12 flex gap-20 items-center border-y border-[#d4c9b0]">
            <div className="flex-1">
                <Reveal>
                    <p className="flex items-center gap-[10px] text-[10px] tracking-[0.22em] uppercase text-gold mb-[10px] before:content-[''] before:w-6 before:h-[0.5px] before:bg-gold">
                        Talk to us
                    </p>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="text-[clamp(26px,3.5vw,38px)] font-semibold text-ink leading-[1.25] mb-[14px]">
                        Have a requirement<br />in mind?
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <p className="text-[13px] text-muted leading-[1.8]">
                        Drop us your details and we'll get back to you with pricing and availability within the day.
                    </p>
                </Reveal>
            </div>

            <Reveal delay={100} className="flex-[1.4] w-full">
                <form
                    className="flex flex-col gap-3"
                    onSubmit={(e) => {
                        e.preventDefault()
                        window.open('https://wa.me/919289210000?text=hello%20i%20wanted%20to%20enquire%20about%20this', '_blank')
                    }}
                >
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Your Name *"
                            required
                            className="flex-1 bg-cream border border-[#c8bfaa] px-4 py-3 font-sans text-[13px] text-ink rounded-[2px] outline-none transition-colors duration-200 placeholder:text-[#9a8f7a] focus:border-navy"
                            aria-label="Your Name"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number *"
                            required
                            className="flex-1 bg-cream border border-[#c8bfaa] px-4 py-3 font-sans text-[13px] text-ink rounded-[2px] outline-none transition-colors duration-200 placeholder:text-[#9a8f7a] focus:border-navy"
                            aria-label="Phone Number"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Your Requirement (e.g. 4mm FR house wire, 500m)"
                        className="w-full bg-cream border border-[#c8bfaa] px-4 py-3 font-sans text-[13px] text-ink rounded-[2px] outline-none transition-colors duration-200 placeholder:text-[#9a8f7a] focus:border-navy"
                        aria-label="Your Requirement"
                    />
                    <button
                        type="submit"
                        className="self-start bg-navy text-on-dark font-sans text-[11px] font-medium tracking-[0.12em] uppercase px-8 py-3.5 rounded-[2px] transition-all duration-200 hover:bg-gold hover:text-navy-deep hover:-translate-y-px mt-1"
                    >
                        Send Enquiry →
                    </button>
                </form>
            </Reveal>
        </section>
    )
}

import Reveal from '@/components/Reveal'

export default function AuthorizationStrip() {
    return (
        <section className="bg-cream-dark px-12 py-8 flex items-center gap-6 border-b border-border-cream">
            <Reveal className="bg-navy text-gold font-sans text-[10px] tracking-[0.14em] uppercase px-4 py-2 rounded-[2px] whitespace-nowrap">
                ✓ Authorised Dealer
            </Reveal>

            <Reveal delay={100}>
                <p className="font-sans text-[13px] text-muted leading-[1.6]">
                    <strong className="text-ink font-medium">DSK Electricals is an authorised distributor</strong> for all brands listed on this page. Every product we supply comes with manufacturer warranty and full documentation.
                </p>
            </Reveal>
        </section>
    )
}

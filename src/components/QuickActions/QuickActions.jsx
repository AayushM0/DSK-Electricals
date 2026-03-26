export default function QuickActions() {
    const phone = "9289210000"
    const email = "dsk300411@gmail.com"

    return (
        <section className="bg-cream-dark border-b border-border-cream">

            <div className="px-4 md:px-8 lg:px-12 py-6 flex lg:items-center flex-col lg:flex-row justify-between flex-wrap gap-4">

                {/* Left Label */}
                <span className="font-sans text-[11px] text-[#8a7a60] tracking-[0.12em] uppercase">
                    Reach us directly
                </span>

                {/* Actions */}
                <div className="flex items-center gap-3 flex-wrap">

                    {/* Call */}
                    <a
                        href={`tel:+91${phone}`}
                        className="flex items-center gap-2 bg-navy text-white text-[12px] tracking-[0.06em] px-4 sm:px-5 py-2.5 rounded shadow-sm transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md max-w-full"
                    >
                        <span className="text-[14px]">📞</span>
                        Call Now
                    </a>

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/91${phone}?text=Hi%20DSK%20Electricals,%20I%20have%20a%20requirement.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#25D366] text-white text-[12px] tracking-[0.06em] px-4 sm:px-5 py-2.5 rounded shadow-sm transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md max-w-full"
                    >
                        <span className="text-[14px]">💬</span>
                        WhatsApp
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 bg-white text-navy border border-border-cream text-[12px] tracking-[0.06em] px-4 sm:px-5 py-2.5 rounded shadow-sm transition-all duration-200 hover:-translate-y-[2px] hover:border-navy hover:shadow-md max-w-full"
                    >
                        <span className="text-[14px]">✉</span>
                        Send Email
                    </a>

                </div>
            </div>
        </section>
    )
}
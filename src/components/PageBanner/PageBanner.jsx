export default function PageBanner({
    title,
    breadcrumb,
    subtitle,
    ghostText,
    backgroundImage
}) {
    return (
        <div
            className="px-4 md:px-8 lg:px-12 pt-16 md:pt-20 pb-12 md:pb-16 relative overflow-hidden bg-navy bg-cover bg-center"
            style={
                backgroundImage
                    ? { backgroundImage: `url(${backgroundImage})` }
                    : {}
            }
        >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-navy/80 z-0"></div>

            {/* Ghost text */}
            <div
                className="absolute font-serif text-[100px] md:text-[180px] font-bold right-[-10px] md:right-[-20px] bottom-[-20px] md:bottom-[-40px] leading-none pointer-events-none z-0 ghost-text-white"
                aria-hidden="true"
            >
                {ghostText}
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="text-[11px] text-[#3a5a7a] tracking-[0.1em] mb-5">
                    Home &nbsp;/&nbsp;{" "}
                    <span className="text-gold">{breadcrumb}</span>
                </div>

                <h1
                    className="font-serif text-[clamp(36px,6vw,64px)] font-semibold text-on-dark leading-[1.1]"
                    dangerouslySetInnerHTML={{ __html: title }}
                />

                {subtitle && (
                    <p className="text-[14px] text-dim mt-3.5 max-w-[480px] leading-[1.7]">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    )
}
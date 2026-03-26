import { MAP_INFO } from '@/constants/contact'

export default function LocationMap() {
    return (
        <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 bg-cream">

            {/* Heading */}
            <div className="mb-8 pl-1">
                <h2 className="font-serif text-[28px] text-ink mb-2">
                    Visit Our Location
                </h2>

                {/* Clickable Address */}
                <a
                    href={MAP_INFO.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-navy underline hover:text-gold transition-colors"
                >
                    {MAP_INFO.address}
                </a>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] sm:h-[420px] overflow-hidden rounded-[4px] shadow-md">
                <iframe
                    src={MAP_INFO.embed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </section>
    )
}
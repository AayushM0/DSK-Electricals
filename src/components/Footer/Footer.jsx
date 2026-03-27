import { Link } from 'react-router-dom'
import { NAV_LINKS } from '@/constants/home'

export default function Footer() {
    return (
        <footer className="bg-navy-deep px-4 md:px-8 lg:px-12 pt-16 pb-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-10 lg:gap-12 pb-12 border-b border-white/[0.07] mb-7">

                {/* Brand */}
                <div>
                    <h2 className="font-serif text-[20px] font-bold text-gold tracking-[0.06em] mb-2.5">
                        DSK ELECTRICALS LIMITED
                    </h2>
                    <p className="text-[13.5px] text-white/80 leading-[1.9] mb-[18px]">
                        Electrical distributors serving contractors, industries and dealers. Stocking the best brands at the best prices with same-day dispatch.
                    </p>
                    <span className="inline-block border border-[#31508f] px-3 py-[5px] text-[10px] tracking-[0.14em] uppercase text-white/70 rounded-[2px]">
                        GST Registered · ISI Certified Products
                    </span>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-[9px] tracking-[0.2em] uppercase text-gold mb-[18px]">Quick Links</h3>
                    <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={href}
                                to={href}
                                className="text-[13.5px] text-white/80 no-underline transition-colors duration-200 hover:text-gold"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[9px] tracking-[0.2em] uppercase text-gold mb-[18px]">Contact</h3>
                    <address className="not-italic text-[13.5px] text-white/80 leading-[1.9] flex flex-col gap-1.5">
                        <p>📍 DSK ELECTRICALS LIMITED
                            Add: office no.1, floor no.1, PLOT no.1, Thakran market, Near Ocus Quantum Mall, Samaspur, Gurugram, Haryana,<br />City — 122003</p>
                        <p>📞 +91 8510994440</p>
                        <p>📠 +91 9289210000</p>
                        <p>✉ dsk300411@gmail.com</p>
                    </address>
                </div>

                {/* Email Contact */}
                <div>
                    <h3 className="text-[9px] tracking-[0.2em] uppercase text-gold mb-[18px]">Get In Touch</h3>
                    <a
                        href="mailto:dsk300411@gmail.com"
                        className="inline-block bg-gold text-navy-deep font-sans text-[10px] font-semibold tracking-[0.1em] uppercase px-5 py-2.5 rounded-[2px] transition-colors duration-200 hover:bg-gold-light"
                    >
                        Email
                    </a>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left text-[12.5px] text-white/30 tracking-[0.04em]">
                <p>© {new Date().getFullYear()} DSK Electricals Limited. All Rights Reserved.</p>
                <p>GST No: XXXXXXXXXXXXXXX</p>
            </div>
        </footer>
    )
}

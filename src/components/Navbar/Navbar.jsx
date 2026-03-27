import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV_LINKS } from '@/constants/home'
import { cn } from '@/utils/cn'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header>
            {/* Topbar — bg navy-mid, scrolls away */}
            <div className="bg-navy-mid px-4 md:px-12 py-[7px] flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                <div className="flex gap-4 sm:gap-7 text-[11px] sm:text-[12px] text-white/95 tracking-[0.04em]">
                    <span>📞 +91 9289210000</span>
                    <span>✉ dsk300411@gmail.com</span>
                </div>
                <div className="flex gap-2 hidden sm:flex" aria-label="Social media links">

                    <a
                        href="https://www.linkedin.com/in/dsk-electricals-limited-a64a223b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                        aria-label="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[24px] h-[24px] border border-border-navy rounded-[3px] grid place-items-center text-[11px] text-white/90 no-underline transition-colors duration-200 hover:border-gold hover:text-gold"
                    >
                        in
                    </a>
                    <a
                        href="https://www.instagram.com/dsk131001?igsh=MWhmazEyOGc5cG53cA=="
                        aria-label="instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[22px] h-[22px] border border-border-navy rounded-[3px] grid place-items-center text-[10px] text-[#5a7a9a] no-underline transition-colors duration-200 hover:border-gold hover:text-gold"
                    >
                        ig
                    </a>
                </div>
            </div>

            {/* Sticky nav — bg cream */}
            <nav
                className="bg-cream border-b border-border-cream px-4 md:px-12 flex items-center justify-between h-[68px] sticky top-0 z-50 transition-colors"
                aria-label="Main navigation"
            >
                <div className="flex flex-col gap-[2px]">
                    <span className="font-serif text-[22px] sm:text-[25px] font-bold text-navy tracking-[0.06em] leading-none">
                        DSK ELECTRICALS LIMITED
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#8a7a60] tracking-[0.16em] uppercase">
                        Electrical Distributors
                    </span>
                </div>

                <ul className="hidden lg:flex gap-9 text-[13.5px] tracking-[0.06em] text-[#4a4030] list-none" role="list">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <NavLink
                                to={href}
                                end={href === '/'}
                                className={({ isActive }) =>
                                    cn(
                                        'relative pb-[3px] no-underline transition-colors duration-200',
                                        'after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-navy after:transition-all after:duration-[250ms]',
                                        isActive
                                            ? 'text-navy font-medium after:w-full'
                                            : 'text-[#4a4030] after:w-0 hover:after:w-full'
                                    )
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <Link
                        to="/contact#enquiry"
                        className="hidden sm:block bg-navy text-on-dark text-[11px] tracking-[0.1em] uppercase px-[22px] py-[10px] rounded-[2px] transition-colors duration-200 hover:bg-gold hover:text-navy-deep no-underline"
                    >
                        Enquire Now
                    </Link>

                    <button
                        type="button"
                        className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[68px] left-0 w-full bg-cream border-b border-border-cream shadow-lg lg:hidden px-4 md:px-12 py-4 flex flex-col gap-4">
                        <ul className="flex flex-col gap-4 text-[13px] tracking-[0.06em] text-[#4a4030] list-none" role="list">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={href}>
                                    <NavLink
                                        to={href}
                                        end={href === '/'}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            cn(
                                                'block py-2 border-b border-[#e0dad0] transition-colors duration-200',
                                                isActive ? 'text-navy font-medium' : 'text-[#4a4030]'
                                            )
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <Link
                            to="/contact#enquiry"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full sm:hidden bg-navy text-on-dark text-[12px] tracking-[0.1em] uppercase px-[22px] py-[12px] rounded-[2px] text-center no-underline"
                        >
                            Enquire Now
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

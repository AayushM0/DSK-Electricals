import { NavLink } from 'react-router-dom'
import { NAV_LINKS } from '@/constants/home'
import { cn } from '@/utils/cn'

export default function Navbar() {
    return (
        <header>
            {/* Topbar — bg navy-mid, scrolls away */}
            <div className="bg-navy-mid px-12 py-[7px] flex justify-between items-center">
                <div className="flex gap-7 text-[11px] text-[#7a8a9a] tracking-[0.04em]">
                    <span>📞 +91 9289210000</span>
                    <span>✉ dsk300411@gmail.com</span>
                </div>
                <div className="flex gap-2" aria-label="Social media links">
                    {['f', 'ig'].map((s) => (
                        <a
                            key={s}
                            href="#"
                            aria-label={s}
                            className="w-[22px] h-[22px] border border-border-navy rounded-[3px] grid place-items-center text-[10px] text-[#5a7a9a] no-underline transition-colors duration-200 hover:border-gold hover:text-gold"
                        >
                            {s}
                        </a>
                    ))}
                </div>
            </div>

            {/* Sticky nav — bg cream */}
            <nav
                className="bg-cream border-b border-border-cream px-12 flex items-center justify-between h-[68px] sticky top-0 z-50"
                aria-label="Main navigation"
            >
                <div className="flex flex-col gap-[2px]">
                    <span className="font-serif text-[20px] font-bold text-navy tracking-[0.06em] leading-none">
                        DSK ELECTRICALS
                    </span>
                    <span className="text-[9px] text-[#8a7a60] tracking-[0.16em] uppercase">
                        Electrical Distributors
                    </span>
                </div>

                <ul className="flex gap-9 text-[12px] tracking-[0.06em] text-[#4a4030] list-none" role="list">
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

                <button
                    type="button"
                    className="bg-navy text-on-dark text-[11px] tracking-[0.1em] uppercase px-[22px] py-[10px] rounded-[2px] transition-colors duration-200 hover:bg-gold hover:text-navy-deep"
                >
                    Enquire Now
                </button>
            </nav>
        </header>
    )
}

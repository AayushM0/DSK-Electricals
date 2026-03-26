import wireImg from '@/assets/wire.jpeg'
import powerancImg from '@/assets/poweranc.png'
import switchgearImg from '@/assets/switchgear.png'
import accessoriesImg from '@/assets/accessories.png'

export const PRODUCT_CATEGORIES = [
    { id: 1, label: '01', name: 'Electrical Wires', desc: 'House wiring · Industrial grade · FR / FRLS', bgImage: wireImg },
    { id: 2, label: '02', name: 'Power & Control Cables', desc: 'Armoured · Flexible · Control cables', bgImage: powerancImg },
    { id: 3, label: '03', name: 'Switchgear', desc: 'MCBs · Distribution boards · Isolators', bgImage: switchgearImg },
    { id: 4, label: '04', name: 'Accessories', desc: 'Connectors · Conduits · Lugs · Hardware', bgImage: accessoriesImg },
]

export const WHY_TILES = [
    { id: 1, icon: '⚡', title: 'Wide Product Range', desc: 'Single-source procurement across wires, cables, switchgear and accessories. No need to visit multiple suppliers.' },
    { id: 2, icon: '✓', title: 'Genuine Quality', desc: 'ISI certified products across the board. Authorised dealer for all major brands we stock.' },
    { id: 3, icon: '₹', title: 'Competitive Pricing', desc: 'Bulk buyer rates available. Special pricing for contractors, retailers and channel partners.' },
    { id: 4, icon: '◈', title: 'Strong Supplier Network', desc: 'Direct tie-ups with top manufacturers keep our lead times short and our pricing consistently sharp.' },
    { id: 5, icon: '→', title: 'Fast Delivery', desc: 'Same-day dispatch for in-stock items. Outstation bulk orders handled with full tracking.' },
    { id: 6, icon: '◎', title: 'Dedicated Support', desc: 'Real people, transparent quotes. No runaround when you need something urgently on-site.' },
]

export const LEGACY_STATS = [
    { id: 2, target: 30, label: 'Brands stocked' },
    { id: 3, target: 500, label: 'Happy clients' },
]

export const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Brands', href: '/brands' },
    { label: 'Contact', href: '/contact' },
]

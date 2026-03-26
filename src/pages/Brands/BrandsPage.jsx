import PageBanner from '@/components/PageBanner'
import AuthorizationStrip from '@/components/AuthorizationStrip'
import BrandsGrid from '@/components/BrandsGrid'
import TrustPillars from '@/components/TrustPillars'
import PartnerCTA from '@/components/PartnerCTA'

// Import banner image
import brandsBanner from '@/assets/brands.png'

export default function BrandsPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-cream">

            <PageBanner
                title="Brands We Trust.<br/>Brands You Can Trust."
                breadcrumb="Brands"
                subtitle="We stock and supply products only from manufacturers with a proven track record — ISI certified, quality guaranteed."
                ghostText="Brands"
                backgroundImage={brandsBanner}
            />

            <AuthorizationStrip />
            <BrandsGrid />
            <TrustPillars />
            <PartnerCTA />
        </div>
    )
}
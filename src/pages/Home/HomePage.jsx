import HeroSection from '@/components/HeroSection'
import ProductCategories from '@/components/ProductCategories'
import LegacySection from '@/components/LegacySection'
import WhyChooseUs from '@/components/WhyChooseUs'
import QuickEnquiry from '@/components/QuickEnquiry'

export default function HomePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <HeroSection />
            <ProductCategories />
            <LegacySection />
            <WhyChooseUs />
            <QuickEnquiry />
        </div>
    )
}

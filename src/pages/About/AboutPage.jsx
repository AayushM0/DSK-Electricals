import PageBanner from '@/components/PageBanner'
import CompanyOverview from '@/components/CompanyOverview'
import JourneyTimeline from '@/components/JourneyTimeline'
import VisionMission from '@/components/VisionMission'
import Infrastructure from '@/components/Infrastructure'
import IndustriesServed from '@/components/IndustriesServed'

import accessBg from '@/assets/access.png'

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <PageBanner
                title="Our Story,<br/>Our Legacy"
                breadcrumb="About Us"
                subtitle="Decades of delivering quality electrical products with integrity, reliability and a commitment to every client we serve."
                ghostText="About"
                backgroundImage={accessBg}
            />

            <CompanyOverview />
            <JourneyTimeline />
            <VisionMission />
            <Infrastructure />
            <IndustriesServed />
        </div>
    )
}
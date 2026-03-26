import PageBanner from '@/components/PageBanner'
import QuickActions from '@/components/QuickActions'
import ContactSection from '@/components/ContactSection'
import LocationMap from '@/components/LocationMap'

// Import banner image
import contactBanner from '@/assets/contact.png'

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-cream">

            <PageBanner
                title="Let's Talk"
                breadcrumb="Contact"
                subtitle="Have a requirement, need a quote, or just want to know if we stock something? We respond the same day."
                ghostText="Contact"
                backgroundImage={contactBanner}
            />

            <QuickActions />
            <ContactSection />
            <LocationMap />
        </div>
    )
}
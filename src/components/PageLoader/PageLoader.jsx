export default function PageLoader() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-cream" aria-label="Loading page">
            <div className="flex flex-col items-center gap-3">
                <div className="h-[2px] w-16 bg-gold animate-pulse rounded" />
                <span className="font-serif text-navy text-lg tracking-[0.1em]">DSK Electricals</span>
            </div>
        </div>
    )
}

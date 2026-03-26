import { cn } from '@/utils/cn'

export default function ProductSidebar({ filters, activeFilterId, onFilterSelect }) {
    return (
        <aside className="w-full md:w-[240px] shrink-0 bg-cream-dark border-b md:border-b-0 md:border-r border-border-cream p-6 md:p-10 pt-6 md:pt-[40px] pb-6 md:pb-10 static md:sticky top-[68px] self-start h-auto md:h-[calc(100vh-68px)] overflow-y-visible md:overflow-y-auto">
            <h2 className="text-[10px] tracking-[0.18em] uppercase text-[#8a7a60] mb-5 pb-3 border-b border-border-cream">
                Filter Products
            </h2>

            <div className="flex flex-row md:flex-col gap-6 md:gap-0 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {filters.map((group) => (
                    <div key={group.id} className="mb-0 md:mb-7 shrink-0 min-w-[140px] md:min-w-0">
                        <h3 className="text-[9px] tracking-[0.16em] uppercase text-[#aaa090] mb-2.5">
                            {group.label}
                        </h3>
                        <div className="flex flex-col gap-1">
                            {group.options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => onFilterSelect(option.id)}
                                    className={cn(
                                        'w-full text-left font-sans text-[12px] px-3 py-2 rounded-[2px] cursor-pointer transition-all duration-200 border border-transparent',
                                        activeFilterId === option.id
                                            ? 'bg-navy text-on-dark border-navy'
                                            : 'bg-transparent text-[#6a5f50] hover:border-border-cream hover:text-navy'
                                    )}
                                    aria-pressed={activeFilterId === option.id}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    )
}

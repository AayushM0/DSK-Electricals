import { useState } from 'react'
import PageBanner from '@/components/PageBanner'
import ProductSidebar from '@/components/ProductSidebar'
import ProductCard from '@/components/ProductCard'
import { PRODUCT_FILTERS, PRODUCTS_DATA } from '@/constants/products'

// Import banner image
import productsBanner from '@/assets/products.png'

export default function ProductsPage() {
    const [activeFilterId, setActiveFilterId] = useState('all')

    const handleFilterSelect = (id) => {
        setActiveFilterId(id)
    }

    // Filter logic
    const visibleCategories = PRODUCTS_DATA.filter(category => {
        if (activeFilterId === 'all') return true

        return category.categoryId === activeFilterId ||
            category.items.some(item =>
                item.tags.map(t => t.toLowerCase()).includes(activeFilterId) ||
                item.brand.toLowerCase().replace(' ', '-') === activeFilterId
            )
    })

    return (
        <div className="flex flex-col w-full overflow-hidden bg-cream">

            {/* Banner with background image */}
            <PageBanner
                title="Our Product Range"
                breadcrumb="Products"
                subtitle="ISI certified electrical products across wires, cables, switchgear and accessories — from the brands that matter."
                ghostText="Products"
                backgroundImage={productsBanner}
            />

            {/* Main Layout */}
            <div className="flex flex-col md:flex-row min-h-[600px]">
                <ProductSidebar
                    filters={PRODUCT_FILTERS}
                    activeFilterId={activeFilterId}
                    onFilterSelect={handleFilterSelect}
                />

                {/* Product Grid */}
                <main className="flex-1 p-4 sm:p-8 lg:p-12 min-w-0" aria-label="Product listings">
                    {visibleCategories.map((category) => (
                        <section key={category.categoryId} className="mb-16 last:mb-0">

                            <header className="flex items-baseline gap-4 md:gap-5 mb-7 pb-4 border-b border-border-cream">
                                <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-semibold text-ink">
                                    {category.categoryName}
                                </h2>
                                <span className="text-[11px] text-[#aaa090] tracking-[0.06em]">
                                    {category.productCount} products
                                </span>
                            </header>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {category.items.map((product, i) => (
                                    <ProductCard
                                        key={product.id}
                                        {...product}
                                        delay={(i % 3) * 100}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    {visibleCategories.length === 0 && (
                        <div className="py-20 text-center text-muted text-[13px]">
                            No products found matching the selected filter.
                        </div>
                    )}
                </main>
            </div>
        </div>
    )
}
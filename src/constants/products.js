export const PRODUCT_FILTERS = [
    {
        id: 'category',
        label: 'By Category',
        options: [
            { id: 'all', label: 'All Products' },
            { id: 'wires', label: 'Electrical Wires' },
            { id: 'power', label: 'Power Cables' },
            { id: 'control', label: 'Control Cables' },
            { id: 'flexible', label: 'Flexible Cables' },
            { id: 'switchgear', label: 'Switchgear & MCBs' },
            { id: 'connectors', label: 'Connectors & Lugs' },
            { id: 'conduits', label: 'Conduits & Accessories' },
        ],
    },
    {
        id: 'usage',
        label: 'By Usage',
        options: [
            { id: 'residential', label: 'Residential' },
            { id: 'industrial', label: 'Industrial' },
            { id: 'commercial', label: 'Commercial' },
        ],
    },
    {
        id: 'brand',
        label: 'By Brand',
        options: [
            { id: 'brand-a', label: 'Brand A' },
            { id: 'brand-b', label: 'Brand B' },
            { id: 'brand-c', label: 'Brand C' },
            { id: 'brand-d', label: 'Brand D' },
        ],
    },
]

export const PRODUCTS_DATA = [
    {
        categoryId: 'wires',
        categoryName: 'Electrical Wires',
        productCount: 12,
        items: [
            { id: 'w1', brand: 'Brand Name', name: 'FR House Wire — 1.5 sq mm', specs: 'Voltage: 1100V · Conductor: Copper · ISI Marked', tags: ['Residential', 'FR Grade'], imagePlaceholder: '[ WIRE PHOTO ]' },
            { id: 'w2', brand: 'Brand Name', name: 'FRLS Wire — 2.5 sq mm', specs: 'Voltage: 1100V · Conductor: Copper · ISI Marked', tags: ['Residential', 'FRLS'], imagePlaceholder: '[ WIRE PHOTO ]' },
            { id: 'w3', brand: 'Brand Name', name: 'Industrial Wire — 4 sq mm', specs: 'Voltage: 1100V · Conductor: Copper · ISI Marked', tags: ['Industrial', 'Heavy Duty'], imagePlaceholder: '[ WIRE PHOTO ]' },
        ],
    },
    {
        categoryId: 'cables',
        categoryName: 'Power & Control Cables',
        productCount: 18,
        items: [
            { id: 'c1', brand: 'Brand Name', name: 'Armoured Power Cable — 3.5C × 16mm²', specs: 'Voltage: 1.1kV · XLPE Insulated · Steel Armoured', tags: ['Industrial', 'Armoured'], imagePlaceholder: '[ CABLE PHOTO ]' },
            { id: 'c2', brand: 'Brand Name', name: 'Flexible Cable — 3C × 2.5mm²', specs: 'Voltage: 1100V · PVC Insulated · Multi-strand', tags: ['Flexible', 'General Use'], imagePlaceholder: '[ CABLE PHOTO ]' },
            { id: 'c3', brand: 'Brand Name', name: 'Control Cable — 10C × 1.5mm²', specs: 'Voltage: 1100V · PVC Insulated · Screened', tags: ['Control', 'Industrial'], imagePlaceholder: '[ CABLE PHOTO ]' },
        ],
    },
    {
        categoryId: 'switchgear',
        categoryName: 'Switchgear & MCBs',
        productCount: 9,
        items: [
            { id: 's1', brand: 'Brand Name', name: 'MCB — 32A Single Pole', specs: 'Breaking Capacity: 10kA · Curve B · ISI Marked', tags: ['Residential', 'ISI'], imagePlaceholder: '[ MCB PHOTO ]' },
            { id: 's2', brand: 'Brand Name', name: 'Distribution Board — 8 Way', specs: 'Rating: 63A · Double Door · Surface Mount', tags: ['Commercial'], imagePlaceholder: '[ DB PHOTO ]' },
            { id: 's3', brand: 'Brand Name', name: 'Isolator — 100A TP', specs: 'Rating: 100A · Three Pole · Din Rail Mount', tags: ['Industrial'], imagePlaceholder: '[ ISOLATOR PHOTO ]' },
        ],
    },
]

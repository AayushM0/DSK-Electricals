// Import all product images
import havellsExhaust from '@/assets/products/polycabExhaust.jpg'
import industrialExhaust from '@/assets/products/industrialexhaust.jpg'
import thrillExhaust from '@/assets/products/thrillExhaust.jpg'
import polycabExhaust from '@/assets/products/havellsexhaust.jpg'
import wallMounted from '@/assets/products/wallmounted.jpg'
import oscillatingWall from '@/assets/products/oscillatingwall.jpg'
import remoteWall from '@/assets/products/remotewall.jpg'
import highSpeedWall from '@/assets/products/highspeedfan.jpg'
import instantGeyser from '@/assets/products/havellsgeyser.jpg'
import storageGeyser from '@/assets/products/sttoregeyser.jpg'
import verticalGeyser from '@/assets/products/verticalgeysser.jpg'
import horizontalGeyser from '@/assets/products/horizontalgeyser.jpg'
import standardFan from '@/assets/products/havellsfan.jpg'
import decorativeFan from '@/assets/products/decorativeFan.webp'
import energySaving from '@/assets/products/energysaving.jpg'
import highspeedCeiling from '@/assets/products/highspeed.webp'
import modularPlate from '@/assets/products/modularSwitch.jpg'
import glassFinish from '@/assets/products/glassfinish.jpg'
import designerPlate from '@/assets/products/designerplates.jpg'
import screwlessPlate from '@/assets/products/screwlessPlates.jpg'
import oneWay from '@/assets/products/1way.jpeg'
import twoWay from '@/assets/products/2way.jpg'
import bellPush from '@/assets/products/bellpush.webp'
import usbCharging from '@/assets/products/USBcharging.jpg'
import pvcConduit from '@/assets/products/PVCconduit.jpg'
import flexibleConduit from '@/assets/products/flexibleconduit.jpg'
import casingPipes from '@/assets/products/casing.jpg'
import pvcBends from '@/assets/products/pvcbends.jpg'
import ledBulb from '@/assets/products/LEDbulb.webp'
import ledPanel from '@/assets/products/LEDpanel.jpg'
import ledTube from '@/assets/products/LEDtube.jpg'
import cobSpot from '@/assets/products/CObspot.webp'
import houseWiring from '@/assets/products/housewiring.jpg'
import powerCables from '@/assets/products/powercables.jpg'
import flexibleCables from '@/assets/products/flexiblecables.jpg'
import controlCables from '@/assets/products/control cables.jpg'
import fanRegulator from '@/assets/products/fanRegulator.jpg'
import elecRegulator from '@/assets/products/elecRegulator.jpg'
import modularRegulator from '@/assets/products/modularRegulator.webp'
import dimmerRegulator from '@/assets/products/dimmerRegulator.jpg'
import singlePole from '@/assets/products/singlepole.webp'
import doublePole from '@/assets/products/doublepole.jpg'
import distBoard from '@/assets/products/disBorad.jpg'
import rccb from '@/assets/products/RCCB.jpg'

export const PRODUCT_FILTERS = [
    {
        id: 'category',
        label: 'By Category',
        options: [
            { id: 'all', label: 'All Products' },
            { id: 'ventilation', label: 'Ventilation' },
            { id: 'wall-fan', label: 'Wall Fan' },
            { id: 'geyser', label: 'Geyser' },
            { id: 'ceiling-fan', label: 'Ceiling Fan' },
            { id: 'switch-plates', label: 'Switch Plates' },
            { id: 'switches', label: 'Switches' },
            { id: 'conduit', label: 'Conduit Pipe (PVC)' },
            { id: 'lights', label: 'Lights' },
            { id: 'cables', label: 'Cables' },
            { id: 'regulator', label: 'Regulator' },
            { id: 'mcb', label: 'MCB' },
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
    }
]

export const PRODUCTS_DATA = [
    {
        categoryId: 'ventilation',
        categoryName: 'Ventilation',
        productCount: 4,
        items: [
            { id: 'v1', brand: 'Havells / Polycab', name: 'Exhaust Fans (6”, 9”, 12”)', specs: 'High suction power · Low noise · Multiple size options', tags: ['Residential', 'Kitchen'], image: polycabExhaust, imagePlaceholder: '[ VENT PHOTO ]' },
            { id: 'v2', brand: 'DSK SELECT', name: 'Heavy Duty Industrial Exhaust Fans', specs: 'Powerful air throw · Metal body · Industrial grade', tags: ['Industrial', 'Commercial'], image: industrialExhaust, imagePlaceholder: '[ VENT PHOTO ]' },
            { id: 'v3', brand: 'Havells', name: 'Kitchen Ventilation Fans', specs: 'Oil-resistant blades · Easy to clean · Elegant design', tags: ['Residential'], image: thrillExhaust, imagePlaceholder: '[ VENT PHOTO ]' },
            { id: 'v4', brand: 'Polycab', name: 'Bathroom Ventilation Fans', specs: 'Moisture resistant · Compact build · Fast extraction', tags: ['Residential'], image: havellsExhaust, imagePlaceholder: '[ VENT PHOTO ]' },
        ],
    },
    {
        categoryId: 'wall-fan',
        categoryName: 'Wall Fan',
        productCount: 4,
        items: [
            { id: 'wf1', brand: 'Havells', name: '16” Wall Mounted Fan', specs: 'Wide oscillation · Stable mount · Three-speed control', tags: ['Commercial', 'Residential'], image: wallMounted, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'wf2', brand: 'DSK SELECT', name: 'Oscillating Wall Fan', specs: 'High-speed motor · Aerodynamic blades · Smooth swivel', tags: ['Commercial'], image: oscillatingWall, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'wf3', brand: 'Polycab', name: 'Remote-Control Wall Fan', specs: 'Convenient operation · Sleep timer · Multiple modes', tags: ['Residential'], image: remoteWall, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'wf4', brand: 'DSK SELECT', name: 'High-Speed Wall Fan', specs: 'Top-tier airflow · Energy efficient · Safety grill', tags: ['Industrial', 'Commercial'], image: highSpeedWall, imagePlaceholder: '[ FAN PHOTO ]' },
        ],
    },
    {
        categoryId: 'geyser',
        categoryName: 'Geyser',
        productCount: 4,
        items: [
            { id: 'g1', brand: 'Havells', name: 'Instant Water Heater (1L / 3L)', specs: 'Quick heating · Stainless steel tank · Compact size', tags: ['Residential', 'Kitchen'], image: instantGeyser, imagePlaceholder: '[ GEYSER PHOTO ]' },
            { id: 'g2', brand: 'DSK SELECT', name: 'Storage Geyser (10L / 15L / 25L)', specs: 'Glass-lined tank · Long heat retention · Multi-safety', tags: ['Residential'], image: storageGeyser, imagePlaceholder: '[ GEYSER PHOTO ]' },
            { id: 'g3', brand: 'Polycab', name: 'Vertical Geyser', specs: 'Space-saving design · High energy rating · Fast recovery', tags: ['Residential'], image: verticalGeyser, imagePlaceholder: '[ GEYSER PHOTO ]' },
            { id: 'g4', brand: 'DSK SELECT', name: 'Horizontal Geyser', specs: 'Low ceiling fit · Superior insulation · Corrosion proof', tags: ['Residential', 'Commercial'], image: horizontalGeyser, imagePlaceholder: '[ GEYSER PHOTO ]' },
        ],
    },
    {
        categoryId: 'ceiling-fan',
        categoryName: 'Ceiling Fan',
        productCount: 4,
        items: [
            { id: 'cf1', brand: 'Havells', name: 'Standard Ceiling Fan (1200mm)', specs: 'Wide air delivery · Classic design · Reliable motor', tags: ['Residential', 'Commercial'], image: standardFan, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'cf2', brand: 'Polycab', name: 'Decorative Ceiling Fan', specs: 'Premium aesthetics · Silent operation · Metallic finish', tags: ['Residential'], image: decorativeFan, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'cf3', brand: 'Havells', name: 'BLDC Energy Saving Fan', specs: 'Super-efficient motor · Remote included · Eco-friendly', tags: ['Residential', 'Green'], image: energySaving, imagePlaceholder: '[ FAN PHOTO ]' },
            { id: 'cf4', brand: 'DSK SELECT', name: 'High-Speed Ceiling Fan', specs: '400+ RPM · Superior airflow · Heavy-duty build', tags: ['Industrial', 'Commercial'], image: highspeedCeiling, imagePlaceholder: '[ FAN PHOTO ]' },
        ],
    },
    {
        categoryId: 'switch-plates',
        categoryName: 'Switch Plates',
        productCount: 4,
        items: [
            { id: 'sp1', brand: 'Polycab / Anchor', name: 'Modular Switch Plates (4M, 6M, 8M)', specs: 'Universal fit · Durable material · Modern look', tags: ['Residential', 'Modular'], image: modularPlate, imagePlaceholder: '[ PLATE PHOTO ]' },
            { id: 'sp2', brand: 'Anchor', name: 'Glass Finish Plates', specs: 'Crystal clear finish · Scratch resistant · Luxury feel', tags: ['Residential', 'Premium'], image: glassFinish, imagePlaceholder: '[ PLATE PHOTO ]' },
            { id: 'sp3', brand: 'Polycab', name: 'Designer Plates', specs: 'Textured finishes · Trendy colors · Custom styles', tags: ['Residential'], image: designerPlate, imagePlaceholder: '[ PLATE PHOTO ]' },
            { id: 'sp4', brand: 'DSK SELECT', name: 'Screwless Plates', specs: 'Seamless installation · Snap-on design · Ultra-modern', tags: ['Commercial', 'Residential'], image: screwlessPlate, imagePlaceholder: '[ PLATE PHOTO ]' },
        ],
    },
    {
        categoryId: 'switches',
        categoryName: 'Switches',
        productCount: 4,
        items: [
            { id: 'sw1', brand: 'Polycab / Anchor', name: '1 Way Switch', specs: 'Smooth click · Spark-free · High conductivity', tags: ['Residential', 'Commercial'], image: oneWay, imagePlaceholder: '[ SWITCH PHOTO ]' },
            { id: 'sw2', brand: 'Polycab', name: '2 Way Switch', specs: 'Dual control logic · Heavy-duty silver contacts', tags: ['Residential'], image: twoWay, imagePlaceholder: '[ SWITCH PHOTO ]' },
            { id: 'sw3', brand: 'Anchor', name: 'Bell Push Switch', specs: 'Soft-touch operation · Built-in indicator light', tags: ['Residential'], image: bellPush, imagePlaceholder: '[ SWITCH PHOTO ]' },
            { id: 'sw4', brand: 'DSK SELECT', name: 'USB Charging Socket Switch', specs: 'Dual USB ports · Fast charging · Surge protected', tags: ['Residential', 'Modern'], image: usbCharging, imagePlaceholder: '[ SWITCH PHOTO ]' },
        ],
    },
    {
        categoryId: 'conduit',
        categoryName: 'Conduit Pipe (PVC)',
        productCount: 4,
        items: [
            { id: 'cp1', brand: 'AKG / Polypack / Norpack', name: 'PVC Conduit Pipes (Light / Medium / Heavy)', specs: 'Fire retardant · Impact resistant · Easy bending', tags: ['Industrial', 'Construction'], image: pvcConduit, imagePlaceholder: '[ PIPE PHOTO ]' },
            { id: 'cp2', brand: 'AKG', name: 'Flexible Conduit Pipes', specs: 'Highly flexible · Weather resistant · Secure wiring', tags: ['Industrial', 'Commercial'], image: flexibleConduit, imagePlaceholder: '[ PIPE PHOTO ]' },
            { id: 'cp3', brand: 'Norpack', name: 'Casing & Capping', specs: 'Uniform finish · Strong locking · Flame retardant', tags: ['Residential', 'Commercial'], image: casingPipes, imagePlaceholder: '[ PIPE PHOTO ]' },
            { id: 'cp4', brand: 'Polypack', name: 'PVC Bends, Junction Boxes & Accessories', specs: 'Perfect fitment · Durable PVC · Full range', tags: ['Industrial', 'Residential'], image: pvcBends, imagePlaceholder: '[ PIPE PHOTO ]' },
        ],
    },
    {
        categoryId: 'lights',
        categoryName: 'Lights',
        productCount: 4,
        items: [
            { id: 'l1', brand: 'DSK SELECT', name: 'LED Bulbs (9W, 12W, 15W)', specs: 'High lumens · Long life span · Eye comfort technology', tags: ['Residential', 'Commercial'], image: ledBulb, imagePlaceholder: '[ LIGHT PHOTO ]' },
            { id: 'l2', brand: 'Polycab', name: 'LED Panel Lights', specs: 'Slim design · Uniform lighting · Low power use', tags: ['Commercial', 'Office'], image: ledPanel, imagePlaceholder: '[ LIGHT PHOTO ]' },
            { id: 'l3', brand: 'Havells', name: 'LED Tube Lights', specs: 'Flicker-free · Integrated driver · Easy mount', tags: ['Industrial', 'Residential'], image: ledTube, imagePlaceholder: '[ LIGHT PHOTO ]' },
            { id: 'l4', brand: 'DSK SELECT', name: 'COB Spot Lights / Downlights', specs: 'Focused beam · Dimmable options · Deep recessed', tags: ['Residential', 'Premium'], image: cobSpot, imagePlaceholder: '[ LIGHT PHOTO ]' },
        ],
    },
    {
        categoryId: 'cables',
        categoryName: 'Cables',
        productCount: 4,
        items: [
            { id: 'cb1', brand: 'Polycab / KEI', name: 'House Wiring Cables (FR / FRLS)', specs: '99.9% pure copper · Flame retardant · Heat resistant', tags: ['Residential', 'Safety'], image: houseWiring, imagePlaceholder: '[ CABLE PHOTO ]' },
            { id: 'cb2', brand: 'KEI', name: 'Power Cables (Armoured / Unarmoured)', specs: 'Heavy-duty insulation · High tension support · ISI', tags: ['Industrial', 'Infrastructure'], image: powerCables, imagePlaceholder: '[ CABLE PHOTO ]' },
            { id: 'cb3', brand: 'Polycab', name: 'Flexible Cables', specs: 'Multi-strand core · Easy routing · Durable sheath', tags: ['Industrial', 'Flexible'], image: flexibleCables, imagePlaceholder: '[ CABLE PHOTO ]' },
            { id: 'cb4', brand: 'KEI', name: 'Control Cables', specs: 'Accurate signal transmission · Screened protection', tags: ['Industrial', 'Control'], image: controlCables, imagePlaceholder: '[ CABLE PHOTO ]' },
        ],
    },
    {
        categoryId: 'regulator',
        categoryName: 'Regulator',
        productCount: 4,
        items: [
            { id: 'r1', brand: 'DSK SELECT', name: 'Fan Regulators (Step Type)', specs: 'Defined speed steps · Hum-free · Long life', tags: ['Residential', 'Commercial'], image: fanRegulator, imagePlaceholder: '[ REG PHOTO ]' },
            { id: 'r2', brand: 'Polycab', name: 'Electronic Regulators', specs: 'Smooth rotation · Step-less control · Compact size', tags: ['Residential'], image: elecRegulator, imagePlaceholder: '[ REG PHOTO ]' },
            { id: 'r3', brand: 'Anchor', name: 'Modular Fan Regulators', specs: 'Fits all modular plates · Sleek switch design', tags: ['Residential', 'Modular'], image: modularRegulator, imagePlaceholder: '[ REG PHOTO ]' },
            { id: 'r4', brand: 'DSK SELECT', name: 'Dimmer Regulators', specs: 'Light intensity control · Safe load management', tags: ['Residential', 'Premium'], image: dimmerRegulator, imagePlaceholder: '[ REG PHOTO ]' },
        ],
    },
    {
        categoryId: 'mcb',
        categoryName: 'MCB (Miniature Circuit Breaker)',
        productCount: 4,
        items: [
            { id: 'm1', brand: 'Havells / Polycab', name: 'Single Pole MCB', specs: 'Overload protection · High breaking capacity · Trip-free', tags: ['Residential', 'Safety'], image: singlePole, imagePlaceholder: '[ MCB PHOTO ]' },
            { id: 'm2', brand: 'Havells', name: 'Double Pole MCB', specs: 'Main circuit isolation · Finger-proof terminals', tags: ['Commercial', 'Residential'], image: doublePole, imagePlaceholder: '[ MCB PHOTO ]' },
            { id: 'm3', brand: 'Polycab', name: 'Distribution Boards', specs: 'IP43 protection · Door lock · Ample wiring space', tags: ['Industrial', 'Commercial'], image: distBoard, imagePlaceholder: '[ DB PHOTO ]' },
            { id: 'm4', brand: 'Havells', name: 'RCCB / ELCB', specs: 'Earth leakage protection · Life-saving safety switch', tags: ['Residential', 'Safety'], image: rccb, imagePlaceholder: '[ SAFE PHOTO ]' },
        ],
    },
]

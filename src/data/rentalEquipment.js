// Commercial Cleaning Equipment Rental Data - Bangalore
export const rentalEquipment = [
  // CORE MACHINE 1 - Wet & Dry Vacuum Cleaner
  {
    id: 1,
    title: "Wet & Dry Vacuum Cleaner - 30L Commercial Grade",
    description: "Heavy-duty commercial wet & dry vacuum cleaner with 30-35 litre capacity. Perfect for continuous use in IT parks, offices, and commercial spaces. Brands: IPC, Roots, Karcher, Eureka Forbes. Includes HEPA filtration and complete accessories.",
    category: "core-equipment",
    image: "https://s1.kaercher-media.com/mam/16283500/mainproduct/176102/d1.jpg?w=800&h=800&fit=crop&crop=center&zoom=50&q=80",
    weeklyRate: 3825,
    monthlyRate: 12750,
    deposit: 5000,
    rating: { rate: 4.9, count: 127 },
    availability: "available",
    specifications: "30-35L capacity, Heavy-duty motor, Continuous use friendly, HEPA filter, Multiple brands available",
    brand: "IPC / Roots / Karcher / Eureka Forbes",
    purchaseCost: "₹22,000 - ₹28,000",
    discount: { percentage: 15, label: "WEEKLY SPECIAL" }
  },

  // CORE MACHINE 2 - Single Disc Floor Scrubber (HIGH VALUE)
  {
    id: 2,
    title: "Single Disc Floor Scrubber - 16-17 Inch Professional",
    description: "Professional floor scrubbing machine with 16-17 inch disc. Perfect for lobbies, corridors, and basements. High rental value equipment ideal for monthly contracts. Includes scrubbing brush and pad holder. Brands: Roots, IPC, Taski, Cleantech.",
    category: "core-equipment",
    image: "https://s1.kaercher-media.com/mam/12912520/mainproduct/173085/d0.jpg?w=800&h=600&fit=crop&q=80",
    weeklyRate: 10000,
    monthlyRate: 35000,
    deposit: 10000,
    rating: { rate: 4.9, count: 156 },
    availability: "available",
    specifications: "16-17 inch disc, Variable speed, Brush + pad holder included, Heavy-duty motor, 1500 RPM",
    brand: "Roots / IPC / Taski / Cleantech",
    purchaseCost: "₹45,000 - ₹55,000",
    featured: true
  },

  // SUPPORT MACHINE 1 - Pressure Washer
  {
    id: 3,
    title: "Professional Pressure Washer - 130-150 Bar",
    description: "Industrial-grade pressure washer with metal pump. 130-150 bar pressure perfect for parking areas, washrooms, and monsoon cleaning. Generates excellent income during rainy season. Brands: Bosch Professional, Karcher, Black+Decker industrial line.",
    category: "support-equipment",
    image: "https://www.fabmart.com/cdn/shop/products/pressure-washers-for-cars-karcher-pressure-washer-k-6-600-150-bar-1_1024x1024.jpeg?v=1476774408?w=800&h=800&fit=crop&q=80",
    weeklyRate: 2800,
    monthlyRate: 9600,
    deposit: 4000,
    rating: { rate: 4.9, count: 167 },
    availability: "available",
    specifications: "130-150 bar, Metal pump preferred, Professional series, Multiple nozzles, Heavy-duty",
    brand: "Bosch / Karcher / Black+Decker",
    purchaseCost: "₹14,000 - ₹18,000",
    discount: { percentage: 20, label: "MONSOON OFFER" }
  },

  // SUPPORT MACHINE 2 - Industrial Air Blower
  {
    id: 4,
    title: "Industrial Air Blower - 800-1000W Continuous Duty",
    description: "Powerful air blower for basement drying, landscaping, and post-cleaning work. 800-1000W motor designed for continuous operation. Low maintenance and reliable. Brands: Makita, Bosch, Karcher, Crompton industrial.",
    category: "support-equipment",
    image: "https://cdn.moglix.com/p/AUW1EWYuHPAAM-xxlarge.jpg?w=800&h=800&fit=crop&q=80",
    weeklyRate: 2200,
    monthlyRate: 7500,
    deposit: 2500,
    rating: { rate: 4.9, count: 134 },
    availability: "available",
    specifications: "800-1000W, Continuous duty, Variable speed, Professional grade, Lightweight & powerful",
    brand: "Makita / Bosch / Karcher / Crompton",
    purchaseCost: "₹8,000 - ₹12,000"
  },

  // ACCESSORIES BUNDLE
  {
    id: 5,
    title: "Essential Accessories & Protection Kit",
    description: "Complete accessories bundle including heavy-duty extension cables (50m), scrubbing pads (red/black), extra vacuum hose & filters, pressure washer pipes & nozzles, and basic tool kit. Essential for smooth operations.",
    category: "accessories",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=800&fit=crop&q=80",

    weeklyRate: 1000,
    monthlyRate: 3000,
    deposit: 1500,
    rating: { rate: 4.8, count: 98 },
    availability: "available",
    specifications: "Extension cables, Scrubbing pads, Vacuum accessories, Pressure washer kit, Tool kit",
    brand: "Professional Grade",
    purchaseCost: "₹10,000 - ₹15,000"
  },

  // COMPLETE PACKAGE
  {
    id: 6,
    title: "Complete Cleaning Business Package - All 4 Machines + Accessories",
    description: "Complete facility cleaning equipment package. Includes all 4 core machines: Wet & Dry Vacuum, Floor Scrubber, Pressure Washer, Air Blower + Complete accessories. Perfect for starting your cleaning business or facility management contracts. Best value package!",
    category: "combo-packages",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=800&fit=crop&q=80",
    weeklyRate: 14250,
    monthlyRate: 48750,
    deposit: 20000,
    rating: { rate: 5.0, count: 47 },
    availability: "available",
    specifications: "4 core machines + complete accessories, All premium brands, Ready to start business, Technical support included",
    brand: "Multi-brand Complete Package",
    featured: true,
    purchaseCost: "₹99,000 - ₹1,13,000",
    discount: { percentage: 25, label: "BUNDLE DEAL" }
  }
];

export const categories = [
  { id: "all", name: "All Equipment" },
  { id: "core-equipment", name: "Core Machines" },
  { id: "support-equipment", name: "Support Equipment" },
  { id: "accessories", name: "Accessories" },
  { id: "combo-packages", name: "Complete Package" }
];
   
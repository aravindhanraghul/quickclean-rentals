# ProTool Rentals - Equipment Rental Platform

A modern equipment rental platform built with React.js, designed for tools and equipment rental businesses.

## Overview

ProTool Rentals is a fully responsive web application that allows customers to browse, select, and rent professional tools and equipment. The platform supports flexible rental periods (daily, weekly, monthly) with a comprehensive cart system that tracks rental dates, deposits, and pricing.

## Features

### Core Functionality
- **Equipment Catalog**: Browse 20+ professional tools and equipment across multiple categories
- **Flexible Rental Periods**: Choose daily, weekly, or monthly rental options
- **Smart Pricing**: Automatic calculation based on rental duration and type
- **Security Deposits**: Transparent deposit tracking (refundable upon return)
- **Availability Status**: Real-time equipment availability indicators
- **Category Filtering**: Filter by Power Tools, Construction, Cleaning, Lawn & Garden, etc.
- **Product Details**: Comprehensive specifications, ratings, and rental rates
- **Rental Cart**: Advanced cart with rental period tracking and deposit calculations
- **Responsive Design**: Fully mobile-optimized for on-the-go rentals

### Technical Features
- Redux state management for cart persistence
- LocalStorage integration for cart data
- React Router for seamless navigation
- React Loading Skeleton for better UX
- React Hot Toast for notifications
- Bootstrap 5 styling
- Mock equipment data (ready for backend integration)

## Equipment Categories

- Power Tools (Drills, Saws, Sanders, etc.)
- Construction Equipment (Mixers, Lifts, etc.)
- Ladders & Scaffolding
- Cleaning Equipment (Pressure Washers, Floor Scrubbers)
- Lawn & Garden (Chainsaws, Stump Grinders, Post Hole Diggers)
- Generators & Air Compressors
- Welding Equipment
- Material Handling (Forklifts)
- And more...

## Screenshots

The application features a modern, professional interface designed specifically for equipment rentals.

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

Clone the project

```bash
git clone https://github.com/yourusername/tool-rental
```

Go to the project directory

```bash
cd React_E-Commerce-main
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm start
```

The application will open at `http://localhost:3000`

## Tech Stack

**Frontend Framework:**
- React.js 18.2.0
- React Router DOM 6.4.0

**State Management:**
- Redux 4.2.0
- React-Redux 8.0.2
- Redux Toolkit 1.8.5

**UI/UX:**
- Bootstrap 5.2.1
- Font Awesome 4.7.0
- React Loading Skeleton 3.1.0
- React Hot Toast 2.4.1
- React Fast Marquee 1.3.5

**Build Tools:**
- React Scripts 5.0.1

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Products.jsx    # Equipment listing with filters
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   └── main.jsx        # Hero section
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Products.jsx    # Products page
│   ├── Product.jsx     # Product detail with rental options
│   ├── Cart.jsx        # Rental cart with pricing
│   ├── Checkout.jsx    # Checkout process
│   ├── AboutPage.jsx   # About page
│   └── ContactPage.jsx # Contact page
├── redux/              # State management
│   ├── store.js        # Redux store configuration
│   ├── action/         # Redux actions
│   └── reducer/        # Redux reducers
│       └── handleCart.js # Cart logic with rental dates
└── data/               # Mock data
    └── rentalEquipment.js # Equipment catalog

```

## Key Components

### Equipment Listing (`Products.jsx`)
- Displays all available equipment
- Category-based filtering
- Shows daily/weekly rates and deposits
- Availability status badges

### Product Detail (`Product.jsx`)
- Detailed equipment information
- Interactive rental period selector
- Real-time price calculation
- Similar equipment recommendations
- Specifications and ratings

### Rental Cart (`Cart.jsx`)
- Shows all selected rentals
- Rental period tracking
- Deposit calculation
- Service fee itemization
- Total cost breakdown

### Redux Cart Management (`handleCart.js`)
- Handles rental items with dates
- Supports multiple rental periods
- LocalStorage persistence
- Unique item tracking by rental period

## Backend Integration

The application currently uses mock data (`src/data/rentalEquipment.js`). To integrate with a backend:

1. Replace mock data imports with API calls
2. Update endpoints in:
   - `src/components/Products.jsx` - Equipment listing
   - `src/pages/Product.jsx` - Product details
   - `src/pages/Cart.jsx` - Cart operations
   - `src/pages/Checkout.jsx` - Order processing

### Suggested API Endpoints
```
GET    /api/equipment              # List all equipment
GET    /api/equipment/:id          # Get equipment details
GET    /api/equipment/category/:cat # Filter by category
POST   /api/rentals                # Create rental order
GET    /api/rentals/:id            # Get rental details
PUT    /api/rentals/:id            # Update rental
```

## Customization

### Adding New Equipment
Edit `src/data/rentalEquipment.js` and add new equipment objects with:
- id, title, description
- category
- dailyRate, weeklyRate, monthlyRate
- deposit amount
- image URL
- availability status
- specifications and ratings

### Modifying Rental Rates
Update the rate structure in the equipment data or modify the calculation logic in:
- `src/pages/Cart.jsx` - `calculateRentalPrice()`
- `src/pages/Product.jsx` - `calculateRentalPrice()`

### Styling
- Global styles: Bootstrap 5 classes
- Custom styles: Add to component-specific CSS or `src/index.css`
- Theme colors: Modify Bootstrap variables

## Future Enhancements

- [ ] Real-time availability calendar
- [ ] Date picker for rental period selection
- [ ] User authentication and order history
- [ ] Payment gateway integration
- [ ] Equipment condition reports with photos
- [ ] Automated email confirmations
- [ ] Review and rating system
- [ ] Equipment maintenance tracking
- [ ] Admin dashboard for inventory management
- [ ] Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Fake Store API](https://fakestoreapi.com/)

## Contributing

Contributions are always welcome!
Just raise an issue, we will discuss it.


## Feedback

If you have any feedback, please reach out to me [here](https://ssahibsingh.github.io/#contact)



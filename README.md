# DSK Electricals - Commercial Frontend Project

A modern, high-performance commercial website for DSK Electricals, built with React, Vite, and Tailwind CSS.

## 🚀 Technologies

- **Frontend Framework:** React 19 (Functional Components, Hooks)
- **Build Tool:** Vite 8 (Fast HMR, Optimized bundling)
- **Styling:** Tailwind CSS 4 (Utility-first, Responsive design)
- **Routing:** React Router 7 (createBrowserRouter, Lazy-loading)
- **State Management:** React Context (where needed)
- **Utilities:** `clsx` + `tailwind-merge` for dynamic class management

## 📁 Project Structure

The project follows a strict architectural pattern :

```text
src/
├── assets/          # Static assets (images, fonts, icons)
├── components/      # Shared UI components (each in its own folder)
├── pages/           # Route-level components (Home, About, Services, etc.)
├── layouts/         # Layout wrappers (MainLayout.jsx)
├── hooks/           # Custom React hooks
├── utils/           # Helper functions (cn.js, etc.)
├── constants/       # Application constants and static data
├── router/          # Routing configuration
└── styles/          # Global styles (Tailwind base)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Key Features

- **Responsive Design:** Mobile-first approach using Tailwind's responsive utilities.
- **Performance Optimized:** Lazy-loading for all page routes and optimized asset handling.
- **Modern UI/UX:** Clean, commercial-grade interface with smooth transitions.
- **Accessibility:** Semantic HTML and ARIA best practices.

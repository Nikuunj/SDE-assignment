# Thursday - Thrift Shopping App

A Flutter recreation of the Thursday onboarding and swipe feed experience. This app simulates the complete user journey from initial walkthrough to style profiling and item discovery.

## 🚀 Live Demo

**Deployed App:** [https://sde-assignment-five.vercel.app/](https://sde-assignment-five.vercel.app/)

## 📱 Features

### User Journey 1: Walkthrough & Signup
- **3-Screen Onboarding:** Interactive PageView with smooth transitions
  - Welcome screen introducing Thursday
  - Explanation of the Thursday drop concept (every Thursday at 12pm)
  - Profile creation call-to-action
- **Signup Flow:** Simple form with name and email validation
- **Seamless Navigation:** Automatic routing between screens

### User Journey 2: TIA Style Quiz
- **Chatbot Interface:** Interactive conversation with TIA (Thrift Intelligence Assistant)
- **Style Selection:** Choose 1-3 styles from 6 options:
  - Y2K
  - Streetwear
  - Prep
  - Grunge
  - Clean Minimal
  - Vintage Sport
- **State Management:** User preferences stored and passed to feed

### User Journey 3: Swipe Feed
- **Tinder-Style Cards:** Stack of 10 curated thrift items
- **Item Details:** Each card displays:
  - High-quality item image
  - Brand name
  - Item title
  - Price
  - Relevant style tags
- **Swipe Interactions:**
  - Right swipe: Save item to favorites
  - Left swipe: Dismiss item
- **Smooth Animations:** Fluid card transitions and gestures

## 🛠 Tech Stack

- **Framework:** Next.js 14 (React)
- **Authentication:** NextAuth.js
- **Styling:** Tailwind CSS
- **UI Components:** Aceternity UI
- **Data:** Mock data with realistic thrift items
- **Deployment:** Vercel

## 📋 Requirements Met

✅ Complete 3-screen walkthrough with PageView  
✅ Functional signup form with validation  
✅ Interactive TIA chatbot-style quiz  
✅ Multi-select style preferences (1-3 options)  
✅ Tinder-style swipeable card stack  
✅ 10 mocked thrift items with complete details  
✅ Right/left swipe functionality  
✅ NextAuth.js authentication integration  
✅ TypeScript implementation throughout  
✅ Tailwind CSS responsive design  
✅ Aceternity UI enhanced components  
✅ Smooth animations and transitions  

## 🚀 Getting Started

### Prerequisites
- Node.js (>=18.0.0)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nikuunj/SDE-assignment.git
   cd SDE-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your NextAuth configuration in `.env.local`

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

**Build:**
```bash
npm run build
# or
yarn build
```

**Start production server:**
```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
SDE-ASSIGNMENT/
├── app/                      # Next.js App Router
│   ├── (welcomeflow)/       # Welcome flow route group
│   ├── api/                 # API routes
│   │   └── auth/            # NextAuth configuration
│   │       └── [...nextauth]/
│   │           └── route.ts
│   ├── auth/                # Authentication pages
│   │   └── signin/
│   │       └── page.tsx
│   ├── swap/                # Swipe feed page
│   │   └── page.tsx
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global Tailwind styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable UI components
├── lib/                     # Utilities and configuration
│   └── utils.ts             # Utility functions
├── node_modules/            # Dependencies
├── public/                  # Static assets
└── package.json             # Project configuration
```

## 🎨 Design Decisions

- **Next.js App Router:** Leveraged for modern routing and server components
- **NextAuth.js:** Implemented for secure authentication fw
- **Tailwind CSS:** Utility-first styling for rapid development and consistency
- **Aceternity UI:** Beautiful, animated components for enhanced UX
- **TypeScript:** Type safety throughout the application
- **Responsive Design:** Mobile-first approach with Tailwind's responsive utilities
- **Mock Data:** Realistic thrift items with varied brands, prices, and styles

## 🔧 Key Components

- **SwipeCard:** Custom React component with gesture handling and smooth animations
- **AuthProvider:** NextAuth.js integration for user session management
- **Aceternity UI:** Enhanced components for modern, animated interface elements

## 🚀 Deployment

The app is deployed on Vercel with automatic deployments from the main branch. The production build includes:
- **Optimized Next.js build** with static generation where possible
- **NextAuth.js configuration** for secure authentication
- **Tailwind CSS optimization** with unused styles purged
- **Responsive design** that works across all device sizes

# Portfolio Website - Manik Mahajan

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Showcase projects, skills, and experience
- 📧 Contact section with email and phone

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio is ready to deploy on:
- **Netlify** - Connect your GitHub repo or drag & drop the build folder
- **Vercel** - Perfect for Next.js (recommended)
- **GitHub Pages** - With static export

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Experience.tsx  # Experience section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
└── public/             # Static assets
```

## Customization

Update your information in the respective component files:
- Personal info: `components/Hero.tsx` and `components/Contact.tsx`
- About section: `components/About.tsx`
- Skills: `components/Skills.tsx`
- Projects: `components/Projects.tsx`
- Experience: `components/Experience.tsx`

## License

MIT License - feel free to use this template for your own portfolio!

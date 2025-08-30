# KnightMorphers - AI Automation Portfolio

A professional portfolio website for BlazeReach, showcasing AI automation services and expertise. Built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

### Professional Portfolio Sections
- **Hero Section**: Compelling headline with clear value proposition
- **Services**: 5 core AI automation services with detailed descriptions
- **Case Studies**: 3 real-world project examples with measurable results
- **About**: Personal story and expertise showcase
- **Process**: 3-step client engagement process
- **Contact**: Professional contact form and information
- **Footer**: Complete site navigation and company info

### Modern Design
- Clean, minimal, and professional design
- Mobile-first responsive layout
- Smooth hover animations and transitions
- Professional color scheme (blue/gray palette)
- Modern card-based layouts

### Technical Features
- Built with Next.js 15.5.2 and TypeScript
- Styled with TailwindCSS for fast, maintainable styling
- Optimized for performance and SEO
- Static site generation for fast loading
- Professional development practices

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Heroicons (via SVG)
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static hosting

## 📦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd "BlazeReach Portfolio"
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization Guide

### Brand Colors
The website uses a professional blue/gray color scheme:
- Primary Blue: `text-blue-600`, `bg-blue-600`
- Secondary Blues: `text-blue-100`, `bg-blue-50`
- Grays: `text-gray-900`, `text-gray-600`, `bg-gray-50`

### Content Updates

#### 1. Personal Information
Update the following in `src/app/page.tsx`:
- Replace "Karthikeya Voocha" with your name
- Update contact email from "hello@blazereach.com"
- Update LinkedIn URL
- Add your professional photo (replace placeholder in About section)

#### 2. Services Section
Customize the 5 service cards:
- Workflow Automation
- Custom AI Solutions  
- Data Automation
- Process Optimization
- AI Consulting

#### 3. Case Studies
Replace the 3 example case studies with your real projects:
- Update problem/solution/result descriptions
- Change percentage improvements
- Modify project titles and descriptions

#### 4. Contact Information
- Update email addresses
- Add your actual Calendly or booking link
- Update LinkedIn profile URL
- Customize the contact form action

### Adding New Sections
The modular design makes it easy to add new sections. Each section follows this pattern:
```jsx
<section id="section-name" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure domain and settings

### Other Hosting
The website generates static files and can be hosted on any static hosting service.

## 📈 SEO & Performance

The website is optimized for:
- Fast loading with Next.js static generation
- Mobile-first responsive design
- Clean semantic HTML structure
- Professional meta tags (add as needed)
- Optimized images and assets

## 🔧 Advanced Customization

### Adding Animation Libraries
Consider adding:
- Framer Motion for advanced animations
- AOS (Animate On Scroll) for scroll animations
- Lottie for custom animations

### Adding a Blog
The structure supports adding a blog section:
1. Create `src/app/blog` directory
2. Add markdown support
3. Create blog post components

### Form Handling
The contact form is currently frontend-only. To make it functional:
1. Add a form handler (Formspree, Netlify Forms, etc.)
2. Add form validation
3. Add success/error states

## 📞 Support

For questions about this portfolio template:
- Check the Next.js documentation
- Review TailwindCSS documentation  
- Contact the developer

## 🎯 Business Impact

This portfolio is designed to:
- Build trust with international clients
- Clearly communicate your AI automation expertise
- Generate qualified leads through compelling case studies
- Provide a professional first impression
- Support your business growth goals

---

**Ready to launch your AI automation business? This portfolio is your 24/7 salesman for international clients.** 🚀

# Knight Morphers Brand Assets

The following SVG assets were added for branding:

- `public/knight-morphers-logo.svg` – Square logo (512x512) suitable for avatar / favicon / social.
- `public/knight-morphers-linkedin-banner.svg` – LinkedIn banner (1584x396) sized for company / profile header.

## Recommended Usage

### Logo (Avatar)
- LinkedIn profile/company logo: Upload the SVG or export to 400x400 PNG with transparent background.
- Favicon: Export to 256x256 / 64x64 PNG.
- Dark mode safe. For light backgrounds, optionally add a #0F0F10 circle behind.

### LinkedIn Banner
- Dimensions already optimized: 1584x396
- Safe text zone: Keep critical text between x=400–1420 and y=90–310.
- If compression artifacts appear after upload, export as high-quality PNG from the SVG.

## Editing
Open SVGs in Figma / Illustrator / VS Code. Change gradient stops (#ef4444, #dc2626, #7f1d1d) to adjust brand hue.

## Accessibility
Each SVG includes <title> and <desc> for assistive tech. Preserve these for compliance.

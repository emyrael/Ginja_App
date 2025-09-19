# Ginja Landing Page 🚀

A modern, mobile-first landing page for **Ginja** - the Nigerian productivity app that actually gets your vibe!

![Ginja Logo](frontend/logo/Ginja.png)

## ✨ Features

- **🎨 Modern Design**: Beautiful, mobile-first design with Nigerian vibes
- **📱 Mobile Optimized**: Fully responsive and optimized for mobile devices
- **🎭 Smooth Animations**: Framer Motion animations for engaging user experience
- **🎨 Brand Colors**: Custom color palette (Orange #E2561B, Green #96B56C, Yellow-Green #C4C879)
- **📧 Waitlist Integration**: Supabase integration for collecting user signups
- **🇳🇬 Nigerian Tone**: Authentic Nigerian conversational tone throughout
- **⚡ Fast Performance**: Built with Next.js for optimal performance
- **🔍 SEO Optimized**: Proper meta tags and social media optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS with custom brand colors
- **Animations**: Framer Motion
- **Database**: Supabase
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have installed:

- Node.js (version 18 or higher)
- npm or yarn package manager
- A Supabase account (for waitlist functionality)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd app

# Install dependencies
npm install
# or
yarn install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.example .env.local
```

Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Supabase Database Setup

Create a `waitlist` table in your Supabase database:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  area_of_residence TEXT NOT NULL,
  excitement TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT WITH CHECK (true);
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page!

## 📁 Project Structure

```
app/
├── frontend/              # All frontend code organized here
│   ├── component/landing/ # Landing page components
│   │   ├── HeroSection.jsx
│   │   ├── FeaturesSection.jsx
│   │   ├── WaitlistForm.jsx
│   │   ├── Footer.jsx
│   │   ├── GinjaLogo.jsx
│   │   └── LandingPage.jsx
│   ├── components/ui/     # Reusable UI components
│   │   └── button.jsx
│   ├── lib/              # Utility functions
│   │   └── utils.js
│   ├── styles/           # Global styles
│   │   └── globals.css
│   └── logo/             # Logo assets
│       └── Ginja.png
├── pages/                # Next.js pages (root level)
│   ├── index.js
│   └── _app.js
├── public/               # Static assets
│   └── frontend/logo/    # Publicly accessible logo
├── scripts/              # Setup and deployment scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Node.js dependencies
├── requirements.txt      # Python dependencies (backend)
└── README.md
```

## 🎨 Brand Colors

The landing page uses Ginja's official brand colors:

- **Primary Orange**: `#E2561B` - Main brand color for CTAs and highlights
- **Secondary Green**: `#96B56C` - Accent color for features and success states
- **Background Yellow-Green**: `#C4C879` - Background gradients and subtle elements

## 📱 Mobile Optimization

The landing page is built with a mobile-first approach:

- Responsive design that works on all screen sizes
- Touch-friendly buttons and interactions
- Optimized images and assets
- Fast loading times on mobile networks
- Smooth animations that don't impact performance

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify
3. Configure environment variables
4. Set up custom domain

### Manual Deployment

```bash
# Build for production
npm run build

# Export static files
npm run export

# Upload the 'out' folder to your hosting provider
```

## 🔧 Customization

### Updating Brand Colors

Edit `tailwind.config.js` to change the brand colors:

```javascript
theme: {
  extend: {
    colors: {
      'ginja-orange': '#E2561B',
      'ginja-green': '#96B56C', 
      'ginja-yellow': '#C4C879',
    }
  }
}
```

### Adding New Sections

1. Create a new component in `frontend/component/landing/`
2. Import and add it to `LandingPage.jsx`
3. Update the navigation if needed

### Customizing Content

- **Hero Section**: Edit `HeroSection.jsx` for taglines and main content
- **Features**: Update `FeaturesSection.jsx` for feature descriptions
- **Waitlist Form**: Modify `WaitlistForm.jsx` for form fields
- **Footer**: Update `Footer.jsx` for social links and contact info

## 📊 Analytics & Tracking

To add analytics:

1. Install your preferred analytics package
2. Add tracking code to `pages/_app.js`
3. Set up conversion tracking for waitlist signups

## 🔒 Security

The landing page includes:

- Input validation and sanitization
- CSRF protection
- Secure headers configuration
- Environment variable protection

## 🐛 Troubleshooting

### Common Issues

**Build Errors**: Make sure all dependencies are installed and Node.js version is 18+

**Supabase Connection**: Verify your environment variables are correct

**Styling Issues**: Clear your browser cache and restart the dev server

**Mobile Issues**: Test on actual devices, not just browser dev tools

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile and desktop
5. Submit a pull request

## 📞 Support

For support with the Ginja landing page:

- Email: hello@ginjaapp.com
- Instagram: [@ginja_app](https://instagram.com/ginja_app)
- Website: [ginjaapp.com](https://ginjaapp.com)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with 💜 in Nigeria** 🇳🇬

Stay Gingered. Stay Organized. ✨

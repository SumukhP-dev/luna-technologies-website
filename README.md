# Luna Technologies Website

A modern, responsive website for Luna Technologies built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🌐 SEO-friendly
- ☁️ Ready for AWS deployment

## Getting Started

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
```

## Deployment

This project is configured for static export and can be deployed to:
- AWS S3 + CloudFront
- AWS Amplify
- Vercel
- Netlify

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_COMPANY_NAME=Luna Technologies
NEXT_PUBLIC_CONTACT_EMAIL=contact@lunatechnologies.com
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- PostCSS

## License

© 2024 Luna Technologies. All rights reserved.

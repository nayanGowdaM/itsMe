# Nayan Gowda M - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## About

This is a personal portfolio website showcasing my skills, experience, and projects as a Software Developer specializing in Backend Development, Real-time Systems, and IoT/ML solutions.

## Technologies Used

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite (fast development server)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Email Service**: EmailJS (for contact form)

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your system. If you don't have it, you can install it using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation

1. **Clone the repository**:
   ```bash
   git clone <YOUR_GIT_URL>
   cd itsMe
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure EmailJS for the contact form** (optional but recommended):
   - Follow the detailed setup guide in [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
   - Copy `.env.example` to `.env.local` and add your EmailJS credentials
   - Without this setup, the contact form will show a configuration error

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

## Available Scripts

- `npm run dev` - Starts the development server with hot reload
- `npm run build` - Builds the project for production
- `npm run build:dev` - Builds the project in development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **TypeScript**: Full type safety throughout the application
- **Component Library**: Built with shadcn/ui components
- **SEO Optimized**: Proper meta tags and structured data
- **Functional Contact Form**: 
  - Real-time form validation
  - Email integration via EmailJS
  - Success/error notifications
  - Mobile-friendly design

## Contact

- **Email**: [Your Email]
- **LinkedIn**: [https://linkedin.com/in/mnayangowda/](https://linkedin.com/in/mnayangowda/)
- **GitHub**: [https://github.com/nayanGowdaM](https://github.com/nayanGowdaM)

## License

This project is open source and available under the [MIT License](LICENSE).
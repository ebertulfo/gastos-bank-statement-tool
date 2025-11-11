# Gastos Bank Statement Tool

A modern web application built with Next.js 15, TypeScript, TailwindCSS, and shadcn/ui for managing bank statements and expenses.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Dark Mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Code Quality**: ESLint + Prettier

## Features

- ✨ Next.js 15 with App Router
- 🎨 TailwindCSS for styling
- 🌓 Dark mode support with system preference detection
- 📦 shadcn/ui component library
- 🔧 TypeScript for type safety
- 📏 ESLint + Prettier for code quality
- 🎯 Absolute imports configured (`@/*`)
- 🚀 Optimized for Vercel deployment
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ebertulfo/gastos-bank-statement-tool.git
   cd gastos-bank-statement-tool
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the environment variables file:

   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
gastos-bank-statement-tool/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with theme provider
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles and Tailwind
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── navigation.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/              # Utility functions
│       └── utils.ts
├── public/               # Static assets
├── .env.example          # Example environment variables
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # TailwindCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Deployment

### Deploy to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub

2. Import your repository on Vercel:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Vercel will automatically detect Next.js and configure the build settings

3. Configure environment variables (if any):
   - Add your environment variables in the Vercel dashboard
   - Use the same keys as in `.env.example`

4. Deploy:
   - Vercel will automatically deploy on every push to your main branch
   - Pull requests will get preview deployments

### Manual Deployment

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## CI/CD

The project includes a GitHub Action workflow that runs on every push and pull request:

- ESLint checks
- TypeScript type checking
- Prettier formatting checks

See `.github/workflows/ci.yml` for more details.

## Adding shadcn/ui Components

To add more shadcn/ui components to your project:

1. Browse available components at [ui.shadcn.com](https://ui.shadcn.com/)
2. Copy the component code into `src/components/ui/`
3. Make sure to install any required dependencies

## Customization

### Theme Colors

Modify the color scheme in `src/app/globals.css` under the `:root` and `.dark` selectors.

### TailwindCSS Configuration

Customize TailwindCSS settings in `tailwind.config.ts`.

### Font

The project uses Inter font from Google Fonts. Change it in `src/app/layout.tsx`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

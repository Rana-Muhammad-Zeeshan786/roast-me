# Roast Me

A modern Next.js project built with shadcn/ui components and Tailwind CSS.

## Features

- **Next.js 14** - The React framework for production
- **App Router** - Using the new App Router for better routing
- **shadcn/ui** - Beautiful, accessible, and customizable components
- **Tailwind CSS** - Utility-first CSS framework
- **Dark Mode** - Full dark mode support with next-themes
- **TypeScript** - Type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later

### Installation

1. Clone the repository
```bash
git clone https://your-repository-url.git
cd roast-me
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
roast-me/
├── app/               # Next.js App Router
├── components/        # Reusable components
│   ├── ui/            # shadcn/ui components
│   └── ...            # Other components
├── lib/               # Utility functions
├── public/            # Static assets
└── ...                # Config files
```

## Adding More shadcn/ui Components

You can add more shadcn/ui components using the CLI:

```bash
npx shadcn@latest add [component-name]
```

Available components can be found in the [shadcn/ui documentation](https://ui.shadcn.com/docs/components).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT

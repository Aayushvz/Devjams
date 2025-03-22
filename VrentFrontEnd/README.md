# Vrent - A Rental Platform

A modern React-based rental platform built with Vite, Redux Toolkit, and Supabase.

## Features

- User authentication with Supabase
- Product listing and management
- Rental system
- Responsive design
- State management with Redux Toolkit

## Tech Stack

- React 18
- Vite
- Redux Toolkit
- React Router DOM
- Supabase
- ESLint
- CSS Modules

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account and project

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/VrentFrontEnd.git
cd VrentFrontEnd
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── features/        # Feature-specific components and logic
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── pages/          # Page components
├── services/       # API and external service integrations
├── store/          # Redux store configuration
├── styles/         # Global styles and theme
├── types/          # TypeScript type definitions
└── utils/          # Utility functions and helpers
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
